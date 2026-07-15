'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { RevealImage } from '@/components/primitives/RevealText'
import { ArrowUpRight } from 'lucide-react'

const TIMELINE = [
  {
    year: '2015',
    title: 'Advocate by Profession',
    desc: 'Enrolled at law school with a deep belief that justice and kindness can coexist. The courtroom became a place for storytelling.',
  },
  {
    year: '2018',
    title: 'Artist by Passion',
    desc: 'Picked up a brush during a quiet afternoon and never really put it down. Paintings became a second language.',
  },
  {
    year: '2021',
    title: 'Storyteller by Heart',
    desc: 'Started writing poems, travel journals, and food diaries. Every experience became a story worth sharing.',
  },
  {
    year: 'Now',
    title: 'Creator in Full',
    desc: 'Moodita is the convergence of all these worlds — a digital home for everything that makes Niomi Gada, Niomi Gada.',
  },
]

/**
 * About preview section on the homepage.
 * Split layout: portrait left, timeline right.
 */
export function AboutPreview() {
  return (
    <section
      className="section-padding py-28 bg-paper"
      aria-labelledby="about-heading"
    >
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Portrait */}
          <RevealImage className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&auto=format"
              alt="Niomi Gada — advocate, artist, and storyteller"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            {/* Quote badge */}
            <div className="absolute bottom-6 left-6 right-6 glass rounded-xl px-5 py-4">
              <p className="font-serif text-sm italic text-ink leading-snug">
                &ldquo;I believe every story has the power to change a mind — or soften one.&rdquo;
              </p>
              <p className="font-sans text-[10px] text-ink-muted mt-1 tracking-wide">— Niomi Gada</p>
            </div>
          </RevealImage>

          {/* Right — Text + Timeline */}
          <div className="space-y-10">
            <div>
              <RevealText>
                <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">
                  About Niomi Gada
                </p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2
                  id="about-heading"
                  className="font-display text-fluid-3xl text-ink leading-tight tracking-tight mb-5"
                >
                  One woman,<br />
                  <span className="text-terracotta italic">many stories.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-sans text-fluid-base text-ink-muted leading-[1.8] max-w-prose">
                  By day, Niomi Gada fights for justice in courtrooms. By evening, she paints 
                  worlds into existence on canvas. Late at night, she writes poems about 
                  kindness, cooks recipes from memory, and maps the places she&apos;s wandered. 
                  Moodita is where all of these lives meet.
                </p>
              </RevealText>
            </div>

            {/* Timeline */}
            <div className="space-y-0" role="list" aria-label="Niomi Gada's journey">
              {TIMELINE.map((item, i) => (
                <TimelineItem key={item.year} {...item} index={i} />
              ))}
            </div>

            <RevealText delay={0.3}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-sans text-sm text-olive hover:text-terracotta transition-colors duration-200 group"
                aria-label="Read Niomi Gada's full story"
              >
                Read the full story
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Timeline Item ──────────────────────────────────────────────────────────────
function TimelineItem({
  year,
  title,
  desc,
  index,
}: (typeof TIMELINE)[0] & { index: number }) {
  return (
    <motion.div
      role="listitem"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-6 pb-8 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center shrink-0" aria-hidden="true">
        <div className="w-2 h-2 rounded-full bg-terracotta mt-1.5 ring-4 ring-terracotta/15 shrink-0" />
        {index < TIMELINE.length - 1 && (
          <div className="w-px flex-1 bg-border mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="pb-2">
        <span className="font-sans text-[10px] text-terracotta tracking-[0.15em] uppercase font-medium">
          {year}
        </span>
        <h3 className="font-display text-fluid-base text-ink mt-0.5 mb-1.5 group-hover:text-terracotta transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-sm text-ink-muted leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  )
}
