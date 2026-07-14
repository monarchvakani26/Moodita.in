'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { ArrowUpRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Sample journal entries — will be fetched from DB in Phase 3
const JOURNAL_ENTRIES = [
  {
    id: '1',
    slug: 'kindness-as-a-legal-principle',
    title: 'On Kindness as a Legal Principle',
    excerpt: 'What happens when you bring compassion into a courtroom that runs on precedent and argument? I\'ve been thinking about this for years.',
    category: 'Legal',
    date: new Date('2026-06-10'),
    readingTime: 6,
  },
  {
    id: '2',
    slug: 'why-i-paint',
    title: 'Why I Paint When Words Fail Me',
    excerpt: 'There are feelings that live below language. Painting is my way of giving them a body, a colour, a shape that the dictionary doesn\'t have.',
    category: 'Art',
    date: new Date('2026-05-22'),
    readingTime: 4,
  },
  {
    id: '3',
    slug: 'letter-to-the-girl-who-doubted',
    title: 'A Letter to the Girl Who Doubted',
    excerpt: 'She was seventeen, terrified of taking up space. I want to tell her something now — something she couldn\'t have believed then.',
    category: 'Personal',
    date: new Date('2026-04-14'),
    readingTime: 5,
  },
]

/**
 * Latest journal entries preview section.
 * Minimal editorial card list like Medium.
 */
export function LatestJournal() {
  return (
    <section className="section-padding py-28 bg-paper" aria-labelledby="journal-preview-heading">
      <div className="page-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <RevealText>
              <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">
                Recent Writing
              </p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2
                id="journal-preview-heading"
                className="font-display text-fluid-3xl text-ink leading-tight tracking-tight"
              >
                From the<br />
                <span className="text-terracotta italic">journal.</span>
              </h2>
            </RevealText>
          </div>
          <RevealText delay={0.2}>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 font-sans text-sm text-olive hover:text-terracotta transition-colors duration-200 group shrink-0"
            >
              Read all entries
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </RevealText>
        </div>

        {/* Entry list */}
        <div className="divide-y divide-border">
          {JOURNAL_ENTRIES.map((entry, i) => (
            <JournalCard key={entry.id} {...entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Journal Card ───────────────────────────────────────────────────────────────
function JournalCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readingTime,
  index,
}: (typeof JOURNAL_ENTRIES)[0] & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/journal/${slug}`}
        className="group flex flex-col md:flex-row items-start md:items-center gap-6 py-10 hover:bg-cream/50 -mx-6 px-6 rounded-2xl transition-colors duration-300"
        aria-label={title}
      >
        {/* Index number */}
        <span
          className="font-sans text-xs text-ink-muted w-8 shrink-0 hidden md:block"
          aria-hidden="true"
        >
          0{index + 1}
        </span>

        {/* Meta */}
        <div className="flex items-center gap-3 md:w-36 shrink-0">
          <span className="font-sans text-[10px] text-terracotta tracking-[0.12em] uppercase font-medium">
            {category}
          </span>
          <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
          <span className="font-sans text-[10px] text-ink-muted">
            {readingTime} min
          </span>
        </div>

        {/* Title + excerpt */}
        <div className="flex-1">
          <h3 className="font-display text-fluid-lg text-ink group-hover:text-terracotta transition-colors duration-300 mb-2 leading-snug">
            {title}
          </h3>
          <p className="font-sans text-sm text-ink-muted leading-relaxed line-clamp-2 max-w-2xl">
            {excerpt}
          </p>
        </div>

        {/* Date + arrow */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="font-sans text-xs text-ink-muted hidden lg:block">
            {formatDate(date)}
          </span>
          <ArrowUpRight
            size={16}
            className="text-ink-muted group-hover:text-terracotta transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </Link>
    </motion.article>
  )
}
