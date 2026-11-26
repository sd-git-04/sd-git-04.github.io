import { experience } from '../data/portfolio';
import { Placeholder } from './Placeholder';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="exp-list">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="exp">
            <div className="exp-head">
              <div>
                <h3 className="exp-role">{job.role}</h3>
                <p className="exp-company">{job.company}</p>
              </div>
              <span className="pill">{job.period}</span>
            </div>
            <p className="exp-summary">{job.summary}</p>
            <ul className="exp-points">
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="exp-results">
              <span className="exp-results-label">Results</span>
              {typeof job.results === 'string' ? (
                <p>{job.results}</p>
              ) : (
                <Placeholder>{job.results.placeholder}</Placeholder>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
