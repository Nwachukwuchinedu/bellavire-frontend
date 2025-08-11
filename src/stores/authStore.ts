import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import api from '@/api/api';

export type UserRole = 'admin' | 'landlord' | 'tenant' | 'agent';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  selectedRole: UserRole | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setRole: (role: UserRole) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      selectedRole: null,
      token: null,

      setLoading: (isLoading) => set({ isLoading }),

      setRole: (role) => set({ selectedRole: role }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),

      login: async (email: string, password: string) => {
        set({ isLoading: true });

        try {
          const response = await api.post(
            // 'auth/login{authProvider}',
            'auth/login',
            { email, password }
          );

          const { token, user } = response.data;

          // Store token in axios for future requests
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          set({
            user,
            token,
            isAuthenticated: true,
          });
        } catch (error: any) {
          console.error('Login error:', error?.response?.data || error.message);
          throw new Error(error?.response?.data?.message || 'Login failed');
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        selectedRole: state.selectedRole,
      }),
    }
  )
);
