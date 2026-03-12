/* ============================================
 * Application-wide constants
 * ============================================ */

import type { NavLink, SocialLink } from '@/types';

/** Navigation links */
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

/** Social links */
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/devmehta', icon: 'Github' },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/devmehta',
    icon: 'Linkedin',
  },
  { name: 'Twitter', url: 'https://twitter.com/devmehta', icon: 'Twitter' },
  { name: 'Email', url: 'mailto:dev@mehta.com', icon: 'Mail' },
];

/** Theme colors */
export const THEME = {
  primary: '#6366f1',
  primaryLight: '#818cf8',
  primaryDark: '#4f46e5',
  dark: {
    background: '#0f172a',
    surface: '#1e293b',
    surfaceHover: '#334155',
    text: '#f8fafc',
    textSecondary: '#94a3b8',
    border: '#334155',
  },
  light: {
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceHover: '#f1f5f9',
    text: '#0f172a',
    textSecondary: '#64748b',
    border: '#e2e8f0',
  },
} as const;

/** Animation durations (seconds) */
export const ANIMATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  stagger: 0.1,
  page: 0.5,
} as const;

/** Breakpoints */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/** API endpoints — ready for Django REST backend */
export const API_ENDPOINTS = {
  projects: '/projects/',
  skills: '/skills/',
  experience: '/experience/',
  contact: '/contact/',
  about: '/about/',
  resume: '/resume/',
  github: '/github-stats/',
} as const;

/** Meta defaults */
export const META = {
  title: 'Dev Mehta | Full Stack Developer',
  description:
    'Full Stack Developer crafting modern, scalable web applications with React, Django, and cutting-edge technologies.',
  keywords:
    'full stack developer, react, django, typescript, python, portfolio',
  author: 'Dev Mehta',
  url: 'https://devmehta.dev',
} as const;
