import { skills } from '../data/portfolio';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="skills-grid">
        {skills.map((tier) => (
          <div key={tier.label} className={`skill-tier ${tier.learning ? 'is-learning' : ''}`}>
            <dt className="skill-label">
              {tier.label}
              {tier.learning && <span className="badge">Still learning</span>}
            </dt>
            <dd>
              <ul className="chip-list">
                {tier.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
