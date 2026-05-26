/* ============================================
 * Lucide icon resolver for skill mock data
 * ============================================ */

import {
  Code2,
  FileCode2,
  Globe,
  Palette,
  Terminal,
  Server,
  Cpu,
  Database,
  Zap,
  Container,
  Cloud,
  GitBranch,
  Share2,
  Network,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  FileCode2,
  Globe,
  Palette,
  Terminal,
  Server,
  Cpu,
  Database,
  Zap,
  Container,
  Cloud,
  GitBranch,
  Share2,
  Network,
};

export function getSkillIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}
