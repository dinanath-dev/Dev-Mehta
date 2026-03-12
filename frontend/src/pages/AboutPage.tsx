/* ============================================
 * About page — bio, stats, skills timeline
 * ============================================ */

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageTransition, MotionWrapper, StaggerContainer } from '@/components/animations';
import { staggerItem } from '@/components/animations/variants';
import { SectionWrapper } from '@/components/layout';
import { GlassCard } from '@/components/ui';
import { aboutData } from '@/constants/mockData';

export default function AboutPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>About | Dev Mehta</title>
        <meta name="description" content="Learn more about Dev Mehta — experience, skills, and journey as a Full Stack Developer." />
      </Helmet>

      <SectionWrapper
        title="About Me"
        subtitle="Get to know the person behind the code"
      >
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Bio */}
          <div className="space-y-6 lg:col-span-3">
            {aboutData.bio.map((paragraph, i) => (
              <MotionWrapper key={i} delay={i * 0.15}>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  {paragraph}
                </p>
              </MotionWrapper>
            ))}
          </div>

          {/* Stats */}
          <div className="lg:col-span-2">
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <GlassCard className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
