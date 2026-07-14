# Moodita by Niomi

> **Kindness Above Everything**

A premium personal brand website for Niomi — advocate, artist, writer, foodie, traveller, and storyteller. Built as a digital home: editorial journal, art gallery, recipe archive, travel diary, writing collection, and online store in one beautifully unified experience.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + custom design tokens |
| UI Primitives | ShadCN UI (restyled) |
| Animations | Framer Motion + GSAP + Lenis |
| Data | Prisma + PostgreSQL |
| Auth | NextAuth v5 |
| Media | Cloudinary |
| Payments | Stripe + Razorpay |
| State | Zustand + TanStack Query |
| Deployment | Vercel |

## Getting Started

### 1. Clone and install

```bash
git clone <repo>
cd moodita
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Fill in your values — see `.env.example` for all required variables.

### 3. Set up the database

```bash
# Push schema to your database
npm run db:push

# Or run migrations
npm run db:migrate

# Open Prisma Studio
npm run db:studio
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── gallery/[slug]/
│   ├── journal/[slug]/
│   ├── food/[slug]/
│   ├── travel/[slug]/
│   ├── writing/[slug]/
│   ├── shop/[slug]/
│   ├── newsletter/
│   ├── contact/
│   ├── admin/              # Auth-gated admin dashboard
│   ├── layout.tsx          # Root layout with all providers
│   ├── loading.tsx         # Root loading skeleton
│   └── not-found.tsx       # 404 page
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── primitives/         # Skeleton, RevealText, MagneticButton, PageTransition
│   └── sections/           # Hero, FeaturedCategories, AboutPreview, GalleryPreview…
├── lib/
│   └── utils.ts            # cn(), readingTime(), formatDate(), etc.
├── providers/
│   ├── LenisProvider.tsx   # Smooth scroll + GSAP integration
│   └── QueryProvider.tsx   # TanStack Query
└── middleware.ts           # Admin route protection
prisma/
└── schema.prisma           # Full DB schema
```

## Design System

| Token | Value | Use |
|---|---|---|
| `cream` | `#FAF7F2` | Primary background |
| `paper` | `#F0EBE1` | Card / section backgrounds |
| `ink` | `#1A1714` | Primary text |
| `olive` | `#6B7C5E` | Links, secondary accent |
| `terracotta` | `#C4714A` | CTAs, primary accent |
| `forest` | `#2D4A3E` | Footer, deep sections |

**Fonts**: Playfair Display (headings) · Cormorant Garamond (serif body) · Inter (UI)

## Build Phases

- [x] **Phase 1** — Foundation: scaffold, design system, layout shell, Prisma schema, skeleton architecture
- [x] **Phase 2** — Homepage + About + Navigation
- [x] **Phase 3** — Gallery + Blog / Journal (templates ready, DB integration in Phase 6)
- [x] **Phase 4** — Food Journal, Travel Diary, Writing section
- [x] **Phase 5** — Shop, Newsletter, Contact
- [x] **Phase 6** — Admin CMS, SEO pass, Lighthouse audit, Vercel deploy

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set all `.env.example` variables in your Vercel project settings before deploying.

---

*Built with kindness above everything.*
