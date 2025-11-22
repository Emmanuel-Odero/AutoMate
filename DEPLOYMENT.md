# Deployment Guide

## Pre-Deployment Checklist

### Code Quality

- [x] TypeScript compilation passes (`npm run build`)
- [x] No ESLint errors (`npm run lint`)
- [x] All components properly typed
- [x] Mock data in place for demo

### Configuration

- [ ] Environment variables configured
- [ ] API endpoints set (when backend ready)
- [ ] Authentication configured (future)
- [ ] Error tracking setup (optional)

### Testing

- [ ] All pages load correctly
- [ ] Navigation works between pages
- [ ] Chat interface responds
- [ ] Agent toggles work
- [ ] Search functionality works
- [ ] Responsive design verified

## Vercel Deployment

### Quick Deploy

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial AutoMate deployment"
git push origin main
```

2. **Connect to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Click "Deploy"

### Configuration

**Framework Preset:** Next.js (auto-detected)

**Build Command:** `npm run build`

**Output Directory:** `.next` (auto-detected)

**Install Command:** `npm install`

**Node Version:** 18.x or higher

### Environment Variables

Add these in Vercel dashboard when backend is ready:

```
WATSONX_API_KEY=your_api_key
WATSONX_ENDPOINT=https://api.watsonx.ai/...
SLACK_TOKEN=xoxb-...
SLACK_DEFAULT_CHANNEL=#general
JIRA_URL=https://yourcompany.atlassian.net
JIRA_API_TOKEN=your_token
JIRA_DEFAULT_PROJECT=PROJ
GITHUB_TOKEN=ghp_...
GITHUB_DEFAULT_REPO=org/repo
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Wait for SSL certificate provisioning

## Alternative Deployment Options

### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:

```bash
docker build -t automate .
docker run -p 3000:3000 automate
```

### AWS Amplify

1. Connect GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Add environment variables
4. Deploy

### Netlify

1. Connect GitHub repository
2. Configure build:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add Next.js plugin
4. Deploy

## Post-Deployment

### Verification

1. **Homepage loads** - Check `/dashboard`
2. **Navigation works** - Test all menu items
3. **Meetings display** - Verify `/meetings`
4. **Meeting details** - Click into a meeting
5. **Chat works** - Test AI chat interface
6. **Agents page** - Check `/agents`
7. **Settings page** - Verify `/settings`

### Performance

Monitor these metrics:

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)

Use Vercel Analytics or Google Lighthouse.

### Monitoring

Set up monitoring for:

- Error tracking (Sentry, LogRocket)
- Performance monitoring (Vercel Analytics)
- User analytics (Google Analytics, Plausible)
- Uptime monitoring (UptimeRobot, Pingdom)

## Continuous Deployment

### Automatic Deployments

Vercel automatically deploys:

- **Production:** Pushes to `main` branch
- **Preview:** Pull requests and other branches

### Branch Strategy

```
main (production)
├── develop (staging)
└── feature/* (preview deployments)
```

### Deployment Workflow

1. Create feature branch
2. Make changes
3. Push to GitHub
4. Vercel creates preview deployment
5. Review preview
6. Merge to main
7. Automatic production deployment

## Rollback

If issues occur:

1. **Vercel Dashboard:**

   - Go to Deployments
   - Find previous working deployment
   - Click "Promote to Production"

2. **Git Revert:**

```bash
git revert HEAD
git push origin main
```

## Security

### Best Practices

- Never commit `.env` files
- Use environment variables for secrets
- Enable HTTPS (automatic on Vercel)
- Implement rate limiting (future)
- Add authentication (future)
- Regular dependency updates

### Security Headers

Add to `next.config.ts`:

```typescript
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];
```

## Scaling

### Performance Optimization

- Enable Vercel Edge Network
- Use Image Optimization
- Implement caching strategies
- Add CDN for static assets
- Optimize bundle size

### Database (Future)

When adding backend:

- Use connection pooling
- Implement caching (Redis)
- Add database indexes
- Monitor query performance

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Check variable names match exactly
- Restart deployment after adding variables
- Use `NEXT_PUBLIC_` prefix for client-side variables

### 404 Errors

- Verify file structure matches routes
- Check `next.config.ts` configuration
- Ensure dynamic routes are properly named

## Support

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Deployment Issues](https://github.com/vercel/next.js/discussions)

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Review error logs weekly
- Monitor performance metrics
- Backup data (when backend added)
- Security patches as needed

### Dependency Updates

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest
```

## Success Metrics

Track these KPIs:

- Deployment success rate
- Build time
- Page load time
- Error rate
- User engagement
- Feature adoption

---

**Ready to deploy!** 🚀

For questions or issues, refer to the documentation or create an issue in the repository.
