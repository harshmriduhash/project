import api from './api';
import { User } from '../types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export const authService = {
  async login(credentials: LoginCredentials) {
    const { data } = await api.post('/auth/login', credentials);
    localStorage.setItem('token', data.token);
    return data.user;
  },

  async register(credentials: RegisterCredentials) {
    const { data } = await api.post('/auth/register', credentials);
    localStorage.setItem('token', data.token);
    return data.user;
  },

  async getCurrentUser() {
    const { data } = await api.get<User>('/auth/me');
    return data;
  },

  logout() {
    localStorage.removeItem('token');
  },
};