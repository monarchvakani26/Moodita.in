import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Travel Diary | Moodita',
  description: 'Niomi Gada\'s travel diary — places visited, photo stories, and reflections from the road.',
  alternates: {
    canonical: '/travel',
  },
}

const TRAVEL_ENTRIES = [
  {
    slug: 'marrakech-seven-days',
    title: 'Seven Days in Marrakech',
    location: 'Marrakech',
    country: 'Morocco',
    description: 'I planned a week and stayed three. The medina had no interest in my schedule, and I learned to have no interest in mine.',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8f22986?w=800&q=80',
    visitedAt: '2025 / Autumn',
    featured: true,
  },
  {
    slug: 'kyoto-in-april',
    title: 'Kyoto in April',
    location: 'Kyoto',
    country: 'Japan',
    description: 'Cherry blossoms and quiet temples. Found a small café that served one thing only — and it was perfect.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    visitedAt: '2025 / Spring',
    featured: false,
  },
  {
    slug: 'goa-monsoon',
    title: 'Goa in the Monsoon',
    location: 'Goa',
    country: 'India',
    description: 'Everyone warned me. Nobody warned me how beautiful it would be. The rain made the green unreal.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    visitedAt: '2025 / July',
    featured: false,
  },
  {
    slug: 'lisbon-tram-28',
    title: 'Lisbon & Tram 28',
    location: 'Lisbon',
    country: 'Portugal',
    description: 'Rode Tram 28 three times just to feel it again. The city tasted like custard tarts and nostalgia.',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80',
    visitedAt: '2024 / May',
    featured: false,
  },
]

export default function TravelPage() {
  const featured = TRAVEL_ENTRIES[0]
  const rest = TRAVEL_ENTRIES.slice(1)

  return (
    <div className="pt-[var(--nav-height)] pb-24">

      {/* Header */}
      <div className="section-padding py-20 bg-cream border-b border-border relative overflow-hidden">
        {/* Decorative world shape */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" fill="none" className="text-forest" />
            <ellipse cx="200" cy="200" rx="90" ry="180" stroke="currentColor" strokeWidth="1" fill="none" className="text-forest" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-forest" />
            <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" className="text-forest" />
          </svg>
        </div>

        <div className="page-container relative z-10">
          <RevealText>
            <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">Travel Diary</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h1 className="font-display text-fluid-4xl text-ink leading-tight tracking-tight mb-5">
              Places &amp;<br />
              <span className="text-forest italic">memories.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-sans text-fluid-base text-ink-muted max-w-lg leading-relaxed">
              I travel to get lost on purpose. Here are the places that found me.
            </p>
          </RevealText>
        </div>
      </div>

      <div className="section-padding py-16 bg-cream">
        <div className="page-container">

          {/* Featured */}
          <Link
            href={`/travel/${featured.slug}`}
            className="group block mb-16 rounded-3xl overflow-hidden relative aspect-[16/9] md:aspect-[21/9]"
            aria-label={`${featured.title} — ${featured.location}, ${featured.country}`}
          >
            <Image
              src={featured.image}
              alt={`${featured.title} — ${featured.location}`}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={12} className="text-cream/70" aria-hidden="true" />
                <span className="font-sans text-xs text-cream/70 tracking-wide">{featured.location}, {featured.country}</span>
                <span className="font-sans text-xs text-cream/50">· {featured.visitedAt}</span>
              </div>
              <h2 className="font-display text-fluid-2xl text-cream leading-tight mb-3 max-w-xl">
                {featured.title}
              </h2>
              <p className="font-sans text-sm text-cream/70 leading-relaxed max-w-lg mb-4 hidden md:block">
                {featured.description}
              </p>
              <div className="inline-flex items-center gap-2 font-sans text-xs text-cream/80 group-hover:text-cream transition-colors">
                Read the story <ArrowUpRight size={12} />
              </div>
            </div>
          </Link>

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((entry) => (
              <Link
                key={entry.slug}
                href={`/travel/${entry.slug}`}
                className="group block rounded-2xl overflow-hidden bg-paper border border-border hover:shadow-soft transition-all duration-500 hover:-translate-y-1"
                aria-label={`${entry.title} — ${entry.location}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-1.5 text-ink-muted">
                    <MapPin size={11} aria-hidden="true" />
                    <span className="font-sans text-[10px] tracking-wide">{entry.location}, {entry.country}</span>
                    <span className="font-sans text-[10px] text-ink-muted/60">· {entry.visitedAt}</span>
                  </div>
                  <h3 className="font-display text-fluid-lg text-ink group-hover:text-terracotta transition-colors duration-300 leading-snug">
                    {entry.title}
                  </h3>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed line-clamp-2">{entry.description}</p>
                  <div className="flex items-center gap-1 font-sans text-xs text-olive group-hover:text-terracotta transition-colors pt-1">
                    Read story <ArrowUpRight size={12} />
                  </div>
                </div>
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
              { name: 'Travel', path: '/travel' },
            ])
          ),
        }}
      />
    </div>
  )
}
