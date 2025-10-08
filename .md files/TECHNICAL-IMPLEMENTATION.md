# Technical Implementation Guide

## Overview

This document outlines the technical implementation for adding multilingual support, SEO optimization, and programmatic pages to the Astro website.

---

## 1. Multilingual Setup with Astro

### 1.1 Install i18n Package

```bash
npm install astro-i18n
# OR use Astro's built-in i18n routing (Astro 3.0+)
```

### 1.2 Configure astro.config.mjs

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false  // English at root, Portuguese at /pt/
    }
  }
});
```

### 1.3 Create Language Switcher Component

```astro
---
// src/components/LanguageSwitcher.astro
const { currentPath } = Astro.props;
const currentLocale = Astro.currentLocale || 'en';

// Toggle between locales
const otherLocale = currentLocale === 'en' ? 'pt' : 'en';
const otherPath = currentLocale === 'en' 
  ? `/pt${currentPath}` 
  : currentPath.replace('/pt', '');

const labels = {
  en: 'PT',
  pt: 'EN'
};
---

<div class="language-switcher">
  <a href={otherPath} aria-label={`Switch to ${otherLocale}`}>
    {labels[currentLocale]}
  </a>
</div>

<style>
  .language-switcher {
    /* Style as needed */
  }
</style>
```

### 1.4 Translation Utilities

```typescript
// src/utils/i18n.ts

export const translations = {
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      services: 'Services'
    },
    hero: {
      title: 'WEBSITES THAT RANK AND BRING YOU CUSTOMERS',
      subtitle: 'I design and build fast, clean websites and landing pages with strong local SEO...',
      cta: 'CONTACT ME'
    },
    // ... more translations
  },
  pt: {
    nav: {
      work: 'Trabalhos',
      about: 'Sobre',
      contact: 'Contacto',
      services: 'Serviços'
    },
    hero: {
      title: 'WEBSITES QUE APARECEM NO GOOGLE E TRAZEM CLIENTES',
      subtitle: 'Crio websites rápidos e profissionais com SEO local forte...',
      cta: 'CONTACTE-ME'
    },
    // ... more translations
  }
};

export function getTranslation(locale: string, key: string) {
  const keys = key.split('.');
  let value: any = translations[locale as keyof typeof translations];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

export function t(locale: string, key: string) {
  return getTranslation(locale, key);
}
```

---

## 2. SEO Components

### 2.1 SEO Meta Component

```astro
---
// src/components/SEO.astro
export interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  locale?: string;
  alternateLocale?: string;
  alternatePath?: string;
}

const {
  title,
  description,
  canonical,
  ogImage = '/og-default.jpg',
  ogType = 'website',
  noindex = false,
  locale = 'en',
  alternateLocale,
  alternatePath
} = Astro.props;

const siteName = 'Luís Madeira - Web Developer & SEO Specialist';
const fullTitle = `${title} | ${siteName}`;
const canonicalURL = canonical || Astro.url.href;
const ogImageURL = new URL(ogImage, Astro.site).href;

// Determine hreflang
const currentURL = Astro.url.href;
const enURL = locale === 'pt' && alternatePath 
  ? new URL(alternatePath, Astro.site).href
  : currentURL.replace('/pt/', '/').replace('/pt', '/');
const ptURL = locale === 'en' && alternatePath
  ? new URL(`/pt${alternatePath}`, Astro.site).href
  : `/pt${Astro.url.pathname}`;
---

<!-- Primary Meta Tags -->
<title>{fullTitle}</title>
<meta name="title" content={fullTitle} />
<meta name="description" content={description} />
{noindex && <meta name="robots" content="noindex, nofollow" />}
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={ogType} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImageURL} />
<meta property="og:locale" content={locale === 'pt' ? 'pt_PT' : 'en_US'} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={canonicalURL} />
<meta property="twitter:title" content={fullTitle} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={ogImageURL} />

<!-- Hreflang -->
<link rel="alternate" hreflang="en" href={enURL} />
<link rel="alternate" hreflang="pt" href={ptURL} />
<link rel="alternate" hreflang="x-default" href={enURL} />
```

### 2.2 Schema Markup Component

```astro
---
// src/components/Schema.astro
export interface Props {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'Article' | 'FAQPage' | 'BreadcrumbList';
  data?: any;
}

