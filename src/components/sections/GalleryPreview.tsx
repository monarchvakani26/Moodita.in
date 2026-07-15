'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { ArrowUpRight } from 'lucide-react'

// Sample gallery preview items — replaced by real Cloudinary data in Phase 3
const GALLERY_ITEMS = [
  {
    id: '1',
    title: 'Golden Hour',
    medium: 'Watercolour',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    href: '/gallery/golden-hour',
    tall: false,
  },
  {
    id: '2',
    title: 'Quiet Forest',
    medium: 'Oil on Canvas',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80',
    href: '/gallery/quiet-forest',
    tall: true,
  },
  {
    id: '3',
    title: 'Morning Bloom',
    medium: 'Acrylic',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
    href: '/gallery/morning-bloom',
    tall: false,
  },
  {
    id: '4',
    title: 'Earth & Sky',
    medium: 'Mixed Media',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326688?w=600&q=80',
    href: '/gallery/earth-sky',
    tall: true,
  },
  {
    id: '5',
    title: 'Still Life No. 3',
    medium: 'Watercolour',
    image: 'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=600&q=80',
    href: '/gallery/still-life-3',
    tall: false,
  },
  {
    id: '6',
    title: 'Terracotta Dreams',
    medium: 'Oil on Canvas',
    image: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=600&q=80',
    href: '/gallery/terracotta-dreams',
    tall: false,
  },
]

/**
 * Gallery preview section on the homepage.
 * Mini masonry/bento grid with hover reveal.
 */
export function GalleryPreview() {
  return (
    <section className="section-padding py-28 bg-cream" aria-labelledby="gallery-preview-heading">
      <div className="page-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <RevealText>
              <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">
                Creative Gallery
              </p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2
                id="gallery-preview-heading"
                className="font-display text-fluid-3xl text-ink leading-tight tracking-tight"
              >
                Art made with<br />
                <span className="text-olive italic">feeling.</span>
              </h2>
            </RevealText>
          </div>
          <RevealText delay={0.2}>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-sans text-sm text-olive hover:text-terracotta transition-colors duration-200 group shrink-0"
            >
              View full gallery
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </RevealText>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryTile key={item.id} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Gallery Tile ───────────────────────────────────────────────────────────────
function GalleryTile({
  title,
  medium,
  image,
  href,
  tall,
  index,
}: (typeof GALLERY_ITEMS)[0] & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={tall ? 'row-span-2' : ''}
    >
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-2xl w-full h-full"
        style={{ minHeight: tall ? '360px' : '180px' }}
        aria-label={`${title} — ${medium}`}
      >
        <Image
          src={image}
          alt={`${title} — ${medium} by Niomi Gada`}
          fill
          className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Info panel */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <p className="font-sans text-[10px] text-cream/70 tracking-[0.12em] uppercase mb-0.5">{medium}</p>
          <p className="font-display text-sm text-cream">{title}</p>
        </div>
      </Link>
    </motion.article>
  )
}
