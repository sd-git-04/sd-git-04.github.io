import { useEffect, useRef, useState } from 'react';

// Returns true once the element has scrolled into view (one-way: stays visible).
// Starts hidden on both server and client so the pre-rendered HTML matches hydration;
// the effect below reveals it right after mount where IntersectionObserver is unavailable.
export function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    if (!node) return;

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
