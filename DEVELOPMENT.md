# Development Guide

## Architecture Overview

AutoMate follows a modern Next.js 14 App Router architecture with clear separation of concerns:

### Directory Structure

- `/app` - Next.js pages using App Router
- `/components` - Reusable React components
- `/store` - Zustand state management
- `/types` - TypeScript type definitions
- `/lib` - Utility functions and mock data
- `/services` - API service layer (placeholder for future integration)

### State Management

We use Zustand for lightweight, performant state management:

```typescript
// Meeting Store
const { meetings, selectedMeeting, setSelectedMeeting } = useMeetingStore();

// Agent Store
const { agents, toggleAgent, updateAgentConfig } = useAgentStore();
```

### Component Patterns

1. **Layout Components** (`/components/layout`)

   - Sidebar: Main navigation
   - Header: Top bar with user actions

2. **Feature Components** (`/components/meetings`, `/components/agents`)

   - MeetingCard: Display meeting summary
   - ChatInterface: AI chat for meeting queries
   - AgentCard: Agent configuration display

3. **UI Components** (`/components/ui`)
   - Shadcn/UI components for consistent design

### Styling

- Tailwind CSS v4 for utility-first styling
- CSS variables for theming (light/dark mode support)
- Shadcn/UI for pre-built accessible components

## Adding New Features

### Adding a New Page

1. Create page in `/app/[route]/page.tsx`
2. Add layout if needed in `/app/[route]/layout.tsx`
3. Update navigation in `/components/layout/sidebar.tsx`

### Adding a New Agent Type

1. Update `AgentType` in `/types/index.ts`
2. Add agent configuration in `/lib/mock-data.ts`
3. Update agent icon mapping in `/components/agents/agent-card.tsx`
4. Implement service method in `/services/agent-service.ts`

### Adding State

1. Create or update store in `/store`
2. Define types in `/types/index.ts`
3. Use store in components with hooks

## Mock Data

Currently using mock data from `/lib/mock-data.ts`:

- 3 sample meetings with transcripts
- 4 agent configurations
- Sample agent actions

Replace with real API calls when backend is ready.

## Future Integration Points

### WatsonX Orchestrate

- Service layer ready in `/services/watsonx-service.ts`
- Methods defined for transcription, summarization, and chat
- Configure API keys in Settings page

### Third-Party Integrations

- Slack: `/services/agent-service.ts` - `postToSlack()`
- JIRA: `/services/agent-service.ts` - `createJiraTicket()`
- GitHub: `/services/agent-service.ts` - `createGitHubIssue()`

## Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Deployment

Optimized for Vercel:

1. Connect repository to Vercel
2. Configure environment variables (when backend is ready)
3. Deploy automatically on push

## Best Practices

1. **Type Safety**: Always define TypeScript types
2. **Component Composition**: Keep components small and focused
3. **State Management**: Use Zustand for global state, React state for local
4. **Styling**: Use Tailwind utilities, avoid custom CSS
5. **Accessibility**: Leverage Shadcn/UI for accessible components

## Performance Considerations

- Server Components by default (use 'use client' only when needed)
- Image optimization with next/image
- Code splitting with dynamic imports
- Optimistic UI updates for better UX

## Next Steps

1. Integrate WatsonX Orchestrate API
2. Implement real-time transcription
3. Add authentication and user management
4. Implement file upload for meeting audio
5. Add real-time agent execution monitoring
6. Implement webhook handlers for agent callbacks
