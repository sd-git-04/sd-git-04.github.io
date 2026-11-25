import { education, showCgpa } from '../data/portfolio';
import { Section } from './Section';

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="timeline">
        {education.map((item) => (
          <li key={item.degree} className="job">
            <h3 className="job-title">{item.degree}</h3>
            <p>
              {item.institution}, {item.location}
            </p>
            {showCgpa && <p className="muted">CGPA: {item.cgpa}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
