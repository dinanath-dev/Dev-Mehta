/* ============================================
 * Animated category summary rings (skills page)
 * ============================================ */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Skill, SkillCategory } from '@/types';
import { skillCategoryTheme } from '@/constants/theme';
import { cn } from '@/utils';

const categories: SkillCategory[] = [
  'frontend',
  'backend',
  'languages',
  'database',
  'devops',
  'tools',
];

interface SkillCategoryOverviewProps {
  skills: Skill[];
}

function CategoryRing({
  category,
  avg,
  count,
  index,
}: {
  category: SkillCategory;
  avg: number;
  count: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const theme = skillCategoryTheme[category];
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (avg / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative">
        <svg width="88" height="88" className="-rotate-90">
          <circle
            cx="44"
            cy="44"
            r="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-zinc-200 dark:text-zinc-800"
          />
          <motion.circle
            cx="44"
            cy="44"
            r="36"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            className={cn('stroke-current', theme.stroke)}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: isInView ? offset : circumference,
            }}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.2, delay: index * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-zinc-900 dark:text-white">{avg}%</span>
          <span className="text-[10px] text-zinc-400">{count} skills</span>
        </div>
      </div>
      <span
        className={cn(
          'text-xs font-semibold uppercase tracking-wider bg-gradient-to-r bg-clip-text text-transparent',
          theme.gradient,
        )}
      >
        {theme.label}
      </span>
    </motion.div>
  );
}

export function SkillCategoryOverview({ skills }: SkillCategoryOverviewProps) {
  const stats = categories.map((cat) => {
    const items = skills.filter((s) => s.category === cat);
    const avg =
      items.length > 0
        ? Math.round(items.reduce((a, s) => a + s.percentage, 0) / items.length)
        : 0;
    return { category: cat, avg, count: items.length };
  }).filter((s) => s.count > 0);

  return (
    <div className="mb-14 grid grid-cols-3 gap-6 rounded-3xl border border-zinc-200/40 bg-white/30 p-8 backdrop-blur-md dark:border-zinc-700/40 dark:bg-black/20 sm:grid-cols-6">
      {stats.map((s, i) => (
        <CategoryRing
          key={s.category}
          category={s.category}
          avg={s.avg}
          count={s.count}
          index={i}
        />
      ))}
    </div>
  );
}
