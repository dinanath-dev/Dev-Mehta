/* ============================================
 * Single-page portfolio — all sections on one scroll
 * ============================================ */

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/common';
import { scrollToSection } from '@/utils/scrollToSection';
import {
  AboutSection,
  ServicesSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  ContactSection,
} from '@/components/sections';
import { META } from '@/constants';

export default function LandingPage() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const t = window.setTimeout(() => scrollToSection(hash), 200);
      return () => window.clearTimeout(t);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="keywords" content={META.keywords} />
      </Helmet>

      <div id="home" className="scroll-mt-24 md:scroll-mt-28">
        <HeroSection />
      </div>

      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
