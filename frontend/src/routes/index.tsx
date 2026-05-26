/* ============================================
 * Routes — single-page portfolio
 * ============================================ */

import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from '@/components/layout';
import { ScrollToSectionRedirect } from '@/components/routing/ScrollToSectionRedirect';
import { LoadingSpinner } from '@/components/ui';

const LandingPage = lazy(() => import('@/pages/LandingPage'));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <LandingPage />
          </Suspense>
        ),
      },
      { path: 'about', element: <ScrollToSectionRedirect sectionId="about" /> },
      { path: 'projects', element: <ScrollToSectionRedirect sectionId="projects" /> },
      { path: 'experience', element: <ScrollToSectionRedirect sectionId="experience" /> },
      { path: 'contact', element: <ScrollToSectionRedirect sectionId="contact" /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
