# Component Documentation

## Layout Components

### Sidebar (`/components/layout/sidebar.tsx`)

Main navigation sidebar with links to all major sections.

**Features:**

- Active route highlighting
- Icon-based navigation
- Responsive design

**Navigation Items:**

- Dashboard
- Meetings
- Agents
- Settings

### Header (`/components/layout/header.tsx`)

Top header bar with user actions.

**Features:**

- Notification bell icon
- User avatar
- Application title

## Meeting Components

### MeetingCard (`/components/meetings/meeting-card.tsx`)

Displays meeting summary in card format.

**Props:**

- `meeting: Meeting` - Meeting data object
- `onClick?: () => void` - Click handler

**Features:**

- Status badge (completed/processing/failed)
- Date, duration, and participant count
- Summary preview
- Agent action count

### ChatInterface (`/components/meetings/chat-interface.tsx`)

Interactive AI chat for querying meeting content.

**Props:**

- `meetingId: string` - ID of the meeting to chat about

**Features:**

- Message history display
- User/AI message differentiation
- Loading state with animated dots
- Auto-scroll to latest message
- Enter key to send
- Mock AI responses (ready for real API)

**Mock Response Logic:**

- Detects keywords in questions
- Returns relevant information from transcript
- Handles action items, participants, features, and performance queries

## Agent Components

### AgentCard (`/components/agents/agent-card.tsx`)

Displays agent configuration and status.

**Props:**

- `agent: Agent` - Agent data object

**Features:**

- Agent icon (emoji-based)
- Status indicator (active/inactive/error)
- Enable/disable toggle
- Configuration display
- Color-coded status

**Agent Icons:**

- 🎤 Transcriber
- 💬 Slack
- 📋 JIRA
- 🐙 GitHub

## Dashboard Components

### StatsCard (`/components/dashboard/stats-card.tsx`)

Displays a single metric with icon.

**Props:**

- `title: string` - Card title
- `value: string | number` - Main metric value
- `description: string` - Supporting text
- `icon: LucideIcon` - Icon component

**Usage:**

```tsx
<StatsCard
  title="Total Meetings"
  value={12}
  description="3 completed"
  icon={Calendar}
/>
```

## UI Components (Shadcn/UI)

All UI components are from Shadcn/UI library:

- **Button** - Various variants (default, outline, ghost, etc.)
- **Card** - Container with header and content sections
- **Input** - Text input field
- **Textarea** - Multi-line text input
- **Badge** - Status and label badges
- **Avatar** - User avatar with fallback
- **ScrollArea** - Scrollable container
- **Separator** - Visual divider
- **Tabs** - Tabbed interface
- **Dialog** - Modal dialog
- **Select** - Dropdown select
- **Label** - Form label

### EmptyState (`/components/ui/empty-state.tsx`)

Reusable empty state component.

**Props:**

- `icon: LucideIcon` - Icon to display
- `title: string` - Main heading
- `description: string` - Supporting text
- `action?: { label: string; onClick: () => void }` - Optional action button

**Usage:**

```tsx
<EmptyState
  icon={Calendar}
  title="No meetings found"
  description="Start by uploading a meeting recording"
  action={{
    label: "Upload Meeting",
    onClick: handleUpload,
  }}
/>
```

## Component Patterns

### Client Components

Components using hooks or browser APIs must include `'use client'` directive:

```tsx
"use client";

import { useState } from "react";
```

### Server Components

Default for all components in App Router. No directive needed.

### Styling

All components use Tailwind CSS utilities:

```tsx
<div className="flex items-center gap-4 rounded-lg border p-4">
```

### Type Safety

All components have proper TypeScript types:

```tsx
interface ComponentProps {
  data: DataType;
  onAction: (id: string) => void;
}

export function Component({ data, onAction }: ComponentProps) {
  // ...
}
```

## Best Practices

1. **Keep components focused** - Single responsibility
2. **Use composition** - Combine small components
3. **Type everything** - Full TypeScript coverage
4. **Accessible by default** - Use Shadcn/UI components
5. **Responsive design** - Mobile-first approach
6. **Consistent spacing** - Use Tailwind spacing scale
7. **Semantic HTML** - Proper element usage

## Adding New Components

1. Create file in appropriate directory
2. Define TypeScript interface for props
3. Use Tailwind for styling
4. Export component
5. Import and use in pages

Example:

```tsx
// components/example/new-component.tsx
interface NewComponentProps {
  title: string;
  onAction: () => void;
}

export function NewComponent({ title, onAction }: NewComponentProps) {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="font-semibold">{title}</h3>
      <button onClick={onAction}>Action</button>
    </div>
  );
}
```

## Component Testing

When backend is integrated, test components with:

- Real API data
- Loading states
- Error states
- Empty states
- Edge cases

## Future Enhancements

- Add loading skeletons
- Implement error boundaries
- Add animation transitions
- Enhance accessibility
- Add keyboard shortcuts
- Implement drag-and-drop
- Add real-time updates
