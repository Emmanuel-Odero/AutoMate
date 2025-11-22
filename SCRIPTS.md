# Useful Scripts

## Development

```bash
# Start development server
npm run dev

# Start on specific port
npm run dev -- -p 3001

# Start with turbo mode
npm run dev --turbo
```

## Building

```bash
# Create production build
npm run build

# Start production server
npm start

# Build and start
npm run build && npm start
```

## Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint -- --fix

# Type check
npx tsc --noEmit
```

## Cleaning

```bash
# Clear Next.js cache
rm -rf .next

# Clear all caches and reinstall
rm -rf .next node_modules package-lock.json
npm install

# Clear Turbopack cache
rm -rf .next/cache
```

## Testing (Future)

```bash
# Run tests (when added)
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm run build && npm start

# Deploy to Vercel (with Vercel CLI)
vercel

# Deploy to production
vercel --prod
```

## Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update <package-name>

# Install new package
npm install <package-name>

# Install dev dependency
npm install -D <package-name>

# Remove package
npm uninstall <package-name>
```

## Shadcn/UI Components

```bash
# Add new component
npx shadcn@latest add <component-name>

# Add multiple components
npx shadcn@latest add button card input

# List available components
npx shadcn@latest add
```

## Database (Future)

```bash
# Run migrations (when added)
npm run db:migrate

# Seed database
npm run db:seed

# Reset database
npm run db:reset
```

## Utilities

```bash
# Check bundle size
npm run build && npx @next/bundle-analyzer

# Analyze dependencies
npx depcheck

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities
npm audit fix

# Generate component
# (Add custom script in package.json)
npm run generate:component <name>
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Commit changes
git add .
git commit -m "feat: your feature description"

# Push to remote
git push origin feature/your-feature

# Update from main
git checkout main
git pull origin main
git checkout feature/your-feature
git merge main
```

## Environment

```bash
# Copy environment template
cp .env.example .env.local

# Load environment variables
source .env.local

# Check environment
echo $WATSONX_API_KEY
```

## Performance

```bash
# Analyze bundle
npm run build
npx @next/bundle-analyzer

# Check lighthouse score
npx lighthouse http://localhost:3000

# Profile build
npm run build -- --profile
```

## Custom Scripts (Add to package.json)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "clean": "rm -rf .next",
    "analyze": "ANALYZE=true npm run build"
  }
}
```

## Troubleshooting

```bash
# Port already in use
lsof -ti:3000 | xargs kill -9

# Clear all caches
rm -rf .next node_modules .turbo
npm install

# Reset git (careful!)
git reset --hard HEAD
git clean -fd

# Check Node version
node --version

# Check npm version
npm --version
```

## Quick Commands

```bash
# Full reset and start
rm -rf .next node_modules && npm install && npm run dev

# Quick build test
npm run build && echo "Build successful!"

# Check all is working
npm run lint && npm run build && echo "All checks passed!"
```

## Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List deployments
vercel ls

# View logs
vercel logs

# Set environment variable
vercel env add WATSONX_API_KEY
```

## Helpful Aliases (Add to ~/.zshrc or ~/.bashrc)

```bash
# Development
alias ndev="npm run dev"
alias nbuild="npm run build"
alias nstart="npm start"

# Cleaning
alias nclean="rm -rf .next node_modules"
alias nfresh="rm -rf .next node_modules && npm install"

# Git
alias gs="git status"
alias ga="git add ."
alias gc="git commit -m"
alias gp="git push"
```

## VS Code Tasks (Add to .vscode/tasks.json)

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "dev",
      "type": "npm",
      "script": "dev",
      "problemMatcher": []
    },
    {
      "label": "build",
      "type": "npm",
      "script": "build",
      "problemMatcher": []
    }
  ]
}
```

---

**Pro Tip:** Create a `Makefile` for common commands:

```makefile
.PHONY: dev build start clean

dev:
	npm run dev

build:
	npm run build

start:
	npm start

clean:
	rm -rf .next node_modules

fresh: clean
	npm install
	npm run dev
```

Then use: `make dev`, `make build`, etc.
