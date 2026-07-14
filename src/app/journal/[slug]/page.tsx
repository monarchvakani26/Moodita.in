import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import { formatDate, readingTime } from '@/lib/utils'

// Sample post data — replace with Prisma query in Phase 6
const POSTS: Record<string, {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: Date
  coverImage: string
}> = {
  'kindness-as-a-legal-principle': {
    slug: 'kindness-as-a-legal-principle',
    title: 'On Kindness as a Legal Principle',
    excerpt: 'What happens when you bring compassion into a courtroom that runs on precedent and argument?',
    content: `There is a belief, common among those who have never sat inside a courtroom, that law and kindness are mutually exclusive. That justice is cold, procedural, and interested only in what can be proven. I used to be afraid this was true.

It took me several years of practice, and one particularly difficult case involving a seventeen-year-old boy who reminded me uncomfortably of a cousin I love, to understand that compassion is not the enemy of rigor. It is, if anything, the *point* of it.

## What the law actually asks

The law asks us to be precise. To verify. To apply standards fairly across cases regardless of our feelings about the person in front of us. These are not unkind demands. They are, in fact, the infrastructure of a system designed to prevent feelings from destroying lives without accountability.

But precision without empathy is bureaucracy. And bureaucracy, as we know, can cause enormous harm while being technically correct at every step.

## The courtroom as a room of people

What changed my thinking was something my first mentor said on my second week of practice. We were preparing a bail hearing. I had drafted arguments. She read them, put them down, and said: "These are good arguments. But have you asked *why* he needs to go home?"

I had not. I had asked what the law required. I had not asked what the person required.

## Kindness as rigour

The most effective advocates I have observed are not the most aggressive. They are the most present. They listen not just for what is legally relevant but for what is actually true.

*This is the first in a series of essays on law, ethics, and the practice of being human inside professional structures.*`,
    category: 'Legal',
    date: new Date('2026-06-10'),
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=85',
  },
  'why-i-paint': {
    slug: 'why-i-paint',
    title: 'Why I Paint When Words Fail Me',
    excerpt: 'There are feelings that live below language. Painting is my way of giving them a body, a colour, a shape.',
    content: `There are feelings that live below language. Not because they're too complex for words, but because they exist in a register that words simply don't reach.

I discovered painting accidentally, the way you discover most things that matter — through a bad week and a friend's spare room that happened to have art supplies.

## What painting does that writing cannot

Writing is sequential. You move through an argument or a story in time. Painting is simultaneous. Everything is present at once. The colour in the corner speaks to the line in the middle. There's a kind of thinking it demands that I find nowhere else.

## On being bad at things you love

I am not a trained painter. I did not study it. I make technical mistakes constantly. And this, I have come to understand, is precisely why it works for me as a practice.

When I paint, I am not performing competence. I am just doing.

*— Niomi, May 2026*`,
    category: 'Art',
    date: new Date('2026-05-22'),
    coverImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1600&q=85',
  },
  'letter-to-the-girl-who-doubted': {
    slug: 'letter-to-the-girl-who-doubted',
    title: 'A Letter to the Girl Who Doubted',
    excerpt: 'She was seventeen, terrified of taking up space. I want to tell her something now.',
    content: `Dear girl who doubted,

You were seventeen and you spent a lot of time making yourself smaller. You thought that was politeness. It wasn't. It was fear dressed up as consideration, and I understand, but I want to tell you something now.

The space you were afraid to take up? It was always yours.

## What I know now

I know that speaking loudly is not the same as speaking well. I know that certainty is often the costume of people who have never had to question themselves. And I know that doubt — real, considered doubt — is the beginning of every honest thought I've ever had.

## What I wish I could give you

I wish I could give you permission earlier. Permission to be imperfect and present simultaneously. Permission to disagree, to be wrong in public, to take your time, to not have finished becoming.

You'll get there. You already are.

*With love and the benefit of years,*
*Niomi*`,
    category: 'Personal',
    date: new Date('2026-04-14'),
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=85',
  },
  'cooking-as-love-language': {
    slug: 'cooking-as-love-language',
    title: 'Cooking as a Love Language',
    excerpt: 'I don\'t cook for Instagram. I cook because food is the most honest way I know to say "I see you."',
    content: `I don't cook for Instagram. I cook because food is the most honest way I know to say "I see you."

This is not a recipe post. Or — it's not only a recipe post. It's an attempt to articulate something I've been carrying for a long time: that cooking for someone is one of the most direct expressions of care that I know how to make.

## On attention

To cook well for someone, you have to know them. Not their Instagram, their dietary restrictions. You have to know what they need when they are tired. What flavours make them feel held.

This kind of knowing requires attention. And attention, I think, is the foundation of love — any kind of love.

## The kitchen as studio

I treat my kitchen like a studio. The same way I approach a painting — with intention, with the willingness to fail, with a commitment to the material in front of me.

The result is sometimes beautiful. Sometimes it's dinner. Both are fine.`,
    category: 'Food',
    date: new Date('2026-03-05'),
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85',
  },
  'slow-travel-morocco': {
    slug: 'slow-travel-morocco',
    title: 'Slow Travel: What Morocco Taught Me',
    excerpt: 'I planned a week and stayed three. The medina had no interest in my schedule.',
    content: `I arrived expecting chaos and found, instead, a city with an extremely deliberate pace. The chaos was real — the souks, the motorbikes, the calls to prayer layering over each other at dusk — but underneath it was something calm.

I had a list. I abandoned it by day two.

## The medina's curriculum

The medina teaches you several things. First: your map is wrong. Second: being lost is not the same as being in danger. Third: the best things are behind unmarked doors.

## What slow travel actually is

Slow travel is not traveling slowly. It's the decision to be in a place rather than moving through it. To learn one neighbourhood rather than photograph twenty.

I spent four days in the same souk. I know the name of the man who sells leather bags. He knows I prefer tea to coffee. This is what I came away with.

Not photographs. A neighbourhood.`,
    category: 'Travel',
    date: new Date('2026-02-18'),
    coverImage: 'https://images.unsplash.com/photo-1539020140153-e479b8f22986?w=1600&q=85',
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return { title: 'Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1600, height: 900 }],
    },
  }
}

