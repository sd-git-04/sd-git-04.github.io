import { about, site } from '../data/portfolio';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" title="About">
      <div className="prose">
        {about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <p className="muted">Based in {site.location}.</p>
      </div>
    </Section>
  );
}
