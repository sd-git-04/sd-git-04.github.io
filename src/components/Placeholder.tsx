import type { ReactNode } from 'react';

// Visible marker for content that still needs input from the owner.
// Pair it with a TODO comment in the data file.
export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="placeholder">TO ADD: {children}</span>;
}
