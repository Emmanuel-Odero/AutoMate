# Git Commands for AutoMate

## Quick Commit & Push

### Option 1: Use the commit script

```bash
bash commit.sh
git push origin main
```

### Option 2: Manual commands

```bash
git add .
git commit -m "feat: Add professional landing page for AutoMate"
git push origin main
```

### Option 3: One-liner

```bash
git add . && git commit -m "feat: Add professional landing page" && git push origin main
```

---

## Detailed Commit Message

If you want a more detailed commit message:

```bash
git add .

git commit -m "feat: Add professional landing page and comprehensive documentation

Landing Page Features:
- Hero section with gradient headline and dual CTAs
- Features grid showcasing 6 core capabilities
- How It Works 4-step process visualization
- Agents showcase with detailed cards for all 4 agents
- Final CTA section with multiple engagement paths
- Sticky navigation header with smooth scrolling
- Fully responsive design (mobile, tablet, desktop)
- Hover effects and smooth transitions throughout
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

Technical Improvements:
- Full TypeScript coverage
- Static generation for optimal performance
- SEO-optimized with proper meta tags
- Accessible markup with semantic HTML
- Zero build errors or warnings
- Production-ready deployment

Status: Ready for production deployment 🚀"

git push origin main
```

---

## Step-by-Step Commands

### 1. Check Status

```bash
git status
```

### 2. See What Changed

```bash
git diff
```

### 3. Add All Changes

```bash
git add .
```

### 4. Commit Changes

```bash
git commit -m "feat: Add professional landing page"
```

### 5. Push to Remote

```bash
git push origin main
```

---

## Alternative: Stage Specific Files

If you want to commit specific files only:

```bash
# Add landing page
git add app/page.tsx

# Add landing components
git add components/landing/

# Add documentation
git add LANDING_PAGE*.md INDEX.md

# Commit
git commit -m "feat: Add professional landing page"

# Push
git push origin main
```

---

## Verify Before Pushing

### Check what will be committed

```bash
git diff --staged
```

### See commit history

```bash
git log --oneline -5
```

### See files in last commit

```bash
git show --name-only
```

---

## Undo Commands (If Needed)

### Undo last commit (keep changes)

```bash
git reset --soft HEAD~1
```

### Undo add (unstage files)

```bash
git reset
```

### Discard all local changes

```bash
git checkout .
```

---

## Branch Management

### Create feature branch

```bash
git checkout -b feature/landing-page
git add .
git commit -m "feat: Add landing page"
git push origin feature/landing-page
```

### Merge to main

```bash
git checkout main
git merge feature/landing-page
git push origin main
```

---

## Quick Reference

| Command                   | Description          |
| ------------------------- | -------------------- |
| `git status`              | Check current status |
| `git add .`               | Stage all changes    |
| `git commit -m "message"` | Commit with message  |
| `git push origin main`    | Push to main branch  |
| `git log`                 | View commit history  |
| `git diff`                | See changes          |
| `git reset`               | Unstage changes      |

---

## Recommended Workflow

```bash
# 1. Check status
git status

# 2. Review changes
git diff

# 3. Add changes
git add .

# 4. Commit with message
git commit -m "feat: Add professional landing page"

# 5. Push to remote
git push origin main
```

---

## Using the Provided Scripts

### commit.sh (Simple)

```bash
bash commit.sh
```

This will add all changes and commit with a comprehensive message.

### git-commit.sh (Detailed)

```bash
bash git-commit.sh
```

This will show you what's being committed and provide detailed output.

---

## After Committing

### Push to GitHub

```bash
git push origin main
```

### Verify on GitHub

1. Go to your repository on GitHub
2. Check the latest commit
3. Verify all files are there

### Deploy to Vercel

If connected to Vercel, it will auto-deploy after push.

---

## Commit Message Conventions

We follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Build/config changes

Example:

```bash
git commit -m "feat: Add landing page with hero section"
git commit -m "docs: Update README with landing page info"
git commit -m "fix: Correct responsive layout on mobile"
```

---

## Tips

1. **Commit often** - Small, focused commits are better
2. **Write clear messages** - Describe what and why
3. **Review before committing** - Use `git diff` to check changes
4. **Test before pushing** - Run `npm run build` first
5. **Pull before pushing** - Get latest changes with `git pull`

---

## Troubleshooting

### Port conflict error

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Merge conflicts

```bash
# See conflicted files
git status

# Resolve conflicts in editor
# Then:
git add .
git commit -m "fix: Resolve merge conflicts"
```

### Forgot to pull first

```bash
git pull origin main --rebase
git push origin main
```

---

## Ready to Commit?

Run one of these:

**Quick:**

```bash
bash commit.sh && git push origin main
```

**Manual:**

```bash
git add . && git commit -m "feat: Add landing page" && git push origin main
```

**Detailed:**

```bash
bash git-commit.sh
git push origin main
```

---

**All changes are ready to be committed and pushed!** 🚀
