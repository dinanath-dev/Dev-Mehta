/* ============================================
 * Skills page — category overview + animated grid
 * ============================================ */

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { PageTransition, StaggerContainer } from '@/components/animations';
import { staggerItem } from '@/components/animations/variants';
import { SectionWrapper } from '@/components/layout';
import {
  SkillBar,
  FilterTabs,
  SkillCategoryOverview,
} from '@/components/common';
import { skills } from '@/constants/mockData';
import type { SkillCategory } from '@/types';

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
        <meta
          name="description"
          content="Explore my technical skills and proficiency across various technologies."
        />
      </Helmet>

      <SectionWrapper
        title="Technical Skills"
        subtitle="Depth across the stack — measured by real-world usage, not buzzwords"
        accentWord="Skills"
      >
        <SkillCategoryOverview skills={skills} />

        <div className="mb-12 flex justify-center">
          <FilterTabs tabs={tabs} active={active} onChange={setActive} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((skill, i) => (
                <motion.div key={skill.name} variants={staggerItem}>
                  <SkillBar skill={skill} index={i} />
                </motion.div>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>
      </SectionWrapper>
    </PageTransition>
  );
}
