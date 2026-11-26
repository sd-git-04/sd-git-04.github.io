import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';

// Used only at build time by scripts/prerender.mjs to write real page content into dist/index.html.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
