import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Learning } from './components/Learning';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ArrowUp } from './components/Icons';
import { site } from './data/portfolio';

const currentYear = new Date().getFullYear();

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Learning />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {currentYear} {site.name}
          </p>
          <a className="footer-top" href="#hero">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </footer>
    </>
  );
}
