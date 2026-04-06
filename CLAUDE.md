# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm preview      # Preview production build locally
pnpm format       # Format all files with Prettier
pnpm format:check # Check formatting without writing
```

No test suite is configured.

## Architecture

This is an **Astro 6** static site with React components and Tailwind CSS v4.

### Routing & Pages

File-based routing under `src/pages/`. Pages are `.astro` files; content is `.md` files with frontmatter.

- `/src/pages/*.astro` — top-level pages (index, blog listing, portfolio listing, 404)
- `/src/pages/blog/*.md` — English blog posts
- `/src/pages/portfolio/*.md` — portfolio project pages
- `/src/pages/es/` — Spanish mirror of the above

### i18n

Astro's built-in i18n is configured with English as the default (no URL prefix) and Spanish under `/es/`. Translation strings live in `src/i18n/ui.ts`. Route aliases (e.g. `portfolio` → `/portafolio` in Spanish) are defined there too. The utility functions in `src/i18n/utils.ts` handle language detection, translation lookup, and localized URL generation.

### Layout & Components

All pages wrap with `src/layouts/Layout.astro`, which injects `BaseHead` (SEO), `Header`, and `Footer`.

Components are organized by domain under `src/components/`:
- `blog/` — card grid and post header for blog listings
- `portfolio/` — post layout, gallery, navbar for project pages
- `elements/` — shared UI pieces (cover image, gradient text, copy-link button)
- `library/` — generic primitives (Button, AnchorLink, Markdown renderer)
- `icons/` — SVG icon wrappers

### Styling

Tailwind CSS v4 via `@tailwindcss/vite`. Global CSS variables (custom primary color scale, keyframe animations) are defined in `src/styles/global.css`. The site uses a dark theme by default (neutral-900 background).

Prettier is configured with 4-space indentation, single quotes, print width 100, and the `prettier-plugin-astro` plugin.

### Image Handling

Project galleries use Cloudinary. Credentials are read from `.env` (`PUBLIC_CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`). The `astro-cloudinary` package provides the Astro component integration.

### Site Metadata

Global constants (site title, description, social links) are in `src/consts.ts`.
