import { create } from 'zustand';
import Cookies from 'js-cookie';
import { auth } from '../lib/api';

interface User {
  id: number;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: any) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const response = await auth.login(email, password);
      set({ user: response.user, isLoading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Login failed', isLoading: false });
      throw error;
    }
  },
  signup: async (data: any) => {
    try {
      set({ isLoading: true, error: null });
      await auth.signup(data);
      set({ isLoading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Signup failed', isLoading: false });
      throw error;
    }
  },
  logout: () => {
    Cookies.remove('auth_token');
    set({ user: null });
  },
  clearError: () => set({ error: null }),
}));