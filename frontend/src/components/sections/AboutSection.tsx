import { MotionWrapper, StaggerContainer } from '@/components/animations';
import { staggerItem } from '@/components/animations/variants';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { GlassCard } from '@/components/ui';
import { aboutData } from '@/constants/mockData';

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know the person behind the code"
      accentWord="Me"
    >
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          {aboutData.bio.map((paragraph, i) => (
            <MotionWrapper key={i} delay={i * 0.15}>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                {paragraph}
              </p>
            </MotionWrapper>
          ))}
        </div>
        <div className="lg:col-span-2">
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {aboutData.stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <GlassCard className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </SectionWrapper>
  );
}
