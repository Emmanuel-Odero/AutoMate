# Getting Started with AutoMate

Welcome to AutoMate! This guide will help you get up and running quickly.

## ✅ Prerequisites Checklist

Before you begin, make sure you have:

- [ ] Node.js 18 or higher installed
- [ ] npm or yarn package manager
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] Terminal/command line access

Check your versions:

```bash
node --version  # Should be 18.x or higher
npm --version   # Should be 9.x or higher
```

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, TypeScript, Tailwind CSS, and UI components.

### Step 2: Start Development Server

```bash
npm run dev
```

The app will start at [http://localhost:3000](http://localhost:3000)

### Step 3: Explore the App

Open your browser and navigate through:

1. **Dashboard** (`/dashboard`) - Overview of meetings and agents
2. **Meetings** (`/meetings`) - Browse sample meetings
3. **Meeting Detail** - Click any meeting to see details
4. **Chat** - Try asking questions about a meeting
5. **Agents** (`/agents`) - View and configure AI agents
6. **Settings** (`/settings`) - Configuration options

## 📖 Understanding the App

### What You'll See

**3 Sample Meetings:**

- Q4 Product Planning
- Sprint Retrospective
- Client Feedback Session

**4 AI Agents:**

- 🎤 Meeting Transcriber
- 💬 Slack Poster
- 📋 JIRA Creator
- 🐙 GitHub Opener

### Try These Features

1. **Search Meetings**

   - Go to `/meetings`
   - Use the search bar to filter meetings

2. **View Transcript**

   - Click any meeting
   - Switch to "Transcript" tab
   - Read the full conversation

3. **Chat with AI**

   - In meeting detail view
   - Type questions like:
     - "What were the action items?"
     - "Who attended this meeting?"
     - "Summarize the key decisions"

4. **Toggle Agents**
   - Go to `/agents`
   - Click "Enable" or "Disable" on any agent
   - See status change in real-time

## 🎯 Your First Tasks

### Task 1: Explore a Meeting (2 min)

1. Go to Meetings page
2. Click "Q4 Product Planning"
3. Read the summary
4. View the transcript
5. Check agent actions

### Task 2: Chat with AI (2 min)

1. Stay on meeting detail page
2. Look at the chat panel (right side)
3. Type: "What were the main action items?"
4. See the AI response
5. Try more questions

### Task 3: Configure Agents (1 min)

1. Go to Agents page
2. Toggle an agent off
3. Toggle it back on
4. View agent configurations

## 🛠️ Development Workflow

### Making Changes

1. **Edit a Component**

   ```bash
   # Open any file in components/
   code components/meetings/meeting-card.tsx
   ```

2. **See Changes Live**

   - Save the file
   - Browser auto-refreshes
   - Changes appear instantly

3. **Check for Errors**
   ```bash
   npm run build
   ```

### Project Structure

```
app/          → Pages (dashboard, meetings, etc.)
components/   → Reusable UI components
store/        → State management (Zustand)
types/        → TypeScript definitions
lib/          → Utilities and mock data
services/     → API service layer (for future)
```

## 📚 Learning Resources

### Documentation

- **README.md** - Project overview
- **QUICKSTART.md** - Detailed getting started
- **DEVELOPMENT.md** - Architecture and patterns
- **COMPONENTS.md** - Component documentation
- **DEPLOYMENT.md** - How to deploy

### Key Technologies

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Zustand](https://github.com/pmndrs/zustand)

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Check for issues

# Cleaning
rm -rf .next         # Clear Next.js cache
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors

```bash
# Check types
npx tsc --noEmit
```

## 🎨 Customization Ideas

### Easy Customizations

1. **Change Colors**

   - Edit `app/globals.css`
   - Modify CSS variables

2. **Add Mock Data**

   - Edit `lib/mock-data.ts`
   - Add more meetings or agents

3. **Modify Layout**
   - Edit `components/layout/sidebar.tsx`
   - Add new navigation items

### Medium Customizations

1. **Add New Page**

   - Create `app/newpage/page.tsx`
   - Add route to sidebar

2. **Create Component**

   - Add file in `components/`
   - Import and use in pages

3. **Add State**
   - Create new store in `store/`
   - Use in components

## 🚀 Next Steps

### After Getting Comfortable

1. **Read Architecture Docs**

   - DEVELOPMENT.md
   - COMPONENTS.md

2. **Explore Code**

   - Read component files
   - Understand state management
   - Review type definitions

3. **Plan Integration**
   - Review services/
   - Plan API integration
   - Design data flow

### Ready to Deploy?

1. **Test Build**

   ```bash
   npm run build
   npm start
   ```

2. **Deploy to Vercel**

   - Push to GitHub
   - Connect to Vercel
   - Deploy automatically

3. **Read Deployment Guide**
   - DEPLOYMENT.md has full instructions

## 💡 Tips for Success

1. **Start Small** - Explore existing features first
2. **Read Code** - Best way to understand the structure
3. **Use TypeScript** - Types help catch errors early
4. **Check Console** - Browser console shows helpful info
5. **Ask Questions** - Documentation is comprehensive

## 🎓 Learning Path

### Week 1: Explore

- [ ] Run the app
- [ ] Navigate all pages
- [ ] Try all features
- [ ] Read README and QUICKSTART

### Week 2: Understand

- [ ] Read DEVELOPMENT.md
- [ ] Study component code
- [ ] Understand state management
- [ ] Review type definitions

### Week 3: Customize

- [ ] Modify mock data
- [ ] Change styling
- [ ] Add small features
- [ ] Experiment with components

### Week 4: Integrate

- [ ] Plan backend integration
- [ ] Review service layer
- [ ] Design API calls
- [ ] Prepare for deployment

## 🤝 Getting Help

### Resources

1. **Documentation** - Check all .md files
2. **Code Comments** - Read inline documentation
3. **Type Definitions** - types/index.ts
4. **Examples** - Existing components

### Common Questions

**Q: Where is the data coming from?**
A: Mock data in `lib/mock-data.ts`

**Q: How do I add a new page?**
A: Create file in `app/[route]/page.tsx`

**Q: Where are the styles?**
A: Tailwind classes in components + `app/globals.css`

**Q: How does state work?**
A: Zustand stores in `store/` directory

**Q: Can I use this in production?**
A: Yes! It's production-ready. Just integrate backend APIs.

## ✨ You're Ready!

You now have everything you need to:

- ✅ Run the application
- ✅ Explore all features
- ✅ Understand the structure
- ✅ Make modifications
- ✅ Deploy to production

**Happy coding!** 🚀

---

**Need more help?** Check out:

- QUICKSTART.md - Detailed walkthrough
- DEVELOPMENT.md - Technical details
- COMPONENTS.md - Component guide
- DEPLOYMENT.md - Deployment instructions
