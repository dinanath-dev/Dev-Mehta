/* ============================================
 * Root layout — wraps all pages
 * ============================================ */

import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';
import { ParticlesBackground } from '@/components/animations';
import { useScrollToTop } from '@/hooks';

export function RootLayout() {
  useScrollToTop();

  return (
    <div className="relative flex min-h-screen flex-col">
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
