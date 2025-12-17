// sitemap-generator.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { blogPosts } from './src/data/blogPosts.js';

// Static routes
const baseLinks = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.7 },
  { url: '/location', changefreq: 'monthly', priority: 0.6 },
  { url: '/achat', changefreq: 'monthly', priority: 0.6 },
  { url: '/estimation', changefreq: 'monthly', priority: 0.6 },
  { url: '/transaction', changefreq: 'monthly', priority: 0.6 },
  { url: '/amenagement', changefreq: 'monthly', priority: 0.5 },
  { url: '/gestion-patrimoine', changefreq: 'monthly', priority: 0.5 },
  { url: '/lexique', changefreq: 'yearly', priority: 0.4 },
  { url: '/conseils', changefreq: 'monthly', priority: 0.5 },
  { url: '/immobilier-dakar', changefreq: 'weekly', priority: 0.7 },
  { url: '/immobilier-saly', changefreq: 'weekly', priority: 0.6 },
  { url: '/immobilier-diamniadio', changefreq: 'weekly', priority: 0.6 },
  { url: '/a-propos', changefreq: 'yearly', priority: 0.3 },
  { url: '/contact', changefreq: 'monthly', priority: 0.3 },
  { url: '/nos-metiers', changefreq: 'yearly', priority: 0.3 },
  { url: '/nous-rejoindre', changefreq: 'yearly', priority: 0.2 },
  { url: '/ressources-humaines', changefreq: 'yearly', priority: 0.2 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
];

// Blog posts (synced automatically with src/data/blogPosts.js)
const blogLinks = (blogPosts || []).map((post) => ({
  url: `/blog/${post.slug}`,
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: post.date,
}));

// Biens (pages de détails)
const propertyIds = [1, 2, 3, 101, 102, 103].map((id) => ({
  url: `/details/${id}`,
  changefreq: 'weekly',
  priority: 0.6,
}));

const links = [...baseLinks, ...blogLinks, ...propertyIds];

const sitemap = new SitemapStream({ hostname: 'https://www.miroirfoncier.com' });

// Convert links array to a readable stream
const xmlStream = Readable.from(links).pipe(sitemap);

// Write to file
streamToPromise(xmlStream)
  .then(sm => {
    createWriteStream('./public/sitemap.xml').write(sm.toString());
    console.log('✅ Sitemap successfully generated at public/sitemap.xml');
  })
  .catch(console.error);
