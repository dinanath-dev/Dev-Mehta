/* ============================================
 * Projects page — filterable grid
 * ============================================ */

import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageTransition, StaggerContainer } from '@/components/animations';
import { staggerItem } from '@/components/animations/variants';
import { SectionWrapper } from '@/components/layout';
import { ProjectCard } from '@/components/common';
import { projects } from '@/constants/mockData';
import { cn } from '@/utils';

const categories = ['all', 'fullstack', 'frontend', 'backend', 'ai', 'devops'];

export default function ProjectsPage() {
  const [active, setActive] = useState('all');

  const filtered = useMemo(
    () =>
      active === 'all'
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <PageTransition>
      <Helmet>
        <title>Projects | Dev Mehta</title>
        <meta name="description" content="Explore my portfolio of projects spanning full-stack, frontend, backend, AI, and DevOps." />
      </Helmet>

      <SectionWrapper
        title="My Projects"
        subtitle="Explore my work across different technologies and domains"
      >
        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium capitalize transition-all',
                active === cat
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              layout
              layoutId={project.id}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </StaggerContainer>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-slate-500 dark:text-slate-400">
            No projects found in this category yet.
          </p>
        )}
      </SectionWrapper>
    </PageTransition>
  );
}
