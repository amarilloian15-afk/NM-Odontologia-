import { useEffect, useState, useRef, useCallback } from 'react';

/**
 * Track scroll progress within a container element.
 * Returns a value from 0 to 1 representing how far the user
 * has scrolled through the element's height.
 */
export function useScrollProgress(offset: number = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number>(0);

  const update = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;

    // How far the element has scrolled past the viewport top
    const scrolled = -rect.top + offset;
    const total = elementHeight - windowHeight + offset;

    const raw = total > 0 ? scrolled / total : 0;
    setProgress(Math.max(0, Math.min(1, raw)));
  }, [offset]);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [update]);

  return { ref, progress };
}
