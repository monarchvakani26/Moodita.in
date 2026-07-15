import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center section-padding text-center pt-[var(--nav-height)]">
      {/* Large decorative number */}
      <p
        className="font-display text-[clamp(8rem,25vw,16rem)] text-paper select-none leading-none mb-4"
        aria-hidden="true"
      >
        404
      </p>

      <h1 className="font-display text-fluid-2xl text-ink mb-4 -mt-8 relative z-10">
        This page wandered off.
      </h1>
      <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-sm mb-10">
        Like Niomi Gada on a quiet Tuesday — it might have gone somewhere more interesting. 
        Let&apos;s find you a better destination.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn-primary">
          Back Home
        </Link>
        <Link href="/gallery" className="btn-secondary">
          Browse the Gallery
        </Link>
        <Link href="/journal" className="btn-secondary">
          Read the Journal
        </Link>
      </div>
    </div>
  )
}
