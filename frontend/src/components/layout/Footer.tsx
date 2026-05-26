/* ============================================
 * Footer — single-page anchor links
 * ============================================ */

import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants';
import { scrollToSection } from '@/utils/scrollToSection';

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-zinc-200/50 bg-white/40 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/40">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600">
                <Code2 className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-zinc-900 dark:text-white">
                Dev<span className="text-teal-600 dark:text-teal-400">Mehta</span>
              </span>
            </button>
            <p className="max-w-xs text-sm text-zinc-500 dark:text-zinc-400">
              Full Stack Developer crafting modern, scalable web applications
              with passion and precision.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Sections
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.filter((l) => l.href !== '#home').map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToSection(link.href.replace('#', ''))}
                  className="text-left text-sm text-zinc-500 transition-colors hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Connect
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon] ?? Github;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-all hover:bg-teal-600 hover:text-white hover:shadow-lg hover:shadow-teal-500/25 dark:bg-zinc-800 dark:text-zinc-400"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-zinc-200/50 pt-6 text-sm text-zinc-500 dark:border-zinc-800/50 dark:text-zinc-400 md:flex-row">
          <p>&copy; {currentYear} Dev Mehta. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-red-500" /> using
            React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
