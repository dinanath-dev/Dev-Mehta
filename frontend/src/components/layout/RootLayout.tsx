/* ============================================
 * Root layout — wraps all pages
 * ============================================ */

import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';
import { SiteBackground } from '@/components/animations/SiteBackground';
export function RootLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteBackground />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10 flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