export default async function JournalPost({ params }: Props) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) notFound()

  const rt = readingTime(post.content)

  return (
    <article className="pt-[var(--nav-height)] pb-24 bg-cream">
      {/* Hero image */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="section-padding -mt-24 relative z-10">
        <div className="max-w-2xl mx-auto">

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-sans text-[10px] text-terracotta tracking-[0.15em] uppercase font-medium">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-sans text-[10px] text-ink-muted">{formatDate(post.date)}</span>
            <span className="flex items-center gap-1 font-sans text-[10px] text-ink-muted">
              <Clock size={10} /> {rt} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-fluid-3xl text-ink leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="font-serif text-fluid-lg text-ink-muted italic leading-relaxed mb-8 border-l-2 border-terracotta pl-5">
            {post.excerpt}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 pb-8 mb-8 border-b border-border">
            <Link href="/journal" className="flex items-center gap-1.5 font-sans text-xs text-ink-muted hover:text-ink transition-colors">
              <ArrowLeft size={13} /> Back to Journal
            </Link>
            <div className="flex-1" />
            <button className="flex items-center gap-1.5 font-sans text-xs text-ink-muted hover:text-ink transition-colors" aria-label="Save to bookmarks">
              <Bookmark size={14} strokeWidth={1.5} /> Save
            </button>
            <button className="flex items-center gap-1.5 font-sans text-xs text-ink-muted hover:text-ink transition-colors" aria-label="Share post">
              <Share2 size={14} strokeWidth={1.5} /> Share
            </button>
          </div>

          {/* Body — MDX content rendered as editorial prose */}
          <div className="prose-editorial"
            dangerouslySetInnerHTML={{ __html: markdownToBasicHtml(post.content) }}
          />

          {/* Author signature */}
          <div className="mt-16 pt-8 border-t border-border flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=96&q=80"
                alt="Niomi"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-display text-sm text-ink">Niomi</p>
              <p className="font-sans text-xs text-ink-muted">Advocate · Artist · Storyteller</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

// Very basic markdown-to-HTML (replaced by MDX in Phase 6)
function markdownToBasicHtml(md: string): string {
  return md
    .trim()
    .replace(/^## (.+)$/gm, '<h2 class="font-display text-fluid-xl text-ink mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="font-display text-fluid-lg text-ink mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-medium text-ink">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^---$/gm, '<hr class="border-border my-10" />')
    .replace(/^> (.+)$/gm, '<blockquote class="font-serif text-fluid-lg text-olive italic border-l-2 border-terracotta pl-5 my-6">$1</blockquote>')
    .replace(/\n\n/g, '</p><p class="mt-6 font-sans text-fluid-base text-ink-soft leading-[1.8]">')
    .replace(/^/, '<p class="font-sans text-fluid-base text-ink-soft leading-[1.8]">')
    .replace(/$/, '</p>')
}
