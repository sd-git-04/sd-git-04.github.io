import { useEffect, useState } from 'react';
import { nav, site } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { CloseIcon, MenuIcon } from './Icons';

const sectionIds = nav.map((item) => item.id);

// Sticky top bar: anchor links, active-section highlight, and a menu on small screens.
export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  // Starts unscrolled so server and client markup match; the effect syncs it on mount.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const initials = site.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container navbar-inner">
        <a className="navbar-brand" href="#hero" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            {initials}
          </span>
          <span className="brand-name">{site.name}</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="primary-nav" className="nav" aria-label="Primary">
          <ul className="nav-list">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-link ${active === item.id ? 'is-active' : ''}`}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
