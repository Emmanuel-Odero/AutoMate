"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and application preferences
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>WatsonX Configuration</CardTitle>
            <CardDescription>
              Configure your IBM WatsonX Orchestrate connection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="Enter your WatsonX API key"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endpoint">Endpoint URL</Label>
              <Input id="endpoint" placeholder="https://api.watsonx.ai/..." />
            </div>
            <Button>Save Configuration</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Integration Settings</CardTitle>
            <CardDescription>
              Configure third-party integrations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Slack</h3>
              <div className="space-y-2">
                <Label htmlFor="slack-token">Workspace Token</Label>
                <Input
                  id="slack-token"
                  type="password"
                  placeholder="xoxb-..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slack-channel">Default Channel</Label>
                <Input id="slack-channel" placeholder="#general" />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-semibold">JIRA</h3>
              <div className="space-y-2">
                <Label htmlFor="jira-url">Instance URL</Label>
                <Input
                  id="jira-url"
                  placeholder="https://yourcompany.atlassian.net"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jira-token">API Token</Label>
                <Input
                  id="jira-token"
                  type="password"
                  placeholder="Enter your JIRA API token"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jira-project">Default Project</Label>
                <Input id="jira-project" placeholder="PROJ" />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-semibold">GitHub</h3>
              <div className="space-y-2">
                <Label htmlFor="github-token">Personal Access Token</Label>
                <Input
                  id="github-token"
                  type="password"
                  placeholder="ghp_..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github-repo">Default Repository</Label>
                <Input id="github-repo" placeholder="organization/repository" />
              </div>
            </div>

            <Button>Save Integrations</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>
              Customize your application experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notifications">Email Notifications</Label>
              <Input
                id="notifications"
                type="email"
                placeholder="your@email.com"
              />
            </div>
            <Button>Save Preferences</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
