import api from './api';
import { Bid } from '../types';

export const bidService = {
  async getBidsForJob(jobId: string) {
    const { data } = await api.get<Bid[]>(`/jobs/${jobId}/bids`);
    return data;
  },

  async createBid(jobId: string, bidData: Partial<Bid>) {
    const { data } = await api.post<Bid>(`/jobs/${jobId}/bids`, bidData);
    return data;
  },

  async updateBid(jobId: string, bidId: string, bidData: Partial<Bid>) {
    const { data } = await api.put<Bid>(`/jobs/${jobId}/bids/${bidId}`, bidData);
    return data;
  },

  async acceptBid(jobId: string, bidId: string) {
    const { data } = await api.post<Bid>(`/jobs/${jobId}/bids/${bidId}/accept`);
    return data;
  },
};