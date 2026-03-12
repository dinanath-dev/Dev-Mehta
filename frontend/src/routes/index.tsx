/* ============================================
 * Application routes — lazy loaded pages
 * ============================================ */

import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/components/layout';
import { LoadingSpinner } from '@/components/ui';

/* Lazy load all pages for code splitting */
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'));
const SkillsPage = lazy(() => import('@/pages/SkillsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

/** Suspense fallback */
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  );
}

/** Wrap lazy component in Suspense */
function withSuspense(Component: React.LazyExoticComponent<React.ComponentType>) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: 'about', element: withSuspense(AboutPage) },
      { path: 'projects', element: withSuspense(ProjectsPage) },
      { path: 'experience', element: withSuspense(ExperiencePage) },
      { path: 'skills', element: withSuspense(SkillsPage) },
      { path: 'contact', element: withSuspense(ContactPage) },
      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
]);
