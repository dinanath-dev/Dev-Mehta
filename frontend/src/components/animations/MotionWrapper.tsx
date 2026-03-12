/* ============================================
 * Motion wrapper — scroll-triggered animations
 * ============================================ */

import { type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Variants } from 'framer-motion';
import { fadeInUp } from './variants';

interface MotionWrapperProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  /** Trigger animation once or every time */
  once?: boolean;
  /** Viewport amount visible before triggering (0-1) */
  amount?: number;
  /** Delay in seconds */
  delay?: number;
}

export function MotionWrapper({
  children,
  variants = fadeInUp,
  className = '',
  once = true,
  amount = 0.3,
  delay = 0,
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
