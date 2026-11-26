import { about } from '../data/portfolio';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        {about.paragraphs.map((text) => (
          <p key={text} className="lead">
            {text}
          </p>
        ))}
      </div>
    </Section>
  );
}
