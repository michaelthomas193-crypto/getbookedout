## Scope

Replace only the above-the-fold hero on `/` (Index.tsx) and insert one trust strip directly beneath it. Nothing else on the page or in the rest of the site changes — header, sticky CTA, Proof, MarqueeQuotes, existing TrustStrip lower down, Problem, Benefits, HowItWorksSteps, OfferInclusions, Industries, FAQ, FinalCTA, Footer all stay intact.

## Files to change

1. **Create `src/components/sections/HeroSplit.tsx`** — new component, replaces current `Hero` on `/` only.
2. **Create `src/components/sections/TrustStripBold.tsx`** — new 4-item strip (named differently so the existing lower `TrustStrip` keeps working).
3. **Create `src/components/QuoteFormModal.tsx`** — shadcn `Dialog` wrapper around the existing `LeadFormEmbed` (GHL form id `Bs7UvhiUOzhzwBcZlxtm` already wired). Opens in-place; no route change.
4. **Edit `src/pages/Index.tsx`** — swap `<Hero />` for `<HeroSplit />`, insert `<TrustStripBold />` immediately after, update the `<SeoHead>` title + description as specified. JSON-LD, sitemap, robots untouched.
5. **Edit `index.html`** — add `<link rel="preload" as="image" href="/hero-getbookedout.webp" fetchpriority="high">` for the hero asset used in the new component.

Existing `src/components/sections/Hero.tsx` is left in the repo (other routes may import it later) but no longer rendered on `/`.

## Hero component spec

- Layout: `grid lg:grid-cols-5`, text in `lg:col-span-3` (60%), visual in `lg:col-span-2` (40%). Mobile: stacked, text first.
- Left-aligned on desktop (`text-left`), centred only on mobile.
- EyebrowLabel: uppercase, tracked, `text-primary`, "For Australian service-based businesses".
- H1Display: single `<h1>` containing three sentences with `<br>` line breaks; `text-balance`, `leading-[1.05]`, largest scale (`text-5xl md:text-6xl lg:text-7xl`), font-bold.
- SubheadLead: `text-muted-foreground`, body font, `max-w-[60ch]`, `leading-relaxed`.
- CTAGroup: two buttons, `min-h-[56px]`, primary first.
  - Primary "Show me how to get booked out" → opens `QuoteFormModal`.
  - Secondary "See how it works" → `document.getElementById('how-it-works')?.scrollIntoView({behavior:'smooth'})`; fallback to first `[data-process-steps]` element.
  - Both `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-[3px]`.
- MicroTrustLine: `text-sm text-muted-foreground` exact copy.
- Right visual: reuse existing phone/calendar mockup pattern from current `Hero` (SMS thread + calendar booking card, already real product UI — not stock). Wrapped in fixed-aspect container (`aspect-[4/5]`) to reserve space (CLS).
- Motion: framer-motion fade+rise 200ms on H1, stagger 80ms for subhead + CTAs; gated by `useReducedMotion()`.
- No gradients on buttons, no icon-in-circle, no purple, no "AI"/"automation"/etc.

## TrustStripBold spec

- Full-bleed `bg-muted` (maps to `--color-surface-offset` equivalent token).
- Desktop: `grid-cols-4`. Mobile: `grid-cols-2`.
- Four items, verbatim: "More booked jobs.", "Fewer missed leads.", "Hours back every week.", "Done-for-you setup."
- Each item: `text-xl md:text-2xl font-bold`, no descriptions, no icons, no links.
- Inserted immediately after `<HeroSplit />`, before `<Proof />`. The existing `<TrustStrip />` stays in its current position lower in the page.

## Anchor

`HowItWorksSteps` currently has no `id="how-it-works"` — I will add `id="how-it-works"` to its root section so the secondary CTA's smooth-scroll works without changing its layout or copy.

## SEO (route-level via existing SeoHead)

- `title`: `Get Booked Out | More Bookings, Less Admin for Australian Service Businesses`
- `description`: `We save you time, save you money and make you more money. Done-for-you systems for Australian service businesses — tradies, beauty, wellness, auto, allied health and cleaning.`
- og:title / og:description mirror (SeoHead already does this).
- og:image, JSON-LD, canonical, robots, sitemap: unchanged.

## Performance choices

- **LCP < 2.0s**: hero image preloaded in `index.html` with `fetchpriority="high"`; `<img loading="eager" fetchpriority="high" width=… height=…>` on hero only; no blocking webfont swap added; text-side renders synchronously (no Suspense).
- **CLS < 0.05**: hero image has explicit `width`/`height`; right column reserves space via `aspect-[4/5]` wrapper on desktop; modal is portal-mounted so it doesn't shift layout.
- **INP < 200ms**: CTA buttons are plain `<button>` with direct onClick; framer-motion wraps only H1/subhead containers, not the buttons; reduced-motion bypasses animations entirely.

## Analytics wiring

- GA4: `window.gtag?.('event','cta_click',{label:'hero_primary_get_booked_out'})` and `…'hero_secondary_see_how_it_works'`.
- Meta Pixel `Lead` fires from existing GHL form post-submit listener in `LeadFormEmbed` / `GetStarted` flow — verified, not duplicated.

## What is NOT touched

Header, top banner, sticky CTA, footer, Proof, MarqueeQuotes, existing TrustStrip, Problem, Benefits, HowItWorksSteps copy, OfferInclusions, Industries, FAQ, FinalCTA, pricing, routing, theme tokens, sitemap.xml, robots.txt, JSON-LD schemas, all other pages (Plumbing, Electrical, etc.).

## Deliverable summary (after build)

Updated `HeroSplit` + new `TrustStripBold` + `QuoteFormModal` + Index.tsx swap + index.html preload + `id="how-it-works"` on HowItWorksSteps. One paragraph recap + LCP/CLS/INP justification will accompany the implementation reply.
