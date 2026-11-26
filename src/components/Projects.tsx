import { projects } from '../data/portfolio';
import { ArrowUpRight } from './Icons';
import { Section } from './Section';

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="project-grid">
        {projects.map((project, i) => (
          <li
            key={project.title}
            className={`project ${project.workProject ? 'project--featured' : ''}`}
          >
            <div className="project-top">
              <span className="project-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`pill ${tag === 'Concept' ? 'pill-concept' : 'pill-accent'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            {project.link && (
              <a className="project-link" href={project.link}>
                View project <ArrowUpRight />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
