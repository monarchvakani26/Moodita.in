import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ShoppingBag, ZoomIn } from 'lucide-react'

const ARTWORKS: Record<string, {
  slug: string
  title: string
  medium: string
  dimensions: string
  year: number
  description: string
  story: string
  available: boolean
  price?: number
  images: string[]
}> = {
  'golden-hour': {
    slug: 'golden-hour',
    title: 'Golden Hour',
    medium: 'Watercolour on 300gsm cold press',
    dimensions: '40 × 30 cm',
    year: 2025,
    description: 'Warm afternoon light filtered through café windows — the exact moment before evening turns everything amber.',
    story: 'I painted this during a particularly quiet week when I\'d been spending more time sitting in cafés than I probably should.',
    available: true,
    price: 18000,
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=85', 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80'],
  },
  'quiet-forest': {
    slug: 'quiet-forest',
    title: 'Quiet Forest',
    medium: 'Oil on Canvas',
    dimensions: '50 × 60 cm',
    year: 2025,
    description: 'The forest as a place that holds its breath. Layers of emerald and shadow.',
    story: 'I kept returning to the idea of a forest that is waiting for something. This is what I imagined it would look like.',
    available: true,
    price: 28000,
    images: ['https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=85'],
  },
  'morning-bloom': {
    slug: 'morning-bloom',
    title: 'Morning Bloom',
    medium: 'Acrylic on canvas board',
    dimensions: '30 × 30 cm',
    year: 2025,
    description: 'Flowers at dawn — that brief window when the light is entirely honest.',
    story: 'Painted in one sitting, early morning, before the day had opinions about it.',
    available: true,
    price: 9500,
    images: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=85'],
  },
  'earth-sky': {
    slug: 'earth-sky',
    title: 'Earth & Sky',
    medium: 'Mixed Media',
    dimensions: '60 × 40 cm',
    year: 2024,
    description: 'The horizon as the only line that matters. Earth and sky, held in conversation.',
    story: 'A meditation on the boundary between what is solid and what is open.',
    available: false,
    images: ['https://images.unsplash.com/photo-1549887534-1541e9326688?w=1200&q=85'],
  },
  'still-life-3': {
    slug: 'still-life-3',
    title: 'Still Life No. 3',
    medium: 'Watercolour on cotton rag',
    dimensions: '28 × 35 cm',
    year: 2025,
    description: 'Objects on a table. The light doing what it always does — making ordinary things strange.',
    story: 'The third in a series of still lifes. I never planned a series; it just kept wanting to continue.',
    available: true,
    price: 12000,
    images: ['https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=1200&q=85'],
  },
  'terracotta-dreams': {
    slug: 'terracotta-dreams',
    title: 'Terracotta Dreams',
    medium: 'Oil on Canvas',
    dimensions: '45 × 55 cm',
    year: 2025,
    description: 'The warm palette of rooftops and clay pots — an imagined Mediterranean afternoon.',
    story: 'I\'ve never been to the place I painted here. I\'m not sure it exists. That felt like the point.',
    available: true,
    price: 22000,
    images: ['https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=1200&q=85'],
  },
  'city-light': {
    slug: 'city-light',
    title: 'City Light',
    medium: 'Photography',
    dimensions: 'Digital, limited print run of 10',
    year: 2025,
    description: 'Cities at night are a different city entirely. This is the one I prefer.',
    story: 'Taken from a train window somewhere between two places I can\'t recall.',
    available: true,
    price: 4500,
    images: ['https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=85'],
  },
  'wild-herbs': {
    slug: 'wild-herbs',
    title: 'Wild Herbs',
    medium: 'Photography',
    dimensions: 'Digital, limited print run of 10',
    year: 2025,
    description: 'Herbs on a wooden board, afternoon light, the smell of a kitchen that knows what it is doing.',
    story: 'Shot before cooking. The subject was eaten shortly after. Felt right.',
    available: true,
    price: 3500,
    images: ['https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=85'],
  },
  'river-bend': {
    slug: 'river-bend',
    title: 'River Bend',
    medium: 'Graphite sketch on cartridge paper',
    dimensions: '21 × 29.7 cm',
    year: 2024,
    description: 'A river curves and you can\'t see what comes after. This felt important to draw.',
    story: 'Sketched on a hillside. The actual river did not cooperate with my framing.',
    available: true,
    price: 4200,
    images: ['https://images.unsplash.com/photo-1604871000636-074fa5117945?w=1200&q=85'],
  },
  'petal-study': {
    slug: 'petal-study',
    title: 'Petal Study',
    medium: 'Watercolour on cold press',
    dimensions: '18 × 24 cm',
    year: 2025,
    description: 'One flower. Studied until something true about it appeared.',
    story: 'I drew the same petal seventeen times. This is the seventeenth.',
    available: true,
    price: 7800,
    images: ['https://images.unsplash.com/photo-1490750967868-88df5691cc64?w=1200&q=85'],
  },
  'shadow-play': {
    slug: 'shadow-play',
    title: 'Shadow Play',
    medium: 'Photography',
    dimensions: 'Digital, limited print run of 8',
    year: 2025,
    description: 'What shadows do when no one is watching them.',
    story: 'Found the light at 2pm. Waited for it to do what I needed.',
    available: false,
    images: ['https://images.unsplash.com/photo-1504713088706-b9e2d6f55a1b?w=1200&q=85'],
  },
  'copper-morning': {
    slug: 'copper-morning',
    title: 'Copper Morning',
    medium: 'Acrylic on panel',
    dimensions: '30 × 40 cm',
    year: 2025,
    description: 'The colour of early winter mornings — that specific copper-orange before the sun decides what it is.',
    story: 'Started at 6am. Finished by the time the world had opinions again.',
    available: true,
    price: 11500,
    images: ['https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=1200&q=85'],
  },
}


