import type { Metadata } from 'next'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Poems, letters, essays, and quiet thoughts by Niomi. A collection of words written from the heart.',
}

const WRITING_TYPES = ['All', 'Poems', 'Letters', 'Essays', 'Thoughts']

const WRITINGS = [
  {
    slug: 'on-being-alone',
    title: 'On Being Alone (Without Being Lonely)',
    type: 'ESSAY',
    typeLabel: 'Essay',
    excerpt: 'Solitude is not the same as loneliness. One is a room you chose; the other is a room that chose you.',
    publishedAt: new Date('2026-05-10'),
    readingTime: 7,
  },
  {
    slug: 'the-color-of-tuesday',
    title: 'The Colour of Tuesday',
    type: 'POEM',
    typeLabel: 'Poem',
    excerpt: 'Tuesday smells like coffee left cooling / on a desk by someone / who had to rush away.',
    publishedAt: new Date('2026-04-28'),
    readingTime: 2,
  },
  {
    slug: 'dear-past-self',
    title: 'Dear Past Self',
    type: 'LETTER',
    typeLabel: 'Letter',
    excerpt: 'I want to tell you that the thing you\'re most afraid of right now — it passes. And it leaves something behind that you\'ll actually keep.',
    publishedAt: new Date('2026-04-01'),
    readingTime: 4,
  },
  {
    slug: 'what-kindness-costs',
    title: 'What Kindness Actually Costs',
    type: 'THOUGHT',
    typeLabel: 'Thought',
    excerpt: 'Everyone says "be kind" like it\'s free. It isn\'t. It costs attention, time, and often, the decision not to be right.',
    publishedAt: new Date('2026-03-15'),
    readingTime: 3,
  },
  {
    slug: 'city-lights-at-3am',
    title: 'City Lights at 3am',
    type: 'POEM',
    typeLabel: 'Poem',
    excerpt: 'A window is both a frame / and a door / you haven\'t opened yet.',
    publishedAt: new Date('2026-02-20'),
    readingTime: 2,
  },
]

const TYPE_COLORS: Record<string, string> = {
  POEM:    'text-olive',
  LETTER:  'text-terracotta',
  ESSAY:   'text-forest',
  THOUGHT: 'text-ink-muted',
}

export default function WritingPage() {
  return (
    <div className="pt-[var(--nav-height)] pb-24">

      {/* Header */}
      <div className="section-padding py-20 bg-cream border-b border-border">
        <div className="page-container">
          <RevealText>
            <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">Words</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h1 className="font-display text-fluid-4xl text-ink leading-tight tracking-tight mb-5">
              Writing.
            </h1>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-sans text-fluid-base text-ink-muted max-w-xl leading-relaxed">
              Poems, letters, essays, and quiet thoughts. Words that wouldn&apos;t stay inside.
            </p>
          </RevealText>
        </div>
      </div>

      {/* Filters */}
      <div className="section-padding py-6 bg-cream border-b border-border">
        <div className="page-container">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {WRITING_TYPES.map((type) => (
              <button
                key={type}
                className={`shrink-0 font-sans text-xs tracking-wide px-4 py-2 rounded-full border transition-all duration-200 ${
                  type === 'All' ? 'bg-ink text-cream border-ink' : 'border-border text-ink-muted hover:border-olive hover:text-olive'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Writing list */}
      <div className="section-padding py-16 bg-cream">
        <div className="page-container max-w-3xl">
          <div className="space-y-0 divide-y divide-border">
            {WRITINGS.map((piece) => (
              <Link
                key={piece.slug}
                href={`/writing/${piece.slug}`}
                className="group block py-10 hover:bg-paper/60 -mx-4 px-4 rounded-2xl transition-colors duration-300"
                aria-label={`${piece.typeLabel}: ${piece.title}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`font-sans text-[10px] tracking-[0.15em] uppercase font-medium ${TYPE_COLORS[piece.type]}`}>
                        {piece.typeLabel}
                      </span>
                      <span className="font-sans text-[10px] text-ink-muted">{piece.readingTime} min read</span>
                    </div>
                    <h2 className="font-display text-fluid-xl text-ink group-hover:text-terracotta transition-colors duration-300 mb-3 leading-snug">
                      {piece.title}
                    </h2>
                    <p className={`font-sans leading-relaxed text-ink-muted ${piece.type === 'POEM' ? 'italic font-serif text-base' : 'text-sm'} line-clamp-3`}>
                      {piece.excerpt}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-ink-muted group-hover:text-terracotta transition-colors duration-300 shrink-0 mt-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
