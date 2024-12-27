import api from './api';
import { Message } from '../types';

export const messageService = {
  async getConversations() {
    const { data } = await api.get<Message[]>('/messages/conversations');
    return data;
  },

  async getMessages(userId: string) {
    const { data } = await api.get<Message[]>(`/messages/${userId}`);
    return data;
  },

  async sendMessage(userId: string, content: string, attachments?: File[]) {
    const formData = new FormData();
    formData.append('content', content);
    
    if (attachments) {
      attachments.forEach(file => {
        formData.append('attachments', file);
      });
    }

    const { data } = await api.post<Message>(`/messages/${userId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },
};