/* ============================================
 * GitHub stats cards (mock data)
 * ============================================ */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitBranch, Star, Activity, Users } from 'lucide-react';
import { githubStats } from '@/constants/mockData';
import { GlassCard } from '@/components/ui';

const statsConfig = [
  { key: 'repos' as const, label: 'Repositories', icon: GitBranch, color: 'text-blue-400' },
  { key: 'stars' as const, label: 'Stars Earned', icon: Star, color: 'text-amber-400' },
  { key: 'contributions' as const, label: 'Contributions', icon: Activity, color: 'text-green-400' },
  { key: 'followers' as const, label: 'Followers', icon: Users, color: 'text-purple-400' },
];

export function GitHubStatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statsConfig.map((stat, i) => {
        const Icon = stat.icon;
        const value = githubStats[stat.key];
        return (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <GlassCard className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 ${stat.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {value.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
}
