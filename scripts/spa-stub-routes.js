// Generate real HTML files for dynamic SPA routes (GitHub Pages friendly)
// This ensures 200 responses for routes like /blog/:slug
// by creating dist/blog/<slug>/index.html that loads the app.

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function copyIndexTo(targetDir) {
  const srcIndex = path.join(root, 'dist', 'index.html');
  const html = await fs.readFile(srcIndex, 'utf8');
  await ensureDir(targetDir);
  await fs.writeFile(path.join(targetDir, 'index.html'), html, 'utf8');
}

async function main() {
  // Blog listing page stub
  await copyIndexTo(path.join(root, 'dist', 'blog'));

  // Import blog slugs from source data (ESM)
  const dataMod = await import(path.join(root, 'src', 'data', 'blogPosts.js'));
  const slugs = (dataMod.blogPosts || []).map((p) => p.slug);

  for (const slug of slugs) {
    const dir = path.join(root, 'dist', 'blog', slug);
    await copyIndexTo(dir);
  }

  console.log(`✅ SPA stubs generated for ${slugs.length + 1} routes (blog + posts).`);
}

main().catch((err) => {
  console.error('Failed to generate SPA stubs:', err);
  process.exit(1);
});

