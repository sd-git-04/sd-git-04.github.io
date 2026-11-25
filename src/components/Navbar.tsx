import { nav, site } from '../data/portfolio';

// Sticky top bar with anchor links to each section.
export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="navbar-brand" href="#hero">
          {site.name}
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {nav.map((item) => (
              <li key={item.id}>
                <a className="nav-link" href={`#${item.id}`}>
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
