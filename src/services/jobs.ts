import api from './api';
import { Job } from '../types';

export const jobService = {
  async getJobs(filters?: Record<string, any>) {
    const { data } = await api.get<Job[]>('/jobs', { params: filters });
    return data;
  },

  async getJob(id: string) {
    const { data } = await api.get<Job>(`/jobs/${id}`);
    return data;
  },

  async createJob(jobData: Partial<Job>) {
    const { data } = await api.post<Job>('/jobs', jobData);
    return data;
  },

  async updateJob(id: string, jobData: Partial<Job>) {
    const { data } = await api.put<Job>(`/jobs/${id}`, jobData);
    return data;
  },

  async deleteJob(id: string) {
    await api.delete(`/jobs/${id}`);
  },
};