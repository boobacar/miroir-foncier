// sitemap-generator.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { blogPosts, SITE_URL } from './src/data/blogPosts.js';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname);

function getMetaForPath(routePath) {
  if (routePath === '/') return { changefreq: 'daily', priority: 1.0 };
  if (routePath === '/blog') return { changefreq: 'weekly', priority: 0.8 };
  if (routePath.startsWith('/blog/')) return { changefreq: 'monthly', priority: 0.7 };
  if (routePath.startsWith('/details/')) return { changefreq: 'weekly', priority: 0.6 };
  if (routePath.startsWith('/immobilier-')) return { changefreq: 'weekly', priority: 0.6 };
  if (routePath === '/contact') return { changefreq: 'monthly', priority: 0.3 };
  if (routePath === '/a-propos') return { changefreq: 'yearly', priority: 0.3 };
  if (routePath === '/lexique') return { changefreq: 'yearly', priority: 0.4 };
  return { changefreq: 'monthly', priority: 0.5 };
}

async function getRoutesFromApp() {
  const appPath = path.join(root, 'src', 'App.jsx');
  const appSource = await fs.readFile(appPath, 'utf8');
  const re = /<Route\b[^>]*\bpath=(?:"([^"]+)"|'([^']+)')/g;
  const paths = new Set();
  let match;
  while ((match = re.exec(appSource))) {
    const routePath = match[1] || match[2];
    if (routePath) paths.add(routePath.trim());
  }
  return [...paths];
}

async function getDetailIds() {
  const biensPath = path.join(root, 'src', 'data', 'biens.js');
  const source = await fs.readFile(biensPath, 'utf8');
  const ids = [];
  const re = /\bid\s*:\s*(\d+)\b/g;
  let match;
  while ((match = re.exec(source))) ids.push(Number(match[1]));
  return [...new Set(ids)];
}

function toLink(routePath) {
  return { url: routePath, ...getMetaForPath(routePath) };
}

async function main() {
  const routes = await getRoutesFromApp();

  const staticRoutes = routes.filter((p) => !p.includes(':') && !p.includes('*'));
  const dynamicRoutes = routes.filter((p) => p.includes(':'));

  const expandedRoutes = new Set(staticRoutes);

  for (const dyn of dynamicRoutes) {
    if (dyn === '/blog/:slug') {
      expandedRoutes.add('/blog');
      for (const post of blogPosts) expandedRoutes.add(`/blog/${post.slug}`);
      continue;
    }
    if (dyn === '/details/:id') {
      const ids = await getDetailIds();
      for (const id of ids) expandedRoutes.add(`/details/${id}`);
      continue;
    }
    console.warn(`⚠️ Route dynamique ignorée dans le sitemap: ${dyn}`);
  }

  const links = [...expandedRoutes]
    .sort((a, b) => a.localeCompare(b))
    .map((p) => toLink(p));

  const sitemap = new SitemapStream({ hostname: SITE_URL || 'https://www.miroirfoncier.com' });
  const xmlStream = Readable.from(links).pipe(sitemap);

  const sm = await streamToPromise(xmlStream);
  createWriteStream(path.join(root, 'public', 'sitemap.xml')).write(sm.toString());
  console.log(`✅ Sitemap successfully generated at public/sitemap.xml (${links.length} URLs)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
