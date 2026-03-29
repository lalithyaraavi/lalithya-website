# Lalithya Potturu — Personal Portfolio

A personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Fonts**: Fraunces (display) · Plus Jakarta Sans (body) · DM Mono (mono)
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── awards/         # Awards & Honours page
│   ├── blog/           # Blog index + [slug] detail
│   ├── contact/        # Contact page with form
│   ├── projects/       # Projects index + [slug] detail
│   ├── globals.css     # Global styles + font imports
│   ├── layout.tsx      # Root layout (Nav + Footer + Cursor)
│   └── page.tsx        # Home page
├── components/
│   ├── CustomCursor.tsx
│   ├── FadeIn.tsx
│   ├── Footer.tsx
│   ├── Nav.tsx
│   └── ProjectCard.tsx
└── data/
    └── content.ts      # All projects, awards, blog posts — edit here!
```

## Customising Content

All content lives in `src/data/content.ts`. Edit the `projects`, `awards`, and `blogPosts` arrays to update your work.

## Adding Blog Posts

The blog currently uses placeholder content. To add real posts, consider:
- [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) for MDX files
- [`contentlayer`](https://contentlayer.dev/) for type-safe content

## Deploying to Vercel

```bash
vercel --prod
```

Or connect your GitHub repo in the [Vercel dashboard](https://vercel.com).

## Contact Form

The contact form in `src/app/contact/page.tsx` is UI-only. Wire it up to:
- [Formspree](https://formspree.io) — easiest, no backend needed
- [Resend](https://resend.com) — great for custom email flows

## Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `rose` | `#C4788A` | Primary accent |
| `rose-light` | `#F2DEED` | Backgrounds, borders |
| `cream` | `#FAFAF8` | Page background |
| `cream-warm` | `#F5F0EB` | Card backgrounds |
| `ink` | `#2B2118` | Body text |
| `ink-muted` | `#7A6860` | Secondary text |
| `lavender` | `#C5BBDA` | Blob accents |
| `peach` | `#F2C4A0` | Blob accents |
