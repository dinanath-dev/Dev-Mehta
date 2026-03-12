/* ============================================
 * Stagger children wrapper
 * ============================================ */

import { type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer } from './variants';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  delayChildren?: number;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = '',
  once = true,
  amount = 0.2,
  delayChildren = 0.2,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      variants={{
        ...staggerContainer,
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}
