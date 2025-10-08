# Task Breakdown for Claude Code Execution

This document breaks down the SEO optimization project into specific, actionable tasks for Claude Code to execute sequentially.

---

## 🔴 PHASE 1: FOUNDATION (WEEK 1-2)

### Task 1.1: Configure Multilingual Infrastructure
**Files to create/modify:**
- `astro.config.mjs` - Add i18n configuration
- `src/utils/i18n.ts` - Create translation utilities
- `src/components/LanguageSwitcher.astro` - Create language switcher component

**Steps:**
1. Update `astro.config.mjs` with i18n routing config
2. Create translation object in `src/utils/i18n.ts` with EN and PT translations
3. Create `LanguageSwitcher.astro` component
4. Test that routes work: `/` (English) and `/pt/` (Portuguese)

**Acceptance Criteria:**
- [ ] Can access site at `/` (English)
- [ ] Can access site at `/pt/` (Portuguese)
- [ ] Language switcher toggles between languages
- [ ] URLs update correctly when switching languages

---

### Task 1.2: Create SEO Components
**Files to create:**
- `src/components/SEO.astro`
- `src/components/Schema.astro`
- `src/components/Breadcrumbs.astro`

**Steps:**
1. Create `SEO.astro` with:
   - Title and meta description
   - Open Graph tags
   - Twitter Card tags
   - Hreflang tags
   - Canonical URLs

2. Create `Schema.astro` with support for:
   - Organization schema
   - LocalBusiness schema
   - Service schema
   - Article schema
   - FAQPage schema
   - BreadcrumbList schema

3. Create `Breadcrumbs.astro` for navigation breadcrumbs

**Acceptance Criteria:**
- [ ] SEO component accepts props and renders all meta tags
- [ ] Schema component can render different schema types
- [ ] Breadcrumbs display correctly
- [ ] Validate schema with Google's Rich Results Test

---

### Task 1.3: Update Existing Pages with SEO
**Files to modify:**
- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/projects.astro`

**Steps:**
1. Add `<SEO>` component to each page with:
   - Unique, keyword-optimized title
   - Unique, compelling meta description
   - Proper canonical URL
   - Hreflang tags

2. Add appropriate Schema markup to each page

3. Update `<html lang="">` to be dynamic based on locale

4. Add alt tags to all images

**English Metadata:**
```
Home:
- Title: "Luís Madeira - Local SEO & Web Development Specialist"
- Description: "I build SEO-optimized websites and landing pages for local businesses. More visibility, more calls, more clients. Based in Porto, serving Portugal."

About:
- Title: "About Me - Luís Madeira | Web Developer & SEO Specialist"
- Description: "Master's student at IE Business School with 2 years VC experience. Specializing in local SEO and modern web development for Portuguese businesses."

