import React, { createContext, useContext, useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';
import { authService } from '../../services/auth';

const AuthContext = createContext<ReturnType<typeof useAuthStore> | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuthStore();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const user = await authService.getCurrentUser();
        auth.login(user.email, ''); // Update user in store
      } catch (error) {
        // Handle error or redirect to login
      }
    };

    if (!auth.user) {
      initAuth();
    }
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};