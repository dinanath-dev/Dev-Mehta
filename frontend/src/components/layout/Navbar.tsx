/* ============================================
 * Navbar — single-page hash navigation + scroll spy
 * ============================================ */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { NAV_LINKS, SECTION_IDS } from '@/constants';
import { ThemeToggle } from '@/components/ui';
import { slideInRight } from '@/components/animations/variants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/utils/scrollToSection';
import { cn } from '@/utils';
import { useAppStore } from '@/store';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isMobileMenuOpen, setMobileMenuOpen } = useAppStore();
  const activeSection = useActiveSection([...SECTION_IDS]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    const id = href.replace('#', '');
    return activeSection === id;
  };

  return (
    <motion.header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-zinc-200/50 bg-white/75 py-3 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/75'
          : 'bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-2"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 shadow-lg shadow-teal-500/25"
          >
            <Code2 className="h-5 w-5 text-white" />
          </motion.div>
          <span className="text-lg font-bold text-zinc-900 dark:text-white">
            Dev<span className="text-teal-600 dark:text-teal-400">Mehta</span>
          </span>
        </button>

        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className={cn(
                'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive(link.href)
                  ? 'text-teal-600 dark:text-teal-400'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-teal-500"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-200/50 backdrop-blur-sm lg:hidden dark:bg-zinc-800/50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-zinc-900 dark:text-white" />
            ) : (
              <Menu className="h-5 w-5 text-zinc-900 dark:text-white" />
            )}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-40 w-72 border-l border-zinc-200/50 bg-white/95 px-6 pt-24 shadow-2xl backdrop-blur-xl lg:hidden dark:border-zinc-800 dark:bg-zinc-950/95"
          >
            <div className="flex max-h-[calc(100vh-6rem)] flex-col gap-1 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'block w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors',
                      isActive(link.href)
                        ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400'
                        : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
                    )}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
