import { Globe, Layout, Server, Sparkles } from 'lucide-react';
import { StaggerContainer } from '@/components/animations';
import { staggerItem } from '@/components/animations/variants';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { GlassCard } from '@/components/ui';

const services = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description:
      'Responsive, accessible UIs with React, Next.js, and modern CSS. Placeholder — add your service details here.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description:
      'Scalable REST and GraphQL APIs with Django, Node, and PostgreSQL. Placeholder content for your offerings.',
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description:
      'LLM-powered features, automation, and ML pipelines. Replace with your real AI/ML services.',
  },
  {
    icon: Globe,
    title: 'Cloud & DevOps',
    description:
      'AWS, Azure, Docker, and CI/CD setup. Update this card with your deployment experience.',
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      title="What I Do"
      subtitle="Services I offer — customize these placeholders with your expertise"
      accentWord="Do"
    >
      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.title} variants={staggerItem}>
              <GlassCard className="h-full transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}
