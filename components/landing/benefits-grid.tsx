import { Clock, TrendingUp, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 10+ Hours Weekly",
    description: "Eliminate manual note-taking and follow-up tasks",
  },
  {
    icon: TrendingUp,
    title: "94% Automation Rate",
    description: "Most meeting actions handled automatically",
  },
  {
    icon: Users,
    title: "Better Collaboration",
    description: "Keep everyone aligned with instant updates",
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Actions completed within seconds of meeting end",
  },
];

export function BenefitsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
            <p className="text-sm text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
