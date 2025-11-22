"use client";

import { format } from "date-fns";
import {
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Meeting } from "@/types";
import { cn } from "@/lib/utils";

interface MeetingCardProps {
  meeting: Meeting;
  onClick?: () => void;
}

export function MeetingCard({ meeting, onClick }: MeetingCardProps) {
  const statusConfig = {
    completed: {
      label: "Completed",
      icon: CheckCircle2,
      color: "bg-green-500",
    },
    processing: { label: "Processing", icon: Clock, color: "bg-yellow-500" },
    failed: { label: "Failed", icon: AlertCircle, color: "bg-red-500" },
  };

  const status = statusConfig[meeting.status];
  const StatusIcon = status.icon;

  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{meeting.title}</CardTitle>
          <Badge variant="outline" className="gap-1">
            <div className={cn("h-2 w-2 rounded-full", status.color)} />
            {status.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {format(meeting.date, "MMM dd, yyyy")}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          {meeting.duration} minutes
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          {meeting.participants.length} participants
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {meeting.summary}
        </p>
        {meeting.agentActions && meeting.agentActions.length > 0 && (
          <div className="pt-2">
            <Badge variant="secondary">
              {meeting.agentActions.length} agent action
              {meeting.agentActions.length !== 1 ? "s" : ""}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
