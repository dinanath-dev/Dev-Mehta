/* ============================================
 * Animated skill progress bar
 * ============================================ */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Skill } from '@/types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export function SkillBar({ skill, index }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-xl border border-slate-200/50 bg-white/50 p-4 backdrop-blur-sm transition-all hover:border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-700/50 dark:bg-slate-800/50"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-900 dark:text-white">
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.05 + 0.5 }}
          className="text-xs font-medium text-indigo-500"
        >
          {skill.percentage}%
        </motion.span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
    </motion.div>
  );
}
