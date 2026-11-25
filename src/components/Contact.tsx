import { contact } from '../data/portfolio';
import { Placeholder } from './Placeholder';
import { Section } from './Section';

// Used in the mailto link until a real address is set in data/portfolio.ts.
const PLACEHOLDER_EMAIL = 'your.email@example.com';

export function Contact() {
  const hasEmail = contact.email.trim() !== '';
  const mailHref = `mailto:${hasEmail ? contact.email : PLACEHOLDER_EMAIL}`;

  return (
    <Section id="contact" title="Contact">
      <ul className="contact-list">
        <li>
          <span className="contact-label">Email</span>
          {hasEmail ? (
            <a href={mailHref}>{contact.email}</a>
          ) : (
            // TODO: set contact.email in src/data/portfolio.ts once the address is ready.
            <a href={mailHref}>
              <Placeholder>email address</Placeholder>
            </a>
          )}
        </li>
        <li>
          <span className="contact-label">GitHub</span>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            {contact.github.replace('https://', '')}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <span className="contact-label">LinkedIn</span>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            {contact.linkedin.replace('https://', '')}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <span className="contact-label">Resume</span>
          {contact.resumeAvailable ? (
            <a className="btn" href={contact.resumePath} download>
              Download resume (PDF)
            </a>
          ) : (
            // TODO: add public/resume.pdf, then set contact.resumeAvailable to true in src/data/portfolio.ts.
            <span className="resume-missing">
              <button type="button" className="btn" disabled>
                Download resume (PDF)
              </button>{' '}
              <Placeholder>resume PDF</Placeholder>
            </span>
          )}
        </li>
      </ul>
    </Section>
  );
}
