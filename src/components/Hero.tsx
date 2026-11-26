import { experience, site } from '../data/portfolio';
import { ArrowDown, ArrowRight } from './Icons';
import { ProfileCard } from './ProfileCard';
import { Reveal } from './Reveal';

export function Hero() {
  // "Full Stack Developer | AI & GenAI Engineer" -> two styled parts.
  const [primary, ...rest] = site.headline.split('|').map((part) => part.trim());
  const current = experience[0];

  return (
    <section id="hero" className="hero" aria-labelledby="hero-name">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-main">
          <Reveal>
            {current && (
              <p className="hero-status">
                <span className="status-dot" aria-hidden="true" />
                {current.role} at {current.company}
              </p>
            )}
          </Reveal>

          <Reveal delay={80}>
            <h1 id="hero-name" className="hero-name">
              {site.name}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero-headline">
              <span>{primary}</span>
              {rest.map((part) => (
                <span key={part} className="hero-headline-accent">
                  <span className="visually-hidden"> | </span>
                  {part}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero-pitch">{site.pitch}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View projects
                <ArrowRight />
              </a>
              <a className="btn btn-ghost" href="#contact">
                Contact
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="hero-meta">
              <div>
                <dt>Based in</dt>
                <dd>{site.location}</dd>
              </div>
              {current && (
                <div>
                  <dt>Experience</dt>
                  <dd>{current.period}</dd>
                </div>
              )}
              <div>
                <dt>Core stack</dt>
                <dd>{site.coreStack.join(' · ')}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal className="hero-aside" delay={300}>
          <ProfileCard />
        </Reveal>
      </div>

      <a className="scroll-cue" href="#about">
        <span className="visually-hidden">Scroll to About</span>
        <ArrowDown />
      </a>
    </section>
  );
}
