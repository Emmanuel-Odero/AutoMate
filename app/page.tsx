import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Calendar,
  Zap,
  CheckCircle,
  MessageSquare,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <span className="text-xl font-bold">AutoMate</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#agents"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Agents
            </Link>
            <Link href="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-8 py-24 text-center md:py-32">
        <div className="flex max-w-[64rem] flex-col items-center gap-4">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <Zap className="mr-2 h-4 w-4" />
            Powered by IBM WatsonX Orchestrate
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Meetings Into
            <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              {" "}
              Actionable Workflows
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            AutoMate uses AI agent chaining to automatically transcribe meetings
            and execute tasks through Slack, JIRA, and GitHub. Turn
            conversations into action, instantly.
          </p>
          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Try Demo <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl font-bold">94%</div>
            <div className="text-sm text-muted-foreground">Automation Rate</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl font-bold">10hrs</div>
            <div className="text-sm text-muted-foreground">Saved Per Week</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl font-bold">4</div>
            <div className="text-sm text-muted-foreground">AI Agents</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Intelligent Automation
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Let AI agents handle the busywork while you focus on what matters
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Calendar className="mb-2 h-10 w-10" />
              <CardTitle>Auto Transcription</CardTitle>
              <CardDescription>
                Automatically transcribe meeting audio to text with high
                accuracy using AI
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <MessageSquare className="mb-2 h-10 w-10" />
              <CardTitle>AI Chat Interface</CardTitle>
              <CardDescription>
                Ask questions about any meeting and get instant, context-aware
                answers
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Bot className="mb-2 h-10 w-10" />
              <CardTitle>Agent Chaining</CardTitle>
              <CardDescription>
                Multiple AI agents work together to execute complex workflows
                automatically
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="mb-2 h-10 w-10" />
              <CardTitle>Instant Actions</CardTitle>
              <CardDescription>
                Create JIRA tickets, post to Slack, and open GitHub issues in
                seconds
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CheckCircle className="mb-2 h-10 w-10" />
              <CardTitle>Smart Summaries</CardTitle>
              <CardDescription>
                Get AI-generated meeting summaries with key decisions and action
                items
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <GitBranch className="mb-2 h-10 w-10" />
              <CardTitle>Multi-Platform</CardTitle>
              <CardDescription>
                Seamlessly integrate with Slack, JIRA, GitHub, and more
                platforms
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-t bg-muted/50 py-24">
        <div className="container">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Four simple steps to transform your meetings into action
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Record Meeting</h3>
              <p className="text-sm text-muted-foreground">
                Upload or record your meeting audio directly in the platform
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">AI Transcribes</h3>
              <p className="text-sm text-muted-foreground">
                WatsonX automatically transcribes and analyzes the conversation
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">Agents Execute</h3>
              <p className="text-sm text-muted-foreground">
                AI agents create tickets, post updates, and open issues
                automatically
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <h3 className="text-xl font-bold">Chat & Review</h3>
              <p className="text-sm text-muted-foreground">
                Ask questions about the meeting and review all automated actions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="container py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Powered by AI Agents
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Specialized agents work together to automate your workflow
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-2 text-4xl">🎤</div>
              <CardTitle>Meeting Transcriber</CardTitle>
              <CardDescription>
                Converts meeting audio to accurate text transcripts using
                advanced speech recognition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  High accuracy transcription
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Speaker identification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Real-time processing
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 text-4xl">💬</div>
              <CardTitle>Slack Poster</CardTitle>
              <CardDescription>
                Automatically posts meeting summaries and action items to
                relevant Slack channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Smart channel routing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Formatted summaries
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  @mention participants
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 text-4xl">📋</div>
              <CardTitle>JIRA Creator</CardTitle>
              <CardDescription>
                Creates JIRA tickets from action items and decisions discussed
                in meetings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Auto-assign tickets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Priority detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Link related issues
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 text-4xl">🐙</div>
              <CardTitle>GitHub Opener</CardTitle>
              <CardDescription>
                Opens GitHub issues and pull requests based on technical
                discussions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Code context aware
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Auto-label issues
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Link to meetings
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50 py-24">
        <div className="container">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Ready to Automate Your Workflow?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join teams already saving hours every week with AI-powered meeting
              automation
            </p>
            <div className="flex gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2">
                  Try Demo Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/meetings">
                <Button size="lg" variant="outline">
                  View Sample Meetings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">AutoMate</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js, TypeScript, and IBM WatsonX Orchestrate
          </p>
        </div>
      </footer>
    </div>
  );
}
