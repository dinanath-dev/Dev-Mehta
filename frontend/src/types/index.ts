/* ============================================
 * Core TypeScript interfaces for the portfolio
 * ============================================ */

/** Navigation link item */
export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

/** Hero section data */
export interface HeroData {
  name: string;
  role: string;
  tagline: string;
  typingStrings: string[];
  resumeUrl: string;
  avatarUrl?: string;
}

/** Project card */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
}

/** Skill item */
export interface Skill {
  name: string;
  percentage: number;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'tools'
  | 'languages';

/** Experience / timeline item */
export interface Experience {
  id: string;
  company: string;
  location?: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  techStack: string[];
  logo?: string;
}

/** Education item */
export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

/** Certificate / credential */
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year?: string;
}

/** Contact form values */
export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

/** Social link */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

/** GitHub stats (mock) */
export interface GitHubStats {
  repos: number;
  stars: number;
  contributions: number;
  followers: number;
}

/** About section data */
export interface AboutData {
  bio: string[];
  stats: { label: string; value: string }[];
  image?: string;
}

/** Theme mode */
export type ThemeMode = 'dark' | 'light';

/** API response wrapper */
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

/** Toast notification type */
export type ToastType = 'success' | 'error' | 'info' | 'warning';
