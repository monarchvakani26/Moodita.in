import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { ArrowUpRight, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Food Journal | Moodita',
  description: 'Beautiful recipes, kitchen stories, and cooking notes from Niomi Gada\'s food journal.',
  alternates: {
    canonical: '/food',
  },
}

const RECIPES = [
  {
    slug: 'saffron-rice-stew',
    title: 'Saffron & Lemon Rice Stew',
    description: 'A warming stew that tastes like something your grandmother made but never wrote down.',
    prepTime: 15,
    cookTime: 40,
    difficulty: 'Easy',
    tags: ['Vegetarian', 'Comfort Food'],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
    featured: true,
  },
  {
    slug: 'rose-cardamom-kheer',
    title: 'Rose & Cardamom Kheer',
    description: 'A traditional rice pudding elevated with rose water and fresh cardamom. Perfect for quiet evenings.',
    prepTime: 10,
    cookTime: 35,
    difficulty: 'Easy',
    tags: ['Dessert', 'Indian'],
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=800&q=80',
    featured: false,
  },
  {
    slug: 'herb-chutney-flatbread',
    title: 'Wild Herb Chutney Flatbread',
    description: 'Made on a rainy morning with whatever herbs were left from the week. It became a regular.',
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Medium',
    tags: ['Bread', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
    featured: false,
  },
  {
    slug: 'mango-coconut-tart',
    title: 'Mango & Coconut Tart',
    description: 'Inspired by a market in Goa. Simple, bright, and tastes like summer regardless of the season.',
    prepTime: 25,
    cookTime: 45,
    difficulty: 'Medium',
    tags: ['Dessert', 'Summer'],
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    featured: false,
  },
]

export default function FoodPage() {
  const featured = RECIPES[0]
  const rest = RECIPES.slice(1)

  return (
    <div className="pt-[var(--nav-height)] pb-24">
      {/* Header */}
      <div className="section-padding py-20 bg-paper border-b border-border">
        <div className="page-container">
          <RevealText>
            <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">Food Journal</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h1 className="font-display text-fluid-4xl text-ink leading-tight tracking-tight mb-5">
              Recipes &amp;<br />
              <span className="text-olive italic">kitchen stories.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-sans text-fluid-base text-ink-muted max-w-lg leading-relaxed">
              I don&apos;t cook for Instagram. I cook because food is the most honest way I know to say &ldquo;I see you.&rdquo;
            </p>
          </RevealText>
        </div>
      </div>

      <div className="section-padding py-16 bg-cream">
        <div className="page-container">

          {/* Featured recipe */}
          <Link
            href={`/food/${featured.slug}`}
            className="group block mb-16 rounded-3xl overflow-hidden bg-paper border border-border hover:shadow-soft-lg transition-all duration-500"
            aria-label={`Featured recipe: ${featured.title}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-3">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center gap-4">
                <span className="inline-block font-sans text-[10px] text-terracotta tracking-[0.15em] uppercase border border-terracotta/30 px-3 py-1 rounded-full w-fit">
                  Featured Recipe
                </span>
                <h2 className="font-display text-fluid-2xl text-ink leading-tight group-hover:text-terracotta transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="font-sans text-sm text-ink-muted leading-relaxed">{featured.description}</p>
                <div className="flex items-center gap-4 text-xs text-ink-muted font-sans">
                  <span className="flex items-center gap-1"><Clock size={11} /> {featured.prepTime + featured.cookTime} min</span>
                  <span>{featured.difficulty}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="font-sans text-[10px] bg-parchment text-ink-muted px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* Recipe grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((recipe) => (
              <Link
                key={recipe.slug}
                href={`/food/${recipe.slug}`}
                className="group block rounded-2xl overflow-hidden bg-paper border border-border hover:shadow-soft transition-all duration-500 hover:-translate-y-1"
                aria-label={recipe.title}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[10px] text-ink-muted tracking-wide">{recipe.difficulty}</span>
                    <span className="flex items-center gap-1 font-sans text-[10px] text-ink-muted">
                      <Clock size={9} /> {recipe.prepTime + recipe.cookTime} min
                    </span>
                  </div>
                  <h3 className="font-display text-fluid-lg text-ink group-hover:text-terracotta transition-colors duration-300 leading-snug">
                    {recipe.title}
                  </h3>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed line-clamp-2">{recipe.description}</p>
                  <div className="flex items-center gap-1 font-sans text-xs text-olive group-hover:text-terracotta transition-colors">
                    View Recipe <ArrowUpRight size={12} />
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
              { name: 'Food', path: '/food' },
            ])
          ),
        }}
      />
    </div>
  )
}
