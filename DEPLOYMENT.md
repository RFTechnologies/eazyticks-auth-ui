# Cloudflare Pages Deployment Guide for Astro

1. Install Wrangler CLI (if not already):
   npm install -g wrangler

2. Build your Astro project:
   npm run build

3. Preview locally (optional):
   npx wrangler pages dev ./dist

4. Deploy to Cloudflare Pages:
   wrangler pages publish ./dist --project-name=eazyticks-auth-ui

5. For Worker Sites, use:
   wrangler publish

---

- Ensure your `wrangler.toml` and `.cloudflare` files are configured as above.
- For environment variables, set them in the Cloudflare dashboard or add to `.env` (do not commit `.env`).
