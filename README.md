# Lalithya Raavi | Portfolio

This is the code for my personal website: **[lalithya-website.vercel.app](https://lalithya-website.vercel.app)**

I'm a Systems Design Engineering student at the University of Waterloo. I built this site to show my projects, experience and awards in one place, and I keep adding to it as I build new things.

## What's on it

- **Projects:** each one has its own page with what I built, what I found, and links to the video, dashboard or code. Some of my favourites:
  - [AltWise](https://lalithya-website.vercel.app/projects/altwise): an accessibility audit of 422 Shopify stores and a prototype that writes missing image descriptions ([code](https://github.com/lalithyaraavi/altwise-shopify-accessibility))
  - [TurnSight](https://lalithya-website.vercel.app/projects/turnsight): how a late arrival at Atlanta passes delay to the next flight ([code](https://github.com/lalithyaraavi/turnsight))
  - [Partner program desk](https://lalithya-website.vercel.app/projects/partner-desk): a weekly status sheet for OEM server programs
- **About:** my background, co-ops and what I'm interested in
- **Awards:** scholarships and recognition I've received
- **Blog:** short pieces I've written

## How I built it

- **Next.js 14** (App Router) and **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for the animations
- Designed the look myself and deployed on **Vercel**

All of the site's content (projects, awards, blog posts) lives in one file, `src/data/content.ts`, so adding a new project is just adding an entry there.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
