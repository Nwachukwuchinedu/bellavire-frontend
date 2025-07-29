import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'admin' | 'landlord' | 'tenant' | 'agent';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

// interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   login: (user: User) => void;
//   logout: () => void;
//   setLoading: (loading: boolean) => void;
// }

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       user: null,
//       isAuthenticated: false,
//       isLoading: false,
//       login: (user) => set({ user, isAuthenticated: true }),
//       logout: () => set({ user: null, isAuthenticated: false }),
//       setLoading: (isLoading) => set({ isLoading }),
//     }),
//     {
//       name: 'auth-storage',
//     }
//   )
// );

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  selectedRole: UserRole | null; // ADD THIS
  login: (user: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setRole: (role: UserRole) => void; // ADD THIS
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      selectedRole: null,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      setLoading: (isLoading) => set({ isLoading }),
      setRole: (role) => set({ selectedRole: role }),
    }),
    { name: 'auth-storage' }
  )
);
