/* ============================================
 * Scroll progress indicator bar
 * ============================================ */

import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
