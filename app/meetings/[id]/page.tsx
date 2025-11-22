"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useMeetingStore } from "@/store/use-meeting-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChatInterface } from "@/components/meetings/chat-interface";
import { ArrowLeft, Calendar, Clock, Users, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

export default function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { meetings } = useMeetingStore();
  const meeting = meetings.find((m) => m.id === id);

  if (!meeting) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Meeting not found</h2>
          <Button onClick={() => router.push("/meetings")} className="mt-4">
            Back to Meetings
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/meetings")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{meeting.title}</h1>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {format(meeting.date, "MMMM dd, yyyy")}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {meeting.duration} minutes
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {meeting.participants.length} participants
            </div>
          </div>
        </div>
        <Badge
          variant={meeting.status === "completed" ? "default" : "secondary"}
        >
          {meeting.status}
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="transcript" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
            </TabsList>
            <TabsContent value="transcript" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Meeting Transcript</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="whitespace-pre-wrap text-sm">
                      {meeting.transcript}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="summary" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Meeting Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{meeting.summary}</p>
                  <Separator className="my-4" />
                  <div>
                    <h3 className="mb-2 font-semibold">Participants</h3>
                    <div className="flex flex-wrap gap-2">
                      {meeting.participants.map((participant) => (
                        <Badge key={participant} variant="secondary">
                          {participant}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="actions" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Agent Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  {meeting.agentActions && meeting.agentActions.length > 0 ? (
                    <div className="space-y-4">
                      {meeting.agentActions.map((action) => (
                        <div
                          key={action.id}
                          className="flex items-start gap-3 rounded-lg border p-4"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">
                                {action.agentType}
                              </Badge>
                              <Badge
                                variant={
                                  action.status === "completed"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {action.status}
                              </Badge>
                            </div>
                            <p className="mt-2 font-medium">
                              {action.description}
                            </p>
                            {action.result && (
                              <p className="mt-1 text-sm text-muted-foreground">
                                {action.result}
                              </p>
                            )}
                            <p className="mt-2 text-xs text-muted-foreground">
                              {format(action.timestamp, "MMM dd, yyyy HH:mm")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No agent actions recorded for this meeting
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="h-[680px]">
            <CardHeader>
              <CardTitle>Chat with Meeting</CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-5rem)] p-0">
              <ChatInterface meetingId={meeting.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
