"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, MessageSquare } from "lucide-react";

export function DemoPreview() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Meeting Recorded",
      description: "Q4 Product Planning - 60 minutes",
      icon: Clock,
      color: "bg-blue-500",
    },
    {
      title: "AI Transcribing",
      description: "Converting speech to text...",
      icon: MessageSquare,
      color: "bg-yellow-500",
    },
    {
      title: "Agents Executing",
      description: "Creating tickets and posting updates...",
      icon: CheckCircle2,
      color: "bg-green-500",
    },
    {
      title: "Complete",
      description: "3 actions completed automatically",
      icon: CheckCircle2,
      color: "bg-green-500",
    },
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="p-6">
        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            const isComplete = index < activeStep;

            return (
              <div
                key={index}
                className={`flex items-center gap-4 rounded-lg border p-4 transition-all ${
                  isActive ? "border-primary bg-primary/5" : ""
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    isComplete || isActive ? step.color : "bg-muted"
                  } text-white`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{step.title}</h4>
                    {isComplete && (
                      <Badge variant="secondary" className="text-xs">
                        Done
                      </Badge>
                    )}
                    {isActive && <Badge className="text-xs">In Progress</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
