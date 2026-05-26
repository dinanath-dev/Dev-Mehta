/* ============================================
 * Reusable section wrapper with animated heading
 * ============================================ */

import { type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/utils';

interface SectionWrapperProps {
  id?: string;
  title?: string;
  subtitle?: string;
  /** Last word highlighted with accent gradient */
  accentWord?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  accentWord,
  children,
  className,
  fullWidth = false,
}: SectionWrapperProps) {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.5 });

  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-24 py-20 md:scroll-mt-28 md:py-28',
        id && 'min-h-[50vh]',
        !fullWidth && 'mx-auto max-w-7xl px-6',
        className,
      )}
    >
      {(title || subtitle) && (
        <div ref={headingRef} className="mb-16 text-center">
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
            >
              {title.split(' ').map((word, i) => {
                const highlight =
                  accentWord?.toLowerCase() === word.toLowerCase() ||
                  (!accentWord && i === title.split(' ').length - 1);
                return (
                  <span key={i}>
                    {highlight ? (
                      <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                );
              })}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 dark:text-slate-400"
            >
              {subtitle}
            </motion.p>
          )}
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mx-auto mt-6 h-1 w-24 origin-center rounded-full bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-500"
          />
        </div>
      )}
      {children}
    </section>
  );
}
