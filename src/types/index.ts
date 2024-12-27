export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'freelancer' | 'client';
  skills?: string[];
  hourlyRate?: number;
  bio?: string;
  location?: string;
  rating?: number;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  budget: {
    min: number;
    max: number;
  };
  duration: string;
  skills: string[];
  type: 'fixed' | 'hourly';
  status: 'open' | 'in_progress' | 'completed';
  clientId: string;
  createdAt: string;
}

export interface Bid {
  id: string;
  jobId: string;
  freelancerId: string;
  amount: number;
  duration: string;
  proposal: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  attachments?: {
    url: string;
    type: string;
    name: string;
  }[];
}