/* ============================================
 * Home page — Hero + featured sections
 * ============================================ */

import { Helmet } from 'react-helmet-async';
import { PageTransition } from '@/components/animations';
import { SectionWrapper } from '@/components/layout';
import { HeroSection, ProjectCard, GitHubStatsSection } from '@/components/common';
import { StaggerContainer } from '@/components/animations';
import { staggerItem } from '@/components/animations/variants';
import { motion } from 'framer-motion';
import { projects } from '@/constants/mockData';
import { META } from '@/constants';

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <PageTransition>
      <Helmet>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
      </Helmet>

      {/* Hero */}
      <HeroSection />

      {/* Featured projects preview */}
      <SectionWrapper
        id="featured"
        title="Featured Projects"
        subtitle="A selection of my best work across different domains"
      >
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      {/* GitHub stats */}
      <SectionWrapper
        title="GitHub Activity"
        subtitle="Contributions and open source activity at a glance"
      >
        <GitHubStatsSection />
      </SectionWrapper>
    </PageTransition>
  );
}
