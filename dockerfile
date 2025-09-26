
FROM node:20-alpine AS build


WORKDIR /app


COPY package*.json ./
RUN npm ci


COPY . .


RUN npm run build


FROM node:20-alpine AS runtime

WORKDIR /app


COPY --from=build /app/package*.json ./
COPY --from=build /app/next.config.ts ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules


EXPOSE 3000


CMD ["npm", "start"]
