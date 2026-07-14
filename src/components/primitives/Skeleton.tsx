import { cn } from '@/lib/utils'

// ── Primitive ──────────────────────────────────────────────────────────────────
interface SkeletonProps {
  className?: string
  style?: React.CSSProperties
}

export function Skeleton({ className, style }: SkeletonProps) {
  return (
    <div
      className={cn('skeleton', className)}
      style={style}
      role="status"
      aria-label="Loading…"
    />
  )
}

// ── Navbar Skeleton ────────────────────────────────────────────────────────────
export function NavbarSkeleton() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[var(--nav-height)] flex items-center px-6 md:px-12">
      <div className="flex items-center justify-between w-full">
        <Skeleton className="h-5 w-24 rounded-full" />
        <div className="hidden md:flex gap-8">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-16 rounded-full" />
          ))}
        </div>
        <Skeleton className="h-9 w-28 rounded-full" />
      </div>
    </header>
  )
}

// ── Hero Skeleton ──────────────────────────────────────────────────────────────
export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-[var(--nav-height)]">
      <div className="page-container w-full">
        <div className="max-w-4xl space-y-6">
          <Skeleton className="h-4 w-32 rounded-full" />
          <div className="space-y-3">
            <Skeleton className="h-16 md:h-24 w-full max-w-2xl rounded-lg" />
            <Skeleton className="h-16 md:h-24 w-4/5 max-w-xl rounded-lg" />
            <Skeleton className="h-16 md:h-24 w-3/5 max-w-lg rounded-lg" />
          </div>
          <Skeleton className="h-4 w-2/3 max-w-md rounded-full mt-8" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-40 rounded-full" />
            <Skeleton className="h-12 w-36 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Card Skeleton ──────────────────────────────────────────────────────────────
export function CardSkeleton() {
  return (
    <div className="card-base p-0 overflow-hidden">
      <Skeleton className="h-56 w-full rounded-none rounded-t-2xl" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-3 w-16 rounded-full" />
        <Skeleton className="h-5 w-4/5 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-3/4 rounded" />
      </div>
    </div>
  )
}

// ── Gallery Tile Skeleton ──────────────────────────────────────────────────────
const TILE_HEIGHTS = [240, 320, 200, 360, 280, 220, 300, 260]

export function GalleryTileSkeleton({ index = 0 }: { index?: number }) {
  const height = TILE_HEIGHTS[index % TILE_HEIGHTS.length]
  return (
    <div className="masonry-item">
      <Skeleton
        className="w-full rounded-xl"
        style={{ height: `${height}px` } as React.CSSProperties}
      />
    </div>
  )
}

// ── Blog Card Skeleton ─────────────────────────────────────────────────────────
export function BlogCardSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-8 border-b border-border">
      <Skeleton className="h-48 md:h-36 md:w-52 flex-shrink-0 rounded-xl" />
      <div className="flex-1 space-y-3 py-1">
        <div className="flex gap-2">
          <Skeleton className="h-3 w-20 rounded-full" />
          <Skeleton className="h-3 w-16 rounded-full" />
        </div>
        <Skeleton className="h-6 w-4/5 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-3 w-24 rounded-full mt-2" />
      </div>
    </div>
  )
}

// ── Product Card Skeleton ──────────────────────────────────────────────────────
export function ProductCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="aspect-square w-full rounded-2xl" />
      <div className="space-y-2 px-1">
        <Skeleton className="h-3 w-20 rounded-full" />
        <Skeleton className="h-5 w-3/4 rounded" />
        <Skeleton className="h-4 w-16 rounded-full" />
      </div>
    </div>
  )
}

// ── Gallery Grid Skeleton ──────────────────────────────────────────────────────
export function GalleryGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="masonry-grid">
      {[...Array(count)].map((_, i) => (
        <GalleryTileSkeleton key={i} index={i} />
      ))}
    </div>
  )
}

// ── Blog List Skeleton ─────────────────────────────────────────────────────────
export function BlogListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div>
      {[...Array(count)].map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  )
}

// ── Product Grid Skeleton ──────────────────────────────────────────────────────
export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(count)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}

// ── Blog Post Skeleton ─────────────────────────────────────────────────────────
export function BlogPostSkeleton() {
  return (
    <article className="max-w-3xl mx-auto section-padding py-24">
      <div className="space-y-4 mb-12">
        <Skeleton className="h-3 w-24 rounded-full" />
        <Skeleton className="h-12 w-full rounded" />
        <Skeleton className="h-12 w-3/4 rounded" />
        <div className="flex gap-4 pt-2">
          <Skeleton className="h-3 w-20 rounded-full" />
          <Skeleton className="h-3 w-16 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-72 w-full rounded-2xl mb-12" />
      <div className="space-y-4">
        {[...Array(8)].map((_, i) => (
          <Skeleton
            key={i}
            className={`h-4 rounded ${i % 5 === 4 ? 'w-2/3' : 'w-full'}`}
          />
        ))}
      </div>
    </article>
  )
}
