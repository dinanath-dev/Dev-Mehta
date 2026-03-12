/* ============================================
 * Theme toggle button (dark/light)
 * ============================================ */

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200/50 backdrop-blur-sm transition-colors hover:bg-slate-300/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-amber-400" />
        ) : (
          <Moon className="h-5 w-5 text-indigo-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
