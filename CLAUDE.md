# CLAUDE.md

This file provides context and guidance for AI assistants working on this repository.

## Repository Overview

This is a **Jekyll-based GitHub Pages personal site** for jack-campbeli. It uses the Minima theme and is deployed automatically via GitHub Pages from the `master` branch.

**Live site:** `https://jack-campbeli.github.io`

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Static Site Generator | Jekyll (via `github-pages` gem) |
| Hosting | GitHub Pages |
| Theme | Minima (~> 2.5) |
| Dependency Manager | Bundler |
| Content Format | Markdown (kramdown) |
| Feed Plugin | jekyll-feed |

## Repository Structure

```
jack-campbeli.github.io/
├── _config.yml          # Site-wide configuration (title, email, theme, plugins)
├── _posts/              # Blog posts — named YYYY-MM-DD-title.markdown
├── index.markdown       # Homepage (uses layout: home)
├── about.markdown       # About page (uses layout: page, permalink: /about/)
├── 404.html             # Custom 404 error page
├── Gemfile              # Ruby gem dependencies
├── Gemfile.lock         # Locked dependency versions (commit this file)
└── .bundle/config       # Bundler path config (vendor/bundle)
```

**Build artifacts (gitignored):**
- `_site/` — Jekyll build output
- `.sass-cache/`, `.jekyll-cache/`, `.jekyll-metadata/`
- `vendor/` — bundled gems

## Development Workflow

### Setup

```bash
bundle install
```

Gems are installed locally to `vendor/bundle` (configured in `.bundle/config`).

### Local Development

```bash
bundle exec jekyll serve
```

Starts a local server at `http://localhost:4000` with live reload on file changes. Note: `_config.yml` changes require a server restart.

### Build Only

```bash
bundle exec jekyll build
```

Outputs to `_site/`.

### Updating Dependencies

```bash
bundle update github-pages
```

Updates the GitHub Pages gem and all its dependencies. Always commit the updated `Gemfile.lock`.

## Content Conventions

### Blog Posts

- Stored in `_posts/` with filename format: `YYYY-MM-DD-title.markdown`
- Required front matter:

```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS -0700
categories: category1 category2
---
```

### Pages

- Root-level `.markdown` files become site pages
- Required front matter:

```yaml
---
layout: page
title: Page Title
permalink: /url-path/
---
```

### Homepage

- `index.markdown` uses `layout: home` which renders the post list automatically via Minima theme

### Layouts Available (from Minima theme)

- `home` — Homepage with post list
- `page` — Generic content page
- `post` — Blog post with date, categories, author info
- `default` — Base layout

## Site Configuration

Key settings in `_config.yml`:

```yaml
title: Your awesome title      # Site title shown in header/footer
email: your-email@example.com  # Contact email
description: ...               # Used in meta tags and feed.xml
baseurl: ""                    # Subpath (empty for root domain)
url: ""                        # Full URL with protocol
twitter_username: ...          # Used by Minima theme
github_username: ...           # Used by Minima theme
theme: minima
plugins:
  - jekyll-feed
```

Changes to `_config.yml` require restarting `jekyll serve`.

## Deployment

- **Automatic:** Pushing to `master` triggers GitHub Pages to build and deploy
- **No CI/CD configuration needed** — GitHub Pages handles it natively
- **Build time:** Typically 1-2 minutes after push
- GitHub Pages uses the `github-pages` gem which pins all plugin versions for compatibility

## Customizing the Minima Theme

To override theme defaults, copy files from the Minima gem into the repository:

```bash
# Find gem location
bundle info minima

# Copy a layout to override it
cp $(bundle info minima --path)/\_layouts/default.html \_layouts/
```

Override priority: local files > theme files.

Commonly overridden:
- `_layouts/` — Page layout templates (HTML + Liquid)
- `_includes/` — Reusable HTML snippets (header, footer, head)
- `_sass/` — SCSS stylesheets
- `assets/` — Static files (CSS, images, JS)

## Branch Strategy

- `master` — Production branch, auto-deployed to GitHub Pages
- Feature branches use `claude/` prefix for AI-assisted development

## No Testing Framework

This repository has no automated tests. Validation is done by:
1. Running `bundle exec jekyll build` to check for build errors
2. Running `bundle exec jekyll serve` and manually reviewing the site
3. Checking GitHub Pages build status after pushing

## Common Tasks

### Add a new blog post

Create `_posts/YYYY-MM-DD-my-post-title.markdown` with appropriate front matter.

### Add a new page

Create `my-page.markdown` at the root with `layout: page` and a `permalink`.

### Change site title/description

Edit `_config.yml` and restart the dev server.

### Add a plugin

1. Add the gem to `Gemfile` under the `:jekyll_plugins` group
2. Add the plugin name to `plugins:` in `_config.yml`
3. Note: Only [GitHub Pages-supported plugins](https://pages.github.com/versions/) work in production — custom plugins require Actions-based deployment

## Liquid Templating

Jekyll uses Liquid for templating. Common patterns:

```liquid
{{ site.title }}           # Site variable
{{ page.title }}           # Page/post variable
{% for post in site.posts %}  # Loop over posts
{% if page.title %}           # Conditional
{% include header.html %}     # Include a partial
```
