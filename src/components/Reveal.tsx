import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type RevealProps = {
  children: ReactNode;
  className?: string;
  // Stagger delay in milliseconds.
  delay?: number;
};

// Fades its content in once it scrolls into view.
// The fade is disabled for users with prefers-reduced-motion (see index.css).
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>();
  const style = delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
