"use client";

import { MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Agent } from "@/types";
import { useAgentStore } from "@/store/use-agent-store";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  agent: Agent;
}

const agentIcons = {
  transcriber: "🎤",
  slack: "💬",
  jira: "📋",
  github: "🐙",
};

export function AgentCard({ agent }: AgentCardProps) {
  const { toggleAgent } = useAgentStore();

  const statusConfig = {
    active: { icon: CheckCircle, color: "text-green-500", label: "Active" },
    inactive: { icon: AlertCircle, color: "text-gray-500", label: "Inactive" },
    error: { icon: AlertCircle, color: "text-red-500", label: "Error" },
  };

  const status = statusConfig[agent.status];
  const StatusIcon = status.icon;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{agentIcons[agent.type]}</div>
            <div>
              <CardTitle className="text-lg">{agent.name}</CardTitle>
              <CardDescription className="mt-1">
                {agent.description}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <StatusIcon className={cn("h-5 w-5", status.color)} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge variant={agent.enabled ? "default" : "secondary"}>
              {agent.enabled ? "Enabled" : "Disabled"}
            </Badge>
            <Badge variant="outline">{status.label}</Badge>
          </div>
          <Button
            variant={agent.enabled ? "outline" : "default"}
            size="sm"
            onClick={() => toggleAgent(agent.id)}
          >
            {agent.enabled ? "Disable" : "Enable"}
          </Button>
        </div>
        {agent.config && (
          <div className="mt-4 rounded-md bg-muted p-3">
            <p className="text-xs font-medium text-muted-foreground">
              Configuration
            </p>
            <div className="mt-1 space-y-1">
              {Object.entries(agent.config).map(([key, value]) => (
                <p key={key} className="text-sm">
                  <span className="font-medium">{key}:</span> {String(value)}
                </p>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
