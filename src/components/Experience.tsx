import { experience } from '../data/portfolio';
import { Placeholder } from './Placeholder';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="job">
            <h3 className="job-title">
              {job.role} <span className="muted">at {job.company}</span>
            </h3>
            <p className="job-period">{job.period}</p>
            <p>{job.summary}</p>
            <ul className="bullets">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className="job-results">
              <strong>Results: </strong>
              {typeof job.results === 'string' ? (
                job.results
              ) : (
                <Placeholder>{job.results.placeholder}</Placeholder>
              )}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
