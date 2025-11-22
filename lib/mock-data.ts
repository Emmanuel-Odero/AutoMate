// Mock data for development and demonstration
import { Meeting, Agent } from "@/types";

export const mockAgents: Agent[] = [
  {
    id: "agent-1",
    type: "transcriber",
    name: "Meeting Transcriber",
    description: "Automatically transcribes meeting audio to text using AI",
    status: "active",
    enabled: true,
  },
  {
    id: "agent-2",
    type: "slack",
    name: "Slack Poster",
    description: "Posts meeting summaries and action items to Slack channels",
    status: "active",
    enabled: true,
    config: { channel: "#general" },
  },
  {
    id: "agent-3",
    type: "jira",
    name: "JIRA Creator",
    description: "Creates JIRA tickets from action items discussed in meetings",
    status: "active",
    enabled: true,
    config: { project: "PROJ" },
  },
  {
    id: "agent-4",
    type: "github",
    name: "GitHub Opener",
    description: "Opens GitHub issues and PRs based on technical discussions",
    status: "inactive",
    enabled: false,
    config: { repo: "org/repo" },
  },
];

export const mockMeetings: Meeting[] = [
  {
    id: "meeting-1",
    title: "Q4 Product Planning",
    date: new Date("2024-11-20T10:00:00"),
    duration: 60,
    participants: ["Alice Johnson", "Bob Smith", "Carol Davis"],
    transcript: `Alice: Good morning everyone. Let's discuss our Q4 product roadmap. We need to prioritize the new dashboard feature.

Bob: I agree. The analytics dashboard has been requested by multiple enterprise clients. We should allocate at least 3 sprints for this.

Carol: That sounds reasonable. We also need to address the performance issues in the reporting module. Some clients are experiencing slow load times.

Alice: Good point, Carol. Let's create a JIRA ticket for the performance optimization. Bob, can you lead the dashboard project?

Bob: Absolutely. I'll draft the technical spec by end of week and share it on Slack.

Carol: I'll handle the performance investigation. Should have initial findings by next Tuesday.

Alice: Perfect. Let's sync again next week to review progress.`,
    summary:
      "Team discussed Q4 priorities including new analytics dashboard (3 sprints), performance optimization for reporting module, and assigned ownership. Bob to draft technical spec, Carol to investigate performance issues.",
    status: "completed",
    agentActions: [
      {
        id: "action-1",
        agentType: "slack",
        timestamp: new Date("2024-11-20T11:05:00"),
        status: "completed",
        description: "Posted meeting summary to #product-team",
        result: "Message posted successfully",
      },
      {
        id: "action-2",
        agentType: "jira",
        timestamp: new Date("2024-11-20T11:06:00"),
        status: "completed",
        description:
          "Created ticket: Performance optimization for reporting module",
        result: "PROJ-1234 created",
        metadata: { ticketId: "PROJ-1234" },
      },
    ],
  },
  {
    id: "meeting-2",
    title: "Sprint Retrospective",
    date: new Date("2024-11-18T14:00:00"),
    duration: 45,
    participants: ["David Lee", "Emma Wilson", "Frank Chen", "Grace Park"],
    transcript: `David: Welcome to our sprint retrospective. Let's start with what went well.

Emma: The deployment process was much smoother this sprint. The new CI/CD pipeline really helped.

Frank: Agreed. We also had better test coverage which caught several bugs early.

Grace: Communication was better too. The daily standups were more focused.

David: Great points. Now, what could we improve?

Emma: We had some scope creep mid-sprint. Need better requirements upfront.

Frank: The staging environment had some issues. We should invest in better infrastructure.

Grace: Documentation could be better. New team members struggled to onboard.

David: Excellent feedback. Let's create action items for these improvements.`,
    summary:
      "Sprint retrospective highlighted successes with CI/CD pipeline and test coverage. Areas for improvement: scope management, staging environment stability, and documentation for onboarding.",
    status: "completed",
    agentActions: [
      {
        id: "action-3",
        agentType: "slack",
        timestamp: new Date("2024-11-18T14:50:00"),
        status: "completed",
        description: "Posted retrospective notes to #engineering",
        result: "Message posted successfully",
      },
      {
        id: "action-4",
        agentType: "jira",
        timestamp: new Date("2024-11-18T14:51:00"),
        status: "completed",
        description: "Created ticket: Improve staging environment stability",
        result: "PROJ-1235 created",
      },
      {
        id: "action-5",
        agentType: "jira",
        timestamp: new Date("2024-11-18T14:52:00"),
        status: "completed",
        description: "Created ticket: Update onboarding documentation",
        result: "PROJ-1236 created",
      },
    ],
  },
  {
    id: "meeting-3",
    title: "Client Feedback Session",
    date: new Date("2024-11-15T09:00:00"),
    duration: 90,
    participants: ["Alice Johnson", "Henry Martinez", "Client: Sarah Thompson"],
    transcript: `Alice: Thank you for joining us, Sarah. We'd love to hear your feedback on the platform.

Sarah: Overall, we're very happy with the product. The user interface is intuitive and our team adopted it quickly.

Henry: That's great to hear. Any specific features you'd like to see?

Sarah: Yes, we'd really benefit from better export capabilities. We need to generate reports in multiple formats - PDF, Excel, CSV.

Alice: Noted. That's been on our roadmap. We can prioritize it for next quarter.

Sarah: Also, mobile support would be valuable. Our field team needs access on tablets.

Henry: Mobile is definitely something we're planning. We're thinking responsive web first, then native apps.

Sarah: That works. One more thing - the search functionality could be faster. Sometimes it takes 5-10 seconds.

Alice: We'll investigate that. Performance is a priority for us. I'll have our team look into the search optimization.

Sarah: Appreciate it. Overall though, we're very satisfied and planning to expand usage across more departments.`,
    summary:
      "Client feedback session with positive overall reception. Feature requests: enhanced export capabilities (PDF, Excel, CSV), mobile/tablet support, and search performance optimization. Client planning to expand usage.",
    status: "completed",
    agentActions: [
      {
        id: "action-6",
        agentType: "slack",
        timestamp: new Date("2024-11-15T10:35:00"),
        status: "completed",
        description: "Posted client feedback to #product-team",
        result: "Message posted successfully",
      },
      {
        id: "action-7",
        agentType: "jira",
        timestamp: new Date("2024-11-15T10:36:00"),
        status: "completed",
        description: "Created ticket: Enhanced export capabilities",
        result: "PROJ-1237 created",
      },
      {
        id: "action-8",
        agentType: "jira",
        timestamp: new Date("2024-11-15T10:37:00"),
        status: "completed",
        description: "Created ticket: Search performance optimization",
        result: "PROJ-1238 created",
      },
    ],
  },
];
