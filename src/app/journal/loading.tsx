import type { Metadata } from 'next'
import { HeroSkeleton, BlogPostSkeleton } from '@/components/primitives/Skeleton'

export const metadata: Metadata = { title: 'Loading Journal…' }

export default function JournalLoading() {
  return (
    <div className="pt-[var(--nav-height)]">
      <div className="section-padding py-20 bg-cream border-b border-border">
        <div className="page-container space-y-4">
          <div className="skeleton h-3 w-16 rounded-full" />
          <div className="skeleton h-14 w-72 rounded-lg" />
          <div className="skeleton h-4 w-96 rounded-full" />
        </div>
      </div>
      <div className="section-padding py-16">
        <div className="page-container">
          <BlogPostSkeleton />
        </div>
      </div>
    </div>
  )
}
