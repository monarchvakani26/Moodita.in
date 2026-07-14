'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardHoverRevealProps {
  category: 'art' | 'food' | 'travel' | 'writing' | 'photography' | 'journal' | string
  label: string
}

const CATEGORY_COLORS: Record<string, string> = {
  art: 'bg-terracotta text-cream',
  food: 'bg-olive text-cream',
  travel: 'bg-forest text-cream',
  writing: 'bg-ink text-cream',
  photography: 'bg-forest text-cream',
  journal: 'bg-ink text-cream',
}

const CATEGORY_MASKS: Record<string, string> = {
  art: 'url(#mask-art)',
  food: 'url(#mask-food)',
  travel: 'url(#mask-travel)',
  writing: 'url(#mask-writing)',
  photography: 'url(#mask-travel)',
  journal: 'url(#mask-writing)',
}

/**
 * Premium category/product card hover reveal overlay.
 * Uses custom SVG shape clip-paths to reveal category branding on hover.
 */
export function CardHoverReveal({ category, label }: CardHoverRevealProps) {
  const colorClass = CATEGORY_COLORS[category] || 'bg-ink text-cream'
  const maskStyle = CATEGORY_MASKS[category] || 'url(#mask-writing)'

  return (
    <motion.div
      className={cn(
        'absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden z-10',
        colorClass
      )}
      style={{
        clipPath: maskStyle,
        WebkitClipPath: maskStyle,
      }}
      initial={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.05, opacity: 1 }}
      variants={{
        hover: { scale: 1.05, opacity: 1 },
      }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1], // Custom unhurried cubic-bezier
      }}
    >
      <div className="text-center p-6 transform-gpu scale-95 group-hover:scale-100 transition-transform duration-700 ease-[0.16,1,0.3,1]">
        <span className="block font-sans text-[10px] tracking-[0.25em] uppercase opacity-70 mb-2">
          Explore
        </span>
        <span className="block font-display text-2xl md:text-3xl italic tracking-tight leading-none">
          {label}
        </span>
      </div>
    </motion.div>
  )
}
