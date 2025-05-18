// sitemap-generator.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/services', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Add more routes here
];

const sitemap = new SitemapStream({ hostname: 'https://miroirfoncier.com' });

// Convert links array to a readable stream
const xmlStream = Readable.from(links).pipe(sitemap);

// Write to file
streamToPromise(xmlStream)
  .then(sm => {
    createWriteStream('./public/sitemap.xml').write(sm.toString());
    console.log('✅ Sitemap successfully generated at public/sitemap.xml');
  })
  .catch(console.error);
