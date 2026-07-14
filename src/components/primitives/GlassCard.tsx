'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

/**
 * GlassCard — glassmorphism card primitive.
 * 
 * Use ONLY for:
 * - Navigation bar on scroll (done in Navbar.tsx)
 * - Modal / lightbox overlays
 * - Product quick-view drawers
 * - Image caption overlays (e.g. About portrait)
 * 
 * Do NOT use on every card — reserved for elevated UI moments.
 */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('glass rounded-2xl', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'
