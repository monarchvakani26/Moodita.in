import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'
import { buildOpenGraph, buildTwitterCard } from '@/lib/seo'
import { getBreadcrumbSchema, getArticleSchema } from '@/lib/schema'

const WRITINGS: Record<string, {
  slug: string
  title: string
  type: string
  typeLabel: string
  content: string
  publishedAt: Date
  excerpt?: string
}> = {
  'the-color-of-tuesday': {
    slug: 'the-color-of-tuesday',
    title: 'The Colour of Tuesday',
    type: 'POEM',
    typeLabel: 'Poem',
    publishedAt: new Date('2026-04-28'),
    content: `Tuesday smells like coffee left cooling
on a desk by someone
who had to rush away.

It has the texture of half-read emails
and the weight of good intentions
not yet acted on.

Tuesday is the day we believe
we will catch up.
We will not catch up.
But Tuesday lets us believe it.

That is Tuesday's gift.
Not certainty.
Not Monday's brave beginning
or Friday's relief.
Just the generous, unhurried belief
that there is still time.

I have always loved Tuesday.
It is the day that forgives you
for yesterday
without asking you to explain.`,
  },
  'on-being-alone': {
    slug: 'on-being-alone',
    title: 'On Being Alone (Without Being Lonely)',
    type: 'ESSAY',
    typeLabel: 'Essay',
    publishedAt: new Date('2026-05-10'),
    content: `Solitude is not the same as loneliness. One is a room you chose; the other is a room that chose you.

I learned this slowly, the way you learn most important things — through repetition of experience, through the gradual accumulation of evidence that your initial theory was wrong.

My initial theory was that being alone meant failing at something. Failing at relationships, at sociability, at the basic human task of being in meaningful proximity to other people. I grew up in a family where rooms were always full and silence was a condition to be remedied. To be by yourself was to be waiting for someone to arrive.

It took me years of deliberate practice to understand that some of the most complete moments of my life have been spent alone. Not waiting. Not in transition. Fully present, and fully by myself.

**What solitude actually is**

Solitude is not the absence of others. It is the presence of yourself. And for many of us — possibly most of us, though we rarely admit it — the self is not easy company until you've spent time learning how to be with it.

The aloneness I'm describing is not the loneliness of isolation. It is not the loneliness of the hospital waiting room or the school cafeteria where you don't know anyone. Those are painful precisely because they are unchosen, and because they remind you of the connection you want and don't have.

Chosen solitude is something different. It is what happens when you sit with a book and realize an hour has passed that felt like fifteen minutes. When you cook something slowly and entirely for yourself and it is delicious because you made it and you are eating it without having to perform gratitude or pleasure. When you walk and your thoughts move with your body and arrive somewhere you didn't know you were heading.

**Learning to be alone**

I started practicing solitude as a deliberate exercise, the way some people practice meditation. Once a week, then more often, I would spend an afternoon alone without an agenda. No errands disguised as leisure. No planned activity. Just time, and me, and whatever emerged.

What emerged, mostly, was discomfort. My phone. The urge to text someone, to turn the silence into conversation. The strange anxiety of not having a narrative — of being a person in a room without a plot.

Then, slowly, the discomfort settled. And underneath it was something I can only describe as acquaintance. I started to become acquainted with myself in the way you become acquainted with a new neighbourhood — by walking its streets slowly, noticing which corners feel right, which cafés you return to, what the light does at different times of day.

I am better company to others because I have learned to be better company to myself. This is not a cliché. It is something I have tested and found to be true.

*This essay is part of an ongoing series on the quiet things worth examining.*`,
  },
  'dear-past-self': {
    slug: 'dear-past-self',
    title: 'Dear Past Self',
    type: 'LETTER',
    typeLabel: 'Letter',
    publishedAt: new Date('2026-04-01'),
    content: `Dear past self,

The thing you're most afraid of right now — it passes. And it leaves something behind that you'll actually keep.

I know you don't believe that yet. Fear has a way of filling all the available space, making itself feel permanent, making itself feel like identity. It isn't. You aren't your fear. You're the person who gets up on the other side of it.

What I want you to do less of: apologising for existing. Taking up half the space you're entitled to. Deciding in advance that the answer is no.

What I want you to do more of: asking. Waiting. Trusting your own reading of a room, of a person, of a situation. You're right more often than you let yourself believe.

The doubt is not the problem. The doubt is useful. The problem is when you mistake the doubt for a verdict.

You will make it through what's coming. You'll be tired. You'll be different. You'll be glad.

*With love,*
*Niomi*`,
  },
  'what-kindness-costs': {
    slug: 'what-kindness-costs',
    title: 'What Kindness Actually Costs',
    type: 'THOUGHT',
    typeLabel: 'Thought',
    publishedAt: new Date('2026-03-15'),
    content: `Everyone says "be kind" like it's free. It isn't.

Kindness costs attention — which is one of the rarest things any of us have to spend. It costs the time to actually listen instead of waiting to speak. It costs the decision to say something true when something flattering would have been easier.

Most of all, kindness costs the willingness to be wrong. To say: I was unkind before, I didn't realise it, I want to do better.

This is expensive. People don't talk about this because we want kindness to be simple — a choice you make once, a character trait you either have or don't. But it isn't. It's a practice. And like all practices, it requires something from you every single time.

The reason I keep paying is that the returns are better than anything else I've tried.

*Some thoughts are too small for essays and too important to leave unwritten.*`,
  },
  'city-lights-at-3am': {
    slug: 'city-lights-at-3am',
    title: 'City Lights at 3am',
    type: 'POEM',
    typeLabel: 'Poem',
    publishedAt: new Date('2026-02-20'),
    content: `A window is both a frame
and a door
you haven't opened yet.

At 3am the city
doesn't ask anything of you.
It just continues —
the yellow lights, the occasional car,
the person walking a dog
who is the only one
with anywhere to be.

I used to think insomnia was a failure.
Now I think it's the city
offering you the version of itself
it only shows to the ones
still awake enough to look.

I look.
I try to deserve it.`,
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const piece = WRITINGS[slug]
  if (!piece) return { title: 'Not Found' }

  const title = `${piece.title} | Moodita`
  const description = piece.excerpt || piece.content.split('\n')[0] || piece.title
  const path = `/writing/${slug}`

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
    }),
    twitter: buildTwitterCard({
      title,
      description,
    }),
  }
}

