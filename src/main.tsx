import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import './index.css';
import App from './App.tsx';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The build pre-renders the page into #root, so hydrate it; fall back to a fresh render in dev.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
