import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import api from '@/api/api'; // your axios instance with baseURL

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
  token: string | null; // accessToken
  googleAuthUrl: string | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  googleCallback: (code: string) => Promise<void>;
  refreshAccessToken: () => Promise<void>;
  refreshGoogleAccessToken: (refreshToken: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchCurrentUser: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  setRole: (role: UserRole) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      selectedRole: null,
      token: null,
      googleAuthUrl: null,

      setLoading: (isLoading) => set({ isLoading }),

      setRole: (role) => set({ selectedRole: role }),

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const res = await api.post('/auth/login/local', { email, password });
          const { accessToken } = res.data;
          if (!accessToken) throw new Error('No access token received');

          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

          set({ token: accessToken, isAuthenticated: true });

          await get().fetchCurrentUser();
        } catch (error: any) {
          console.error('Login error:', error?.response?.data || error.message);
          throw new Error(error?.response?.data?.error || 'Login failed');
        } finally {
          set({ isLoading: false });
        }
      },

      loginWithGoogle: async () => {
        set({ isLoading: true });
        try {
          // Get Google OAuth URL from backend
          const res = await api.post('/auth/login/google');
          const { url } = res.data;
          if (!url) throw new Error('Google login URL not received');
          set({ googleAuthUrl: url });
          
        } catch (error: any) {
          console.error('Google login error:', error?.response?.data || error.message);
          throw new Error(error?.response?.data?.error || 'Google login failed');
        } finally {
          set({ isLoading: false });
        }
      },

      googleCallback: async (code) => {
        set({ isLoading: true });
        try {
          // Exchange code for tokens & user info
          const res = await api.get('/auth/google/callback', { params: { code } });
          const { accessToken } = res.data;
          if (!accessToken) throw new Error('No access token received from Google callback');

          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

          set({ token: accessToken, isAuthenticated: true });

          await get().fetchCurrentUser();
        } catch (error: any) {
          console.error('Google callback error:', error?.response?.data || error.message);
          throw new Error(error?.response?.data?.error || 'Google callback failed');
        } finally {
          set({ isLoading: false });
        }
      },

      refreshAccessToken: async () => {
        try {
          // Refresh access token using httpOnly refresh token cookie on backend
          const res = await api.post('/auth/refresh-token');
          const { accessToken } = res.data;
          if (!accessToken) throw new Error('No access token received on refresh');

          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

          set({ token: accessToken, isAuthenticated: true });
        } catch (error) {
          console.error('Failed to refresh access token:', error);
          await get().logout();
        }
      },

      refreshGoogleAccessToken: async (refreshToken) => {
        try {
          const res = await api.post('/auth/refresh-google-token', { refresh_token: refreshToken });
          const { access_token } = res.data;
          if (!access_token) throw new Error('No Google access token received on refresh');

          
          return access_token;
        } catch (error) {
          console.error('Failed to refresh Google access token:', error);
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          await api.post('/auth/logout');
        } catch (e) {
          console.warn('Logout failed silently:', e);
        }

        delete axios.defaults.headers.common['Authorization'];

        set({
          user: null,
          token: null,
          isAuthenticated: false,
          selectedRole: null,
          googleAuthUrl: null,
        });

        set({ isLoading: false });
      },

      fetchCurrentUser: async () => {
        try {
          const token = get().token;
          if (!token) return;

          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          const res = await api.get('/auth/me');
          const user: User = res.data;

          set({
            user,
            selectedRole: user.role,
            isAuthenticated: true,
          });
        } catch (error) {
          console.error('Failed to fetch current user:', error);
          await get().logout();
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
        googleAuthUrl: state.googleAuthUrl,
      }),
    }
  )
);
