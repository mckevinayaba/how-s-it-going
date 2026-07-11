# HappyMe Health — Premium Health Commerce & Impact Platform

A mobile-first, premium health commerce site for HappyMe Health: nourishing
everyday food products (Date Sugar, Turmeric, Tigernuts), with a clearly
separated **HappyMe Health Impact** outreach layer for supporters and
partners.

## Stack

- **React 18 + TypeScript** — component architecture
- **Vite** — dev server and build tooling
- **React Router 6** — routing
- **Tailwind CSS** — design tokens (colour, type, spacing, radius, shadow) and utility styling
- **React Context + localStorage** — cart state (no backend yet)
- Package manager: **npm**

No backend or payment integration yet — checkout is a polished placeholder
ready to be wired up (see "Next steps").

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # type-check + production build to /dist
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

Copy `.env.example` to `.env.local` before wiring up real payment/API keys.
Never commit `.env` or `.env.local`.

## Project structure

```
src/
  components/
    layout/        Header (desktop), MobileBottomNav, Footer, Layout
    ui/             Button, Card, SectionHeading, GuidanceNote, PlaceholderImage, ComingSoon
    product/        ProductCard, BundleCard
    impact/         MetricCard
    support/        SupportCard
    icons.tsx       Small inline SVG icon set (no external icon library)
  context/
    CartContext.tsx Cart state (add/remove/quantity), persisted to localStorage
  data/             Local mock data — products, bundles, impact metrics, support options, team, learn topics
  pages/            One file per route (Home, Shop, ProductDetail, Impact, Learn, About, Support, Contact, Cart, Checkout, Account, NotFound)
  types/            Shared TypeScript types
  lib/format.ts     Price formatting helper
  App.tsx           Route table
  main.tsx          App entry, providers
  index.css         Tailwind layers + small global rules (safe-area, container)
tailwind.config.js  Design tokens: botanical green, gold, cocoa/terracotta/clay, oat/ivory, Fraunces + Inter
```

### Navigation behaviour

- **Mobile / tablet (below `lg` / 1024px):** fixed bottom navigation with
  Home, Shop, Impact, Learn, Cart (with live cart badge). The desktop header
  is not rendered on this breakpoint.
- **Desktop (`lg` and up):** sticky top navigation with Shop, Impact, Learn,
  About, Support, account icon, and cart icon with live badge. The bottom
  nav is hidden.

### Cart

Cart state lives in `CartContext` and persists to `localStorage` under the
key `happyme-cart-v1`. Products and bundles both add as cart line items.
The Cart page shows items, quantity, subtotal, and an optional "$5 outreach
contribution" add-on before checkout.

## What's built so far (Phase 1)

- Full design system (colours, type, spacing, radius, shadow) in `tailwind.config.js`
- Shared layout: desktop header, mobile bottom nav, footer
- Home page — all 7 sections from the brief (hero, featured products, bundles, founder story, impact proof, support outreach, final CTA)
- Shop page — filter bar, product grid, bundles, "shop by need"
- Reusable Product Detail template — gallery, story, safe benefits, how-to-use, guidance note, related products, reviews placeholder (wired for Date Sugar, Turmeric, Tigernuts)
- Cart page — items, quantity, subtotal, support add-on, checkout CTA
- Checkout — polished placeholder (disabled fields), ready for a real payment provider
- Lightweight "coming soon" stubs for Impact, Learn, About, Support, Contact, and Account so every nav link resolves to a real page

## Next build phase

- Full **Impact** page: focus areas, "where we've worked" (Buea Bomaka, Pendamboko), impact reports placeholder, company/impact separation note
- Full **Learn** page: featured article, topic cards, quick tips, newsletter signup
- Full **About** page: philosophy, mission, history, team grid, future plans
- Full **Support** page: sponsor/kit/transport/partner options, payment placeholder, partner inquiry form, transparency note
- Full **Contact** page: general + partnership inquiry forms, WhatsApp/email/location
- Real product photography and community-outreach photography to replace the tone-based placeholder art in `PlaceholderImage`
- Payment provider integration (Checkout) using the `.env` keys already scaffolded
- Account/auth flow

## GitHub sync

This project has not yet been initialised as a git repository. Suggested
first commit once you're ready:

```bash
git init
git add .
git commit -m "Initial HappyMe Health premium commerce and impact platform"
```

No secrets, API keys, or credentials are stored in this repo — all future
payment/backend integration should read from environment variables (see
`.env.example`).