Projects:
- Title: "Case Studies - Real SEO Results | Luís Madeira"
- Description: "See real results from local SEO and web development projects. Case studies with metrics, strategy, and implementation details."
```

**Acceptance Criteria:**
- [ ] All pages have unique titles and descriptions
- [ ] All images have descriptive alt tags
- [ ] Schema markup validates
- [ ] HTML lang attribute is dynamic

---

### Task 1.4: Create Sitemap and Robots.txt
**Files to create:**
- `src/pages/sitemap.xml.js`
- `src/pages/robots.txt.js`

**Steps:**
1. Create `sitemap.xml.js` that generates XML sitemap
   - Include all static pages (EN and PT)
   - Include alternate language links (hreflang in sitemap)
   - Update changefreq and priority appropriately

2. Create `robots.txt.js`
   - Allow all crawlers
   - Point to sitemap

**Acceptance Criteria:**
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Sitemap includes EN and PT pages
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Sitemap validates (use XML validator)

---

## 🟡 PHASE 2: CONTENT CREATION (WEEK 3-4)

### Task 2.1: Create Services Page (English)
**File to create:**
- `src/pages/services.astro`

**Steps:**
1. Create comprehensive services page using `CONTENT-STRATEGY.md` Template 1
2. Include deep-dive sections for:
   - Landing Page Creation
   - SEO-Optimized Website Development
   - Local SEO Services
3. Add FAQ section with Schema markup
4. Add pricing section (starting prices)
5. Add process/how it works section
6. Add CTA sections throughout

**SEO Metadata:**
```
Title: "Web Development & SEO Services | Luís Madeira"
Description: "Professional web development and SEO services for local businesses. Landing pages, SEO-optimized websites, and local SEO. See pricing and packages."
```

**Acceptance Criteria:**
- [ ] Page is comprehensive (1500+ words)
- [ ] Includes all three main services
- [ ] Has FAQ schema markup
- [ ] Has clear CTAs
- [ ] SEO metadata complete

---

### Task 2.2: Create Individual Case Study Pages (English)
**Files to create:**
- `src/pages/projects/porto-car-care.astro`
- `src/pages/projects/brunno-rodrigues.astro`
- `src/pages/projects/porto-massage-studio.astro`

**Steps:**
1. Use CONTENT-STRATEGY.md Template 5 (Case Study)
2. Expand existing case study information
3. Add detailed sections:
   - Challenge
   - Solution
   - Implementation steps
   - Results with metrics
   - Technologies used
   - Client testimonial (if available)
4. Add Article schema markup
5. Add breadcrumbs

**SEO Metadata (Porto Car Care example):**
```
Title: "Porto Car Care Case Study - 3x Visibility Growth | Luís Madeira"
Description: "How I helped Porto Car Care triple their Google visibility and get 40% more calls through local SEO and programmatic strategy."
```

**Acceptance Criteria:**
- [ ] Each case study is 800+ words
- [ ] Includes detailed methodology
- [ ] Has specific metrics
- [ ] Article schema validates
- [ ] Breadcrumbs display correctly

---

### Task 2.3: Translate Home Page to Portuguese
**File to create:**
- `src/pages/pt/index.astro`

**Steps:**
1. Copy structure from English home page
2. Translate all content to European Portuguese
3. Optimize copy for Portuguese keywords:
   - "criação de websites"
   - "desenvolvimento de sites"
   - "SEO local"
4. Update metadata for Portuguese SEO
5. Ensure all links point to Portuguese versions

**Portuguese Metadata:**
```
Title: "Luís Madeira - Criação de Websites e SEO Local em Portugal"
Description: "Crio websites profissionais e otimizados para SEO que geram clientes. Landing pages, websites empresariais e SEO local para negócios em Portugal."
```

**Tone Guidelines (from CONTENT-STRATEGY.md):**
- Professional mas acessível
- Use "você" (formal)
- European Portuguese spelling
- Local business examples
- Results-focused

**Acceptance Criteria:**
- [ ] All content translated to PT
- [ ] Keywords integrated naturally
- [ ] Portuguese metadata complete
- [ ] Hreflang tags link EN ↔ PT
- [ ] All CTAs work
- [ ] Language switcher works

---

### Task 2.4: Translate About Page to Portuguese
**File to create:**
- `src/pages/pt/sobre.astro`

**Steps:**
1. Translate all content
2. Emphasize local market knowledge
3. Update metadata

**Portuguese Metadata:**
```
Title: "Sobre Mim - Luís Madeira | Criação de Websites e SEO"
Description: "Estudante de mestrado na IE Business School com 2 anos de experiência em VC. Especializado em SEO local e desenvolvimento web para negócios portugueses."
```

**Acceptance Criteria:**
- [ ] Content translated
- [ ] Metadata in Portuguese
- [ ] Hreflang configured

---

### Task 2.5: Translate Projects Page to Portuguese
**File to create:**
- `src/pages/pt/projetos.astro`

**Steps:**
1. Translate all project descriptions
2. Update metadata
3. Ensure links point to Portuguese case study pages

**Portuguese Metadata:**
```
Title: "Casos de Estudo - Resultados Reais em SEO | Luís Madeira"
Description: "Veja resultados reais de projectos de SEO local e desenvolvimento web. Casos de estudo com métricas, estratégia e detalhes de implementação."
```

**Acceptance Criteria:**
- [ ] All content translated
- [ ] Portuguese metadata
- [ ] Links updated

---

### Task 2.6: Create Services Page (Portuguese)
**File to create:**
- `src/pages/pt/servicos.astro`

**Steps:**
1. Translate services page from English
2. Optimize for Portuguese keywords:
   - "criação de landing pages"
   - "desenvolvimento de websites"
   - "otimização SEO"
   - "SEO local"
3. Add Portuguese FAQ section

**Portuguese Metadata:**
```
Title: "Serviços - Criação de Websites e SEO | Luís Madeira"
Description: "Serviços profissionais de desenvolvimento web e SEO para negócios locais. Landing pages, websites otimizados e SEO local. Veja preços e pacotes."
```

**Acceptance Criteria:**
- [ ] All content translated
- [ ] Keywords integrated
- [ ] FAQ in Portuguese with schema
- [ ] Metadata complete

---

### Task 2.7: Create Portuguese Case Study Pages
**Files to create:**
- `src/pages/pt/projetos/porto-car-care.astro`
- `src/pages/pt/projetos/brunno-rodrigues.astro`
- `src/pages/pt/projetos/porto-massage-studio.astro`

**Steps:**
1. Translate each case study
2. Maintain same structure
3. Update metadata to Portuguese

**Acceptance Criteria:**
- [ ] All case studies translated
- [ ] Portuguese metadata
- [ ] Schema markup in place

---

## 🟡 PHASE 3: PROGRAMMATIC SEO (WEEK 5-8)

### Task 3.1: Create City Page Template
**File to create:**
- `src/pages/pt/criacao-websites/[city].astro`

**Steps:**
1. Use template from `TECHNICAL-IMPLEMENTATION.md` Section 3.1
2. Implement `getStaticPaths()` for cities:
   - Lisboa
   - Porto
   - Braga
   - Coimbra
   - Aveiro
   - Faro
   - Setúbal
   - Leiria

3. Each page should include:
   - City-specific intro
   - Services for [city] businesses
   - Industries served in [city]
   - Why choose me for [city]
   - FAQ for [city]
   - LocalBusiness schema with city geo coordinates

**SEO Metadata Template:**
```
Title: "Criação de Websites em [CITY] | Luís Madeira - SEO Local"
Description: "Websites profissionais para negócios em [CITY]. Otimização SEO local, design responsivo e resultados comprovados. Contacte já!"
```

**Acceptance Criteria:**
- [ ] Template generates 8 city pages
- [ ] Each page has unique city-specific content
- [ ] LocalBusiness schema includes correct coordinates
- [ ] Breadcrumbs work
- [ ] All pages have unique metadata

---

### Task 3.2: Create Industry Page Template
**File to create:**
- `src/pages/pt/websites-para/[industry].astro`

**Steps:**
1. Use template from `CONTENT-STRATEGY.md` Template 3
2. Implement `getStaticPaths()` for industries:
   - spas
   - clinicas-dentarias
   - restaurantes
   - oficinas

3. Each page should include:
   - Industry-specific pain points
   - Features specific to industry
   - Industry SEO approach
   - Case study from that industry
   - Industry-specific FAQ

**SEO Metadata Template:**
```
Title: "Websites para [INDUSTRY] - Design & SEO | Luís Madeira"
Description: "Websites profissionais para [industry]. Design personalizado, SEO otimizado e resultados comprovados. Aumente os seus clientes!"
```

**Acceptance Criteria:**
- [ ] Template generates 4 industry pages
- [ ] Industry-specific features highlighted
- [ ] Relevant case studies shown
- [ ] Service schema includes industry type

---

### Task 3.3: Update Sitemap with Programmatic Pages
**File to modify:**
- `src/pages/sitemap.xml.js`

**Steps:**
1. Add all generated city pages to sitemap
2. Add all generated industry pages to sitemap
3. Set appropriate changefreq and priority

**Acceptance Criteria:**
- [ ] Sitemap includes all 8 city pages
- [ ] Sitemap includes all 4 industry pages
- [ ] Sitemap validates

---

## 🟢 PHASE 4: BLOG & CONTENT (WEEK 9-12)

### Task 4.1: Set Up Blog Infrastructure
**Files to create:**
- `src/pages/pt/blog/index.astro` (blog listing)
- `src/pages/pt/blog/[slug].astro` (blog post template)
- `src/layouts/BlogLayout.astro`
- `src/content/config.ts` (Astro content collections config)

**Steps:**
1. Set up Astro Content Collections for blog
2. Create blog listing page
3. Create blog post layout
4. Add pagination
5. Add reading time calculation
6. Add share buttons

**Acceptance Criteria:**
- [ ] Blog listing page shows all posts
- [ ] Individual blog posts render correctly
- [ ] Pagination works
- [ ] Article schema validates

---

### Task 4.2: Write Initial Blog Posts (Portuguese)
**Files to create:**
- `src/content/blog/pt/como-criar-website-negocio.md`
- `src/content/blog/pt/quanto-custa-website-portugal.md`
- `src/content/blog/pt/5-razoes-negocio-precisa-website.md`
- `src/content/blog/pt/o-que-e-seo-local.md`
- `src/content/blog/pt/como-aparecer-google-maps.md`

**Steps:**
1. Use `CONTENT-STRATEGY.md` Template 4 (Blog Post)
2. Target question-based keywords from `KEYWORD-RESEARCH.md`
3. Each post should be 1200-1800 words
4. Include:
   - Clear answer to the question
   - Actionable steps
   - Examples
   - FAQ schema
   - Internal links to service pages
   - Soft CTA to services

**SEO Requirements:**
- Primary keyword in H1
- Primary keyword in first 100 words
- Secondary keywords in H2s
- Keyword in meta description
- Internal links to relevant pages

**Acceptance Criteria:**
- [ ] 5 blog posts written
- [ ] Each 1200+ words
- [ ] FAQ schema implemented
- [ ] Internal linking in place
- [ ] Soft CTAs included

---

## 🟢 PHASE 5: OPTIMIZATION & ANALYTICS (WEEK 13+)

### Task 5.1: Optimize Images
**Files to modify:**
- All pages with images

**Steps:**
1. Convert all images to WebP format
2. Add proper alt tags to all images
3. Implement lazy loading
4. Use Astro's Image component
5. Optimize image sizes

**Image Alt Tag Guidelines:**
- Profile: "Luís Madeira - Web Developer & SEO Specialist"
- Projects: "[Project Name] - [Main Feature]"
- Icons: Descriptive or empty if decorative

**Acceptance Criteria:**
- [ ] All images have alt tags
- [ ] Images are optimized (<200KB)
- [ ] Lazy loading implemented
- [ ] WebP format used

---

### Task 5.2: Performance Optimization
**Steps:**
1. Inline critical CSS
2. Defer non-critical scripts
3. Optimize font loading
4. Minimize JavaScript
5. Test Core Web Vitals

**Target Metrics:**
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

**Acceptance Criteria:**
- [ ] PageSpeed Insights score >90 (mobile)
- [ ] PageSpeed Insights score >95 (desktop)
- [ ] Core Web Vitals pass

---

### Task 5.3: Analytics Setup
**File to create:**
- `src/components/Analytics.astro`

**Steps:**
1. Add Google Analytics 4
2. Add Google Search Console verification
3. Implement event tracking for:
   - Form submissions
   - Phone clicks
   - WhatsApp clicks
   - Email clicks
   - Button clicks
   - Page views

**Acceptance Criteria:**
- [ ] GA4 tracking code installed
- [ ] GSC verified
- [ ] Events tracking correctly
- [ ] Conversion goals set up

---

## Testing Checklist

### SEO Testing
- [ ] All pages have unique titles (max 60 chars)
- [ ] All pages have unique descriptions (max 160 chars)
- [ ] All images have alt tags
- [ ] Schema markup validates (Google Rich Results Test)
- [ ] Hreflang tags correct
- [ ] Canonical URLs set
- [ ] Sitemap accessible and validates
- [ ] Robots.txt accessible
- [ ] No broken links

### Multilingual Testing
- [ ] Language switcher works on all pages
- [ ] Portuguese translations are accurate
- [ ] URLs update correctly when switching languages
- [ ] Hreflang links between EN and PT versions
- [ ] All Portuguese pages have Portuguese metadata

### Performance Testing
- [ ] Core Web Vitals pass (Google PageSpeed Insights)
- [ ] Images optimized
- [ ] Mobile-friendly (Google Mobile-Friendly Test)
- [ ] No render-blocking resources
- [ ] Fast load times (<3s)

### Functionality Testing
- [ ] All forms work
- [ ] All contact buttons work (phone, WhatsApp, email)
- [ ] All internal links work
- [ ] Breadcrumbs display correctly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Navigation works
- [ ] Language switcher works

### Content Testing
- [ ] No spelling/grammar errors
- [ ] Keywords integrated naturally
- [ ] Content reads well
- [ ] CTAs are clear
- [ ] Contact information is correct

---

## Priority Order for Claude Code

Execute tasks in this order for maximum impact:

**Week 1:**
1. Task 1.1 - Multilingual infrastructure
2. Task 1.2 - SEO components
3. Task 1.3 - Update existing pages with SEO
4. Task 1.4 - Sitemap and robots.txt

**Week 2:**
5. Task 2.3 - Portuguese home page
6. Task 2.4 - Portuguese about page
7. Task 2.5 - Portuguese projects page

**Week 3:**
8. Task 2.1 - English services page
9. Task 2.6 - Portuguese services page

**Week 4:**
10. Task 2.2 - English case study pages
11. Task 2.7 - Portuguese case study pages

**Week 5-6:**
12. Task 3.1 - City page template (8 pages)
13. Task 3.2 - Industry page template (4 pages)
14. Task 3.3 - Update sitemap

**Week 7-8:**
15. Task 4.1 - Blog infrastructure
16. Task 4.2 - First 5 blog posts

**Week 9+:**
17. Task 5.1 - Image optimization
18. Task 5.2 - Performance optimization
19. Task 5.3 - Analytics setup

---

## Success Metrics

### Immediate (Week 1-2)
- [ ] Website is bilingual
- [ ] All pages have proper SEO meta tags
- [ ] Schema markup validates
- [ ] Sitemap generated

### Short-term (Month 1-2)
- [ ] All content created (services, case studies)
- [ ] Programmatic pages live (12 pages)
- [ ] Core Web Vitals pass
- [ ] Analytics tracking

### Medium-term (Month 3-6)
- [ ] Ranking for 10+ Portuguese keywords
- [ ] Organic traffic from Portugal
- [ ] Contact form submissions from Portuguese visitors
- [ ] Blog posts indexed and ranking

### Long-term (Month 6-12)
- [ ] Top 10 rankings for primary keywords
- [ ] Top 20 rankings for 20+ long-tail keywords
- [ ] Consistent lead generation
- [ ] Authority in Portuguese web dev market

---

This task breakdown provides clear, sequential tasks for Claude Code to execute. Each task has specific deliverables and acceptance criteria.

