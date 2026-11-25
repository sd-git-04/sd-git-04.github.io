import { learning } from '../data/portfolio';
import { Section } from './Section';

// Learning items are shown as in progress. They are not certifications.
export function Learning() {
  return (
    <Section id="learning" title="Learning">
      <ul className="card-grid">
        {learning.map((item) => (
          <li key={item.title} className="card">
            <div className="card-tags">
              <span className="badge">{item.status}</span>
            </div>
            <h3 className="card-title">{item.title}</h3>
            <ul className="chip-list">
              {item.topics.map((topic) => (
                <li key={topic} className="chip">
                  {topic}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
