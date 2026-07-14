import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ShoppingBag, Heart, Star } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

const PRODUCTS: Record<string, {
  slug: string
  title: string
  typeLabel: string
  price: number
  comparePrice?: number
  description: string
  story: string
  images: string[]
  available: boolean
  variants?: { label: string; price: number }[]
}> = {
  'golden-hour-original': {
    slug: 'golden-hour-original',
    title: 'Golden Hour — Original Painting',
    typeLabel: 'Original Painting',
    price: 18000,
    description: 'Original watercolour on 300gsm cold press. Warm afternoon light filtered through café windows. Unframed, hand-signed, with certificate of authenticity.',
    story: 'I painted this during a particularly quiet week in October. That specific 4pm light — it felt worth trying to catch. I\'m not sure I managed it. But I tried.',
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=85', 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80'],
    available: true,
  },
  'quiet-forest-print': {
    slug: 'quiet-forest-print',
    title: 'Quiet Forest — Fine Art Print',
    typeLabel: 'Fine Art Print',
    price: 1200,
    comparePrice: 1500,
    description: 'Giclee fine art print on 230gsm matte art paper. Reproduced with exceptional colour accuracy from the original oil painting.',
    story: 'The forest has always felt like a place that holds its breath. This painting is about that feeling.',
    images: ['https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=85'],
    available: true,
    variants: [
      { label: 'A4 (21×29.7cm)', price: 1200 },
      { label: 'A3 (29.7×42cm)', price: 1800 },
      { label: 'A2 (42×59.4cm)', price: 2800 },
    ],
  },
  'morning-bloom-card': {
    slug: 'morning-bloom-card',
    title: 'Morning Bloom Art Card',
    typeLabel: 'Art Card',
    price: 299,
    description: 'Premium art card on 350gsm silk coated board. 14.8 × 10.5 cm. Blank inside, with a note from Niomi printed on the reverse.',
    story: 'The best messages come handwritten. This card is for someone who deserves a handwritten message.',
    images: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=85'],
    available: true,
  },
  'recipe-ebook-vol1': {
    slug: 'recipe-ebook-vol1',
    title: 'Recipe Ebook Vol. 1 — PDF',
    typeLabel: 'Digital Download',
    price: 499,
    description: 'A beautifully designed PDF ebook with 20 of Niomi\'s most-loved recipes. Immediate digital download after purchase.',
    story: 'I cook for the feeling of it. These recipes are the ones I return to — not because they\'re impressive, but because they\'re honest.',
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85'],
    available: true,
  },
  'earth-sky-sketch': {
    slug: 'earth-sky-sketch',
    title: 'Earth & Sky — Original Sketch',
    typeLabel: 'Original Sketch',
    price: 3500,
    description: 'Original graphite sketch on 200gsm cartridge paper. A4. Signed, unframed.',
    story: 'A meditation on the only line that truly matters — the one between earth and sky.',
    images: ['https://images.unsplash.com/photo-1549887534-1541e9326688?w=1200&q=85'],
    available: true,
  },
  'moodita-tote-bag': {
    slug: 'moodita-tote-bag',
    title: 'Moodita Canvas Tote',
    typeLabel: 'Merchandise',
    price: 799,
    description: 'Natural cotton canvas tote bag with the Moodita spiral sun logo screen printed in terracotta. 38 × 42 cm.',
    story: 'A bag that carries things, and carries a little kindness into the world.',
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=85'],
    available: true,
  },
  'terracotta-dreams-print': {
    slug: 'terracotta-dreams-print',
    title: 'Terracotta Dreams — A2 Print',
    typeLabel: 'Fine Art Print',
    price: 1800,
    description: 'A2 giclee print on 230gsm matte art paper. A sold-out edition — join the waitlist for the next run.',
    story: 'I\'ve never been to the place I painted here. I\'m not sure it exists. That felt like the point.',
    images: ['https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=1200&q=85'],
    available: false,
  },
  'kindness-bookmark-set': {
    slug: 'kindness-bookmark-set',
    title: 'Kindness Bookmark Set (3pc)',
    typeLabel: 'Stationery',
    price: 399,
    description: 'Set of 3 double-sided bookmarks printed on 350gsm silk board. Each features a different quote from Niomi\'s writing.',
    story: 'For the readers. For the ones who underline sentences. For the ones who need a reminder that kindness is not weakness.',
    images: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85'],
    available: true,
  },
}


interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS[slug]
  if (!product) return { title: 'Not Found' }
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [{ url: product.images[0], width: 1200, height: 900 }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = PRODUCTS[slug]
  if (!product) notFound()

  return (
    <article className="pt-[var(--nav-height)] pb-24 bg-cream">
      <div className="section-padding py-10">
        <div className="page-container">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-sans text-xs text-ink-muted hover:text-ink transition-colors mb-10"
          >
            <ArrowLeft size={13} /> Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-paper">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                  <Image src={img} alt={`${product.title} view ${i + 2}`} fill className="object-cover" sizes="500px" />
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <p className="font-sans text-[10px] text-ink-muted tracking-[0.15em] uppercase mb-2">{product.typeLabel}</p>
                <h1 className="font-display text-fluid-2xl text-ink leading-tight mb-4">{product.title}</h1>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <p className="font-display text-fluid-xl text-ink">{formatCurrency(product.price)}</p>
                  {product.comparePrice && (
                    <p className="font-sans text-sm text-ink-muted line-through">{formatCurrency(product.comparePrice)}</p>
                  )}
                  {product.comparePrice && (
                    <span className="font-sans text-xs bg-terracotta text-cream px-2 py-0.5 rounded-full">SALE</span>
                  )}
                </div>
              </div>

              {/* Variants */}
              {product.variants && (
                <div>
                  <p className="font-sans text-xs text-ink-soft mb-3">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v, i) => (
                      <button
                        key={v.label}
                        className={`font-sans text-sm px-4 py-2 rounded-xl border transition-all ${
                          i === 0 ? 'border-ink bg-ink text-cream' : 'border-border text-ink-soft hover:border-ink'
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <p className="font-sans text-sm text-ink-muted leading-[1.8]">{product.description}</p>

              {/* Story */}
              <blockquote className="font-serif text-fluid-lg text-olive italic border-l-2 border-terracotta pl-5 leading-relaxed">
                &ldquo;{product.story}&rdquo;
              </blockquote>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                {product.available ? (
                  <>
                    <button className="btn-primary flex items-center gap-2 flex-1 justify-center">
                      <ShoppingBag size={14} strokeWidth={1.5} />
                      Add to Cart
                    </button>
                    <button
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-paper transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart size={16} strokeWidth={1.5} className="text-ink" />
                    </button>
                  </>
                ) : (
                  <p className="font-sans text-sm text-ink-muted py-3">This piece has been sold. <Link href="/newsletter" className="text-olive underline">Join the newsletter</Link> to hear about new works first.</p>
                )}
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  '✓ Hand-signed by Niomi',
                  '✓ Certificate of authenticity',
                  '✓ Carefully packed for shipping',
                  '✓ Returns within 7 days',
                ].map((item) => (
                  <p key={item} className="font-sans text-xs text-ink-muted">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
