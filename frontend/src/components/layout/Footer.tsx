/* ============================================
 * Footer with social links
 * ============================================ */

import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/50 bg-white/30 backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                <Code2 className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Dev<span className="text-indigo-500">Mehta</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400">
              Full Stack Developer crafting modern, scalable web applications
              with passion and precision.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map(
                (link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase()}`}
                    className="text-sm text-slate-500 transition-colors hover:text-indigo-500 dark:text-slate-400"
                  >
                    {link}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25 dark:bg-slate-800 dark:text-slate-400"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-200/50 pt-6 text-sm text-slate-500 dark:border-slate-800/50 dark:text-slate-400 md:flex-row">
          <p>
            &copy; {currentYear} Dev Mehta. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-red-500" /> using
            React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
