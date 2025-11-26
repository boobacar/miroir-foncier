// sitemap-generator.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

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

// Blog posts (keep in sync with src/data/blogPosts.js)
const blogSlugs = [
  'acheter-terrain-senegal-guide-complet',
  'prix-immobilier-dakar-2025-tendances-quartiers',
  'immatriculation-fonciere-morcellement-procedure-senegal',
  'location-meublee-ou-vide-rendement-dakar',
  'eviter-arnaques-immobilieres-senegal-erreurs-courantes',
  'frais-de-notaire-et-taxes-immobilieres-senegal',
  'vendre-son-bien-au-senegal-etapes-prix-mandat',
  'credit-immobilier-senegal-taux-dossier-conditions',
  'investir-a-saly-mbour-thies-location-saisonniere',
  'gestion-de-patrimoine-immobilier-senegal-optimisation-risques',
  // newly added posts
  'investissement-locatif-dakar-rendement-2025',
  'procedure-achat-appartement-senegal-etapes-documents',
  'financement-immobilier-senegal-pret-bancaire-taux-2025',
  'prix-immobilier-dakar-2025-estimation-quartiers',
  'bail-location-senegal-droits-devoirs-depot-garantie-etat-des-lieux',
].map((slug) => ({ url: `/blog/${slug}`, changefreq: 'monthly', priority: 0.7 }));

// Biens (pages de détails)
const propertyIds = [1, 2, 3, 101, 102, 103].map((id) => ({
  url: `/details/${id}`,
  changefreq: 'weekly',
  priority: 0.6,
}));

const links = [...baseLinks, ...blogSlugs, ...propertyIds];

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
