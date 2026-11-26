import type { ReactNode } from 'react';
import { nav } from '../data/portfolio';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

// Shared wrapper: numbered label column on desktop, content column beside it.
export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;
  const position = nav.findIndex((item) => item.id === id) + 1;
  const index = position > 0 ? String(position).padStart(2, '0') : null;

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="container section-grid">
        <Reveal className="section-head">
          {index && (
            <span className="section-index" aria-hidden="true">
              {index}
            </span>
          )}
          <h2 id={headingId} className="section-title">
            {title}
          </h2>
        </Reveal>
        <Reveal className="section-body">{children}</Reveal>
      </div>
    </section>
  );
}
