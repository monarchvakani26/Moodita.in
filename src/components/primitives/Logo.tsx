'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'lg'
  animated?: boolean
  variant?: 'navbar' | 'hero'
}

/**
 * Moodita signature branding logo component.
 * Features the custom spiral-sun SVG icon and typographic wordmark.
 * Uses inline SVG elements with classes for fine-grained GSAP scroll animations.
 */
export function Logo({
  className,
  size = 'sm',
  animated = false,
  variant = 'navbar',
}: LogoProps) {
  const isLg = size === 'lg'

  return (
    <div
      className={cn(
        'flex items-center gap-3 select-none',
        isLg ? 'flex-col text-center' : 'flex-row text-left',
        className
      )}
      data-logo-variant={variant}
    >
      {/* SVG Spiral Sun Icon */}
      <svg
        width={isLg ? 110 : 36}
        height={isLg ? 110 : 36}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'logo-svg-icon shrink-0',
          animated && 'will-change-transform'
        )}
        aria-hidden="true"
      >
        <defs>
          {/* Logo brand gradient: Orange/Golden to Terracotta-Rose */}
          <linearGradient id="logo-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5A93C" />
            <stop offset="50%" stopColor="#C4714A" />
            <stop offset="100%" stopColor="#D65A5A" />
          </linearGradient>
        </defs>

        {/* 1. Spiral path (draws in on scroll) */}
        <path
          className="logo-path-spiral"
          d="M 50 72 C 45 66 36 66 33 72 C 28 82 43 92 53 92 C 67 92 78 78 78 62 C 78 40 54 36 58 18"
          stroke="url(#logo-grad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset={animated ? 200 : 0}
        />

        {/* 2. Sun head loop/core (scales on scroll) */}
        <circle
          className="logo-path-sun-core"
          cx="58"
          cy="18"
          r="6.5"
          fill="url(#logo-grad)"
          style={{ transformOrigin: '58px 18px' }}
        />

        {/* 3. 8 Sun rays (scatter / rotate on scroll) */}
        <g className="logo-path-rays" style={{ transformOrigin: '58px 18px' }}>
          {/* Top ray */}
          <line className="logo-ray logo-ray-1" x1="58" y1="7" x2="58" y2="3" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Bottom ray */}
          <line className="logo-ray logo-ray-2" x1="58" y1="29" x2="58" y2="33" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Left ray */}
          <line className="logo-ray logo-ray-3" x1="47" y1="18" x2="43" y2="18" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Right ray */}
          <line className="logo-ray logo-ray-4" x1="69" y1="18" x2="73" y2="18" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Diagonal top-left */}
          <line className="logo-ray logo-ray-5" x1="50.2" y1="10.2" x2="47.2" y2="7.2" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Diagonal top-right */}
          <line className="logo-ray logo-ray-6" x1="65.8" y1="10.2" x2="68.8" y2="7.2" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Diagonal bottom-left */}
          <line className="logo-ray logo-ray-7" x1="50.2" y1="25.8" x2="47.2" y2="28.8" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Diagonal bottom-right */}
          <line className="logo-ray logo-ray-8" x1="65.8" y1="25.8" x2="68.8" y2="28.8" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>

      {/* Typography Lockup */}
      <div className={cn('flex flex-col', isLg ? 'items-center' : 'items-start')}>
        <span
          className={cn(
            'logo-text-title font-display text-ink leading-none tracking-tight transition-colors duration-300 group-hover:text-terracotta',
            isLg ? 'text-4xl md:text-5xl mt-4' : 'text-xl md:text-2xl'
          )}
        >
          Moodita
        </span>
        <span
          className={cn(
            'logo-text-subtitle font-sans text-ink-muted tracking-[0.1em]',
            isLg ? 'text-xs md:text-sm mt-2 uppercase' : 'text-[9px] uppercase'
          )}
        >
          by Niomi Gada
        </span>
      </div>
    </div>
  )
}
