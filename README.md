# AutoMate - AI Agentic Workflow Platform

AutoMate is a corporate productivity platform that leverages AI agent chaining to transform meeting discussions into actionable workflows. The application automatically transcribes meetings and uses specialized agents (Slack, JIRA, GitHub) to execute tasks based on conversations, all powered by IBM WatsonX Orchestrate.

## Features

- **Beautiful Landing Page**: Professional marketing page showcasing platform capabilities
- **Dashboard Overview**: Real-time metrics and insights into meetings, agents, and automated actions
- **Meeting Management**: Browse, search, and view detailed meeting transcripts
- **AI Chat Interface**: Interactive chat to query specific meeting content and extract insights
- **Agent Configuration**: Manage and configure AI agents for workflow automation
- **Multi-Agent Support**:
  - Transcriber: Converts meeting audio to text
  - Slack Poster: Posts summaries to Slack channels
  - JIRA Creator: Creates tickets from action items
  - GitHub Opener: Opens issues and PRs from discussions

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI
- **State Management**: Zustand
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
automate/
├── app/                      # Next.js app directory
│   ├── dashboard/           # Dashboard page
│   ├── meetings/            # Meetings list and detail pages
│   ├── agents/              # Agent configuration page
│   └── settings/            # Settings page
├── components/              # React components
│   ├── layout/             # Layout components (Sidebar, Header)
│   ├── meetings/           # Meeting-related components
│   ├── agents/             # Agent-related components
│   └── ui/                 # Shadcn UI components
├── store/                   # Zustand state management
│   ├── use-meeting-store.ts
│   └── use-agent-store.ts
├── types/                   # TypeScript type definitions
├── lib/                     # Utility functions and mock data
└── public/                  # Static assets
```

## Key Pages

- `/dashboard` - Overview with metrics and recent activity
- `/meetings` - List of all meetings with search
- `/meetings/[id]` - Detailed meeting view with transcript, summary, actions, and AI chat
- `/agents` - Agent configuration and management
- `/settings` - Application and integration settings

## State Management

The application uses Zustand for lightweight state management:

- `useMeetingStore`: Manages meetings, selected meeting, and chat messages
- `useAgentStore`: Manages agent configurations and status

## Future Integration

The frontend is architected to support future backend integration with IBM WatsonX Orchestrate for:

- Real-time meeting transcription
- AI-powered agent orchestration
- Automated workflow execution
- Natural language processing for chat queries

## Development

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Deployment

This application is optimized for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT
