# Repository Guidelines

## General Instructions
When I give a specific format or example, use it exactly. Do not improvise or build from documentation first if the format is unclear; ask for the preferred format before implementing.

## Project Overview
This is a Vite + React + TypeScript personal website project. Primary languages: TypeScript, CSS, and HTML.

## Project Structure & Module Organization
This repository is a Vite + React + TypeScript site. Application code lives in `src/`: route pages in `src/pages`, shared UI in `src/components`, and global styles in `src/styles`. Static assets that must be copied as-is belong in `public/` (for example `public/images/profile_photo.jpeg`). Build output is generated into `dist/`; `_site/`, `vendor/`, and `dist/` are legacy or generated directories and should not be edited by hand.

## Build, Test, and Development Commands
Use Node 20 to match the GitHub Pages workflow.

- `npm install` installs dependencies.
- `npm ci` installs the exact locked dependency set.
- `npm run dev` starts the local Vite dev server.
- `npm run build` runs `tsc` and then produces the production bundle in `dist/`.
- `npm run preview` serves the built bundle locally for a final check.

The site is deployed to GitHub Pages on the `gh-pages` branch via GitHub Actions (`.github/workflows/deploy.yml`). The `main` branch is the base for PRs. The deploy workflow uses Node 20 and `npm ci`.

There is no separate lint or test script configured today, so `npm run build` is the required validation step before opening a PR.

## Coding Style & Naming Conventions
Follow the existing TypeScript/React style: strict typing, functional components, single quotes, and semicolon-free statements. Use 2-space indentation and keep imports grouped at the top of each file. Name React components and page files in PascalCase (`ResumePage.tsx`), colocate CSS Modules beside their component (`Header.tsx` and `Header.module.css`), and use descriptive camelCase for variables and helpers.

## Testing Guidelines
No automated test framework is committed yet. Until one is added, validate changes with `npm run build` and a manual browser pass over the affected routes in `npm run dev` or `npm run preview`. For UI changes, verify navigation, responsive layout, and asset loading. If you add complex logic, include a small test plan in the PR description.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries such as `Modernize resume page with card aesthetic`. When creating new commits, keep the summary focused and imperative, and use a conventional commit prefix when committing through AI tooling, for example `feat: modernize resume page with card aesthetic`. Always push to the current branch unless told otherwise. PRs should include a concise description, note any route or asset changes, link the related issue when applicable, and attach screenshots or short recordings for visible UI updates. Confirm that `npm run build` passed before requesting review.

## Architecture

This is a **Vite + React + TypeScript** SPA hosted on GitHub Pages.

### Stack
- **Vite** — build tool and dev server
- **React 18** with **React Router v6** (BrowserRouter, lazy-loaded pages)
- **TypeScript** — strict mode
- **CSS Modules** — component-scoped styles (`.module.css` files)

### Key files
- `index.html` — entry point (includes SPA redirect restore script for GitHub Pages and the Manrope web font)
- `vite.config.ts` — Vite config with React plugin
- `src/main.tsx` — React root, BrowserRouter, global CSS imports
- `src/App.tsx` — route definitions, document title updates, and route scroll reset
- `src/styles/variables.css` — design tokens for the warm light theme
- `src/styles/global.css` — base/reset styles, background treatment, smooth scrolling, and focus states
- `src/styles/layout.css` — wrapper, page-content, shared page shell, eyebrow, and section-card primitives

### Components (`src/components/`)
- `Layout.tsx` — site wrapper (Header + main + Footer)
- `Header.tsx` — sticky pill-style site header with nav links, mobile hamburger, and email CTA
- `Footer.tsx` — site summary with email, GitHub, and LinkedIn links
- `NavCard.tsx`, `ResumeEntry.tsx`, `ProjectCard.tsx`, `SkillChip.tsx` — reusable UI components

### Pages (`src/pages/`)
- `HomePage.tsx` — landing page with a restrained hero, work principles, nav cards, and selected projects
- `AboutPage.tsx` — profile photo, bio, and values snapshot
- `ResumePage.tsx` — full resume presented in section cards
- `NotFoundPage.tsx` — styled 404 page with links back into the main site

### GitHub Pages SPA routing
- `public/404.html` — redirects unknown paths to `/?/path` so the SPA can handle them
- `index.html` — restores the original path from the query string on load
- `src/App.tsx` — forces route changes back to the top of the page and sets `history.scrollRestoration = 'manual'`