import { siteConfig } from '@/lib/site-config'
import { buildOpenGraph, buildTwitterCard } from '@/lib/seo'
import { getBreadcrumbSchema, getProductSchema } from '@/lib/schema'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const art = ARTWORKS[slug]
  if (!art) return { title: 'Not Found' }
  
  const title = `${art.title} | Moodita Gallery`
  const description = art.description
  const path = `/gallery/${slug}`
  
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
      imageUrl: art.images[0],
    }),
    twitter: buildTwitterCard({
      title,
      description,
      imageUrl: art.images[0],
    }),
  }
}


export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params
  const art = ARTWORKS[slug]
  if (!art) notFound()

  return (
    <article className="pt-[var(--nav-height)] pb-24 bg-cream">
      <div className="section-padding py-10">
        <div className="page-container">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-sans text-xs text-ink-muted hover:text-ink transition-colors mb-10"
          >
            <ArrowLeft size={13} /> Back to Gallery
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-zoom-in">
                <Image
                  src={art.images[0]}
                  alt={`${art.title} — ${art.medium} by Niomi Gada`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} className="text-ink" />
                </div>
              </div>
              {art.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                     src={img}
                     alt={`${art.title} — detail ${i + 2}`}
                     fill
                     className="object-cover"
                     sizes="(max-width: 1024px) 100vw, 50vw"
                   />
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h1 className="font-display text-fluid-3xl text-ink leading-tight mb-3">{art.title}</h1>
                <p className="font-sans text-sm text-ink-muted">{art.medium} · {art.year}</p>
              </div>

              <p className="font-sans text-fluid-base text-ink-soft leading-[1.8]">{art.description}</p>

              {/* Specs */}
              <dl className="grid grid-cols-2 gap-4 p-6 rounded-2xl bg-paper border border-border">
                {[
                  { label: 'Medium', value: art.medium },
                  { label: 'Dimensions', value: art.dimensions },
                  { label: 'Year', value: art.year.toString() },
                  { label: 'Availability', value: art.available ? 'Available' : 'Sold' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="font-sans text-[10px] text-ink-muted tracking-[0.12em] uppercase mb-1">{label}</dt>
                    <dd className="font-sans text-sm text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              {/* Story */}
              <div>
                <p className="font-sans text-[10px] text-ink-muted tracking-[0.12em] uppercase mb-3">The Story</p>
                <blockquote className="font-serif text-fluid-lg text-olive italic leading-relaxed border-l-2 border-terracotta pl-5">
                  &ldquo;{art.story}&rdquo;
                </blockquote>
              </div>

              {/* Purchase */}
              {art.available && art.price && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                  <p className="font-display text-fluid-2xl text-ink">
                    ₹{art.price.toLocaleString('en-IN')}
                  </p>
                  <button className="btn-primary flex items-center gap-2">
                    <ShoppingBag size={14} strokeWidth={1.5} />
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Gallery', path: '/gallery' },
              { name: art.title, path: `/gallery/${art.slug}` },
            ])
          ),
        }}
      />
      {art.price && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getProductSchema({
                name: art.title,
                image: art.images[0],
                description: art.description,
                sku: `ART-${art.slug.toUpperCase()}`,
                price: art.price,
                availability: art.available ? 'InStock' : 'OutOfStock',
                path: `/gallery/${art.slug}`,
              })
            ),
          }}
        />
      )}
    </article>
  )
}
