/**
 * Sitemap Generator
 * Automatically creates XML sitemap for all pages
 * Includes bilingual support (EN and PT)
 * Critical for Google indexing
 */

const SITE_URL = 'https://www.estudiolm.com';

function generateSitemapXML(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages.map(page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.alternates ? page.alternates.map(alt => `
    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${SITE_URL}${alt.url}"/>`).join('') : ''}
  </url>`).join('')}
</urlset>`;
}

export async function GET() {
  const lastmod = new Date().toISOString();

  const pages = [
    // English Pages
    {
      url: '/',
      lastmod,
      changefreq: 'weekly',
      priority: '1.0',
      alternates: [
        { lang: 'en', url: '/' },
        { lang: 'pt', url: '/pt/' },
        { lang: 'x-default', url: '/' }
      ]
    },
    {
      url: '/about',
      lastmod,
      changefreq: 'monthly',
      priority: '0.8',
      alternates: [
        { lang: 'en', url: '/about' },
        { lang: 'pt', url: '/pt/sobre' }
      ]
    },
    {
      url: '/consulting',
      lastmod,
      changefreq: 'monthly',
      priority: '0.9',
      alternates: [
        { lang: 'en', url: '/consulting' },
        { lang: 'pt', url: '/pt/consultoria' }
      ]
    },
    {
      url: '/projects',
      lastmod,
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { lang: 'en', url: '/projects' },
        { lang: 'pt', url: '/pt/projetos' }
      ]
    },

    // Portuguese Pages
    {
      url: '/pt/',
      lastmod,
      changefreq: 'weekly',
      priority: '1.0',
      alternates: [
        { lang: 'en', url: '/' },
        { lang: 'pt', url: '/pt/' }
      ]
    },
    {
      url: '/pt/sobre',
      lastmod,
      changefreq: 'monthly',
      priority: '0.8',
      alternates: [
        { lang: 'en', url: '/about' },
        { lang: 'pt', url: '/pt/sobre' }
      ]
    },
    {
      url: '/pt/consultoria',
      lastmod,
      changefreq: 'monthly',
      priority: '0.9',
      alternates: [
        { lang: 'en', url: '/consulting' },
        { lang: 'pt', url: '/pt/consultoria' }
      ]
    },
    {
      url: '/pt/projetos',
      lastmod,
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { lang: 'en', url: '/projects' },
        { lang: 'pt', url: '/pt/projetos' }
      ]
    },
  ];

  const sitemap = generateSitemapXML(pages);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
