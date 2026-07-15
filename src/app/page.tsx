import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { FeaturedCategories } from '@/components/sections/FeaturedCategories'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { GalleryPreview } from '@/components/sections/GalleryPreview'
import { LatestJournal } from '@/components/sections/LatestJournal'
import { NewsletterCTA } from '@/components/sections/NewsletterCTA'

import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Moodita | Art, Writing & Creativity by Niomi Gada`,
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
}

/**
 * Homepage — the digital home of Moodita.
 * Sections: Hero → Categories → About → Gallery → Journal → Newsletter
 */
export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic hero with animated headline */}
      <Hero />

      {/* 2. Featured categories — six worlds */}
      <FeaturedCategories />

      {/* 3. About split layout with portrait + timeline */}
      <AboutPreview />

      {/* 4. Gallery bento preview */}
      <GalleryPreview />

      {/* 5. Latest journal entries */}
      <LatestJournal />

      {/* 6. Newsletter CTA */}
      <NewsletterCTA />
    </>
  )
}
