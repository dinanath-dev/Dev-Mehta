/* ============================================
 * Hero section with typing animation
 * ============================================ */

import { motion } from 'framer-motion';
import { ArrowDown, Download, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import { useTypingAnimation } from '@/hooks';
import { heroData } from '@/constants/mockData';
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
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-purple-500/15 blur-[120px]" />
        <div className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-pink-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Greeting */}
          <motion.div variants={staggerItem} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInLeft}
            className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-xl font-semibold text-slate-600 dark:text-slate-300 md:text-2xl"
          >
            {heroData.role}
          </motion.h2>

          {/* Typing animation */}
          <motion.div variants={fadeInUp} className="mt-3 h-8">
            <span className="text-lg text-slate-500 dark:text-slate-400">
              I build with{' '}
              <span className="font-semibold text-indigo-500">
                {typedText}
              </span>
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-indigo-500" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg text-slate-500 dark:text-slate-400"
          >
            {heroData.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/projects">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowDown className="h-4 w-4" />}
                iconPosition="right"
              >
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                icon={<Send className="h-4 w-4" />}
                iconPosition="right"
              >
                Contact Me
              </Button>
            </Link>
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
        </motion.div>
      </div>
    </section>
  );
}
