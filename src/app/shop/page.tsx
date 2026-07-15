import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { Heart, ShoppingBag, ArrowUpRight } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { CardHoverReveal } from '@/components/primitives/CardHoverReveal'
import { MotionLink } from '@/components/primitives/MotionLink'
import { siteConfig } from '@/lib/site-config'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Shop | Moodita',
  description: 'Original paintings, prints, art cards, digital downloads, and merchandise by Niomi Gada. Own a piece of her world.',
  alternates: {
    canonical: '/shop',
  },
}

const PRODUCT_TYPES = ['All', 'Originals', 'Prints', 'Sketches', 'Art Cards', 'Digital', 'Merch']

const PRODUCTS = [
  {
    slug: 'golden-hour-original',
    title: 'Golden Hour — Original',
    type: 'ORIGINAL_PAINTING',
    typeLabel: 'Original',
    price: 18000,
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80'],
    available: true,
    featured: true,
  },
  {
    slug: 'quiet-forest-print',
    title: 'Quiet Forest — A3 Print',
    type: 'PRINT',
    typeLabel: 'Print',
    price: 1200,
    comparePrice: 1500,
    images: ['https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80'],
    available: true,
    featured: false,
  },
  {
    slug: 'morning-bloom-card',
    title: 'Morning Bloom Art Card',
    type: 'ART_CARD',
    typeLabel: 'Art Card',
    price: 299,
    images: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80'],
    available: true,
    featured: false,
  },
  {
    slug: 'recipe-ebook-vol1',
    title: 'Recipe Ebook Vol. 1 — PDF',
    type: 'RECIPE_EBOOK',
    typeLabel: 'Digital',
    price: 499,
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80'],
    available: true,
    featured: false,
  },
  {
    slug: 'earth-sky-sketch',
    title: 'Earth & Sky — Sketch',
    type: 'SKETCH',
    typeLabel: 'Sketch',
    price: 3500,
    images: ['https://images.unsplash.com/photo-1549887534-1541e9326688?w=600&q=80'],
    available: true,
    featured: false,
  },
  {
    slug: 'moodita-tote-bag',
    title: 'Moodita Canvas Tote',
    type: 'MERCHANDISE',
    typeLabel: 'Merch',
    price: 799,
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80'],
    available: true,
    featured: false,
  },
  {
    slug: 'terracotta-dreams-print',
    title: 'Terracotta Dreams — A2 Print',
    type: 'PRINT',
    typeLabel: 'Print',
    price: 1800,
    images: ['https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=600&q=80'],
    available: false,
    featured: false,
  },
  {
    slug: 'kindness-bookmark-set',
    title: 'Kindness Bookmark Set (3pc)',
    type: 'BOOKMARK',
    typeLabel: 'Bookmark',
    price: 399,
    images: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80'],
    available: true,
    featured: false,
  },
]

export default function ShopPage() {
  return (
    <div className="pt-[var(--nav-height)] pb-24">

      {/* ── Header ── */}
      <div className="section-padding py-20 bg-paper border-b border-border">
        <div className="page-container">
          <RevealText>
            <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">The Shop</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h1 className="font-display text-fluid-4xl text-ink leading-tight tracking-tight mb-5">
              Own a piece<br />
              <span className="text-terracotta italic">of her world.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-sans text-fluid-base text-ink-muted max-w-lg leading-relaxed">
              Original paintings, prints, art cards, recipe ebooks, and more. Every piece carries a little bit of the story behind it.
            </p>
          </RevealText>
        </div>
      </div>

      {/* ── Filter bar ── */}
      <div className="section-padding py-6 bg-cream border-b border-border sticky top-[var(--nav-height)] z-30">
        <div className="page-container flex items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar" role="navigation" aria-label="Shop categories">
            {PRODUCT_TYPES.map((type) => (
              <button
                key={type}
                className={`shrink-0 font-sans text-xs tracking-wide px-4 py-2 rounded-full border transition-all duration-200 ${
                  type === 'All' ? 'bg-ink text-cream border-ink' : 'border-border text-ink-muted hover:border-terracotta hover:text-terracotta bg-cream'
                }`}
                aria-pressed={type === 'All'}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div className="section-padding py-12 bg-cream">
        <div className="page-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </div>

      {/* Structured Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Shop', path: '/shop' },
            ])
          ),
        }}
      />
    </div>
  )
}

// ── Product Card ────────────────────────────────────────────────────────────────
function ProductCard({
  slug,
  title,
  typeLabel,
  price,
  comparePrice,
  images,
  available,
}: (typeof PRODUCTS)[0]) {
  // Map product slug to category
  let category = 'art'
  if (slug.includes('ebook') || slug.includes('recipe')) {
    category = 'food'
  } else if (slug.includes('bookmark')) {
    category = 'writing'
  }

  return (
    <article className="group">
      <MotionLink
        href={`/shop/${slug}`}
        whileHover="hover"
        initial="initial"
        className="block"
        aria-label={`${title} — ₹${price.toLocaleString('en-IN')}`}
      >
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-paper mb-3">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {/* Card Hover Mask Reveal */}
          <CardHoverReveal category={category} label={typeLabel} />

          {/* Sold out overlay */}
          {!available && (
            <div className="absolute inset-0 bg-cream/70 flex items-center justify-center backdrop-blur-sm z-20">
              <span className="font-sans text-xs text-ink-muted tracking-[0.15em] uppercase">Sold Out</span>
            </div>
          )}
          {/* Wishlist + Quick add */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <button
              className="w-8 h-8 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center hover:bg-cream transition-colors shadow-soft-sm"
              aria-label="Add to wishlist"
            >
              <Heart size={14} strokeWidth={1.5} className="text-ink" />
            </button>
          </div>
          {comparePrice && (
            <div className="absolute top-3 left-3 z-30">
              <span className="font-sans text-[9px] bg-terracotta text-cream px-2 py-0.5 rounded-full tracking-wide">
                SALE
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="px-1 space-y-1">
          <p className="font-sans text-[10px] text-ink-muted tracking-[0.12em] uppercase">{typeLabel}</p>
          <h3 className="font-sans text-sm text-ink group-hover:text-terracotta transition-colors duration-200 leading-snug line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-sans text-sm font-medium text-ink">
              {formatCurrency(price)}
            </span>
            {comparePrice && (
              <span className="font-sans text-xs text-ink-muted line-through">
                {formatCurrency(comparePrice)}
              </span>
            )}
          </div>
        </div>
      </MotionLink>

      {/* Add to cart */}
      {available && (
        <button
          className="mt-3 w-full flex items-center justify-center gap-2 font-sans text-xs py-2.5 rounded-xl bg-paper border border-border text-ink-soft hover:bg-terracotta hover:text-cream hover:border-terracotta transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label={`Add ${title} to cart`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          Add to Cart
        </button>
      )}
    </article>
  )
}
