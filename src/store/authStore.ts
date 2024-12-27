import { create } from 'zustand';
import { User } from '../types';
import { authService } from '../services/auth';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });
      const user = await authService.login({ email, password });
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: 'Invalid credentials', isLoading: false });
    }
  },
  register: async (name, email, password) => {
    try {
      set({ isLoading: true, error: null });
      const user = await authService.register({ name, email, password });
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: 'Registration failed', isLoading: false });
    }
  },
  logout: () => {
    authService.logout();
    set({ user: null });
  },
  clearError: () => set({ error: null }),
}));