# Durgesh Vishwakarma — Portfolio

Personal portfolio built as a real MERN application: a React + Vite frontend, an Express/MongoDB API serving the content, and a static fallback so the site renders instantly even when the API is cold.

**Live:** https://durgesh-portfolio.vercel.app

---

## Stack

| Layer    | Tech                                              |
| -------- | ------------------------------------------------- |
| Frontend | React 18, Vite, Tailwind CSS, Framer Motion       |
| Backend  | Node.js, Express, Mongoose                        |
| Database | MongoDB Atlas                                     |
| Hosting  | Vercel (client) · Render (API)                    |

## Architecture note

`client/src/data/content.js` is the single source of truth for all site content. The app renders from it immediately, then hydrates from `GET /api/portfolio` and deep-merges the response — so a slow, cold-started, or missing API never produces a blank page. `server/seed.js` imports that same file, which means the database and the fallback cannot drift apart.

## SEO

- Full meta set: title, description, keywords, canonical, robots directives
- Open Graph + Twitter card with a generated 1200×630 `og-image.png`
- JSON-LD `@graph`: `Person`, `WebSite`, `ProfilePage`, and an `ItemList` of the four projects as `SoftwareApplication` entries
- `robots.txt`, `sitemap.xml` (with image entries), `site.webmanifest`
- `<noscript>` fallback so crawlers without JS still see headings, projects, and contact details
- Semantic landmarks, one `h1`, ordered heading levels, alt text on every image, skip-to-content link
- Security and caching headers configured in `client/vercel.json`

## Local development

```bash
# API
cd server
cp .env.example .env          # set MONGODB_URI
npm install
npm run dev                   # http://localhost:5000

# Client
cd client
npm install
npm run dev                   # http://localhost:3000
```

The client runs fine without the API — it falls back to local content.

### Seeding the database

Run from the repo root (the seed script imports the shared content file from `client/`):

```bash
node server/seed.js
```

## Updating content

1. Edit `client/src/data/content.js`.
2. Re-run `node server/seed.js` if you use the database.
3. If you add or remove a project, update the `ItemList` block in `client/index.html` so the structured data stays accurate.

## Projects featured

| Project             | What it is                            | Live                                          |
| ------------------- | ------------------------------------- | --------------------------------------------- |
| ShopSphere          | Full-stack MERN e-commerce platform   | https://shop-sphere-steel.vercel.app/         |
| AI Notes            | Notes with AI summarization           | https://ai-notes-app-pi.vercel.app/           |
| GlowUp Salon & Spa  | Salon site with online booking        | https://glow-up-salon-flax.vercel.app/        |
| MovieHub            | Film discovery app                    | https://imdb-mocha-six.vercel.app/            |

## Deployment

- **Client → Vercel.** Root directory `client`. `vercel.json` handles the SPA rewrite, cache headers, and security headers.
- **API → Render.** Root directory `server`, config in `render.yaml`. Set `MONGODB_URI` and `CLIENT_URL`.
- Set `VITE_API_URL` on the client to the deployed API origin.

## Before going live

- Replace `durgesh-portfolio.vercel.app` in `client/index.html`, `public/robots.txt`, `public/sitemap.xml`, and `src/data/content.js` if you move to a custom domain.
- Swap `public/covers/*.svg` for real screenshots of GlowUp and MovieHub when convenient.
- Submit the sitemap in Google Search Console.
