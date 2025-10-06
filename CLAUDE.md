# Design System Rules - Luís Madeira Portfolio

## 1. Design Token Definitions

### Color Tokens
Design tokens are defined using CSS custom properties (CSS variables) in the `:root` selector within `<style>` tags in each `.astro` file.

**Location:** Inline `<style>` blocks in `.astro` files
**Format:** CSS Custom Properties

```css
:root {
    --color-bg: #0d0d0d;        /* Main background - dark */
    --color-text: #c7c7c7;      /* Primary text - light gray */
    --color-accent: #d3e97a;    /* Accent/CTA - lime green */
    --color-dark: #1a1a1a;      /* Secondary background */
}
```

### Typography Tokens

```css
:root {
    --font-primary: 'Inter', sans-serif;      /* Body text */
    --font-heading: 'Bebas Neue', sans-serif; /* Headings */
}
```

**Font Loading:**
- Google Fonts via CDN in `<head>`
- Preconnect optimization included
- Fonts: Inter (weights: 400, 500, 600), Bebas Neue

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Spacing System
No formal spacing tokens defined. Spacing uses direct pixel values:
- Padding: `16px`, `24px`, `32px`, `40px`, `48px`, `60px`, `80px`, `108px`
- Gaps: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `60px`
- Border radius: `12px`, `16px`, `27px` (buttons), `50%` (circular)

### Typography Scale

**Headings (Desktop):**
- H1 (Hero): `88px` (Bebas Neue)
- H2 (Section): `76px`, `91px` (Bebas Neue)
- H3 (Project): `32px`, `45px` (Inter)
- H4 (Subsection): `16px`, `20px` (Inter, uppercase)

**Body Text:**
- Regular: `16px`, `18px`
- Small: `14px`
- Large: `20px`

**Mobile Scaling:**
- H1: `48px` → `64px`
- H2: `40px` → `57px`
- H3: `28px` → `32px`

## 2. Component Library

### Component Architecture
**Framework:** Astro (single-file components)
**Pattern:** Co-located styles (scoped `<style>` tags)
**No separate component library** - Components are defined inline within page files

### Core Components

#### Navigation Component
**Location:** Repeated in each `.astro` file
```html
<nav class="navigation">
    <a href="/" class="logo">luís madeira</a>
    <div class="nav-links">
        <a href="/#work">Work</a>
        <a href="/about">About</a>
        <a href="/#contact">Contact</a>
    </div>
    <div class="mobile-menu-toggle">
        <span></span>
        <span></span>
    </div>
</nav>
```

**Features:**
- Sticky positioning (`position: sticky; top: 0`)
- Mobile hamburger menu
- Hide on scroll down behavior (via JavaScript)

#### Button Components

**Primary Button:**
```html
<a href="#contact" class="btn-primary">CONTACT ME</a>
```

**Styles:**
```css
.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-bg);
    padding: 16px 32px;
    border-radius: 27px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.5px;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #c5db6f; /* Darker accent */
    transform: translateY(-2px);
}
```

**Icon Button (Social):**
```css
.social-icon {
    width: 54px;
    height: 54px;
    border: 1px solid var(--color-text);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-icon:hover {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    color: var(--color-bg);
}
```

**Link with Underline:**
```css
.project-link-underline {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
}

.project-link-underline::after {
    content: '';
    height: 2px;
    background-color: var(--color-accent);
    width: 100%;
}
```

#### Card Components

**Project Showcase Card:**
```html
<div class="project-showcase">
    <div class="project-image-card">
        <img src="/image.svg" alt="Project">
    </div>
    <div class="project-content">
        <div class="project-information">
            <div class="project-title-description">
                <h3>Project Title</h3>
                <h4>Overview</h4>
                <div class="info-list">
                    <div class="info-row">
                        <span class="info-label">Label</span>
                        <span class="info-value">Value</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Styles:**
```css
.project-image-card {
    width: 600px;
    height: 600px;
    background-color: var(--color-dark);
    border-radius: 12px;
    overflow: hidden;
}

.project-image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

**Service Card:**
```css
.service-card {
    background-color: var(--color-dark);
    border: 1px solid #333;
    border-radius: 16px;
    padding: 48px;
}

.service-card:hover {
    border-color: var(--color-accent);
}
```

#### Form Component
```html
<form>
    <div class="form-group">
        <label>Name</label>
        <input type="text" placeholder="John Doe">
    </div>
    <button type="submit" class="btn-submit">SUBMIT</button>
</form>
```

```css
.form-group input,
.form-group textarea {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #333;
    padding: 16px;
    color: var(--color-text);
}

.form-group input:focus {
    border-bottom-color: var(--color-accent);
}
```

## 3. Frameworks & Libraries

