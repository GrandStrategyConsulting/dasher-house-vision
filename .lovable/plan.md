# Dasher House Enterprises — Build Plan

A polished, responsive, boutique real estate portfolio site with 9 pages, brand system derived from the uploaded logo, and working front-end forms. Frontend-only build (no backend) — forms validate and show confirmation states; backend can be wired later.

## 1. Brand foundation

- Import uploaded logo as a Lovable asset (`src/assets/dasher-logo.png.asset.json`) and use it in header, footer, mobile menu, favicon, and Dasher House page.
- Define design tokens in `src/styles.css` (`@theme`), all in `oklch`:
  - `--color-brand-orange` (#F29312), `--color-brand-blue` (#068EBE), `--color-brand-turquoise` (#04BDCC), `--color-ink` (#010202), `--color-ivory` (#FAF8F4), `--color-stone` (#E0DDD5).
  - Map into shadcn semantic tokens: `--primary` = orange, `--secondary`/accent = blue, `--background` = ivory, `--foreground` = ink, `--border` = stone.
- Typography via `<link>` in `__root.tsx` head: editorial serif for display (Fraunces) + refined sans for body (Inter Tight). Register as `--font-display` / `--font-sans` in `@theme`.
- Color ratio target: ~60% ivory/white, 25% charcoal, 10% blue, 3% orange, 2% turquoise.

## 2. Route architecture (TanStack Start file-based)

Create the following in `src/routes/`, each with its own `head()` (title, description, og:title, og:description):

- `index.tsx` — Home
- `portfolio.tsx` — Portfolio (with category tabs)
- `dasher-house.tsx` — Flagship property page
- `development.tsx` — Development Pipeline
- `consultancy.tsx` — Consultancy
- `partnerships.tsx` — Partnerships & Investment
- `about.tsx` — About Lisa Moore
- `insights.tsx` — Insights (card grid, static placeholder articles)
- `contact.tsx` — Contact hub

Update `__root.tsx`: real site title/description/og/twitter defaults, favicon swap to logo, keep `<Outlet />`, wrap in `<SiteLayout>` (header + footer).

## 3. Shared components (`src/components/site/`)

- `SiteHeader` — sticky, ivory bg, logo left, desktop nav, primary CTA "Book Dasher House" (orange), secondary CTA "Partner With Us" (blue outline), mobile hamburger sheet.
- `SiteFooter` — deep charcoal, logo, brand blurb, nav columns, legal line, disclaimer.
- `Hero`, `SectionHeading`, `CtaButton` (primary/secondary/link variants using shadcn `button` variants), `PropertyCard`, `PipelineCard`, `ServiceCard`, `PartnershipCard`, `ValueCard`, `InsightCard`, `DisclaimerBox`, `GalleryGrid`, `LogoMark`.
- Subtle brand motifs: thin orange roofline accent line, blue architectural frame borders on flagship cards.

## 4. Forms

Reusable `InquiryForm` powered by `react-hook-form` + `zod`, styled with shadcn inputs, blue focus rings. Four configurations:

- Event inquiry (Dasher House page)
- Consultancy inquiry (Consultancy page)
- Partnership inquiry (Partnerships page)
- General contact (Contact page)

Behavior: required-field validation, email format check, disabled submit while pending, on submit show branded confirmation card matching PRD copy. No backend calls; submit handler is a placeholder returning success. Toast via existing `sonner`.

## 5. Page content

All copy taken verbatim from PRD (hero headlines, section bodies, card copy, disclaimers). Portfolio uses 4 seed cards (Dasher House + 3 placeholders); Insights uses the 9 placeholder article titles; Development uses status labels from PRD. No invented addresses/numbers/financials.

## 6. Imagery

Use tasteful Unsplash placeholder URLs (architecture, warm interiors, streetscapes, gathering spaces) with descriptive alt text. Generate one custom hero image for the home page via `imagegen` (warm architectural exterior at dusk). Avoid stock handshakes / skyscrapers / penthouses.

## 7. Responsive & accessibility

- Mobile-first Tailwind; grid + `min-w-0` / `shrink-0` on header rows; cards stack single column on mobile.
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), single H1 per page, alt text everywhere, visible focus rings (blue), labeled inputs.

## 8. SEO

- Per-route `head()` with titles/descriptions from the PRD's "Suggested Page Metadata".
- OG tags per page; no `og:image` at root (leaf-only per platform rules); Dasher House and Home routes get an `og:image` pointing to their hero.
- Semantic headings, meaningful link text.

## Out of scope (this build)

- Live backend / Supabase inquiries table, portfolio CMS, insights CMS — structure is documented in the PRD; forms are frontend-only for now and can be wired to Lovable Cloud later.
- Real Airbnb booking link (placeholder `#`), real property photography (Unsplash placeholders).
- Blog article detail pages (Insights index only; cards link to `#` for now).

## Technical notes

- TanStack Start file-based routing, TanStack Query already wired (unused for now).
- Tailwind v4: tokens in `src/styles.css` `@theme`, fonts via `<link>` in root head, no `tailwind.config.js`.
- shadcn `button` extended with `variant: "brand" | "brandOutline"` for the two CTA styles.
- No new dependencies expected beyond what's installed (react-hook-form, zod, sonner, lucide-react all present in template).
