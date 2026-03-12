/* ============================================
 * Animated navbar with shrink on scroll
 * Desktop + mobile hamburger menu
 * ============================================ */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import { ThemeToggle } from '@/components/ui';
import { slideInRight } from '@/components/animations/variants';
import { cn } from '@/utils';
import { useAppStore } from '@/store';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isMobileMenuOpen, setMobileMenuOpen } = useAppStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, setMobileMenuOpen]);

  return (
    <motion.header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-white/70 py-3 shadow-lg shadow-black/5 backdrop-blur-xl dark:bg-slate-900/70'
          : 'bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25"
          >
            <Code2 className="h-5 w-5 text-white" />
          </motion.div>
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            Dev<span className="text-indigo-500">Mehta</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'relative rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                location.pathname === link.href
                  ? 'text-indigo-500'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
              )}
            >
              {link.label}
              {location.pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-indigo-500"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200/50 backdrop-blur-sm md:hidden dark:bg-slate-800/50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-slate-900 dark:text-white" />
            ) : (
              <Menu className="h-5 w-5 text-slate-900 dark:text-white" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-40 w-72 border-l border-white/10 bg-white/90 px-6 pt-24 shadow-2xl backdrop-blur-xl md:hidden dark:bg-slate-900/95"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      location.pathname === link.href
                        ? 'bg-indigo-500/10 text-indigo-500'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
