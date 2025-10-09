/**
 * Sitemap Generator
 * Automatically creates XML sitemap for all pages
 * Includes bilingual support (EN and PT)
 * Critical for Google indexing
 */

const SITE_URL = 'https://estudiolm.com';

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

  // Define all pages with their properties
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
      url: '/projects',
      lastmod,
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { lang: 'en', url: '/projects' },
        { lang: 'pt', url: '/pt/projetos' }
      ]
    },
    {
      url: '/services',
      lastmod,
      changefreq: 'monthly',
      priority: '0.9',
      alternates: [
        { lang: 'en', url: '/services' },
        { lang: 'pt', url: '/pt/servicos' }
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
      url: '/pt/projetos',
      lastmod,
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { lang: 'en', url: '/projects' },
        { lang: 'pt', url: '/pt/projetos' }
      ]
    },
    {
      url: '/pt/servicos',
      lastmod,
      changefreq: 'monthly',
      priority: '0.9',
      alternates: [
        { lang: 'en', url: '/services' },
        { lang: 'pt', url: '/pt/servicos' }
      ]
    },

    // English Case Study Pages
    {
      url: '/projects/porto-car-care',
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
      alternates: [
        { lang: 'en', url: '/projects/porto-car-care' },
        { lang: 'pt', url: '/pt/projetos/porto-car-care' }
      ]
    },
    {
      url: '/projects/brunno-rodrigues',
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
      alternates: [
        { lang: 'en', url: '/projects/brunno-rodrigues' },
        { lang: 'pt', url: '/pt/projetos/brunno-rodrigues' }
      ]
    },
    {
      url: '/projects/porto-massage-studio',
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
      alternates: [
        { lang: 'en', url: '/projects/porto-massage-studio' },
        { lang: 'pt', url: '/pt/projetos/porto-massage-studio' }
      ]
    },

    // Portuguese Case Study Pages
    {
      url: '/pt/projetos/porto-car-care',
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
      alternates: [
        { lang: 'en', url: '/projects/porto-car-care' },
        { lang: 'pt', url: '/pt/projetos/porto-car-care' }
      ]
    },
    {
      url: '/pt/projetos/brunno-rodrigues',
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
      alternates: [
        { lang: 'en', url: '/projects/brunno-rodrigues' },
        { lang: 'pt', url: '/pt/projetos/brunno-rodrigues' }
      ]
    },
    {
      url: '/pt/projetos/porto-massage-studio',
      lastmod,
      changefreq: 'monthly',
      priority: '0.7',
      alternates: [
        { lang: 'en', url: '/projects/porto-massage-studio' },
        { lang: 'pt', url: '/pt/projetos/porto-massage-studio' }
      ]
    },

    // City-Specific Pages (Programmatic SEO - Phase 3)
    {
      url: '/pt/criacao-websites-lisboa',
      lastmod,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: '/pt/criacao-websites-porto',
      lastmod,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: '/pt/criacao-websites-braga',
      lastmod,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/pt/criacao-websites-coimbra',
      lastmod,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/pt/criacao-websites-aveiro',
      lastmod,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/pt/criacao-websites-faro',
      lastmod,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/pt/criacao-websites-setubal',
      lastmod,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/pt/criacao-websites-leiria',
      lastmod,
      changefreq: 'monthly',
      priority: '0.7'
    },

    // Industry-Specific Pages (Programmatic SEO - Phase 3)
    {
      url: '/pt/websites-para-spas',
      lastmod,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/pt/websites-para-clinicas-dentarias',
      lastmod,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/pt/websites-para-restaurantes',
      lastmod,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/pt/websites-para-oficinas',
      lastmod,
      changefreq: 'monthly',
      priority: '0.8'
    }
  ];

  const sitemap = generateSitemapXML(pages);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
