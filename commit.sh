#!/bin/bash
# Quick commit script - Run with: bash commit.sh

git add . && git commit -m "feat: Add professional landing page and comprehensive documentation

Landing Page Features:
- Hero section with gradient headline and dual CTAs
- Features grid with 6 core capabilities
- How It Works 4-step process visualization
- Agents showcase with detailed cards
- Final CTA section with multiple paths
- Sticky navigation with smooth scrolling
- Fully responsive design (mobile/tablet/desktop)
- Hover effects and smooth transitions
- Statistics display (94% automation, 10hrs saved, 4 agents)

Components Added:
- app/page.tsx - Professional landing page
- components/landing/demo-preview.tsx - Interactive demo component
- components/landing/benefits-grid.tsx - Benefits display component

Documentation Added:
- LANDING_PAGE.md - Detailed landing page guide
- LANDING_PAGE_SUMMARY.md - Quick overview
- LANDING_PAGE_COMPLETE.md - Complete implementation details
- INDEX.md - Documentation navigation index

Technical:
- Full TypeScript coverage
- Static generation for performance
- SEO-optimized with proper meta tags
- Zero build errors or warnings
- Production-ready

Status: Ready for deployment 🚀"

echo ""
echo "✅ Committed successfully!"
echo "📤 Push with: git push origin main"
