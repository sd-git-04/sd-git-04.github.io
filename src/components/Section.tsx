import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

// Shared wrapper: anchor id, labelled heading and scroll reveal for every section.
export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="container">
        <Reveal>
          <h2 id={headingId} className="section-title">
            {title}
          </h2>
        </Reveal>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
