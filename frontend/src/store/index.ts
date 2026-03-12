/* ============================================
 * Zustand global store
 * ============================================ */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeMode } from '@/types';

interface AppState {
  /* Theme */
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;

  /* Mobile menu */
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  /* Scroll progress (0 – 100) */
  scrollProgress: number;
  setScrollProgress: (value: number) => void;

  /* Loading state */
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      /* Theme */
      theme: 'dark',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark',
        })),
      setTheme: (mode) => set({ theme: mode }),

      /* Mobile menu */
      isMobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),

      /* Scroll progress */
      scrollProgress: 0,
      setScrollProgress: (value) => set({ scrollProgress: value }),

      /* Loading */
      isLoading: false,
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'portfolio-store',
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
