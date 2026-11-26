import { skills } from '../data/portfolio';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="skill-rows">
        {skills.map((tier) => (
          <div key={tier.label} className={`skill-row ${tier.learning ? 'is-learning' : ''}`}>
            <dt className="skill-label">
              {tier.label}
              {tier.learning && (
                <span className="pill pill-progress">
                  <span className="pulse-dot" aria-hidden="true" />
                  In progress
                </span>
              )}
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
