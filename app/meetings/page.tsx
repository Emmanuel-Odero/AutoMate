"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMeetingStore } from "@/store/use-meeting-store";
import { MeetingCard } from "@/components/meetings/meeting-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function MeetingsPage() {
  const router = useRouter();
  const { meetings, setSelectedMeeting } = useMeetingStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMeetings = meetings.filter(
    (meeting) =>
      meeting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meeting.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMeetingClick = (meeting: any) => {
    setSelectedMeeting(meeting);
    router.push(`/meetings/${meeting.id}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Meetings</h1>
        <p className="text-muted-foreground">
          View and interact with your meeting transcripts
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search meetings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredMeetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
            onClick={() => handleMeetingClick(meeting)}
          />
        ))}
      </div>

      {filteredMeetings.length === 0 && (
        <div className="flex h-64 items-center justify-center text-muted-foreground">
          No meetings found
        </div>
      )}
    </div>
  );
}
