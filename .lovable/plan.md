## Plan

1. Simplify the pre-render pipeline
- Remove any extra pre-render/post-process wiring that could be masking the actual output.
- Keep a single `react-snap` setup in `package.json` with the exact marketing routes you listed.
- Preserve `BrowserRouter` and the hydrate-or-render entrypoint in `src/main.tsx`.

2. Validate the generated static HTML locally
- Build the site and inspect `dist/index.html` plus route files like `dist/pricing/index.html`.
- Confirm each route’s raw HTML contains the correct `<title>` and canonical from `SeoHead` before anything is published.
- Specifically verify `/pricing` contains a title with “Pricing” and a `/pricing` canonical.

3. Publish and verify production behavior
- Push the frontend update live.
- Re-test the published domain with raw `curl` requests for `/`, `/pricing`, `/why-us`, `/plumbing`, and `/electrical`.
- Compare production responses against the locally generated route HTML.

4. Resolve the final blocker based on the result
- If production serves the route-specific HTML, the issue is fixed.
- If production still serves homepage HTML for every path even after clean `react-snap` output, I’ll treat that as a hosting-layer SPA rewrite issue rather than an app-code issue and report it clearly with evidence.

## Technical details
- Files likely involved: `package.json`, `src/main.tsx`, and possibly removal of `scripts/postprocess-prerender.mjs` if it’s no longer needed.
- Important note from the audit: `react-snap` is already installed in this repo, and the hydrate logic plus `BrowserRouter` are already in place. So the work is really to clean up the current setup, prove local output, and verify whether hosting is actually serving those generated route files.