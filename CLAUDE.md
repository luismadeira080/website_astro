# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bilingual (EN/PT) portfolio and business website for Estúdio LM / Luís Madeira — an AI workflow consultant and web developer based in Porto, Portugal. Live at https://www.estudiolm.com. Deployed on Vercel.

## Commands

- `npm run dev` — Dev server at localhost:4321
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally

No test framework or linter is configured.

## Architecture

**Framework:** Astro 5.x (static output, no JS framework — vanilla JS only)

**i18n:** English at root (`/`), Portuguese at `/pt/`. Configured in `astro.config.mjs` with `prefixDefaultLocale: false`. Translation strings live in `src/utils/i18n.ts` with helpers `t()`, `getLocaleFromPath()`, and `getAlternatePath()`. Path mappings between EN↔PT are hardcoded in that file — **update them when adding new pages**.

**Routing:** File-based. Every EN page under `src/pages/` has a PT mirror under `src/pages/pt/`. Project case studies live in `src/pages/projects/` (EN) and `src/pages/pt/projetos/` (PT).

**Components** (`src/components/`):
- `SEO.astro` — Meta tags, Open Graph, Twitter Cards, hreflang
- `Schema.astro` — JSON-LD structured data (Organization, LocalBusiness)
- `Footer.astro`, `ContactModal.astro`, `ServiceSelectionModal.astro`
- `LanguageSwitcher.astro`, `Breadcrumbs.astro`
- `ConversionTracking.astro` — GTM/analytics events

**SEO infrastructure:** `robots.txt.js` and `sitemap.xml.js` are dynamic Astro endpoints in `src/pages/`.

**Styling:** Pure CSS with scoped `<style>` tags per `.astro` file. No CSS framework. Uses CSS custom properties for theming:
- `--color-bg: #0d0d0d`, `--color-text: #c7c7c7`, `--color-accent: #d3e97a`, `--color-dark: #1a1a1a`
- Fonts: Bebas Neue (headings), Inter (body) via Google Fonts CDN

**Page structure:** Each page is a full HTML document (no layout component). Navigation, GTM script, font links, and CSS reset are repeated per page.

## Key Conventions

- Navigation and common JS (mobile menu, scroll-hide nav, smooth scroll) are duplicated in each page file — changes must be applied to all pages manually.
- Breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile).
- Project images go in `/public/` as SVG (logos) or PNG/JPG (photos).
- The `.md files/CLAUDE.md` file contains the full design system reference (colors, typography, spacing, component patterns). Consult it when making visual changes.
- `vercel.json` handles naked domain → www redirect and HSTS headers.
