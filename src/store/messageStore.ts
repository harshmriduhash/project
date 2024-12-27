import { create } from 'zustand';
import { Message } from '../types';
import { messageService } from '../services/messages';

interface MessageState {
  conversations: Message[];
  currentChat: Message[];
  isLoading: boolean;
  error: string | null;
  fetchConversations: () => Promise<void>;
  fetchMessages: (userId: string) => Promise<void>;
  sendMessage: (userId: string, content: string, attachments?: File[]) => Promise<void>;
  clearError: () => void;
}

export const useMessageStore = create<MessageState>((set, get) => ({
  conversations: [],
  currentChat: [],
  isLoading: false,
  error: null,
  fetchConversations: async () => {
    try {
      set({ isLoading: true, error: null });
      const conversations = await messageService.getConversations();
      set({ conversations, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch conversations', isLoading: false });
    }
  },
  fetchMessages: async (userId) => {
    try {
      set({ isLoading: true, error: null });
      const messages = await messageService.getMessages(userId);
      set({ currentChat: messages, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch messages', isLoading: false });
    }
  },
  sendMessage: async (userId, content, attachments) => {
    try {
      set({ isLoading: true, error: null });
      const message = await messageService.sendMessage(userId, content, attachments);
      set({ 
        currentChat: [...get().currentChat, message],
        isLoading: false 
      });
    } catch (error) {
      set({ error: 'Failed to send message', isLoading: false });
    }
  },
  clearError: () => set({ error: null }),
}));