// Zustand store for meeting management
import { create } from "zustand";
import { Meeting, ChatMessage } from "@/types";
import { mockMeetings } from "@/lib/mock-data";

interface MeetingStore {
  meetings: Meeting[];
  selectedMeeting: Meeting | null;
  chatMessages: Record<string, ChatMessage[]>;
  setSelectedMeeting: (meeting: Meeting | null) => void;
  addChatMessage: (meetingId: string, message: ChatMessage) => void;
  getChatMessages: (meetingId: string) => ChatMessage[];
}

export const useMeetingStore = create<MeetingStore>((set, get) => ({
  meetings: mockMeetings,
  selectedMeeting: null,
  chatMessages: {},

  setSelectedMeeting: (meeting) => set({ selectedMeeting: meeting }),

  addChatMessage: (meetingId, message) =>
    set((state) => ({
      chatMessages: {
        ...state.chatMessages,
        [meetingId]: [...(state.chatMessages[meetingId] || []), message],
      },
    })),

  getChatMessages: (meetingId) => get().chatMessages[meetingId] || [],
}));
