// Core type definitions for AutoMate platform

export type AgentType = "transcriber" | "slack" | "jira" | "github";

export type AgentStatus = "active" | "inactive" | "error";

export interface Agent {
  id: string;
  type: AgentType;
  name: string;
  description: string;
  status: AgentStatus;
  enabled: boolean;
  config?: Record<string, any>;
}

export interface Meeting {
  id: string;
  title: string;
  date: Date;
  duration: number; // in minutes
  participants: string[];
  transcript: string;
  summary: string;
  status: "processing" | "completed" | "failed";
  agentActions?: AgentAction[];
}

export interface AgentAction {
  id: string;
  agentType: AgentType;
  timestamp: Date;
  status: "pending" | "completed" | "failed";
  description: string;
  result?: string;
  metadata?: Record<string, any>;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface MeetingChat {
  meetingId: string;
  messages: ChatMessage[];
}
