/* ============================================
 * Hero section with typing animation
 * ============================================ */

import { motion } from 'framer-motion';
import { ArrowDown, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui';
import { useTypingAnimation } from '@/hooks';
import { heroData } from '@/constants/mockData';
import { scrollToSection } from '@/utils/scrollToSection';
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem } from '@/components/animations/variants';

export function HeroSection() {
  const typedText = useTypingAnimation({
    strings: heroData.typingStrings,
    typingSpeed: 70,
    deletingSpeed: 40,
    pauseDuration: 2000,
  });

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={staggerItem} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInLeft}
            className="text-4xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-xl font-semibold text-zinc-600 dark:text-zinc-300 md:text-2xl"
          >
            {heroData.role}
          </motion.h2>

          <motion.div variants={fadeInUp} className="mt-3 h-8">
            <span className="text-lg text-zinc-500 dark:text-zinc-400">
              I build with{' '}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                {typedText}
              </span>
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-teal-500" />
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg text-zinc-500 dark:text-zinc-400"
          >
            {heroData.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowDown className="h-4 w-4" />}
              iconPosition="right"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<Send className="h-4 w-4" />}
              iconPosition="right"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
            <a href={heroData.resumeUrl} download>
              <Button
                variant="ghost"
                size="lg"
                icon={<Download className="h-4 w-4" />}
                iconPosition="right"
              >
                Download Resume
              </Button>
            </a>
          </motion.div>

          <motion.button
            type="button"
            variants={fadeInUp}
            onClick={() => scrollToSection('about')}
            className="mt-16 flex flex-col items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-teal-500"
            aria-label="Scroll to about section"
          >
            <span>Scroll down</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
