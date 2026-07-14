import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { ArrowUpRight } from 'lucide-react'
import { CardHoverReveal } from '@/components/primitives/CardHoverReveal'
import { MotionLink } from '@/components/primitives/MotionLink'

export const metadata: Metadata = {
  title: 'Creative Gallery',
  description:
    'Original paintings, illustrations, sketches, and photography by Niomi. Browse the creative gallery.',
}

const FILTER_CATEGORIES = ['All', 'Paintings', 'Illustrations', 'Sketches', 'Photography', 'Nature', 'Food']

const ARTWORKS = [
  { id: '1', slug: 'golden-hour', title: 'Golden Hour', medium: 'Watercolour', category: 'Paintings', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', height: 280 },
  { id: '2', slug: 'quiet-forest', title: 'Quiet Forest', medium: 'Oil on Canvas', category: 'Paintings', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80', height: 380 },
  { id: '3', slug: 'morning-bloom', title: 'Morning Bloom', medium: 'Acrylic', category: 'Illustrations', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80', height: 320 },
  { id: '4', slug: 'earth-sky', title: 'Earth & Sky', medium: 'Mixed Media', category: 'Paintings', image: 'https://images.unsplash.com/photo-1549887534-1541e9326688?w=600&q=80', height: 240 },
  { id: '5', slug: 'still-life-3', title: 'Still Life No. 3', medium: 'Watercolour', category: 'Illustrations', image: 'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=600&q=80', height: 300 },
  { id: '6', slug: 'terracotta-dreams', title: 'Terracotta Dreams', medium: 'Oil on Canvas', category: 'Paintings', image: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=600&q=80', height: 260 },
  { id: '7', slug: 'city-light', title: 'City Light', medium: 'Photography', category: 'Photography', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80', height: 340 },
  { id: '8', slug: 'wild-herbs', title: 'Wild Herbs', medium: 'Photography', category: 'Food', image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80', height: 220 },
  { id: '9', slug: 'river-bend', title: 'River Bend', medium: 'Sketch', category: 'Sketches', image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=600&q=80', height: 360 },
  { id: '10', slug: 'petal-study', title: 'Petal Study', medium: 'Watercolour', category: 'Nature', image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc64?w=600&q=80', height: 290 },
  { id: '11', slug: 'shadow-play', title: 'Shadow Play', medium: 'Photography', category: 'Photography', image: 'https://images.unsplash.com/photo-1504713088706-b9e2d6f55a1b?w=600&q=80', height: 320 },
  { id: '12', slug: 'copper-morning', title: 'Copper Morning', medium: 'Acrylic', category: 'Paintings', image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&q=80', height: 240 },
]

export default function GalleryPage() {
  return (
    <div className="pt-[var(--nav-height)] pb-24">

      {/* ── Header ── */}
      <div className="section-padding py-20 bg-paper border-b border-border">
        <div className="page-container">
          <RevealText>
            <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">Creative Gallery</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h1 className="font-display text-fluid-4xl text-ink leading-tight tracking-tight mb-5">
              Art made with<br />
              <span className="text-terracotta italic">feeling.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-sans text-fluid-base text-ink-muted max-w-lg leading-relaxed">
              Paintings, illustrations, sketches, and photography — a visual diary of how Niomi sees the world.
            </p>
          </RevealText>
        </div>
      </div>

      {/* ── Filters ── */}
      <div className="section-padding py-8 bg-cream border-b border-border sticky top-[var(--nav-height)] z-30 backdrop-blur-sm">
        <div className="page-container">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar" role="navigation" aria-label="Gallery filter categories">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 font-sans text-xs tracking-wide px-4 py-2 rounded-full border transition-all duration-200 ${
                  cat === 'All'
                    ? 'bg-ink text-cream border-ink'
                    : 'border-border text-ink-muted hover:border-terracotta hover:text-terracotta bg-cream'
                }`}
                aria-pressed={cat === 'All'}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Masonry Grid ── */}
      <div className="section-padding py-12 bg-cream">
        <div className="page-container">
          <div className="masonry-grid">
            {ARTWORKS.map((artwork) => {
              const category = artwork.category === 'Food'
                ? 'food'
                : (artwork.category === 'Photography' ? 'photography' : 'art')

              return (
                <div key={artwork.id} className="masonry-item">
                  <MotionLink
                    href={`/gallery/${artwork.slug}`}
                    whileHover="hover"
                    initial="initial"
                    className="group relative block overflow-hidden rounded-xl bg-paper"
                    style={{ height: artwork.height }}
                    aria-label={`${artwork.title} — ${artwork.medium}`}
                  >
                    <Image
                      src={artwork.image}
                      alt={`${artwork.title} — ${artwork.medium} by Niomi`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Card Hover Mask Reveal */}
                    <CardHoverReveal category={category} label={artwork.category} />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20" />
                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-30">
                      <p className="font-sans text-[9px] text-cream/70 tracking-[0.12em] uppercase mb-0.5">{artwork.medium}</p>
                      <div className="flex items-center justify-between">
                        <p className="font-display text-sm text-cream">{artwork.title}</p>
                        <ArrowUpRight size={14} className="text-cream/70" />
                      </div>
                    </div>
                  </MotionLink>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
