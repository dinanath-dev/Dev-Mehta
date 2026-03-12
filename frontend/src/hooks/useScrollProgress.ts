/* Tracks scroll progress and updates the store */

import { useEffect } from 'react';
import { useAppStore } from '@/store';

export function useScrollProgress(): number {
  const { scrollProgress, setScrollProgress } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress]);

  return scrollProgress;
}
