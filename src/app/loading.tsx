import { HeroSkeleton, NavbarSkeleton } from '@/components/primitives/Skeleton'

/**
 * Root loading skeleton — shown during the initial page load.
 * No blank screen, no white flash.
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-cream">
      <NavbarSkeleton />
      <HeroSkeleton />
    </div>
  )
}
