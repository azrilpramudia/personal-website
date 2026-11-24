# Meowhx

Astro monorepo for the portfolio and technical blog:

- `apps/portfolio` → `https://meowhx.my.id`
- `apps/blog` → `https://blog.meowhx.my.id`
- `packages/ui` → shared design tokens, UI components, and site links

## Requirements

- Node.js `22.23.4` or newer
- pnpm

## Getting started

```sh
pnpm install
pnpm dev:portfolio
pnpm dev:blog
```

Run both production builds with `pnpm build`, or build one app with
`pnpm build:portfolio` or `pnpm build:blog`.

Blog posts are Markdown or MDX files in `apps/blog/src/content/posts`. Each post
requires `title`, `description`, and `pubDate` frontmatter. Optional fields are
`updatedDate`, `tags`, and `draft`.
