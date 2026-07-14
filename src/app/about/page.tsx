import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText, RevealImage } from '@/components/primitives/RevealText'
import { NewsletterCTA } from '@/components/sections/NewsletterCTA'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Niomi',
  description:
    'Advocate by profession, artist by passion, and storyteller by heart. Learn the story behind Moodita.',
}

const TIMELINE = [
  {
    year: '1999',
    label: 'Origin',
    desc: 'Born into a family that believed words could change the world. Stories were her first language.',
  },
  {
    year: '2015',
    label: 'Law School',
    desc: 'Chose law not just as a career but as a calling. Justice and compassion were never opposites to her.',
  },
  {
    year: '2018',
    label: 'First Canvas',
    desc: 'Discovered painting during a particularly quiet summer. Oil on canvas became her most honest confession.',
  },
  {
    year: '2020',
    label: 'The Journal Begins',
    desc: 'Started writing publicly — law, life, food, art, and everything in between. Readers found a voice they recognised.',
  },
  {
    year: '2022',
    label: 'First Solo Show',
    desc: 'Exhibited original paintings at a small gallery. Sold out in one weekend. Didn\'t see it coming. Cried a little.',
  },
  {
    year: '2024',
    label: 'Moodita is Born',
    desc: 'Built a digital home for all of her worlds to exist together. One name, one woman, many stories.',
  },
]

const VALUES = [
  {
    icon: '◉',
    title: 'Kindness Above Everything',
    desc: 'Not as a platitude — as an active, daily, sometimes difficult practice. In the courtroom. In the kitchen. On the canvas.',
  },
  {
    icon: '✦',
    title: 'Art as Honesty',
    desc: 'Every piece she makes is an honest conversation with herself. Painting is how she processes the world when words fall short.',
  },
  {
    icon: '✿',
    title: 'Community Over Comparison',
    desc: 'There is enough room for everyone to create, to be seen, to matter. She builds from this belief.',
  },
]

export default function AboutPage() {
  return (
    <article className="pt-[var(--nav-height)] pb-16 md:pb-24">

      {/* ── Hero ── */}
      <div className="section-padding py-24 bg-cream">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="space-y-8 order-2 lg:order-1">
              <RevealText>
                <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase">About</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h1 className="font-display text-fluid-4xl text-ink leading-[1.0] tracking-tight">
                  Niomi.<br />
                  <span className="text-terracotta italic">Uncontained.</span>
                </h1>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-sans text-fluid-base text-ink-muted leading-[1.8] max-w-prose">
                  Advocate by profession. Artist by passion. Storyteller by heart. Foodie by hunger.
                  Traveller by restlessness. Writer by necessity. Niomi doesn&apos;t choose one
                  identity because none of them alone is complete enough.
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <p className="font-sans text-fluid-base text-ink-muted leading-[1.8] max-w-prose">
                  Moodita is her attempt to build one place where all of these lives coexist —
                  honestly, warmly, without apology.
                </p>
              </RevealText>
              <RevealText delay={0.35}>
                <blockquote className="font-serif text-fluid-xl text-olive italic border-l-2 border-terracotta pl-5 leading-snug">
                  &ldquo;Kindness above everything — not just as a tagline, but as a way of existing.&rdquo;
                </blockquote>
              </RevealText>
            </div>

            {/* Portrait */}
            <RevealImage
              delay={0.1}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden max-w-sm mx-auto lg:ml-auto order-1 lg:order-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80&auto=format"
                alt="Niomi — advocate, artist, and storyteller, portrait photograph"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 40vw"
                priority
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/15" />
            </RevealImage>
          </div>
        </div>
      </div>

      {/* ── Values ── */}
      <div className="section-padding py-24 bg-paper">
        <div className="page-container">
          <RevealText>
            <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">What she believes</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-display text-fluid-2xl text-ink mb-16 leading-tight">
              The values behind the work.
            </h2>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <RevealText key={v.title} delay={i * 0.1} tag="div">
                <div className="space-y-4 p-8 rounded-2xl bg-cream border border-border hover:shadow-soft transition-shadow duration-500">
                  <span className="text-2xl" aria-hidden="true">{v.icon}</span>
                  <h3 className="font-display text-fluid-lg text-ink">{v.title}</h3>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed">{v.desc}</p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="section-padding py-24 bg-cream">
        <div className="page-container max-w-3xl mx-auto">
          <RevealText>
            <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">The journey</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-display text-fluid-2xl text-ink mb-16 leading-tight">
              How she got here.
            </h2>
          </RevealText>

          <ol className="relative space-y-0" aria-label="Niomi's timeline">
            {TIMELINE.map((item, i) => (
              <li
                key={item.year}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                {/* Line */}
                {i < TIMELINE.length - 1 && (
                  <div
                    className="absolute left-[3.25rem] top-10 w-px bg-border"
                    style={{ height: 'calc(100% - 2rem)' }}
                    aria-hidden="true"
                  />
                )}

                {/* Year bubble */}
                <div className="shrink-0 w-24 text-right">
                  <span className="font-sans text-xs text-terracotta font-medium tracking-wide">{item.year}</span>
                </div>

                {/* Dot */}
                <div
                  className="relative z-10 shrink-0 w-3 h-3 rounded-full bg-terracotta ring-4 ring-terracotta/15 mt-1"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="flex-1 pb-2">
                  <p className="font-sans text-[10px] text-ink-muted tracking-[0.15em] uppercase mb-1">{item.label}</p>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ── CTA row ── */}
      <div className="section-padding py-20 bg-paper border-t border-border">
        <div className="page-container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-fluid-2xl text-ink mb-2">Explore Niomi&apos;s world.</h2>
            <p className="font-sans text-sm text-ink-muted">Start anywhere — every door leads somewhere beautiful.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Gallery', href: '/gallery' },
              { label: 'Journal', href: '/journal' },
              { label: 'Shop', href: '/shop' },
              { label: 'Contact', href: '/contact' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 btn-secondary text-sm"
              >
                {l.label} <ArrowUpRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterCTA />
    </article>
  )
}
