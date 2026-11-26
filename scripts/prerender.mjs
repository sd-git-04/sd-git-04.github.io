// Writes the rendered app into dist/index.html so crawlers and link previews see real content.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const EMPTY_ROOT = '<div id="root"></div>';
const htmlPath = new URL('../dist/index.html', import.meta.url);
const serverEntry = new URL('../dist-ssr/entry-server.js', import.meta.url);

const { render } = await import(pathToFileURL(serverEntry.pathname).href);
const appHtml = render();

const template = await readFile(htmlPath, 'utf8');
const occurrences = template.split(EMPTY_ROOT).length - 1;
if (occurrences !== 1) {
  throw new Error(`Expected one empty #root in dist/index.html, found ${occurrences}.`);
}

await writeFile(htmlPath, template.replace(EMPTY_ROOT, `<div id="root">${appHtml}</div>`));
console.log(`Pre-rendered ${appHtml.length} characters of app HTML into dist/index.html`);
