/* ============================================
 * Animated filter tabs with layout morph
 * ============================================ */

import { motion } from 'framer-motion';
import { cn } from '@/utils';

export interface FilterTab<T extends string> {
  key: T;
  label: string;
}

interface FilterTabsProps<T extends string> {
  tabs: FilterTab<T>[];
  active: T;
  onChange: (key: T) => void;
  className?: string;
}

export function FilterTabs<T extends string>({
  tabs,
  active,
  onChange,
  className,
}: FilterTabsProps<T>) {
  return (
    <div
      className={cn(
        'relative flex flex-wrap justify-center gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-100/60 p-1.5 backdrop-blur-md dark:border-zinc-700/60 dark:bg-zinc-900/60',
        className,
      )}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={cn(
              'relative z-10 rounded-xl px-4 py-2.5 text-sm font-medium capitalize transition-colors duration-300',
              isActive
                ? 'text-white'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="filter-tab-pill"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 shadow-lg shadow-teal-500/25"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
