import { GraduationCap, Award } from 'lucide-react';
import { StaggerContainer } from '@/components/animations';
import { staggerItem } from '@/components/animations/variants';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { GlassCard, Badge } from '@/components/ui';
import { education, certificates } from '@/constants/mockData';

export function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      title="Education & Certifications"
      subtitle="Academic background and professional credentials"
      accentWord="Certifications"
    >
      <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
        Education
      </h3>
      <StaggerContainer className="mx-auto mb-14 grid max-w-3xl gap-6">
        {education.map((item) => (
          <motion.div key={item.id} variants={staggerItem}>
            <GlassCard className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <Badge variant="outline">{item.duration}</Badge>
                </div>
                <p className="mt-1 font-medium text-teal-600 dark:text-teal-400">
                  {item.institution}
                </p>
                {item.description && (
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {item.description}
                  </p>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </StaggerContainer>

      <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
        Certifications
      </h3>
      <StaggerContainer className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <motion.div key={cert.id} variants={staggerItem}>
            <GlassCard className="h-full text-center sm:text-left">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 sm:mx-0 dark:text-teal-400">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-zinc-900 dark:text-white">
                {cert.title}
              </h4>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {cert.issuer}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
