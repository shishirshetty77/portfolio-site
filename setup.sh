#!/bin/bash

echo "🚀 Setting up your AI-Powered Portfolio Site..."

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cp .env.local.example .env.local
    echo "✅ .env.local created from template"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "🤖 Choose your AI provider:"
echo "1. Mock AI (Free) - Works immediately, no setup needed"
echo "2. Hugging Face (Free) - Requires free account at huggingface.co"
echo "3. OpenAI (Paid) - Requires $5+ credits at platform.openai.com"
echo ""

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "✅ You chose Mock AI - no additional setup needed!"
        echo "🎉 Just run 'npm run dev' to start the development server"
        ;;
    2)
        echo "🤗 You chose Hugging Face (Free)!"
        echo ""
        echo "To set up Hugging Face:"
        echo "1. Go to https://huggingface.co and create a free account"
        echo "2. Go to Settings → Access Tokens"
        echo "3. Create a new token"
        echo "4. Edit .env.local and add: HUGGING_FACE_API_TOKEN=your_token_here"
        echo ""
        echo "Then run 'npm run dev' to start the development server"
        ;;
    3)
        echo "🧠 You chose OpenAI (Paid)!"
        echo ""
        echo "To set up OpenAI:"
        echo "1. Go to https://platform.openai.com and create an account"
        echo "2. Add at least $5 in credits to your account"
        echo "3. Go to API Keys and create a new key"
        echo "4. Edit .env.local and add: OPENAI_API_KEY=your_key_here"
        echo ""
        echo "Then run 'npm run dev' to start the development server"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again and choose 1, 2, or 3"
        exit 1
        ;;
esac

echo ""
echo "🔧 Installation complete!"
echo "📚 Check README.md for more details"
echo "💻 Run 'npm run dev' to start the development server"
echo "🌐 Open http://localhost:3000 in your browser"
