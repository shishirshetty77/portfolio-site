# AI-Powered Portfolio Site

A modern portfolio website built with Next.js featuring AI-powered chat functionality and tools.

## Features

- **Responsive Design**: Modern, mobile-first design with dark theme
- **AI Chat Interface**: Interactive chat with AI assistant
- **AI Tools**: Text summarization and content generation
- **Smooth Animations**: Framer Motion animations throughout
- **Multiple AI Providers**: Support for OpenAI, Hugging Face, and mock responses

## AI Provider Options

### 1. Mock AI (Free) - Default
- No API key required
- Demo responses for development
- Perfect for showcasing the interface

### 2. OpenAI (Paid) - Best Quality
- **Cost**: Pay-per-use, minimum $5 credit
- **Quality**: Highest quality responses
- **Setup**: Get API key from [OpenAI Platform](https://platform.openai.com/api-keys)

### 3. Hugging Face (Free) - Good Alternative
- **Cost**: Free tier with rate limits
- **Quality**: Good quality responses
- **Setup**: Get token from [Hugging Face](https://huggingface.co/settings/tokens)

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```

3. **Choose your AI provider**:
   
   **Option A: Use Mock AI (No setup needed)**
   - Just run the project - mock responses work out of the box

   **Option B: Use Hugging Face (Free)**
   - Create account at [huggingface.co](https://huggingface.co)
   - Go to Settings → Access Tokens
   - Create a new token
   - Add to `.env.local`: `HUGGING_FACE_API_TOKEN=your_token_here`

   **Option C: Use OpenAI (Paid)**
   - Create account at [platform.openai.com](https://platform.openai.com)
   - Add $5+ credits to your account
   - Create API key
   - Add to `.env.local`: `OPENAI_API_KEY=your_key_here`

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## API Endpoints

- `/api/chat` - OpenAI-powered chat
- `/api/chat-hf` - Hugging Face-powered chat
- `/api/summarize` - Text summarization

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **AI**: OpenAI API, Hugging Face API
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Customization

1. **Update personal information** in components:
   - `src/components/Hero.tsx` - Name, title, social links
   - `src/components/About.tsx` - Skills and description
   - `src/components/Projects.tsx` - Your projects
   - `src/components/Contact.tsx` - Contact information

2. **Modify AI behavior** in API routes:
   - `src/app/api/chat/route.ts` - OpenAI chat configuration
   - `src/app/api/chat-hf/route.ts` - Hugging Face configuration

3. **Add new AI features**:
   - Create new API routes in `src/app/api/`
   - Add corresponding components in `src/components/`

## Deployment

Deploy on Vercel (recommended):

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Cost Considerations

- **Development**: Use mock AI or Hugging Face free tier
- **Production**: 
  - Low traffic: Hugging Face free tier (~1000 requests/month)
  - Medium traffic: OpenAI (estimate ~$1-5/month for typical portfolio)
  - High traffic: Consider caching responses or rate limiting

## Support

For issues or questions:
1. Check the mock AI responses work first
2. Verify your API keys are correctly set
3. Check the console for error messages
4. Ensure you have sufficient credits (for OpenAI)

## License

MIT License - feel free to use this for your own portfolio!
