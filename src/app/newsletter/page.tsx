import type { Metadata } from 'next'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { Mail, Check } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Newsletter | Moodita',
  description:
    'Subscribe to receive monthly letters from Niomi Gada — art updates, new recipes, travel stories, and quiet reflections.',
  alternates: {
    canonical: '/newsletter',
  },
}

const RECENT_LETTERS = [
  { date: 'June 2026', subject: 'On slowing down (and what I painted because of it)' },
  { date: 'May 2026', subject: 'The recipe I\'ve been too afraid to share until now' },
  { date: 'April 2026', subject: 'Letters from Morocco, finally' },
]

export default function NewsletterPage() {
  return (
    <div className="pt-[var(--nav-height)] pb-24 bg-cream min-h-screen">

      {/* Hero */}
      <div className="section-padding py-28">
        <div className="page-container max-w-3xl mx-auto text-center">
          <RevealText>
            <div className="inline-flex items-center gap-2 font-sans text-[10px] text-ink-muted tracking-[0.2em] uppercase border border-border px-4 py-2 rounded-full mb-8">
              <Mail size={11} />
              Monthly Letter
            </div>
          </RevealText>

          <RevealText delay={0.1}>
            <h1 className="font-display text-fluid-4xl text-ink leading-tight tracking-tight mb-6">
              Letters from<br />
              <span className="text-terracotta italic">Niomi Gada.</span>
            </h1>
          </RevealText>

          <RevealText delay={0.2}>
            <p className="font-sans text-fluid-base text-ink-muted leading-[1.8] max-w-xl mx-auto mb-12">
              Once a month, Niomi Gada writes a letter — about a new painting, a recipe discovered by accident, 
              a place she wandered, a thought she couldn&apos;t shake. It arrives in your inbox like a note from a friend.
            </p>
          </RevealText>

          {/* What you get */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12 text-left max-w-lg mx-auto">
            {[
              'Art updates & new paintings',
              'Recipes before they\'re public',
              'Travel stories & photos',
              'Quiet reflections & poems',
              'Early access to the shop',
              'No sponsored content. Ever.',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-olive/15 flex items-center justify-center shrink-0">
                  <Check size={11} className="text-olive" />
                </div>
                <span className="font-sans text-sm text-ink-soft">{item}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            action="/api/newsletter/subscribe"
            method="POST"
            className="max-w-md mx-auto space-y-3"
            aria-label="Newsletter subscription"
          >
            <div>
              <label htmlFor="nl-name" className="block font-sans text-xs text-ink-muted mb-2 text-left">
                First Name (optional)
              </label>
              <input
                id="nl-name"
                name="name"
                type="text"
                placeholder="Priya"
                className="w-full bg-paper border border-border rounded-xl px-4 py-3.5 text-sm font-sans text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-all"
              />
            </div>
            <div>
              <label htmlFor="nl-email" className="block font-sans text-xs text-ink-muted mb-2 text-left">
                Email Address *
              </label>
              <input
                id="nl-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-paper border border-border rounded-xl px-4 py-3.5 text-sm font-sans text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-all"
              />
            </div>
            <MagneticButton
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
              strength={0.2}
            >
              <Mail size={14} strokeWidth={1.5} />
              Subscribe to the Letter
            </MagneticButton>
            <p className="font-sans text-[11px] text-ink-muted text-center">
              No spam. Unsubscribe any time. Read by a real human.
            </p>
          </form>
        </div>
      </div>

      {/* Recent letters */}
      <div className="section-padding py-16 border-t border-border">
        <div className="page-container max-w-xl mx-auto">
          <h2 className="font-display text-fluid-xl text-ink mb-8 text-center">Recent letters</h2>
          <div className="space-y-3">
            {RECENT_LETTERS.map((letter) => (
              <div
                key={letter.date}
                className="flex items-center justify-between p-5 rounded-xl bg-paper border border-border"
              >
                <div>
                  <p className="font-sans text-[10px] text-ink-muted tracking-wide mb-0.5">{letter.date}</p>
                  <p className="font-serif text-sm italic text-ink">{letter.subject}</p>
                </div>
              </div>
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
              { name: 'Newsletter', path: '/newsletter' },
            ])
          ),
        }}
      />
    </div>
  )
}
