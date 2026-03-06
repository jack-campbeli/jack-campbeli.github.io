# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Serve locally with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site is deployed to GitHub Pages on the `gh-pages` branch via GitHub Actions (`.github/workflows/deploy.yml`). The `main` branch is the base for PRs.

## Architecture

This is a **Vite + React + TypeScript** SPA hosted on GitHub Pages.

### Stack
- **Vite** — build tool and dev server
- **React 18** with **React Router v6** (BrowserRouter, lazy-loaded pages)
- **TypeScript** — strict mode
- **CSS Modules** — component-scoped styles (`.module.css` files)
- **p5.js 1.7.0** — WebGL shader rendering

### Key files
- `index.html` — entry point (includes SPA redirect restore script for GitHub Pages)
- `vite.config.ts` — Vite config with React plugin
- `src/main.tsx` — React root, BrowserRouter, global CSS imports
- `src/App.tsx` — route definitions with lazy-loaded pages
- `src/styles/variables.css` — CSS custom properties (--color-accent, --color-muted, --color-border)
- `src/styles/global.css` — base/reset styles
- `src/styles/layout.css` — wrapper, page-content, page-title

### Components (`src/components/`)
- `Layout.tsx` — site wrapper (Header + main + Footer)
- `Header.tsx` — site title with ShaderSphere + nav links + mobile hamburger
- `Footer.tsx` — GitHub + LinkedIn links
- `ShaderSphere.tsx` — p5.js WebGL shader in instance mode (useRef/useEffect), configurable size/speed
- `NavCard.tsx`, `ResumeEntry.tsx`, `ProjectCard.tsx`, `SkillChip.tsx` — reusable UI components

### Pages (`src/pages/`)
- `HomePage.tsx` — hero section + NavCard grid
- `AboutPage.tsx` — profile photo + bio
- `ResumePage.tsx` — full resume with all sections
- `PostsPage.tsx` — blog posts placeholder
- `TestPage.tsx` — large ShaderSphere demo (hidden from nav)
- `NotFoundPage.tsx` — 404 page

### Shader graphics (WebGL via p5.js)
- `src/shaders/vertex.glsl.ts` and `fragment.glsl.ts` — GLSL code as exported strings
- `ShaderSphere` component creates a p5 instance in WEBGL mode, renders animated rotating sphere with concentric circle pattern
- Two instances: header (60x40, radius 15) and test page (600x400, radius 120)
- `sessionStorage` persists animation start time across navigations

### GitHub Pages SPA routing
- `public/404.html` — redirects unknown paths to `/?/path` so the SPA can handle them
- `index.html` — restores the original path from the query string on load
