/* ============================================
 * Skills page — categorized skill bars
 * ============================================ */

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTransition, StaggerContainer } from '@/components/animations';
import { staggerItem } from '@/components/animations/variants';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { SkillBar } from '@/components/common';
import { skills } from '@/constants/mockData';
import type { SkillCategory } from '@/types';
import { cn } from '@/utils';

const tabs: { key: SkillCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'languages', label: 'Languages' },
  { key: 'database', label: 'Database' },
  { key: 'devops', label: 'DevOps' },
  { key: 'tools', label: 'Tools' },
];

export default function SkillsPage() {
  const [active, setActive] = useState<SkillCategory | 'all'>('all');

  const filtered =
    active === 'all' ? skills : skills.filter((s) => s.category === active);

  return (
    <PageTransition>
      <Helmet>
        <title>Skills | Dev Mehta</title>
        <meta name="description" content="Explore my technical skills and proficiency across various technologies." />
      </Helmet>

      <SectionWrapper
        title="Technical Skills"
        subtitle="Technologies and tools I work with on a daily basis"
      >
        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                active === tab.key
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill, i) => (
            <motion.div key={skill.name} variants={staggerItem}>
              <SkillBar skill={skill} index={i} />
            </motion.div>
          ))}
        </StaggerContainer>
      </SectionWrapper>
    </PageTransition>
  );
}
