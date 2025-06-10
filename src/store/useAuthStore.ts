import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const useAuthDataStore = create<AuthState>()(
  persist(
    immer((set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    })),
    { name: 'auth-storage', storage: createJSONStorage(() => sessionStorage) }
  )
);
