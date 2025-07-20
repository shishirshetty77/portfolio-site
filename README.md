# 🚀 AI-Powered Portfolio Website

A stunning, modern portfolio website built with Next.js featuring magical animations, AI-powered chat functionality, and a unique glassmorphism navbar that will make your portfolio unforgettable.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.4.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-purple?style=for-the-badge&logo=framer)

## ✨ Features

### 🎨 **Unique Design Elements**
- **Magical Glassmorphism Navbar**: Dynamic gradient backgrounds, floating particles, and mouse-following light effects
- **Interactive Theme Toggle**: Animated sun/owl toggle with magical glow effects and orbiting particles
- **Responsive Design**: Optimized for mobile, tablet, and desktop with different layouts for each
- **Smooth Animations**: Framer Motion-powered animations throughout the entire site
- **Cat Mode Easter Egg**: Click the invisible area (bottom-right) to activate floating cat emojis and paw prints

### 🤖 **AI-Powered Features**
- **Multi-Provider AI Chat**: OpenAI, Hugging Face, and mock responses
- **Text Summarization**: AI-powered content summarization tools
- **Content Generation**: Dynamic content creation capabilities
- **Flexible API Integration**: Easy to switch between different AI providers

### 🎯 **Interactive Components**
- **Matrix Effect**: Click your name in the hero section for a Matrix-style rain effect
- **Floating Particles**: Dynamic particle systems throughout the site
- **Mouse Follower**: Custom cursor that follows mouse movement
- **Profile Image Easter Egg**: Click the profile image to switch between photos
- **Sparkle Effects**: Rotating sparkles on active navigation items

### 📱 **Responsive Navigation**
- **Desktop**: Full glassmorphism navbar with all magical effects
- **Tablet**: Compact horizontal navigation with essential features  
- **Mobile**: Enhanced hamburger menu with gradient backgrounds and animations

### 🎪 **Portfolio Sections**
- **Hero Section**: Animated name typography with interactive elements
- **About Section**: Personal journey with downloadable resume
- **Projects Section**: Showcase of featured work with live demos
- **Skills Section**: Floating, interactive skill bubbles
- **Experience Section**: Timeline-based work history
- **Contact Section**: Interactive contact form with social links

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd portfolio-site
npm install
```

### 2. Environment Setup
```bash
cp .env.local.example .env.local
```

### 3. Choose Your AI Provider

#### Option A: Mock AI (No Setup - Default)
Just run the project - works out of the box for development and showcasing.

#### Option B: Hugging Face (Free)
1. Create account at [huggingface.co](https://huggingface.co)
2. Go to Settings → Access Tokens
3. Create a new token
4. Add to `.env.local`:
```env
HUGGING_FACE_API_TOKEN=your_token_here
```

#### Option C: OpenAI (Paid - Best Quality)
1. Create account at [platform.openai.com](https://platform.openai.com)
2. Add $5+ credits to your account
3. Create API key
4. Add to `.env.local`:
```env
OPENAI_API_KEY=your_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Customization

### Personal Information
Update these key files with your information:

#### `src/components/Hero.tsx`
- Change name animation letters
- Update social media links
- Modify tagline text

#### `src/components/About.tsx`
- Replace profile images (`/public/your-photo.jpg`)
- Update personal description
- Change resume download link

#### `src/components/Projects.tsx`
- Add your projects with:
  - Title, description, technologies
  - GitHub and live demo links
  - Featured project badges

#### `src/components/Experience.tsx`
- Update work experience timeline
- Modify job titles, companies, dates
- Add achievement descriptions

#### `src/components/Contact.tsx`
- Update contact information
- Change email addresses
- Modify location details

### Navbar Customization
The magical navbar can be customized in `src/components/Navbar.tsx`:

#### Navigation Items
```javascript
const navItems = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'about', label: 'About', href: '#about' },
  // Add or modify sections
];
```

#### Visual Effects
- Particle count and behavior
- Gradient color schemes
- Animation speeds and patterns
- Glassmorphism opacity levels

