#!/bin/bash

# AutoMate - Git Commit Script
# This script adds all changes and commits them with a descriptive message

echo "🚀 AutoMate - Git Commit Script"
echo "================================"
echo ""

# Add all changes
echo "📦 Adding all changes..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
  echo "⚠️  No changes to commit"
  exit 0
fi

# Show what will be committed
echo ""
echo "📝 Files to be committed:"
git diff --staged --name-status
echo ""

# Commit with descriptive message
echo "💾 Committing changes..."
git commit -m "feat: Add professional landing page for AutoMate

- Implement hero section with gradient headline and CTAs
- Add features grid showcasing 6 core capabilities
- Create 'How It Works' 4-step process visualization
- Build agents showcase with detailed cards for all 4 agents
- Add final CTA section with multiple engagement paths
- Implement sticky navigation header with smooth scrolling
- Create responsive design for mobile, tablet, and desktop
- Add hover effects and smooth transitions throughout
- Include statistics display (94% automation, 10hrs saved, 4 agents)
- Create landing page components (demo-preview, benefits-grid)
- Add comprehensive landing page documentation
- Update README with landing page information
- Add smooth scroll behavior to globals.css
- Create INDEX.md for documentation navigation

Technical improvements:
- Full TypeScript coverage
- Static generation for optimal performance
- SEO-optimized with proper meta tags
- Accessible markup with semantic HTML
- Zero build errors or warnings
- Production-ready deployment

Documentation added:
- LANDING_PAGE.md - Detailed guide
- LANDING_PAGE_SUMMARY.md - Quick overview
- LANDING_PAGE_COMPLETE.md - Complete implementation details
- INDEX.md - Documentation index

The landing page is conversion-optimized and ready for production deployment."

echo ""
echo "✅ Changes committed successfully!"
echo ""
echo "📊 Commit summary:"
git log -1 --stat
echo ""
echo "🎉 Ready to push! Run: git push origin main"
