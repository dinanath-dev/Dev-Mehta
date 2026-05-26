/* ============================================
 * Design tokens — professional accent palette
 * (teal / emerald / amber — not generic AI blue)
 * ============================================ */

import type { SkillCategory } from '@/types';

export const accent = {
  primary: '#0d9488',
  primaryLight: '#14b8a6',
  secondary: '#d97706',
  highlight: '#06b6d4',
  gradient: 'linear-gradient(135deg, #0d9488 0%, #10b981 45%, #06b6d4 100%)',
  gradientWarm: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #0d9488 100%)',
} as const;

export const skillCategoryTheme: Record<
  SkillCategory,
  {
    label: string;
    gradient: string;
    glow: string;
    ring: string;
    bar: string;
    stroke: string;
  }
> = {
  frontend: {
    label: 'Frontend',
    gradient: 'from-cyan-500 to-teal-500',
    glow: 'shadow-cyan-500/20',
    ring: 'ring-cyan-500/30',
    bar: 'bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400',
    stroke: 'text-cyan-500',
  },
  backend: {
    label: 'Backend',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/20',
    ring: 'ring-emerald-500/30',
    bar: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    stroke: 'text-emerald-500',
  },
  languages: {
    label: 'Languages',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20',
    ring: 'ring-amber-500/30',
    bar: 'bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300',
    stroke: 'text-amber-500',
  },
  database: {
    label: 'Database',
    gradient: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/20',
    ring: 'ring-violet-500/30',
    bar: 'bg-gradient-to-r from-violet-500 to-purple-400',
    stroke: 'text-violet-500',
  },
  devops: {
    label: 'DevOps',
    gradient: 'from-orange-500 to-rose-500',
    glow: 'shadow-orange-500/20',
    ring: 'ring-orange-500/30',
    bar: 'bg-gradient-to-r from-orange-500 to-rose-400',
    stroke: 'text-orange-500',
  },
  tools: {
    label: 'Tools',
    gradient: 'from-slate-500 to-zinc-400',
    glow: 'shadow-slate-500/15',
    ring: 'ring-slate-400/30',
    bar: 'bg-gradient-to-r from-slate-500 to-zinc-400',
    stroke: 'text-zinc-500',
  },
};

export const projectCategoryTheme: Record<
  string,
  { gradient: string; badge: string; border: string }
> = {
  all: {
    gradient: 'from-teal-500 to-cyan-500',
    badge: 'bg-teal-500/15 text-teal-700 dark:text-teal-300',
    border: 'border-teal-500/30',
  },
  fullstack: {
    gradient: 'from-teal-500 to-emerald-500',
    badge: 'bg-teal-500/15 text-teal-700 dark:text-teal-300',
    border: 'border-teal-500/30',
  },
  frontend: {
    gradient: 'from-cyan-500 to-sky-500',
    badge: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300',
    border: 'border-cyan-500/30',
  },
  backend: {
    gradient: 'from-emerald-500 to-green-600',
    badge: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-500/30',
  },
  ai: {
    gradient: 'from-fuchsia-500 to-violet-500',
    badge: 'bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300',
    border: 'border-fuchsia-500/30',
  },
  devops: {
    gradient: 'from-orange-500 to-amber-500',
    badge: 'bg-orange-500/15 text-orange-700 dark:text-orange-300',
    border: 'border-orange-500/30',
  },
};