### UI Framework
- **Astro 5.14.1** (Static Site Generator)
- No JavaScript framework (vanilla JS for interactions)
- Server-side rendering with static HTML output

### Styling
- **Pure CSS** (no preprocessor)
- **Scoped styles** via Astro's `<style>` tags
- **No CSS framework** (no Tailwind, Bootstrap, etc.)
- **Methodology:** BEM-like naming convention

### Build System
- **Astro CLI** for build/dev
- **esbuild** (bundled with Astro)
- Scripts:
  ```json
  {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
  ```

### Key Dependencies
```json
{
  "dependencies": {
    "astro": "^5.14.1"
  }
}
```

## 4. Asset Management

### Storage Structure
```
/public/
├── favicon.svg
├── profile.jpeg
├── Design sem nome.svg           (Porto Car Care logo)
├── brunno-rodrigues.svg
├── porto-car-care.svg
└── Screenshot 2025-10-06 at 11.*.png
```

### Asset References
**Pattern:** Absolute paths from `/public` directory
```html
<img src="/porto-car-care.svg" alt="Porto Car Care">
<img src="/profile.jpeg" alt="Luís Madeira">
```

### Image Optimization
- **SVG preferred** for logos and graphics
- **JPG/PNG** for photos
- **No CDN** - assets served directly
- **object-fit: cover** used for responsive images
```css
.project-image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### Asset Dimensions
**Project Images:**
- Desktop: `600px × 600px` (1:1 square)
- Mobile: Full width, `400px` height

**Hero Image:**
- Desktop: `600px × 700px`
- Mobile: Full width, `400px` height

## 5. Icon System

### Icon Format
**SVG inline** - No icon library/font

### Icon Storage
Icons are embedded directly in HTML as inline SVG:
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="..." fill="currentColor"/>
</svg>
```

### Icon Usage Pattern
```html
<!-- Arrow Icon -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="currentColor"/>
</svg>

<!-- Social Icons: LinkedIn, GitHub, Instagram, Twitter -->
<!-- Download Icon -->
<!-- Hamburger Menu (CSS-based) -->
```

### Icon Styling
```css
svg {
    fill: currentColor; /* Inherits parent color */
}

.social-icon svg {
    width: 26px;
    height: 26px;
}
```

### Mobile Menu Icon
```css
.mobile-menu-toggle span {
    width: 32px;
    height: 2px;
    background-color: var(--color-text);
}

/* Animated to X on active */
.mobile-menu-toggle.active span:first-child {
    transform: rotate(45deg) translate(8px, 8px);
}
```

## 6. Styling Approach

### CSS Methodology
**Hybrid BEM-like approach** with semantic naming:
- `.navigation`, `.hero`, `.about-section`
- `.btn-primary`, `.social-icon`
- `.project-showcase`, `.project-content`
- `.info-list`, `.info-row`, `.info-label`, `.info-value`

### Style Organization
**Co-located styles** - Each `.astro` file contains:
1. Frontmatter (empty `---` blocks)
2. HTML structure
3. `<script>` for interactions
4. `<style>` for component styles

**No global stylesheet** - Styles repeated across files

### Common Patterns

**Reset:**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-primary);
    background-color: var(--color-bg);
    color: var(--color-text);
    line-height: 1.6;
    overflow-x: hidden;
}
```

**Transitions:**
```css
transition: color 0.3s ease;
transition: transform 0.3s ease, background-color 0.3s ease;
```

**Hover States:**
```css
.nav-links a:hover {
    color: var(--color-accent);
}

.btn-primary:hover {
    background-color: #c5db6f;
    transform: translateY(-2px);
}
```

### Responsive Design Strategy

**Breakpoints:**
```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small mobile */ }
```

**Mobile-First Adjustments:**
- Reduce padding: `108px` → `32px` → `16px`
- Stack layouts: `grid/flex` → `flex-direction: column`
- Scale typography: `88px` → `64px` → `48px`
- Full-width images
- Hide/show navigation with mobile menu

**Grid Patterns:**
```css
/* Desktop */
.hero {
    display: grid;
    grid-template-columns: 1fr 600px;
    gap: 60px;
}

/* Tablet */
@media (max-width: 1024px) {
    .hero {
        grid-template-columns: 1fr;
    }
}
```

**Flex Patterns:**
```css
/* Desktop */
.project-showcase {
    display: flex;
    gap: 48px;
}

/* Reverse layout */
.project-reverse {
    flex-direction: row-reverse;
}

