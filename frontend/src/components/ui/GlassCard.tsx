/* ============================================
 * Glassmorphism card component
 * ============================================ */

import { type ReactNode } from 'react';
import { cn } from '@/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  padding = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition-all duration-300 dark:border-white/5 dark:bg-white/[0.03]',
        hover &&
          'hover:border-indigo-500/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/5 dark:hover:bg-white/[0.06]',
        padding && 'p-6',
        className,
      )}
    >
      {children}
    </div>
  );
}
