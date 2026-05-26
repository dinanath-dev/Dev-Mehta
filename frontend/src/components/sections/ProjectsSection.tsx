import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { StaggerContainer } from '@/components/animations';
import { staggerItem } from '@/components/animations/variants';
import { SectionWrapper } from '@/components/layout';
import { ProjectCard, FilterTabs } from '@/components/common';
import { projects } from '@/constants/mockData';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'devops', label: 'DevOps' },
] as const;

type ProjectCategory = (typeof categories)[number]['key'];

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory>('all');
  const filtered = useMemo(
    () =>
      active === 'all' ? projects : projects.filter((p) => p.category === active),
    [active],
  );
  const showFeaturedLayout =
    active === 'all' && filtered.some((p) => p.featured);

  return (
    <SectionWrapper
      id="projects"
      title="My Projects"
      subtitle="Production-grade builds — APIs, dashboards, and AI-powered products"
      accentWord="Projects"
    >
      <div className="mb-12 flex justify-center">
        <FilterTabs tabs={[...categories]} active={active} onChange={setActive} />
      </div>
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 text-center text-zinc-500 dark:text-zinc-400"
          >
            No projects in this category yet.
          </motion.p>
        ) : (
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={staggerItem}
                  layout
                  className={
                    showFeaturedLayout && project.featured && i === 0
                      ? 'md:col-span-2'
                      : undefined
                  }
                >
                  <ProjectCard
                    project={project}
                    featured={
                      showFeaturedLayout && project.featured && i === 0
                    }
                  />
                </motion.div>
              ))}
            </StaggerContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
