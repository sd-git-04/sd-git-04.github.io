import { learning } from '../data/portfolio';
import { Section } from './Section';

// Learning items are shown as in progress. They are not certifications.
export function Learning() {
  return (
    <Section id="learning" title="Learning">
      <ul className="learn-grid">
        {learning.map((item) => (
          <li key={item.title} className="learn">
            <div className="learn-head">
              <h3 className="learn-title">{item.title}</h3>
              <span className="pill pill-progress">
                <span className="pulse-dot" aria-hidden="true" />
                {item.status}
              </span>
            </div>
            <ul className="learn-topics">
              {item.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
