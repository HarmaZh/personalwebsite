#!/bin/bash

# Deploy to GitHub Pages
# This script builds the project and deploys to gh-pages branch

set -e  # Exit on error

echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Navigate to build folder
cd build

# Initialize git repository
echo "📝 Initializing git repository..."
git init

# Add all files
echo "➕ Adding files..."
git add -A

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

# Push to gh-pages branch
echo "🔄 Pushing to gh-pages branch..."
git push -f https://github.com/HarmaZh/personalwebsite.git master:gh-pages

# Navigate back to project root
cd ..

# Clean up
echo "🧹 Cleaning up..."
rm -rf build/.git

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://HarmaZh.github.io/personalwebsite/"
echo "⏳ Note: It may take 1-5 minutes for changes to appear."
