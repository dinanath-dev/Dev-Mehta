/* ============================================
 * Skill card — category colors, shimmer bar, icon ring
 * ============================================ */

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { Skill } from '@/types';
import { skillCategoryTheme } from '@/constants/theme';
import { getSkillIcon } from '@/utils/skillIcons';
import { cn } from '@/utils';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

function AnimatedCounter({ value, active }: { value: number; active: boolean }) {
  const spring = useSpring(0, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    if (active) spring.set(value);
  }, [active, value, spring]);

  return <motion.span className="tabular-nums">{display}</motion.span>;
}

export function SkillBar({ skill, index }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const theme = skillCategoryTheme[skill.category];
  const Icon = getSkillIcon(skill.icon);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/70 p-5 backdrop-blur-xl transition-shadow duration-500',
        'dark:border-zinc-700/50 dark:bg-zinc-900/50',
        'hover:shadow-xl',
        theme.glow,
      )}
    >
      {/* Ambient glow on hover */}
      <motion.div
        className={cn(
          'pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40',
          theme.gradient,
        )}
        animate={hovered ? { scale: 1.2 } : { scale: 1 }}
      />

      <div className="relative flex items-start gap-4">
        {/* Icon ring */}
        <motion.div
          animate={hovered ? { rotate: [0, -6, 6, 0], scale: 1.08 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ring-2',
            theme.gradient,
            theme.ring,
          )}
        >
          <Icon className="h-5 w-5 text-white drop-shadow-sm" strokeWidth={2} />
        </motion.div>

        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {skill.name}
              </h3>
              <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {theme.label}
              </span>
            </div>
            <span
              className={cn(
                'text-sm font-bold bg-gradient-to-r bg-clip-text text-transparent',
                theme.gradient,
              )}
            >
              <AnimatedCounter value={skill.percentage} active={isInView} />
            </span>
          </div>

          {/* Progress track */}
          <div className="relative h-2.5 overflow-hidden rounded-full bg-zinc-200/80 dark:bg-zinc-800">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.percentage}%` } : {}}
              transition={{
                duration: 1.4,
                delay: index * 0.06 + 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn('relative h-full rounded-full', theme.bar)}
            >
              {/* Shimmer sweep */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                initial={{ x: '-100%' }}
                animate={isInView ? { x: '200%' } : {}}
                transition={{
                  duration: 1.8,
                  delay: index * 0.06 + 0.8,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
