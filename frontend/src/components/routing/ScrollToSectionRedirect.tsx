import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { scrollToSection } from '@/utils/scrollToSection';

/** Old multi-page URLs → single page + scroll to section */
export function ScrollToSectionRedirect({ sectionId }: { sectionId: string }) {
  useEffect(() => {
    window.history.replaceState(null, '', '/');
    const t = window.setTimeout(() => scrollToSection(sectionId), 150);
    return () => window.clearTimeout(t);
  }, [sectionId]);

  return <Navigate to="/" replace />;
}
