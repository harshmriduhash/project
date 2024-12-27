import { create } from 'zustand';
import { Job } from '../types';
import { jobService } from '../services/jobs';

interface JobState {
  jobs: Job[];
  selectedJob: Job | null;
  isLoading: boolean;
  error: string | null;
  fetchJobs: () => Promise<void>;
  fetchJob: (id: string) => Promise<void>;
  createJob: (jobData: Partial<Job>) => Promise<void>;
  clearError: () => void;
}

export const useJobStore = create<JobState>((set, get) => ({
  jobs: [],
  selectedJob: null,
  isLoading: false,
  error: null,
  fetchJobs: async () => {
    try {
      set({ isLoading: true, error: null });
      const jobs = await jobService.getJobs();
      set({ jobs, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch jobs', isLoading: false });
    }
  },
  fetchJob: async (id) => {
    try {
      set({ isLoading: true, error: null });
      const job = await jobService.getJob(id);
      set({ selectedJob: job, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch job', isLoading: false });
    }
  },
  createJob: async (jobData) => {
    try {
      set({ isLoading: true, error: null });
      const newJob = await jobService.createJob(jobData);
      set({ jobs: [...get().jobs, newJob], isLoading: false });
    } catch (error) {
      set({ error: 'Failed to create job', isLoading: false });
    }
  },
  clearError: () => set({ error: null }),
}));