const { type, data } = Astro.props;

const baseOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://yourdomain.com/#organization',
  'name': 'Luís Madeira',
  'url': 'https://yourdomain.com',
  'logo': 'https://yourdomain.com/logo.png',
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+351924466899',
    'contactType': 'customer service',
    'email': 'luismadeira@ruimadeira.pt',
    'areaServed': 'PT',
    'availableLanguage': ['English', 'Portuguese']
  },
  'sameAs': [
    'https://www.linkedin.com/in/lumadeira'
  ]
};

const schemas = {
  Organization: baseOrganization,
  
  LocalBusiness: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://yourdomain.com/#localbusiness',
    'name': 'Luís Madeira - Web Developer',
    'image': 'https://yourdomain.com/profile.jpeg',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'PT',
      'addressLocality': data?.city || 'Porto'
    },
    'geo': data?.geo || {
      '@type': 'GeoCoordinates',
      'latitude': 41.1579,
      'longitude': -8.6291
    },
    'url': 'https://yourdomain.com',
    'telephone': '+351924466899',
    'priceRange': '€€',
    'openingHours': 'Mo-Fr 09:00-18:00',
    'servesCuisine': null,
    'acceptsReservations': false
  },

  Service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': data?.serviceType || 'Web Development',
    'provider': {
      '@id': 'https://yourdomain.com/#organization'
    },
    'areaServed': data?.areaServed || {
      '@type': 'Country',
      'name': 'Portugal'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Web Development Services',
      'itemListElement': data?.services || []
    }
  },

  Article: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': data?.title,
    'description': data?.description,
    'image': data?.image,
    'datePublished': data?.datePublished,
    'dateModified': data?.dateModified || data?.datePublished,
    'author': {
      '@type': 'Person',
      'name': 'Luís Madeira',
      'url': 'https://yourdomain.com/about'
    },
    'publisher': {
      '@id': 'https://yourdomain.com/#organization'
    }
  },

  FAQPage: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': data?.questions || []
  },

  BreadcrumbList: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': data?.breadcrumbs || []
  }
};

const schema = schemas[type] || schemas.Organization;
---

<script type="application/ld+json" set:html={JSON.stringify(schema)}></script>
```

### 2.3 Breadcrumbs Component

```astro
---
// src/components/Breadcrumbs.astro
export interface Props {
  items: { label: string; href: string }[];
}

const { items } = Astro.props;

// Generate schema for breadcrumbs
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.label,
    'item': new URL(item.href, Astro.site).href
  }))
};
---

<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol>
    {items.map((item, index) => (
      <li>
        {index < items.length - 1 ? (
          <>
            <a href={item.href}>{item.label}</a>
            <span class="separator">/</span>
          </>
        ) : (
          <span aria-current="page">{item.label}</span>
        )}
      </li>
    ))}
  </ol>
</nav>

<script type="application/ld+json" set:html={JSON.stringify(breadcrumbSchema)}></script>

