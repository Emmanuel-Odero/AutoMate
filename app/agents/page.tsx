"use client";

import { useAgentStore } from "@/store/use-agent-store";
import { AgentCard } from "@/components/agents/agent-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AgentsPage() {
  const { agents } = useAgentStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Agents</h1>
          <p className="text-muted-foreground">
            Configure and manage your workflow automation agents
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Agent
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}
