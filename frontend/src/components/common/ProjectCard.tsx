/* ============================================
 * Project card — 3D tilt, gradient border, spotlight
 * ============================================ */

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';
import { projectCategoryTheme } from '@/constants/theme';
import { useTilt } from '@/hooks/useTilt';
import { cn } from '@/utils';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(featured ? 6 : 10);
  const catTheme =
    projectCategoryTheme[project.category] ?? projectCategoryTheme.fullstack;

  return (
    <motion.article
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative h-full',
        featured && 'md:col-span-2 md:row-span-1',
      )}
    >
      {/* Gradient border frame */}
      <div
        className={cn(
          'absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100',
          catTheme.gradient,
        )}
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 shadow-sm backdrop-blur-xl dark:border-zinc-700/60 dark:bg-zinc-900/80">
        {/* Image */}
        <div
          className={cn(
            'relative overflow-hidden',
            featured ? 'h-64 md:h-72' : 'h-48',
          )}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

          {/* Spotlight follows hover — simulated with radial at bottom */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(20,184,166,0.25),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Category pill */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span
              className={cn(
                'rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md',
                catTheme.badge,
                catTheme.border,
              )}
            >
              {project.category}
            </span>
            {project.featured && (
              <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-amber-500/30">
                Featured
              </span>
            )}
          </div>

          {/* Floating actions */}
          <motion.div
            className="absolute bottom-4 right-4 flex gap-2"
            initial={{ opacity: 0, y: 12 }}
            whileHover="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
          >
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-zinc-900 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-white"
                aria-label="View project link"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white opacity-0 shadow-lg shadow-teal-500/30 transition-all duration-300 group-hover:opacity-100 hover:scale-110"
                aria-label="View live demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3
              className={cn(
                'font-bold text-zinc-900 dark:text-white',
                featured ? 'text-xl md:text-2xl' : 'text-lg',
              )}
            >
              {project.title}
            </h3>
            <motion.span
              className="mt-1 text-teal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-400"
              whileHover={{ x: 2, y: -2 }}
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.span>
          </div>
          <p
            className={cn(
              'mt-2 text-zinc-500 dark:text-zinc-400',
              featured ? 'line-clamp-3 text-sm md:text-base' : 'line-clamp-2 text-sm',
            )}
          >
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
