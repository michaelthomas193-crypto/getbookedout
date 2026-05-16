## Plan

### 1. `package.json` — pin Node and confirm build chain
- Add `"engines": { "node": ">=18" }` so Cloudflare Pages uses the right runtime.
- Confirm current setup (already correct, no change needed):
  - `"build": "vite build"` with `"postbuild": "react-snap && node scripts/postprocess-prerender.mjs"` — npm runs `postbuild` automatically after `build`, so Cloudflare's default `npm run build` triggers the full chain.
  - `react-snap`, `vite`, `@vitejs/plugin-react-swc` are all already in `devDependencies`.
  - All app deps (react, react-dom, react-router-dom, react-helmet-async, etc.) already in `dependencies`.

### 2. Create `public/_redirects`
Exact contents you specified:

```
/Pricing /pricing 301
/Why-Us /why-us 301
/Who-We-Are /who-we-are 301
/Plumbing /plumbing 301
/Electrical /electrical 301
/Painting /painting 301
/Landscaping /landscaping 301
/Handyman /handyman 301
/Carpentry /carpentry 301
/Concreting /concreting 301
/Schedule-Demo /schedule-demo 301
/* /index.html 200
```

Vite copies everything in `public/` to `dist/` as-is, so the file lands at `dist/_redirects` — exactly where Cloudflare Pages reads it.

Note: Lovable hosting ignores `_redirects` (it's a Netlify/Cloudflare convention). That's fine since we're cutting over to Cloudflare. Until then, the current site continues to behave as it does today.

### 3. Quick post-change verification
- Run `npm run build` locally in the sandbox.
- Confirm `dist/_redirects` exists with the exact contents above.
- Confirm `dist/pricing/index.html`, `dist/why-us/index.html`, etc. exist with their per-route titles + canonicals (already verified in the previous audit — should still pass).

### What you do in parallel
1. Connect this project to GitHub via the (+) menu (see instructions above).
2. Once the repo is live, in Cloudflare Pages:
   - **Connect to Git** → select the new repo
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION = 18` (or 20)
3. Add `www.getbookedout.com.au` as a custom domain in Cloudflare Pages, then update DNS to point at the Pages target.

### Technical notes
- `react-snap` runs Puppeteer at build time. Cloudflare Pages' build image includes Chromium dependencies, so it works out of the box — no `puppeteerArgs` change needed beyond the `--no-sandbox` flags already in `package.json`.
- Cloudflare Pages reads `_redirects` in priority order, top-to-bottom. The catch-all `/* /index.html 200` at the bottom is the SPA fallback for any unknown route — it must stay last.