/* Mobile */
@media (max-width: 1024px) {
    .project-showcase {
        flex-direction: column;
    }
    .project-reverse {
        flex-direction: column;
    }
}
```

## 7. Project Structure

### File Organization
```
/
├── public/              # Static assets
│   ├── favicon.svg
│   ├── profile.jpeg
│   └── *.svg           # Project images
├── src/
│   └── pages/          # File-based routing
│       ├── index.astro           # Home page
│       ├── about.astro           # About page
│       ├── projects.astro        # Projects listing
│       └── projects/             # Individual projects
│           ├── adventure-time.astro
│           ├── world-news.astro
│           └── ecommerce.astro
├── package.json
└── astro.config.mjs
```

### Routing
**File-based routing** (Astro convention):
- `/` → `src/pages/index.astro`
- `/about` → `src/pages/about.astro`
- `/projects` → `src/pages/projects.astro`
- `/projects/adventure-time` → `src/pages/projects/adventure-time.astro`

### Page Structure Pattern
Every page follows this structure:
```astro
---
// Frontmatter (usually empty)
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <!-- Google Fonts -->
</head>
<body>
    <!-- Navigation (repeated) -->
    <nav class="navigation">...</nav>

    <!-- Page Content -->
    <section>...</section>

    <!-- JavaScript -->
    <script>...</script>
</body>
</html>

<style>
/* Scoped styles */
</style>
```

### Section Patterns

**Section with Header:**
```html
<section class="services-section">
    <div class="section-header">
        <h2>SECTION TITLE</h2>
        <p>Description text</p>
    </div>
    <!-- Content -->
</section>
```

**Bordered Sections:**
```css
section {
    padding: 80px 108px;
    border-top: 1px solid #333;
}
```

## 8. JavaScript Patterns

### Mobile Menu Toggle
```javascript
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});
```

### Smooth Scroll
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
```

### Hide Nav on Scroll
```javascript
let lastScroll = 0;
const nav = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});
```

## 9. Case Study Component Pattern

### Structure
```html
<div class="project-showcase">
    <div class="project-image-card">
        <img src="/image.svg" alt="Client">
    </div>
    <div class="project-content">
        <div class="project-information">
            <div class="project-title-description">
                <h3>Client Name — Project Type</h3>

                <h4>Overview</h4>
                <div class="info-list">
                    <div class="info-row">
                        <span class="info-label">Client</span>
                        <span class="info-value">Client name</span>
                    </div>
                    <!-- More rows -->
                </div>

                <h4>What I did</h4>
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                </ul>

                <h4>Results</h4>
                <ul>
                    <li>Result 1</li>
                    <li>Result 2</li>
                </ul>
            </div>
        </div>
        <div class="project-links-wrapper">
            <a href="/#contact" class="project-link-underline">
                <span>CTA TEXT</span>
                <svg>...</svg>
            </a>
        </div>
    </div>
</div>
```

### Alternating Layout
```html
<!-- Left image, right content -->
<div class="project-showcase">...</div>

<!-- Right image, left content -->
<div class="project-showcase project-reverse">...</div>
```

## 10. Design Integration Guidelines

### Adding New Components from Figma

1. **Extract Design Tokens:**
   - Colors → Add to `:root` variables
   - Typography → Match to existing font scale or add new sizes
   - Spacing → Use existing values or add to spacing system

2. **Create Component Markup:**
   - Follow BEM-like naming convention
   - Use semantic HTML5 elements
   - Include inline SVG for icons

3. **Style Components:**
   - Add scoped `<style>` block to `.astro` file
   - Use CSS custom properties for themeable values
   - Include hover/focus states
   - Add responsive breakpoints

4. **Mobile Responsiveness:**
   - Add `@media (max-width: 1024px)` for tablet
   - Add `@media (max-width: 768px)` for mobile
   - Stack layouts vertically
   - Scale typography down 30-40%
   - Reduce padding to `16px`

5. **Images:**
   - Save to `/public/` directory
   - Use descriptive filename (kebab-case)
   - Reference with absolute path: `/image-name.svg`
   - Prefer SVG for logos, JPG/PNG for photos
   - Ensure images are 600×600px for project cards

### Color Usage Rules
- Background: `var(--color-bg)` (#0d0d0d)
- Text: `var(--color-text)` (#c7c7c7)
- CTAs/Links: `var(--color-accent)` (#d3e97a)
- Cards/Borders: `var(--color-dark)` (#1a1a1a) or #333
- Hover accent: `#c5db6f` (darker lime)

### Typography Rules
- All headings: `font-family: var(--font-heading)` (Bebas Neue)
- All body text: `font-family: var(--font-primary)` (Inter)
- Uppercase for: CTAs, section headers, h4 subheadings
- Letter spacing: Negative for large text (-0.88px for 88px)

### Animation Rules
- Transitions: `0.3s ease`
- Transform: `translateY(-2px)` for lift effect
- Color transitions on hover
- No complex animations (keep performance high)
