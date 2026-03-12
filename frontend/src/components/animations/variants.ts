/* ============================================
 * Framer Motion animation variants
 * Reusable across the entire application
 * ============================================ */

import type { Variants, Transition } from 'framer-motion';

/* ---------- Default transition ---------- */
export const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

export const smoothTransition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.5,
};

/* ---------- Fade variants ---------- */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* ---------- Scale variants ---------- */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

/* ---------- Stagger parent container ---------- */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

/* ---------- Page transition ---------- */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

/* ---------- Navbar shrink animation ---------- */
export const navbarVariants: Variants = {
  top: {
    padding: '1.25rem 0',
    backdropFilter: 'blur(0px)',
    backgroundColor: 'rgba(15, 23, 42, 0)',
  },
  scrolled: {
    padding: '0.75rem 0',
    backdropFilter: 'blur(12px)',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
  },
};

/* ---------- Slide in from side (mobile menu) ---------- */
export const slideInRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

/* ---------- Progress bar ---------- */
export const progressBar: Variants = {
  hidden: { width: 0 },
  visible: (percentage: number) => ({
    width: `${percentage}%`,
    transition: { duration: 1.2, ease: 'easeOut', delay: 0.3 },
  }),
};

/* ---------- Bounce ---------- */
export const bounce: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

/* ---------- Text reveal ---------- */
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -80 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
