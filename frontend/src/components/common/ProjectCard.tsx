/* ============================================
 * Project card with hover animation
 * ============================================ */

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';
import { Badge } from '@/components/ui';
import { cardHover } from '@/components/animations/variants';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="group overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 shadow-sm backdrop-blur-sm transition-colors dark:border-slate-700/50 dark:bg-slate-800/50"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Overlay action buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-slate-900 shadow-lg transition-colors hover:bg-white"
            aria-label="View GitHub repo"
          >
            <Github className="h-4 w-4" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition-colors hover:bg-indigo-600"
              aria-label="View live demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute left-4 top-4">
            <Badge variant="primary">Featured</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
