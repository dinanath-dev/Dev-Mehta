/* ============================================
 * Experience timeline component
 * ============================================ */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import type { Experience } from '@/types';
import { Badge } from '@/components/ui';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="relative flex flex-col md:flex-row"
    >
      {/* Timeline line */}
      <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500 to-purple-500 md:left-1/2 md:block">
        {isLast && (
          <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30" />
        )}
      </div>

      {/* Content card */}
      <div
        className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}
      >
        <div className="relative rounded-2xl border border-slate-200/50 bg-white/50 p-6 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-700/50 dark:bg-slate-800/50">
          {/* Timeline dot */}
          <div className="absolute -left-3 top-6 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-900 md:flex">
            <div
              className={`absolute ${isEven ? '-right-3' : '-left-3'} top-6 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-900 md:flex`}
              style={{
                [isEven ? 'right' : 'left']: '-0.75rem',
                display: 'none',
              }}
            >
              <Briefcase className="h-3 w-3 text-indigo-500" />
            </div>
          </div>

          {/* Header */}
          <div className="flex items-start gap-4">
            {experience.logo && (
              <img
                src={experience.logo}
                alt={experience.company}
                className="h-12 w-12 rounded-xl object-cover"
                loading="lazy"
              />
            )}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {experience.role}
              </h3>
              <p className="text-sm font-medium text-indigo-500">
                {experience.company}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {experience.duration}
              </p>
            </div>
          </div>

          {/* Description */}
          <ul className="mt-4 space-y-2">
            {experience.description.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {experience.techStack.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative space-y-12">
      {experiences.map((exp, idx) => (
        <TimelineItem
          key={exp.id}
          experience={exp}
          index={idx}
          isLast={idx === experiences.length - 1}
        />
      ))}
    </div>
  );
}