<style>
  .breadcrumbs ol {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 8px;
    font-size: 14px;
  }
  
  .breadcrumbs li {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .separator {
    color: #666;
  }
  
  .breadcrumbs a {
    color: #c7c7c7;
    text-decoration: none;
  }
  
  .breadcrumbs a:hover {
    color: #d3e97a;
  }
  
  .breadcrumbs [aria-current="page"] {
    color: #999;
  }
</style>
```

---

## 3. Programmatic Page Generation

### 3.1 City Pages Template

```astro
---
// src/pages/pt/criacao-websites/[city].astro
import BaseLayout from '../../../layouts/BaseLayout.astro';
import SEO from '../../../components/SEO.astro';
import Schema from '../../../components/Schema.astro';
import Breadcrumbs from '../../../components/Breadcrumbs.astro';

export async function getStaticPaths() {
  const cities = [
    { slug: 'lisboa', name: 'Lisboa', coords: { lat: 38.7223, lon: -9.1393 } },
    { slug: 'porto', name: 'Porto', coords: { lat: 41.1579, lon: -8.6291 } },
    { slug: 'braga', name: 'Braga', coords: { lat: 41.5454, lon: -8.4265 } },
    { slug: 'coimbra', name: 'Coimbra', coords: { lat: 40.2033, lon: -8.4103 } },
    { slug: 'aveiro', name: 'Aveiro', coords: { lat: 40.6443, lon: -8.6455 } },
    { slug: 'faro', name: 'Faro', coords: { lat: 37.0194, lon: -7.9322 } },
    { slug: 'setubal', name: 'Setúbal', coords: { lat: 38.5244, lon: -8.8882 } },
    { slug: 'leiria', name: 'Leiria', coords: { lat: 39.7497, lon: -8.8071 } }
  ];

  return cities.map(city => ({
    params: { city: city.slug },
    props: { city }
  }));
}

const { city } = Astro.props;
const title = `Criação de Websites em ${city.name}`;
const description = `Websites profissionais para negócios em ${city.name}. Design responsivo, SEO local e resultados comprovados. Contacte já para orçamento gratuito!`;
---

<BaseLayout locale="pt">
  <SEO 
    title={title}
    description={description}
    locale="pt"
    alternateLocale="en"
    alternatePath="/services"
  />
  
  <Schema 
    type="Service"
    data={{
      serviceType: 'Website Creation',
      areaServed: {
        '@type': 'City',
        'name': city.name
      }
    }}
  />
  
  <Schema 
    type="LocalBusiness"
    data={{
      city: city.name,
      geo: {
        '@type': 'GeoCoordinates',
        'latitude': city.coords.lat,
        'longitude': city.coords.lon
      }
    }}
  />
  
  <Breadcrumbs 
    items={[
      { label: 'Início', href: '/pt' },
      { label: 'Criação de Websites', href: '/pt/criacao-websites' },
      { label: city.name, href: `/pt/criacao-websites/${city.slug}` }
    ]}
  />
  
  <!-- Hero Section -->
  <section class="hero">
    <h1>Criação de Websites Profissionais em {city.name}</h1>
    <p>Sites otimizados que geram clientes e aparecem no Google</p>
    <a href="/#contact" class="btn-primary">Pedir Orçamento Grátis</a>
  </section>
  
  <!-- Introduction -->
  <section class="introduction">
    <h2>Websites que Funcionam para Negócios em {city.name}</h2>
    <p>
      A sua empresa em {city.name} merece um website profissional que atrai clientes e gera resultados.
      Como especialista em criação de websites em {city.name}, conheço bem o mercado local e as
      necessidades específicas das empresas da região.
    </p>
    <p>
      Trabalho com negócios locais em {city.name} para criar websites que não só têm um design
      profissional, mas também aparecem no Google quando os seus potenciais clientes procuram
      pelos seus serviços.
    </p>
  </section>
  
  <!-- Services for City -->
  <section class="services">
    <h2>Serviços para Empresas em {city.name}</h2>
    
    <div class="service-grid">
      <div class="service-card">
        <h3>Websites Profissionais</h3>
        <p>Design moderno e responsivo adaptado para o seu negócio em {city.name}</p>
      </div>
      
      <div class="service-card">
        <h3>SEO Local em {city.name}</h3>
        <ul>
          <li>Otimização para pesquisas locais em {city.name}</li>
          <li>Google Maps / Google Meu Negócio</li>
          <li>Palavras-chave locais ("seu serviço em {city.name}")</li>
        </ul>
      </div>
      
      <div class="service-card">
        <h3>Design Responsivo</h3>
        <p>Website funciona perfeitamente em todos os dispositivos</p>
      </div>
    </div>
  </section>
  
  <!-- Industries Served -->
  <section class="industries">
    <h2>Sectores que Servimos em {city.name}</h2>
    <ul>
      <li>✓ Spas e Centros de Bem-Estar</li>
      <li>✓ Clínicas Dentárias</li>
      <li>✓ Restaurantes e Cafés</li>
      <li>✓ Oficinas e Empresas Automóveis</li>
      <li>✓ Salões de Beleza</li>
      <li>✓ Empresas de Serviços Locais</li>
    </ul>
  </section>
  
  <!-- Why Choose Section -->
  <section class="why-choose">
    <h2>Porque Negócios em {city.name} Escolhem-me</h2>
    <div class="reasons-grid">
      <div class="reason">
        <h3>Conheço o Mercado de {city.name}</h3>
        <p>Experiência a trabalhar com negócios locais na região</p>
      </div>
      
      <div class="reason">
        <h3>Comunicação em Português</h3>
        <p>Falante nativo, compreendo a cultura e o mercado local</p>
      </div>
      
      <div class="reason">
        <h3>Resultados Comprovados</h3>
        <p>Métricas reais de projectos com negócios locais</p>
      </div>
    </div>
  </section>
  
  <!-- Pricing -->
  <section class="pricing">
    <h2>Preços para Empresas em {city.name}</h2>
    <p>Websites profissionais a partir de €997</p>
    <a href="/#contact" class="btn-primary">Pedir Orçamento Personalizado</a>
  </section>
  
  <!-- FAQ -->
  <section class="faq">
    <h2>Perguntas Frequentes - {city.name}</h2>
    
    <div class="faq-item">
      <h3>Quanto tempo demora a criar um website para o meu negócio em {city.name}?</h3>
      <p>Normalmente entre 2-4 semanas, dependendo da complexidade do projecto.</p>
    </div>
    
    <div class="faq-item">
      <h3>Quanto custa um website profissional em {city.name}?</h3>
      <p>Os preços começam em €997 para websites profissionais completos com SEO básico.</p>
    </div>
    
    <div class="faq-item">
      <h3>Consegue ajudar-me a aparecer no Google Maps em {city.name}?</h3>
      <p>Sim! Otimização do Google Meu Negócio e SEO local estão incluídos em todos os projectos.</p>
    </div>
  </section>
  
  <!-- CTA -->
  <section class="final-cta">
    <h2>Pronto para Levar o Seu Negócio em {city.name} para o Próximo Nível?</h2>
    <p>Contacte-me hoje para um orçamento gratuito e personalizado</p>
    <a href="/#contact" class="btn-primary">Contactar Agora</a>
  </section>
</BaseLayout>
```

---

## 4. Sitemap Generation

```javascript
// src/pages/sitemap.xml.js

const SITE_URL = 'https://yourdomain.com';

const cities = ['lisboa', 'porto', 'braga', 'coimbra', 'aveiro', 'faro', 'setubal', 'leiria'];
const industries = ['spas', 'clinicas-dentarias', 'restaurantes', 'oficinas'];

function generateSitemapXML(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages.map(page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.alternates ? page.alternates.map(alt => `
    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${SITE_URL}${alt.url}"/>
    `).join('') : ''}
  </url>
  `).join('')}
</urlset>`;
}

export async function get() {
  const lastmod = new Date().toISOString();
  
  const pages = [
    // Main pages
    { url: '/', lastmod, changefreq: 'weekly', priority: '1.0', alternates: [
      { lang: 'en', url: '/' },
      { lang: 'pt', url: '/pt/' }
    ]},
    { url: '/about', lastmod, changefreq: 'monthly', priority: '0.8', alternates: [
      { lang: 'en', url: '/about' },
      { lang: 'pt', url: '/pt/sobre' }
    ]},
    { url: '/services', lastmod, changefreq: 'monthly', priority: '0.9', alternates: [
      { lang: 'en', url: '/services' },
      { lang: 'pt', url: '/pt/servicos' }
    ]},
    { url: '/projects', lastmod, changefreq: 'weekly', priority: '0.8', alternates: [
      { lang: 'en', url: '/projects' },
      { lang: 'pt', url: '/pt/projetos' }
    ]},
    
    // Portuguese main pages
    { url: '/pt/', lastmod, changefreq: 'weekly', priority: '1.0' },
    { url: '/pt/sobre', lastmod, changefreq: 'monthly', priority: '0.8' },
    { url: '/pt/servicos', lastmod, changefreq: 'monthly', priority: '0.9' },
    { url: '/pt/projetos', lastmod, changefreq: 'weekly', priority: '0.8' },
    
    // City pages
    ...cities.map(city => ({
      url: `/pt/criacao-websites/${city}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.7'
    })),
    
    // Industry pages
    ...industries.map(industry => ({
      url: `/pt/websites-para/${industry}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.7'
    }))
  ];
  
  const sitemap = generateSitemapXML(pages);
  
  return {
    body: sitemap,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}
```

---

## 5. Robots.txt

```javascript
// src/pages/robots.txt.js

const SITE_URL = 'https://yourdomain.com';

export async function get() {
  const robotsTxt = `# robots.txt
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return {
    body: robotsTxt,
    headers: {
      'Content-Type': 'text/plain'
    }
  };
}
```

---

## 6. Image Optimization

### 6.1 Use Astro's Image Component

```astro
---
import { Image } from 'astro:assets';
import profileImage from '../assets/profile.jpeg';
---

<Image 
  src={profileImage} 
  alt="Luís Madeira - Web Developer"
  width={600}
  height={700}
  format="webp"
  quality={80}
  loading="lazy"
/>
```

### 6.2 Add Alt Tags

All images should have descriptive alt tags:
- Profile images: "Luís Madeira - Web Developer & SEO Specialist"
- Project images: "[Project Name] - [Primary Feature/Result]"
- Icon/decorative images: Empty alt="" if purely decorative

---

## 7. Performance Optimization

### 7.1 Critical CSS

Extract above-the-fold CSS and inline it:

```astro
---
// In layout head
---
<style is:inline>
  /* Critical CSS for above-the-fold content */
  nav { /* ... */ }
  .hero { /* ... */ }
</style>
```

### 7.2 Defer Non-Critical Scripts

```html
<script defer src="/path/to/script.js"></script>
```

### 7.3 Font Optimization

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 8. Analytics Setup

### 8.1 Google Analytics 4

```astro
---
// src/components/Analytics.astro
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
---

<!-- Google tag (gtag.js) -->
<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
<script is:inline define:vars={{ GA_MEASUREMENT_ID }}>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
</script>
```

### 8.2 Event Tracking

```javascript
// Track form submissions
document.querySelector('form').addEventListener('submit', () => {
  gtag('event', 'form_submit', {
    'event_category': 'engagement',
    'event_label': 'contact_form'
  });
});

// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', () => {
    gtag('event', 'phone_click', {
      'event_category': 'engagement',
      'event_label': 'phone_number'
    });
  });
});
```

---

## 9. File Structure Summary

```
src/
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── services.astro
│   ├── projects.astro
│   ├── pt/
│   │   ├── index.astro
│   │   ├── sobre.astro
│   │   ├── servicos.astro
│   │   ├── projetos.astro
│   │   ├── criacao-websites/
│   │   │   └── [city].astro
│   │   └── websites-para/
│   │       └── [industry].astro
│   ├── sitemap.xml.js
│   └── robots.txt.js
├── components/
│   ├── SEO.astro
│   ├── Schema.astro
│   ├── LanguageSwitcher.astro
│   ├── Breadcrumbs.astro
│   └── Analytics.astro
├── layouts/
│   └── BaseLayout.astro
└── utils/
    └── i18n.ts
```

---

## 10. Testing Checklist

### SEO Testing
- [ ] All pages have unique titles and descriptions
- [ ] All images have alt tags
- [ ] Schema markup validates (use Google's Rich Results Test)
- [ ] Hreflang tags are correct
- [ ] Canonical URLs are set
- [ ] Sitemap generates correctly
- [ ] Robots.txt is accessible

### Performance Testing
- [ ] Core Web Vitals pass (use PageSpeed Insights)
- [ ] Images are optimized
- [ ] No render-blocking resources
- [ ] Mobile-friendly (use Mobile-Friendly Test)

### Functionality Testing
- [ ] Language switcher works
- [ ] All internal links work
- [ ] Forms submit correctly
- [ ] Contact buttons work (phone, WhatsApp, email)
- [ ] Responsive on all screen sizes

---

This technical implementation guide provides all the code needed to implement the SEO strategy. Use these templates as starting points and customize based on specific requirements.

