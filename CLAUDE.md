# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bilingual (EN/PT) website for Luís Madeira — an AI workflow consultant based in Porto, Portugal. The business focuses on delivering AI projects, redesigning workflows, and saving SMEs time and money. Team training is offered as an add-on. Live at https://www.estudiolm.com. Deployed on Vercel.

**Important:** Luís no longer offers website development or SEO services. Do not reference these as current offerings.

## Commands

- `npm run dev` — Dev server at localhost:4321
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally

No test framework or linter is configured.

## Architecture

**Framework:** Astro 5.x (static output, no JS framework — vanilla JS only)

**i18n:** English at root (`/`), Portuguese at `/pt/`. Configured in `astro.config.mjs` with `prefixDefaultLocale: false`. Path mappings between EN↔PT are in `src/utils/i18n.ts` — **update them when adding new pages**. Only `getLocaleFromPath()` and `getAlternatePath()` are used (by LanguageSwitcher).

**Routing:** File-based. Every EN page under `src/pages/` has a PT mirror under `src/pages/pt/`.

**Current pages (9 total):**
- `/` and `/pt/` — Homepage (AI-focused hero, services, process)
- `/consulting` and `/pt/consultoria` — Main services page (AI consulting)
- `/projects` and `/pt/projetos` — Projects listing (empty, awaiting AI case studies)
- `/about` and `/pt/sobre` — About page
- `/pt/ai-contact` — AI contact form (PT only)

**Components** (`src/components/`):
- `SEO.astro` — Meta tags, Open Graph, Twitter Cards, hreflang
- `Schema.astro` — JSON-LD structured data (Organization, LocalBusiness, Service)
- `Footer.astro` — Site footer with quick links
- `ContactModal.astro` — WhatsApp/call/form contact modal
- `LanguageSwitcher.astro` — EN↔PT toggle
- `ConversionTracking.astro` — GTM/analytics events

**SEO infrastructure:** `robots.txt.js` and `sitemap.xml.js` are dynamic Astro endpoints in `src/pages/`.

**Styling:** Pure CSS with scoped `<style>` tags per `.astro` file. No CSS framework. Uses CSS custom properties for theming:
- `--color-bg: #0d0d0d`, `--color-text: #c7c7c7`, `--color-accent: #d3e97a`, `--color-dark: #1a1a1a`
- Fonts: Bebas Neue (headings), Inter (body) via Google Fonts CDN

**Page structure:** Each page is a full HTML document (no layout component). Navigation, GTM script, font links, and CSS reset are repeated per page.

## Key Conventions

- Navigation and common JS (mobile menu, scroll-hide nav, smooth scroll) are duplicated in each page file — changes must be applied to all pages manually.
- Nav links: Services → `/consulting`, Projects, About, Contact. No dropdown.
- Breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile).
- The `.md files/CLAUDE.md` file contains the full design system reference (colors, typography, spacing, component patterns). Consult it when making visual changes.
- `vercel.json` handles naked domain → www redirect and HSTS headers.
