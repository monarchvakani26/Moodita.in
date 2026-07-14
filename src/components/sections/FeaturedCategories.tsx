'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { RevealText } from '@/components/primitives/RevealText'
import { ArrowUpRight } from 'lucide-react'
import { CardHoverReveal } from '@/components/primitives/CardHoverReveal'

const CATEGORIES = [
  {
    id: 'art',
    label: 'Art & Paintings',
    description: 'Original works on canvas, paper, and beyond.',
    href: '/gallery',
    emoji: '🎨',
    color: 'terracotta',
    accent: 'bg-terracotta/8 hover:bg-terracotta/14',
    border: 'border-terracotta/20',
    tag: 'Gallery',
  },
  {
    id: 'food',
    label: 'Food Journal',
    description: 'Recipes, flavours, and stories from the kitchen.',
    href: '/food',
    emoji: '✿',
    color: 'olive',
    accent: 'bg-olive/8 hover:bg-olive/14',
    border: 'border-olive/20',
    tag: 'Recipes',
  },
  {
    id: 'travel',
    label: 'Travel Diary',
    description: 'Places, people, and the beauty of wandering.',
    href: '/travel',
    emoji: '◎',
    color: 'forest',
    accent: 'bg-forest/8 hover:bg-forest/14',
    border: 'border-forest/20',
    tag: 'Travels',
  },
  {
    id: 'writing',
    label: 'Writing',
    description: 'Poems, letters, essays, and quiet thoughts.',
    href: '/writing',
    emoji: '✦',
    color: 'terracotta',
    accent: 'bg-terracotta/8 hover:bg-terracotta/14',
    border: 'border-terracotta/20',
    tag: 'Words',
  },
  {
    id: 'photography',
    label: 'Photography',
    description: 'Moments captured with intention and care.',
    href: '/gallery?filter=photography',
    emoji: '◉',
    color: 'olive',
    accent: 'bg-olive/8 hover:bg-olive/14',
    border: 'border-olive/20',
    tag: 'Photos',
  },
  {
    id: 'journal',
    label: 'Journal',
    description: 'Reflections on law, life, and everything in between.',
    href: '/journal',
    emoji: '⊙',
    color: 'forest',
    accent: 'bg-forest/8 hover:bg-forest/14',
    border: 'border-forest/20',
    tag: 'Read',
  },
]

/**
 * Featured category cards section.
 * Editorial grid layout with staggered reveal on scroll.
 */
export function FeaturedCategories() {
  return (
    <section className="section-padding py-28 bg-cream" aria-labelledby="categories-heading">
      <div className="page-container">
        {/* Section header */}
        <div className="mb-16 max-w-xl">
          <RevealText>
            <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">
              One Person. Many Worlds.
            </p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2
              id="categories-heading"
              className="font-display text-fluid-3xl text-ink leading-tight tracking-tight"
            >
              Explore everything<br />
              <span className="text-olive italic">Niomi creates.</span>
            </h2>
          </RevealText>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} {...cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Category Card ──────────────────────────────────────────────────────────────
const MotionLink = motion(Link)

function CategoryCard({
  id,
  label,
  description,
  href,
  emoji,
  accent,
  border,
  tag,
  index,
}: (typeof CATEGORIES)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <MotionLink
        href={href}
        whileHover="hover"
        initial="initial"
        className={`group relative overflow-hidden block rounded-2xl border p-7 transition-all duration-500 ${accent} ${border}`}
        aria-label={`Explore ${label}`}
      >
        <CardHoverReveal category={id} label={tag} />

        <div className="relative z-0 flex flex-col h-full">
          {/* Top row */}
          <div className="flex items-start justify-between mb-6">
            <span
              className="text-3xl leading-none"
              role="img"
              aria-hidden="true"
            >
              {emoji}
            </span>
            <span className="font-sans text-[10px] text-ink-muted tracking-[0.15em] uppercase border border-border px-2.5 py-1 rounded-full">
              {tag}
            </span>
          </div>

          {/* Label */}
          <h3 className="font-display text-fluid-lg text-ink mb-2 group-hover:text-terracotta transition-colors duration-300">
            {label}
          </h3>

          {/* Description */}
          <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6">
            {description}
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-1 font-sans text-xs text-ink-soft group-hover:text-terracotta transition-colors duration-300 mt-auto">
            <span>Explore</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </MotionLink>
    </motion.div>
  )
}
