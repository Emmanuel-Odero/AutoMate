"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useMeetingStore } from "@/store/use-meeting-store";
import { ChatMessage } from "@/types";
import { format } from "date-fns";

interface ChatInterfaceProps {
  meetingId: string;
}

export function ChatInterface({ meetingId }: ChatInterfaceProps) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addChatMessage, getChatMessages } = useMeetingStore();
  const messages = getChatMessages(meetingId);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    addChatMessage(meetingId, userMessage);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: `msg-${Date.now()}-ai`,
        role: "assistant",
        content: generateMockResponse(input),
        timestamp: new Date(),
      };
      addChatMessage(meetingId, aiMessage);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-full flex-col">
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center text-center text-muted-foreground">
              <div>
                <Bot className="mx-auto mb-2 h-12 w-12 opacity-50" />
                <p>Ask me anything about this meeting</p>
                <p className="text-sm">
                  I can help you find specific information from the transcript
                </p>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="mt-1 text-xs opacity-70">
                    {format(message.timestamp, "HH:mm")}
                  </p>
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-muted px-4 py-2">
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50" />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50 [animation-delay:0.2s]" />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50 [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about this meeting..."
            disabled={isLoading}
          />
          <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function generateMockResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();

  if (lowerQuestion.includes("action") || lowerQuestion.includes("task")) {
    return "Based on the meeting transcript, the main action items were: 1) Bob to draft technical spec for the analytics dashboard by end of week, 2) Carol to investigate performance issues with initial findings by next Tuesday, and 3) Create a JIRA ticket for performance optimization.";
  }

  if (lowerQuestion.includes("who") || lowerQuestion.includes("participant")) {
    return "The meeting participants were Alice Johnson, Bob Smith, and Carol Davis. Alice led the discussion, Bob was assigned the dashboard project, and Carol took ownership of the performance investigation.";
  }

  if (
    lowerQuestion.includes("dashboard") ||
    lowerQuestion.includes("feature")
  ) {
    return "The team discussed prioritizing a new analytics dashboard feature for Q4. Bob agreed to lead this project, which will require approximately 3 sprints. This feature has been requested by multiple enterprise clients.";
  }

  if (
    lowerQuestion.includes("performance") ||
    lowerQuestion.includes("issue")
  ) {
    return "Carol mentioned performance issues in the reporting module where some clients are experiencing slow load times. The team decided to create a JIRA ticket for this, and Carol will handle the performance investigation with initial findings expected by next Tuesday.";
  }

  return "Based on the meeting transcript, I can help you find specific information. The meeting covered Q4 product planning, including discussions about the analytics dashboard, performance optimization, and task assignments. Could you be more specific about what you'd like to know?";
}