## 🛠️ Technical Stack

### Core Technologies
- **Next.js 15.4.1**: React framework with App Router for optimal performance
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS 4.0**: Utility-first CSS framework with JIT compilation
- **Framer Motion**: Advanced animations and smooth interactions

### Key Libraries
- **Lucide React**: Lightweight SVG icon system
- **Canvas Confetti**: Particle effects and celebrations
- **Howler.js**: Audio management for interactive sounds
- **React Confetti**: Additional particle systems

### Development Tools
- **ESLint 9**: Code quality and consistency
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Cross-browser compatibility

### Performance Features
- **Automatic Code Splitting**: Loads only necessary JavaScript
- **Image Optimization**: WebP conversion and lazy loading
- **Font Optimization**: Preloaded and optimized Google Fonts
- **Mobile Optimizations**: Reduced effects and smaller bundles on mobile devices

### Deployment
- **Vercel**: Edge deployment with global CDN
- **Environment Variables**: Secure configuration management
- **Preview Deployments**: Test changes before production

## 📱 Responsive Breakpoints

### Mobile (`< 768px`)
- Hamburger menu navigation
- Optimized touch targets
- Simplified animations
- Compact layouts

### Tablet (`768px - 1023px`)
- Horizontal compact navigation
- Medium-sized elements
- Balanced feature set

### Desktop (`1024px+`)
- Full glassmorphism effects
- All particle systems active
- Maximum visual impact
- Complete feature set

## 🎪 Easter Eggs & Hidden Features

### 1. Cat Mode 🐱
- **Activation**: Click invisible area in bottom-right corner of hero section
- **Effects**: Floating cat emojis, paw print confetti, navbar cat indicator
- **Deactivation**: Click the X on the cat mode badge

### 2. Matrix Effect 💊
- **Activation**: Click your name in the hero section
- **Effect**: Green Matrix-style character rain for 3 seconds

### 3. Profile Image Toggle 🖼️
- **Activation**: Click the profile image in About section
- **Effect**: Toggle between your real photo and alternative image

### 4. Interactive Particles ✨
- **Desktop**: Hover over navbar to trigger floating particles
- **All Screens**: Mouse movement creates dynamic light beams

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `OPENAI_API_KEY` (if using OpenAI)
   - `HUGGING_FACE_API_TOKEN` (if using Hugging Face)
4. Deploy automatically

### Other Platforms
The site can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Digital Ocean
- AWS Amplify

## 🐛 Troubleshooting

### Common Issues

#### 1. AI Features Not Working
- **Check**: Environment variables are set correctly
- **Solution**: Verify API keys and restart development server

#### 2. Animations Not Smooth
- **Check**: Hardware acceleration enabled in browser
- **Solution**: Reduce particle count or disable on mobile

#### 3. Mobile Navigation Not Working
- **Check**: JavaScript is enabled
- **Solution**: Clear browser cache and reload

### Getting Help
- Check the browser console for errors
- Verify all dependencies are installed
- Ensure Node.js version compatibility
- Review environment variable setup

## 🎨 Color Palette

### Light Theme
- **Primary**: `#3B82F6` (Blue)
- **Secondary**: `#8B5CF6` (Purple)
- **Accent**: `#F59E0B` (Amber)
- **Background**: Gradient from cream to light yellow

### Dark Theme
- **Primary**: `#60A5FA` (Light Blue)
- **Secondary**: `#A78BFA` (Light Purple)
- **Accent**: `#FBBF24` (Yellow)
- **Background**: Gradient from dark gray to black

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Framer Motion**: For beautiful animation capabilities
- **Tailwind CSS**: For the utility-first CSS framework
- **Vercel**: For seamless deployment platform
- **OpenAI & Hugging Face**: For AI capabilities

---

## 🌟 Star this repo if it helped you create an amazing portfolio!

**Happy coding! 🚀**

## 📄 License

MIT License - feel free to use this for your own portfolio! Just give credit where it's due.
