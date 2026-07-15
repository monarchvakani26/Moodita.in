import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { buildOpenGraph, buildTwitterCard } from '@/lib/seo'
import { getBreadcrumbSchema } from '@/lib/schema'

const TRAVEL_ENTRIES: Record<string, {
  slug: string
  title: string
  location: string
  country: string
  description: string
  content: string
  coverImage: string
  visitedAt: string
  images: string[]
}> = {
  'marrakech-seven-days': {
    slug: 'marrakech-seven-days',
    title: 'Seven Days in Marrakech',
    location: 'Marrakech',
    country: 'Morocco',
    description: 'I planned a week and stayed three. The medina had no interest in my schedule.',
    content: `I arrived expecting chaos and found, instead, a city with an extremely deliberate pace. The chaos was real — the souks, the motorbikes, the calls to prayer layering over each other at dusk — but underneath it was something calm.

I had a list. I abandoned it by day two.

The thing about Marrakech is that it rewards aimlessness. The more you try to navigate it with intention, the more it resists. But if you walk without destination, it reveals itself. A courtyard behind an unmarked door. A woman selling one perfect type of orange in one perfect basket. A rooftop with mint tea and a view that makes you understand why people stay.

I stayed.

Not forever — only three weeks total, not one as planned. But long enough to stop taking photographs and start just looking. Long enough to feel, briefly, like I belonged to the specific corner of a specific souk at a specific time of day.`,
    coverImage: 'https://images.unsplash.com/photo-1539020140153-e479b8f22986?w=1600&q=85',
    visitedAt: 'Autumn 2025',
    images: ['https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80', 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80'],
  },
  'kyoto-in-april': {
    slug: 'kyoto-in-april',
    title: 'Kyoto in April',
    location: 'Kyoto',
    country: 'Japan',
    description: 'Cherry blossoms and quiet temples. Found a small café that served one thing only — and it was perfect.',
    content: `Japan in April is the cliché for a reason. The blossoms are as extraordinary as everyone says. What no one tells you is how quickly they fall — and how the falling is its own kind of beauty.

I spent most of my time in Kyoto not in the famous temples, but in the streets between them. Nishiki Market at 7am. A small soba restaurant where the owner spoke no English and I spoke no Japanese and we spent a very pleasant fifteen minutes pointing at things and nodding.

The café I found on day three served one thing: a cold brew coffee made with water from a specific mountain spring and a single cube of hand-carved ice. I went back every day.

Kyoto teaches you slowness. Not the performative slowness of someone on holiday, but real slowness — the kind where you notice that a particular light hits a particular garden wall at 4pm and it's the most beautiful thing you've seen this year.`,
    coverImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=85',
    visitedAt: 'Spring 2025',
    images: ['https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80'],
  },
  'goa-monsoon': {
    slug: 'goa-monsoon',
    title: 'Goa in the Monsoon',
    location: 'Goa',
    country: 'India',
    description: 'Everyone warned me. Nobody warned me how beautiful it would be.',
    content: `Everyone said don't go to Goa in the monsoon. The beaches are closed. The water is rough. The restaurants shut early. The town empties.

All of this is true. None of it matters.

Goa in the monsoon is Goa stripped of its performance. Without the tourists and the parties and the beach chairs for rent, what's left is the actual place — the particular green that only happens after rain, the sound of water on palm leaves, the way the whole coast smells like wet earth and salt and something alive.

I rented a small house in a village I can't spell and spent two weeks cooking things that required many trips to the market. I read four books. I painted every morning. I talked to my landlady, who had opinions about everything and was right about most of it.

This is what I want from travel now: not the place's best self, but its honest self.`,
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&q=85',
    visitedAt: 'July 2025',
    images: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80'],
  },
  'lisbon-tram-28': {
    slug: 'lisbon-tram-28',
    title: 'Lisbon & Tram 28',
    location: 'Lisbon',
    country: 'Portugal',
    description: 'Rode Tram 28 three times just to feel it again. The city tasted like custard tarts and nostalgia.',
    content: `Lisbon is a city of hills and yellow trams and the specific sadness of fado playing through an open window at dusk. It is also a city of pastel de nata — the custard tart that ruins all other pastries for you permanently.

I took Tram 28 three times. Not because I had places to go, but because the ride itself — through the narrow streets of Alfama, past laundry strung between buildings, up hills the car should not physically be able to climb — felt like something worth repeating.

The Portuguese concept of saudade — a longing for something you may never have had — is supposed to explain the national character. What it explains, actually, is the quality of their music, the quality of their food, and the reason you feel homesick for Lisbon before you've even left.

I left. I am still homesick.`,
    coverImage: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1600&q=85',
    visitedAt: 'May 2024',
    images: ['https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80'],
  },
}


interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = TRAVEL_ENTRIES[slug]
  if (!entry) return { title: 'Not Found' }

  const title = `${entry.title} | Travel Diary`
  const description = entry.description
  const path = `/travel/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: buildOpenGraph({
      title,
      description,
      path,
      type: 'article',
      imageUrl: entry.coverImage,
    }),
    twitter: buildTwitterCard({
      title,
      description,
      imageUrl: entry.coverImage,
    }),
  }
}

export default async function TravelEntryPage({ params }: Props) {
  const { slug } = await params
  const entry = TRAVEL_ENTRIES[slug]
  if (!entry) notFound()

  return (
    <article className="pt-[var(--nav-height)] pb-24 bg-cream">
      {/* Cover image */}
      <div className="relative h-[65vh] overflow-hidden">
        <Image
          src={entry.coverImage}
          alt={`${entry.title} — ${entry.location}, ${entry.country}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />
        {/* Floating location badge */}
        <div className="absolute bottom-8 left-8 glass px-4 py-2.5 rounded-full flex items-center gap-2">
          <MapPin size={13} className="text-terracotta" />
          <span className="font-sans text-sm text-ink">{entry.location}, {entry.country}</span>
          <span className="font-sans text-xs text-ink-muted">· {entry.visitedAt}</span>
        </div>
      </div>

      <div className="section-padding py-12 relative z-10">
        <div className="page-container max-w-3xl mx-auto">
          <Link href="/travel" className="inline-flex items-center gap-2 font-sans text-xs text-ink-muted hover:text-ink mb-8 transition-colors">
            <ArrowLeft size={13} /> Travel Diary
          </Link>

          <h1 className="font-display text-fluid-3xl text-ink leading-tight mb-4">{entry.title}</h1>
          <p className="font-serif text-fluid-xl text-olive italic mb-10 border-l-2 border-terracotta pl-5">{entry.description}</p>

          {/* Body */}
          <div className="space-y-6">
            {entry.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="font-sans text-fluid-base text-ink-soft leading-[1.85]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Photo row */}
          {entry.images.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mt-12">
              {entry.images.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`${entry.title} photograph ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 400px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Travel', path: '/travel' },
              { name: entry.title, path: `/travel/${entry.slug}` },
            ])
          ),
        }}
      />
    </article>
  )
}
