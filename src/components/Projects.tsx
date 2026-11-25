import { projects } from '../data/portfolio';
import { Section } from './Section';

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="card-grid">
        {projects.map((project) => (
          <li key={project.title} className="card">
            <div className="card-tags">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`badge ${tag === 'Concept' ? 'badge-concept' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="card-title">{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a className="card-link" href={project.link}>
                View project
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
