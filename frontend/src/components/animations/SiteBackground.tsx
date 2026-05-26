/* ============================================
 * Site background — matches portfolio-asmit-alok.vercel.app
 * --black: #212121, floating tech icon particles
 * ============================================ */

import { TechParticlesBackground } from './TechParticlesBackground';

export function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      {/* Asmit portfolio base color */}
      <div className="absolute inset-0 bg-[#212121] dark:bg-[#212121]" />

      {/* Floating tech logos — same effect as their tsparticles */}
      <TechParticlesBackground />
    </div>
  );
}
