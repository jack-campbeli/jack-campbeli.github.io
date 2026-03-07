# Website Design System

## Purpose

This document defines the current visual direction for the site.

The site is no longer built around shader graphics or a signature animated element. The design now depends on typography, spacing, soft surfaces, and consistent layout rhythm. The goal is a personal site that feels clean, calm, and approachable without becoming sparse or cold.

This document should be used as the standard for future UI changes across the Vite + React site.

## Design Summary

The current site should feel:

- light and welcoming
- precise without looking corporate
- structured without looking rigid
- polished without relying on spectacle

The homepage can be expressive, but it should stay restrained. Large copy, oversized callouts, and overly “brand statement” hero treatments should be avoided. The overall tone should read as warm product design, not portfolio theater.

## Core Principles

### 1. Quiet hierarchy

Hierarchy should be clear, but not loud.

Implications:

- avoid oversized hero copy unless there is a strong reason
- prefer compact section headings over dramatic display moments
- supporting content should feel secondary through spacing and scale, not through being hidden

### 2. Warm light surfaces

The site is light-mode only and should lean warm rather than stark.

Implications:

- use soft off-white backgrounds instead of pure white
- use gentle gradients and surface variation sparingly
- keep contrast readable without drifting into black-on-white harshness

### 3. Consistent framing

Pages should feel like they belong to the same system.

Implications:

- use the shared `section-card`, `eyebrow`, and page-shell primitives
- keep border, radius, and shadow usage consistent across pages
- avoid inventing page-specific framing patterns when shared ones already exist

### 4. Motion should stay subtle

The site should feel smooth, not animated.

Implications:

- use quick hover transitions and small lift only
- avoid long easing curves, scroll gimmicks, or decorative motion systems
- prioritize smooth route changes and stable scrolling over flashy effects

### 5. Interaction should feel obvious without extra chrome

Interactive elements should be clearly clickable, but not over-explained.

Implications:

- prefer full-card click targets over redundant “Open” pills or repeated button labels
- use contrast, hover, and spacing to signal interaction
- keep CTA count low in each section

## Visual Tokens

### Typography

Current direction:

- font family: `Manrope`, then clean sans-serif fallbacks
- body copy around `16px`
- body line-height around `1.65`
- page titles around `clamp(2.3rem, 7vw, 4.4rem)`
- section headings around `clamp(1.5rem, 4vw, 2.1rem)`

Usage rules:

- keep headings concise
- favor readable measures over narrow dramatic columns
- do not use oversized homepage headlines by default; the current home hero should stay restrained

### Color

Current palette:

- `--color-bg: #fbf7f2`
- `--color-bg-strong: #f2e8db`
- `--color-surface: #fffdf9`
- `--color-surface-soft: #f5ede2`
- `--color-surface-muted: #efe7da`
- `--color-text: #233136`
- `--color-muted: #5f6d71`
- `--color-border: rgba(35, 49, 54, 0.12)`
- `--color-accent: #c75d35`
- `--color-accent-strong: #9d4324`
- `--color-accent-soft: #f6ddd1`
- `--color-link: #2b6f8b`
- `--color-link-strong: #1f576d`

Usage rules:

- reserve accent warmth for emphasis, chips, and select interactive states
- use link blue for inline links and navigation accents
- keep large surfaces mostly neutral

### Layout tokens

Current layout variables:

- `--wrapper-max-width: 1120px`
- `--wrapper-padding: clamp(18px, 4vw, 32px)`
- `--content-max-width: 760px`
- `--section-gap: clamp(24px, 4vw, 40px)`
- `--section-gap-lg: clamp(40px, 7vw, 72px)`

Usage rules:

- align header, main content, and footer to the same wrapper
- preserve generous but controlled vertical spacing
- keep reading-heavy content within the narrower content measure where possible

### Radii and depth

Current tokens:

- `--radius-sm: 16px`
- `--radius-md: 24px`
- `--radius-lg: 30px`
- `--shadow-soft: 0 18px 44px rgba(71, 51, 36, 0.08)`
- `--shadow-lift: 0 20px 48px rgba(71, 51, 36, 0.12)`

Usage rules:

- use rounded corners consistently
- keep shadows soft and diffuse
- do not introduce hard, high-contrast drop shadows

## Layout Patterns

### Site shell

The site remains a simple vertical stack:

- sticky header
- main content
- footer

The shell uses a soft atmospheric background with fixed radial washes. This should stay subtle and should not compete with content.

### Header

The header should feel compact, friendly, and quietly premium.

Current direction:

- pill-shaped surfaced container
- `JC` brand mark plus name/role
- simple route nav (`Home`, `About`, `Resume`)
- optional email CTA on larger screens

Usage rules:

- keep nav copy short
- maintain the sticky behavior
- mobile navigation should remain compact and surfaced

### Page shell

Pages should generally use the shared `.page-shell` container and compose sections as surfaced cards or aligned section blocks.

Usage rules:

- favor a small number of strong sections over many fragmented ones
- preserve the same spacing rhythm across Home, About, Resume, and 404

## Component Patterns

### Homepage hero

The homepage hero should be inviting and restrained.

Current direction:

- two-column layout on larger screens
- left side for intro copy and actions
- right side for compact supporting metadata (`Currently`, `Focus`, `Style`)

Usage rules:

- keep the title moderate rather than showy
- supporting metadata should read as secondary, not like three equal feature cards
- action buttons should support the intro, not dominate it

### Nav cards

Nav cards should act as clean entry points to key pages or contact actions.

Usage rules:

- the entire card should feel clickable
- avoid redundant internal action pills
- descriptions should remain short and conversational

### Resume sections

The resume page should preserve content while improving structure.

Usage rules:

- use section cards for major groupings
- keep metadata rails readable on desktop and stacked cleanly on mobile
- do not rewrite resume content casually; presentation changes are preferred over content edits

### About page

The About page should feel personal but still aligned with the rest of the system.

Usage rules:

- keep the profile image prominent but calm
- pair biography copy with compact values/snapshot cards
- maintain the same surface language used elsewhere on the site

## Interaction and Performance

- The app uses React Router with lazy-loaded pages.
- Route changes are expected to reset the page to the top.
- `history.scrollRestoration` is set to manual in the app shell.
- Smoothness matters more than novelty; do not add heavy runtime animation libraries without a clear need.

## Guardrails

- Do not reintroduce `p5.js`, shader graphics, or decorative canvas effects without an intentional design reset.
- Do not add a dark mode variant piecemeal.
- Do not turn the site into an oversized marketing landing page.
- When in doubt, prefer smaller type, tighter hierarchy, and clearer spacing over adding more decoration.
