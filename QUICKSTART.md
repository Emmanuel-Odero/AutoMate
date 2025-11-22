# Quick Start Guide

Get AutoMate up and running in minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## First Steps

### 1. Explore the Dashboard

Navigate to `/dashboard` to see:

- Total meetings processed
- Active AI agents
- Automated actions completed
- Recent meeting activity

### 2. Browse Meetings

Go to `/meetings` to:

- View all processed meetings
- Search meetings by title or content
- Click any meeting to see details

### 3. View Meeting Details

Click on a meeting to access:

- **Transcript Tab**: Full meeting transcript
- **Summary Tab**: AI-generated summary and participants
- **Actions Tab**: Automated agent actions (Slack posts, JIRA tickets, etc.)
- **Chat Interface**: Ask questions about the meeting content

### 4. Try the AI Chat

In any meeting detail page:

1. Type a question in the chat box (right side)
2. Ask about action items, participants, or specific topics
3. Get instant AI-powered responses

Example questions:

- "What were the main action items?"
- "Who was assigned the dashboard project?"
- "What performance issues were discussed?"

### 5. Configure Agents

Visit `/agents` to:

- View all available AI agents
- Enable/disable agents
- See agent configurations
- Monitor agent status

### 6. Adjust Settings

Go to `/settings` to configure:

- WatsonX API credentials (for future integration)
- Slack workspace settings
- JIRA project configuration
- GitHub repository settings

## Sample Data

The app comes with 3 sample meetings:

1. **Q4 Product Planning** - Product roadmap discussion
2. **Sprint Retrospective** - Team retrospective
3. **Client Feedback Session** - Client meeting with feature requests

Each meeting includes:

- Full transcript
- AI-generated summary
- Automated agent actions
- Interactive chat capability

## Key Features to Try

### Search Meetings

Use the search bar on the meetings page to filter by:

- Meeting title
- Summary content
- Participants

### Chat with Meetings

Ask natural language questions like:

- "Summarize the key decisions"
- "What tasks were assigned?"
- "Who attended this meeting?"

### Agent Management

Toggle agents on/off to control which automations run:

- 🎤 Transcriber - Converts audio to text
- 💬 Slack Poster - Posts to Slack channels
- 📋 JIRA Creator - Creates JIRA tickets
- 🐙 GitHub Opener - Opens GitHub issues

## Next Steps

1. **Customize Mock Data**: Edit `/lib/mock-data.ts` to add your own sample meetings
2. **Integrate Backend**: Connect to WatsonX Orchestrate API (see DEVELOPMENT.md)
3. **Deploy**: Push to Vercel for instant deployment

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Support

For issues or questions:

1. Check DEVELOPMENT.md for architecture details
2. Review component documentation in code comments
3. Inspect browser console for client-side errors

## What's Next?

- Add real meeting audio upload
- Integrate WatsonX Orchestrate
- Implement user authentication
- Add real-time agent monitoring
- Connect to actual Slack/JIRA/GitHub APIs

Happy building! 🚀
