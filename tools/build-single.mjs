#!/usr/bin/env node
// Builds dist/bpre-force-builder.html: the whole app in one file you can share or open offline.
// Usage: node tools/build-single.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');

let html = read('index.html').replace(/\?v=[0-9a-f]+(?=")/g, '');
const guard = (s) => s.replace(/<\/script/gi, '<\\/script');
html = html.replace('<link rel="stylesheet" href="css/style.css">', () => `<style>\n${read('css/style.css')}\n</style>`);
html = html.replace('<script src="data/data.js"></script>', () => `<script>\n${guard(read('data/data.js'))}\n</script>`);
html = html.replace('<script src="data/reference.js"></script>', () => `<script>\n${guard(read('data/reference.js'))}\n</script>`);
html = html.replace('<script src="data/starters.js"></script>', () => `<script>\n${guard(read('data/starters.js'))}\n</script>`);
html = html.replace('<script src="js/app.js"></script>', () => `<script>\n${guard(read('js/app.js'))}\n</script>`);
// Inline images so the single file works offline.
html = html.replace(/assets\/[\w\-\/]+\.(jpg|jpeg|png|webp|svg)/g, (p, ext) => {
  const mime = ext === 'svg' ? 'image/svg+xml' : ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
  return `data:${mime};base64,` + readFileSync(join(root, p)).toString('base64');
});

mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist', 'bpre-force-builder.html'), html);
console.log('Wrote dist/bpre-force-builder.html (' + Math.round(html.length / 1024) + ' KB)');

// Stamp index.html with a short hash of each file's contents (?v=...). Browsers
// and GitHub Pages cache scripts for a while; a changed hash forces a fresh copy.
{
  const src = read('index.html');
  const stamped = src.replace(/(<(?:script src|link rel="stylesheet" href)=")((?:css|js|data)\/[\w.\-]+\.(?:css|js))(?:\?v=[0-9a-f]+)?(")/g, (m, a, path, c) => {
    const h = createHash('sha1').update(readFileSync(join(root, path))).digest('hex').slice(0, 8);
    return `${a}${path}?v=${h}${c}`;
  });
  if (stamped !== src) writeFileSync(join(root, 'index.html'), stamped);
  console.log('Stamped index.html with cache-busting hashes.');
}
