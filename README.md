# Mercy Blossoms — site

Header is just **Mercy Blossoms** (no tagline). Nav: **Coloring Collection /
Shop / About**.

## The model

- **Coloring Collection** (`/coloring-collection`) — everything is free.
  Every page across 6 categories (5 faith categories + Extras) is public,
  browsable, and individually downloadable. There's no pricing here
  anymore — the "checkout" is an email address instead of money. See
  `components/EmailGateDownload.tsx`.
- **Shop** (`/shop`) — the one thing still actually sold for money: the
  physical *God's Favorite Tree* storybook. Uses `components/BuyButton.tsx`
  (not yet wired to real payment — see "What's not built yet" below).

## Real, working integrations

**Kit (email list)** is fully wired up. `app/api/subscribe/route.ts` is a
server-side route that adds an email to your Kit form via their v4 API.
Every `EmailGateDownload` and the `NewsletterSignup` component call this
route for real — submitting an email actually adds it to your Kit list and
triggers whatever automation you've set up on that form (e.g. sending a
welcome/free-page email).

To make this work, add to `.env.local` (never commit this file):
```
KIT_API_KEY=your_v4_api_key_here
KIT_FORM_ID=9714605
```
Get the API key from Kit → Settings → Developer → **V4 Keys** (not the
"V3 Key" section — those are different credentials and won't work here).
`KIT_FORM_ID` defaults to `9714605` ("Mercy Blossoms — Free PDF Signup") in
the route itself if you don't set it, but setting it explicitly is safer if
you ever change forms.

**Stripe (checkout)** is also fully wired up. `app/api/checkout/route.ts`
creates a real Stripe Checkout session when someone clicks "Buy the Book"
on the storybook page — price is specified inline (no pre-created Stripe
Product needed), collects a US/Canada shipping address, and redirects to
Stripe's hosted payment page. After payment, Stripe redirects back to
`/shop/success`.

Add to `.env.local`:
```
STRIPE_SECRET_KEY=your_secret_key_here
```
Get this from Stripe Dashboard → Developers → API keys → **Secret key**.
Use a **test mode** key while developing (starts with `sk_test_`) so you
can run through checkout with Stripe's test card numbers without moving
real money; switch to the live key (`sk_live_`) only once you're ready to
accept real payments.

**Never paste either real API key into chat, a commit, or anywhere public.**
They only ever need to exist in your local `.env.local` file and (later) in
your production hosting provider's environment variable settings.

## What's not built yet

- **Prints** (bookmarks, prayer cards, activity packs) — mentioned in Shop
  copy as free + email-gated, but no assets exist yet, so nothing to build
  a real page around.
- **Affiliate links** — Shop page has a placeholder section; no real Amazon
  links added yet.

## Content model

`lib/catalog.ts` is the single source of truth:
- `categories` — 6 categories (Bible Stories, Saints, Apostles, The Mass,
  Symbols, Extras), each with a cover, blurb, and every page (`pages[]`,
  each with an image, an individual PDF, and a caption), plus a
  `downloadAllHref` for the category-wide combined PDF
- `completeCollectionDownload` — the "download everything" 70-page PDF
- `shopProducts` — the storybook (only paid product on the site)

## Folder map

```
app/
  page.tsx                    → home
  coloring-collection/page.tsx → the one browsable page for everything free
  shop/page.tsx                 → shop (storybook + Prints/Affiliate teasers)
  shop/[slug]/page.tsx           → storybook product detail
  about/page.tsx                 → the four-act story, socials, newsletter
  api/subscribe/route.ts         → real Kit integration (server-side only)
components/
  EmailGateDownload.tsx    → the core new mechanic: email -> instant download
  CategoryBrowseSection.tsx → renders one category's full page grid
  NewsletterSignup.tsx      → also posts to /api/subscribe
  BuyButton.tsx              → still a placeholder (Stripe not wired up)
  Nav.tsx, Footer.tsx, BranchDivider.tsx, SocialLinks.tsx
  StorybookProductView.tsx
lib/
  catalog.ts   -> single source of truth for categories, pages, and products
public/
  covers/       -> every cover image, unambiguously named
  collection/   -> every page image, organized by category
  downloads/    -> every generated PDF: per-page, per-category, and complete
  brand/        -> logo marks (nav/footer/favicon)
  images/gods-favorite-tree/ -> storybook interior + behind-the-scenes
```

## Getting it running

```bash
npm install
npm run dev
```

Two env vars in `.env.local`:
- `NEXT_PUBLIC_ASSET_BASE_URL` — prefixes every image/PDF path. Point it at
  your S3/CloudFront URL, or leave unset to use local `/public` copies.
  Bucket structure needs to mirror `public/` exactly (root-level `covers/`,
  `collection/`, `downloads/`, `brand/`, `images/`).
- `KIT_API_KEY` / `KIT_FORM_ID` — see "Real, working integrations" above.
