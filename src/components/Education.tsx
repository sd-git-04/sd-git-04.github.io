import { education, showCgpa } from '../data/portfolio';
import { Section } from './Section';

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="edu-list">
        {education.map((item) => (
          <li key={item.degree} className="edu">
            <h3 className="edu-degree">{item.degree}</h3>
            <p className="edu-school">{item.institution}</p>
            <p className="edu-meta">
              {item.location}
              {showCgpa && <> · CGPA {item.cgpa}</>}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
