# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite + React + TypeScript site. Application code lives in `src/`: route pages in `src/pages`, shared UI in `src/components`, global styles in `src/styles`, and GLSL shader strings in `src/shaders`. Static assets that must be copied as-is belong in `public/` (for example `public/images/profile_photo.jpeg`). Build output is generated into `dist/`; `_site/`, `vendor/`, and `dist/` are legacy or generated directories and should not be edited by hand.

## Build, Test, and Development Commands
Use Node 20 to match the GitHub Pages workflow.

- `npm ci` installs the exact locked dependency set.
- `npm run dev` starts the local Vite dev server.
- `npm run build` runs `tsc` and then produces the production bundle in `dist/`.
- `npm run preview` serves the built bundle locally for a final check.

There is no separate lint or test script configured today, so `npm run build` is the required validation step before opening a PR.

## Coding Style & Naming Conventions
Follow the existing TypeScript/React style: strict typing, functional components, single quotes, and semicolon-free statements. Use 2-space indentation and keep imports grouped at the top of each file. Name React components and page files in PascalCase (`ResumePage.tsx`), colocate CSS Modules beside their component (`Header.tsx` and `Header.module.css`), and use descriptive camelCase for variables and helpers.

## Testing Guidelines
No automated test framework is committed yet. Until one is added, validate changes with `npm run build` and a manual browser pass over the affected routes in `npm run dev` or `npm run preview`. For UI changes, verify navigation, responsive layout, and asset loading. If you add complex logic, include a small test plan in the PR description.

## Commit & Pull Request Guidelines
Recent commits use short, imperative, sentence-style summaries such as `Modernize resume page with card aesthetic`. Keep commits focused and similarly phrased. PRs should include a concise description, note any route or asset changes, link the related issue when applicable, and attach screenshots or short recordings for visible UI updates. Confirm that `npm run build` passed before requesting review.
