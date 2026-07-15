import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { RevealText } from '@/components/primitives/RevealText'
import { ArrowUpRight, Clock, Search } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Journal | Moodita',
  description: 'Niomi Gada\'s personal journal — essays on law, life, art, travel, food, and creativity.',
  alternates: {
    canonical: '/journal',
  },
}

const CATEGORIES = ['All', 'Legal', 'Lifestyle', 'Personal', 'Food', 'Travel', 'Art', 'Creativity', 'Journal']

const POSTS = [
  {
    slug: 'kindness-as-a-legal-principle',
    title: 'On Kindness as a Legal Principle',
    excerpt: 'What happens when you bring compassion into a courtroom that runs on precedent and argument? I\'ve been thinking about this for years.',
    category: 'Legal',
    date: new Date('2026-06-10'),
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    featured: true,
  },
  {
    slug: 'why-i-paint',
    title: 'Why I Paint When Words Fail Me',
    excerpt: 'There are feelings that live below language. Painting is my way of giving them a body, a colour, a shape.',
    category: 'Art',
    date: new Date('2026-05-22'),
    readingTime: 4,
    coverImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
    featured: false,
  },
  {
    slug: 'letter-to-the-girl-who-doubted',
    title: 'A Letter to the Girl Who Doubted',
    excerpt: 'She was seventeen, terrified of taking up space. I want to tell her something now.',
    category: 'Personal',
    date: new Date('2026-04-14'),
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    featured: false,
  },
  {
    slug: 'cooking-as-love-language',
    title: 'Cooking as a Love Language',
    excerpt: 'I don\'t cook for Instagram. I cook because food is the most honest way I know to say "I see you."',
    category: 'Food',
    date: new Date('2026-03-05'),
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    featured: false,
  },
  {
    slug: 'slow-travel-morocco',
    title: 'Slow Travel: What Morocco Taught Me',
    excerpt: 'I planned a week and stayed three. The medina had no interest in my schedule.',
    category: 'Travel',
    date: new Date('2026-02-18'),
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1539020140153-e479b8f22986?w=800&q=80',
    featured: false,
  },
]

export default function JournalPage() {
  const featured = POSTS.find((p) => p.featured)
  const rest = POSTS.filter((p) => !p.featured)

  return (
    <div className="pt-[var(--nav-height)] pb-24">

      {/* ── Page Header ── */}
      <div className="section-padding py-20 bg-cream border-b border-border">
        <div className="page-container">
          <RevealText>
            <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">Read</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h1 className="font-display text-fluid-4xl text-ink leading-tight tracking-tight mb-5">
              The Journal.
            </h1>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-sans text-fluid-base text-ink-muted max-w-xl leading-relaxed">
              Honest essays on law, life, creativity, food, travel, and what it means to keep choosing kindness.
            </p>
          </RevealText>
        </div>
      </div>

      <div className="section-padding py-16 bg-cream">
        <div className="page-container">

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-12" role="navigation" aria-label="Journal categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 font-sans text-xs tracking-wide px-4 py-2 rounded-full border transition-all duration-200 ${
                  cat === 'All'
                    ? 'bg-ink text-cream border-ink'
                    : 'border-border text-ink-muted hover:border-olive hover:text-olive bg-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <Link
              href={`/journal/${featured.slug}`}
              className="group block mb-16"
              aria-label={`Featured: ${featured.title}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden bg-paper border border-border hover:shadow-soft-lg transition-all duration-500">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-sans text-[10px] text-cream bg-terracotta px-3 py-1 rounded-full tracking-[0.1em] uppercase">
                      Featured
                    </span>
                    <span className="font-sans text-[10px] text-terracotta tracking-[0.1em] uppercase">{featured.category}</span>
                  </div>
                  <h2 className="font-display text-fluid-2xl text-ink leading-tight mb-4 group-hover:text-terracotta transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs text-ink-muted">{formatDate(featured.date)}</span>
                      <span className="flex items-center gap-1 font-sans text-xs text-ink-muted">
                        <Clock size={11} /> {featured.readingTime} min
                      </span>
                    </div>
                    <ArrowUpRight size={18} className="text-ink-muted group-hover:text-terracotta transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Post list */}
          <div className="divide-y divide-border">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group flex flex-col md:flex-row gap-6 py-10 hover:bg-paper/70 -mx-4 px-4 rounded-2xl transition-colors duration-300"
                aria-label={post.title}
              >
                <div className="relative w-full md:w-48 h-36 shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-[10px] text-terracotta tracking-[0.12em] uppercase">{post.category}</span>
                    <span className="w-0.5 h-0.5 rounded-full bg-border" />
                    <span className="font-sans text-[10px] text-ink-muted">{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1 font-sans text-[10px] text-ink-muted">
                      <Clock size={9} /> {post.readingTime} min
                    </span>
                  </div>
                  <h3 className="font-display text-fluid-lg text-ink mb-2 group-hover:text-terracotta transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
                <ArrowUpRight size={16} className="text-ink-muted group-hover:text-terracotta transition-colors shrink-0 mt-1 hidden md:block" />
              </Link>
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
              { name: 'Journal', path: '/journal' },
            ])
          ),
        }}
      />
    </div>
  )
}