export default async function WritingPage({ params }: Props) {
  const { slug } = await params
  const piece = WRITINGS[slug]
  if (!piece) notFound()

  const isPoem = piece.type === 'POEM'

  return (
    <article className="pt-[var(--nav-height)] pb-32 bg-cream">
      <div className="section-padding py-16">
        <div className="page-container max-w-2xl mx-auto">
          <Link href="/writing" className="inline-flex items-center gap-2 font-sans text-xs text-ink-muted hover:text-ink mb-12 transition-colors">
            <ArrowLeft size={13} /> Writing
          </Link>

          {/* Header */}
          <header className="mb-12 pb-8 border-b border-border">
            <div className="flex items-center gap-3 mb-4">
              <span className={`font-sans text-[10px] tracking-[0.15em] uppercase font-medium ${
                isPoem ? 'text-olive' : 'text-terracotta'
              }`}>
                {piece.typeLabel}
              </span>
              <span className="font-sans text-[10px] text-ink-muted">{formatDate(piece.publishedAt)}</span>
            </div>
            <h1 className="font-display text-fluid-3xl text-ink leading-tight">{piece.title}</h1>
          </header>

          {/* Content */}
          {isPoem ? (
            // Poem: preserve line breaks, serif italic
            <div className="font-serif text-fluid-xl text-ink-soft italic leading-[2.2] whitespace-pre-line">
              {piece.content}
            </div>
          ) : (
            // Essay/Letter: editorial prose
            <div className="prose-editorial">
              {piece.content.split('\n\n').map((para, i) => {
                // Handle bold markdown
                const html = para.replace(/\*\*(.+?)\*\*/g, '<strong class="font-medium text-ink">$1</strong>')
                if (para.startsWith('*') && para.endsWith('*')) {
                  return (
                    <p key={i} className="font-sans text-xs text-ink-muted italic mt-12">
                      {para.replace(/^\*|\*$/g, '')}
                    </p>
                  )
                }
                return (
                  <p key={i} className="font-sans text-fluid-base text-ink-soft leading-[1.85] mt-6 first:mt-0"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                )
              })}
            </div>
          )}

          {/* Author */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-sans text-xs text-ink-muted">Written by</p>
            <p className="font-display text-lg text-ink mt-0.5">Niomi Gada</p>
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
              { name: 'Writing', path: '/writing' },
              { name: piece.title, path: `/writing/${piece.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              headline: piece.title,
              description: piece.excerpt || 'Poem or letter by Niomi Gada',
              image: `${siteConfig.domain}/og-image.jpg`,
              datePublished: piece.publishedAt,
              path: `/writing/${piece.slug}`,
            })
          ),
        }}
      />
    </article>
  )
}
