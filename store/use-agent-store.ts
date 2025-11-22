// Zustand store for agent management
import { create } from "zustand";
import { Agent } from "@/types";
import { mockAgents } from "@/lib/mock-data";

interface AgentStore {
  agents: Agent[];
  toggleAgent: (agentId: string) => void;
  updateAgentConfig: (agentId: string, config: Record<string, any>) => void;
}

export const useAgentStore = create<AgentStore>((set) => ({
  agents: mockAgents,

  toggleAgent: (agentId) =>
    set((state) => ({
      agents: state.agents.map((agent) =>
        agent.id === agentId ? { ...agent, enabled: !agent.enabled } : agent
      ),
    })),

  updateAgentConfig: (agentId, config) =>
    set((state) => ({
      agents: state.agents.map((agent) =>
        agent.id === agentId ? { ...agent, config } : agent
      ),
    })),
}));
