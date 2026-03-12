/* ============================================
 * Badge / tech stack tag component
 * ============================================ */

import { cn } from '@/utils';

interface BadgeProps {
  children: string;
  variant?: 'default' | 'primary' | 'outline';
  className?: string;
}

const variants = {
  default:
    'bg-slate-100 text-slate-700 dark:bg-slate-700/50 dark:text-slate-300',
  primary:
    'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300',
  outline:
    'border border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-400',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
