# =============================================================================
# Portfolio Site - Production Dockerfile
# Multi-stage build optimized for Next.js 16 with security best practices
# =============================================================================

# -----------------------------------------------------------------------------
# Base stage: Alpine Node.js with minimal footprint
# -----------------------------------------------------------------------------
FROM node:20-alpine AS base
WORKDIR /app

# Set environment for better caching
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# -----------------------------------------------------------------------------
# Dependencies stage: Install production dependencies
# -----------------------------------------------------------------------------
FROM base AS deps

# Add libc6-compat for Alpine compatibility with native modules
RUN apk add --no-cache libc6-compat

# Copy package files for dependency installation
COPY package.json package-lock.json* ./

# Install dependencies with clean install for reproducible builds
RUN npm ci --only=production && npm cache clean --force

# -----------------------------------------------------------------------------
# Builder stage: Build the Next.js application
# -----------------------------------------------------------------------------
FROM base AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Build the application with standalone output
RUN npm run build

# -----------------------------------------------------------------------------
# Runner stage: Production-ready minimal image
# -----------------------------------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Security: Create non-root user and group
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Create .next directory with proper ownership
RUN mkdir .next && chown nextjs:nodejs .next

# Copy standalone build output with proper ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Security: Switch to non-root user
USER nextjs

# Expose the application port
EXPOSE 3000

# Health check for container orchestration
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))" || exit 1

# Start the application
CMD ["node", "server.js"]
