import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const RECIPES: Record<string, {
  slug: string
  title: string
  description: string
  story: string
  prepTime: number
  cookTime: number
  servings: number
  difficulty: string
  ingredients: { amount: string; name: string; note?: string }[]
  steps: { step: number; instruction: string }[]
  image: string
}> = {
  'saffron-rice-stew': {
    slug: 'saffron-rice-stew',
    title: 'Saffron & Lemon Rice Stew',
    description: 'A warming stew that tastes like something your grandmother made but never wrote down.',
    story: 'My mother would make something close to this on cold evenings. I\'ve never been able to recreate it exactly — but this version has become its own thing, which I think she would approve of.',
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      { amount: '1 cup', name: 'basmati rice', note: 'rinsed until water runs clear' },
      { amount: 'large pinch', name: 'saffron', note: 'bloomed in 2 tbsp warm water' },
      { amount: '1', name: 'lemon, zested and juiced' },
      { amount: '1 can', name: 'chickpeas', note: 'drained and rinsed' },
      { amount: '4 cups', name: 'vegetable stock' },
      { amount: '1', name: 'onion, finely diced' },
      { amount: '3 cloves', name: 'garlic, minced' },
      { amount: '1 tsp', name: 'turmeric' },
      { amount: '½ tsp', name: 'cumin seeds' },
      { amount: 'to taste', name: 'salt and white pepper' },
      { amount: '2 tbsp', name: 'good olive oil' },
      { amount: 'handful', name: 'fresh parsley, roughly chopped' },
    ],
    steps: [
      { step: 1, instruction: 'Bloom the saffron in warm water. Set aside. This is non-negotiable — don\'t skip it.' },
      { step: 2, instruction: 'Heat olive oil in a heavy pot over medium heat. Add cumin seeds and let them sizzle for 30 seconds.' },
      { step: 3, instruction: 'Add the diced onion. Cook gently for 8-10 minutes until soft and translucent — don\'t rush this.' },
      { step: 4, instruction: 'Add garlic and turmeric. Stir for 1 minute until fragrant.' },
      { step: 5, instruction: 'Add the rinsed rice and stir to coat in the oil and spices.' },
      { step: 6, instruction: 'Pour in the stock, saffron water, and chickpeas. Bring to a gentle boil.' },
      { step: 7, instruction: 'Reduce heat to low. Cover and cook for 18-20 minutes until rice is tender and has absorbed most of the liquid.' },
      { step: 8, instruction: 'Stir in lemon zest and juice. Season generously. The lemon should be front and present.' },
      { step: 9, instruction: 'Serve with parsley scattered on top. Eat it warm with bread if you can.' },
    ],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1400&q=85',
  },
  'rose-cardamom-kheer': {
    slug: 'rose-cardamom-kheer',
    title: 'Rose & Cardamom Kheer',
    description: 'A traditional rice pudding elevated with rose water and fresh cardamom.',
    story: 'My grandmother made kheer without a recipe. I have tried to make her version thirty times. This is not her version, but it is mine, and it is good.',
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      { amount: '½ cup', name: 'basmati rice', note: 'rinsed' },
      { amount: '1 litre', name: 'full-fat milk' },
      { amount: '4 tbsp', name: 'sugar', note: 'adjust to taste' },
      { amount: '6', name: 'cardamom pods', note: 'lightly crushed' },
      { amount: '1 tbsp', name: 'rose water', note: 'good quality' },
      { amount: 'handful', name: 'pistachios', note: 'roughly chopped' },
      { amount: 'pinch', name: 'saffron', note: 'optional' },
      { amount: '1 tbsp', name: 'dried rose petals', note: 'to garnish' },
    ],
    steps: [
      { step: 1, instruction: 'Bring milk to a gentle boil in a heavy-bottomed pan. Add the rinsed rice and crushed cardamom pods.' },
      { step: 2, instruction: 'Reduce heat to low. Cook gently, stirring often, for 25-30 minutes until the rice is soft and the milk has thickened.' },
      { step: 3, instruction: 'Add sugar and stir until dissolved. Add saffron if using.' },
      { step: 4, instruction: 'Remove from heat. Stir in the rose water.' },
      { step: 5, instruction: 'Serve warm or chilled, scattered with pistachios and rose petals.' },
    ],
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=1400&q=85',
  },
  'herb-chutney-flatbread': {
    slug: 'herb-chutney-flatbread',
    title: 'Wild Herb Chutney Flatbread',
    description: 'Made on a rainy morning with whatever herbs were left from the week. It became a regular.',
    story: 'I didn\'t set out to make this. I set out to use up the coriander before it went bad. Sometimes the best things are made under mild pressure.',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      { amount: '2 cups', name: 'plain flour' },
      { amount: '¾ cup', name: 'warm water', note: 'plus more if needed' },
      { amount: '1 tsp', name: 'salt' },
      { amount: '1 tsp', name: 'baking powder' },
      { amount: '2 tbsp', name: 'olive oil' },
      { amount: 'large bunch', name: 'fresh coriander' },
      { amount: 'small bunch', name: 'mint' },
      { amount: '1', name: 'green chilli' },
      { amount: '1', name: 'lemon, juiced' },
      { amount: '1 clove', name: 'garlic' },
      { amount: '2 tbsp', name: 'yoghurt' },
    ],
    steps: [
      { step: 1, instruction: 'Mix flour, salt, baking powder, and olive oil. Add warm water gradually until a soft dough forms. Rest for 15 minutes.' },
      { step: 2, instruction: 'Make the chutney: blend coriander, mint, chilli, garlic, lemon juice, and yoghurt until smooth. Season.' },
      { step: 3, instruction: 'Divide dough into 4 balls. Roll each into a thin oval.' },
      { step: 4, instruction: 'Cook in a dry hot pan for 2-3 minutes each side until charred in spots.' },
      { step: 5, instruction: 'Serve immediately with the green chutney.' },
    ],
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1400&q=85',
  },
  'mango-coconut-tart': {
    slug: 'mango-coconut-tart',
    title: 'Mango & Coconut Tart',
    description: 'Inspired by a market in Goa. Simple, bright, and tastes like summer.',
    story: 'I bought a mango from a market stall and ate half of it standing there. This tart is the other half, made more complicated than necessary because I was in a good mood.',
    prepTime: 25,
    cookTime: 45,
    servings: 8,
    difficulty: 'Medium',
    ingredients: [
      { amount: '200g', name: 'digestive biscuits', note: 'crushed' },
      { amount: '80g', name: 'butter', note: 'melted' },
      { amount: '400ml', name: 'coconut cream' },
      { amount: '3 tbsp', name: 'icing sugar' },
      { amount: '2 tsp', name: 'agar agar' },
      { amount: '2', name: 'ripe mangoes', note: 'peeled and sliced' },
      { amount: '1 tbsp', name: 'lime juice' },
      { amount: 'pinch', name: 'cardamom powder' },
    ],
    steps: [
      { step: 1, instruction: 'Mix crushed biscuits with melted butter. Press firmly into a tart tin and refrigerate for 20 minutes.' },
      { step: 2, instruction: 'Heat coconut cream with agar agar and icing sugar over medium heat, stirring constantly for 3-4 minutes.' },
      { step: 3, instruction: 'Pour the coconut layer over the chilled base. Refrigerate for at least 2 hours until set.' },
      { step: 4, instruction: 'Toss mango slices with lime juice and cardamom.' },
      { step: 5, instruction: 'Arrange mango artfully over the set tart. Serve chilled.' },
    ],
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1400&q=85',
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const recipe = RECIPES[slug]
  if (!recipe) return { title: 'Not Found' }
  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: { images: [{ url: recipe.image, width: 1400, height: 900 }] },
  }
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params
  const recipe = RECIPES[slug]
  if (!recipe) notFound()

  return (
    <article className="pt-[var(--nav-height)] pb-24 bg-cream">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/30 to-transparent" />
      </div>

      <div className="section-padding -mt-32 relative z-10">
        <div className="page-container max-w-3xl mx-auto">
          <Link href="/food" className="inline-flex items-center gap-2 font-sans text-xs text-ink-muted hover:text-ink transition-colors mb-8">
            <ArrowLeft size={13} /> Food Journal
          </Link>

          {/* Recipe meta bar */}
          <div className="flex flex-wrap items-center gap-6 mb-8 p-5 rounded-2xl bg-paper border border-border">
            {[
              { label: 'Prep', value: `${recipe.prepTime} min` },
              { label: 'Cook', value: `${recipe.cookTime} min` },
              { label: 'Serves', value: recipe.servings.toString() },
              { label: 'Difficulty', value: recipe.difficulty },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-sans text-[10px] text-ink-muted tracking-[0.12em] uppercase mb-1">{item.label}</p>
                <p className="font-display text-lg text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          <h1 className="font-display text-fluid-3xl text-ink leading-tight mb-4">{recipe.title}</h1>
          <p className="font-sans text-fluid-base text-ink-muted leading-[1.8] mb-6">{recipe.description}</p>

          {/* Story */}
          <blockquote className="font-serif text-fluid-lg text-olive italic border-l-2 border-terracotta pl-5 leading-relaxed mb-12">
            &ldquo;{recipe.story}&rdquo;
          </blockquote>

          {/* Ingredients */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl text-ink mb-6">Ingredients</h2>
            <ul className="space-y-3" aria-label="Ingredient list">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-4 py-3 border-b border-border last:border-none">
                  <span className="font-sans text-sm font-medium text-terracotta shrink-0 w-24 text-right">{ing.amount}</span>
                  <span className="font-sans text-sm text-ink">
                    {ing.name}
                    {ing.note && <span className="text-ink-muted"> — {ing.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Method */}
          <section>
            <h2 className="font-display text-fluid-xl text-ink mb-6">Method</h2>
            <ol className="space-y-6" aria-label="Cooking steps">
              {recipe.steps.map((s) => (
                <li key={s.step} className="flex gap-6">
                  <span className="font-display text-2xl text-terracotta/40 w-8 shrink-0 leading-tight">{s.step}</span>
                  <p className="font-sans text-fluid-base text-ink-soft leading-[1.8]">{s.instruction}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </article>
  )
}
