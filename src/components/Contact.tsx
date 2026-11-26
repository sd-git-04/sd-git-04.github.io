import { contact } from '../data/portfolio';
import { ArrowUpRight, Download } from './Icons';
import { Placeholder } from './Placeholder';
import { Section } from './Section';

// Used in the mailto link until a real address is set in data/portfolio.ts.
const PLACEHOLDER_EMAIL = 'your.email@example.com';

const display = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export function Contact() {
  const hasEmail = contact.email.trim() !== '';
  const mailHref = `mailto:${hasEmail ? contact.email : PLACEHOLDER_EMAIL}`;

  return (
    <Section id="contact" title="Contact">
      <ul className="contact-list">
        <li>
          <a className="contact-row" href={mailHref}>
            <span className="contact-label">Email</span>
            <span className="contact-value">
              {hasEmail ? (
                contact.email
              ) : (
                // TODO: set contact.email in src/data/portfolio.ts once the address is ready.
                <Placeholder>email address</Placeholder>
              )}
            </span>
            <ArrowUpRight size={20} />
          </a>
        </li>
        <li>
          <a className="contact-row" href={contact.github} target="_blank" rel="noopener noreferrer">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">{display(contact.github)}</span>
            <span className="visually-hidden"> (opens in a new tab)</span>
            <ArrowUpRight size={20} />
          </a>
        </li>
        <li>
          <a
            className="contact-row"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">{display(contact.linkedin)}</span>
            <span className="visually-hidden"> (opens in a new tab)</span>
            <ArrowUpRight size={20} />
          </a>
        </li>
      </ul>

      <div className="resume">
        {contact.resumeAvailable ? (
          <a className="btn btn-primary" href={contact.resumePath} download>
            <Download /> Download resume (PDF)
          </a>
        ) : (
          // TODO: add public/resume.pdf, then set contact.resumeAvailable to true in src/data/portfolio.ts.
          <>
            <button type="button" className="btn btn-primary" disabled>
              <Download /> Download resume (PDF)
            </button>
            <Placeholder>resume PDF</Placeholder>
          </>
        )}
      </div>
    </Section>
  );
}
