import { site } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-name">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{site.location}</p>
          <h1 id="hero-name" className="hero-name">
            {site.name}
          </h1>
          <p className="hero-headline">{site.headline}</p>
          <p className="hero-pitch">{site.pitch}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn" href="#contact">
              Contact
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
