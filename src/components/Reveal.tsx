import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type RevealProps = {
  children: ReactNode;
  className?: string;
};

// Fades its content in once it scrolls into view.
// The fade is disabled for users with prefers-reduced-motion (see index.css).
export function Reveal({ children, className = '' }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
