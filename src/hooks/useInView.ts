import { useEffect, useRef, useState } from 'react';

// Returns true once the element has scrolled into view (one-way: stays visible).
// Falls back to visible immediately where IntersectionObserver is unavailable.
export function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  // Without IntersectionObserver there is nothing to wait for, so start visible.
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
