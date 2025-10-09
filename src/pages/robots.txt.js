/**
 * Robots.txt Generator
 * Tells search engines which pages to crawl
 * Points to sitemap for efficient indexing
 */

const SITE_URL = 'https://estudiolm.com';

export async function GET() {
  const robotsTxt = `# robots.txt for ${SITE_URL}

# Allow all search engines to crawl everything
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay (optional, adjust if needed)
# Crawl-delay: 10
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}
