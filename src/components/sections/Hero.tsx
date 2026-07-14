'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { SignatureReveal } from '@/components/sections/SignatureReveal'

const IDENTITY_WORDS = ['Advocate.', 'Artist.', 'Writer.', 'Creator.']

/**
 * Cinematic homepage hero section.
 *
 * DOM structure:
 *   #hero-scroll-spacer (200vh)           — provides scroll distance for ScrollTrigger
 *     #hero-pin-wrapper (sticky, 100vh)   — CSS sticky, no GSAP pin, zero hydration risk
 *       section#hero-section              — the visible full-viewport hero panel
 *         div#hero-content-layer          — ALL blurrable content (background + text)
 *         <SignatureReveal />             — signature overlay, above blur layer, z-20
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  // Entry animation: runs once on mount, independent of scroll
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo(
        '#hero-greeting',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
      tl.fromTo(
        '#hero-name',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.4'
      )
      tl.fromTo(
        '.hero-word',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 },
        '-=0.3'
      )
      tl.fromTo(
        '#hero-tagline',
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: 'power1.out' },
        '-=0.1'
      )
      tl.fromTo(
        '#hero-ctas',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )
      tl.fromTo(
        '#scroll-indicator',
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    /* 200vh outer spacer — gives GSAP ScrollTrigger its scroll distance */
    <div id="hero-scroll-spacer" style={{ height: '200vh' }}>

      {/* CSS sticky inner panel — zero DOM mutations, zero hydration risk */}
      <div
        id="hero-pin-wrapper"
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
      >
        <section
          id="hero-section"
          ref={sectionRef}
          className="relative h-full w-full overflow-hidden"
          aria-labelledby="hero-name"
        >

          {/* ── Blurrable content layer ─────────────────────────────────────────────
              Everything inside here will be blurred + dimmed by SignatureReveal's
              GSAP ScrollTrigger. The signature sits OUTSIDE this div (above it, z-20)
              so it is never affected by the filter. */}
          <div
            id="hero-content-layer"
            className="absolute inset-0 flex items-center justify-center section-padding pt-[var(--nav-height)]"
          >
            {/* Warm gradient background */}
            <div className="absolute inset-0 -z-10 bg-gradient-warm" aria-hidden="true" />

            {/* Decorative brush strokes */}
            <BrushStrokes />

            {/* Floating particles */}
            <FloatingParticles />

            {/* Hero text — centered, single column */}
            <div className="page-container relative z-10 w-full flex flex-col items-start max-w-3xl">

              <p
                id="hero-greeting"
                className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-6"
                style={{ opacity: 0 }}
              >
                Welcome to my world
              </p>

              <h1
                id="hero-name"
                className="font-display text-fluid-hero text-ink leading-[0.95] tracking-tight mb-4"
                style={{ opacity: 0 }}
              >
                Hello,<br />
                I&apos;m&nbsp;<span className="text-terracotta">Niomi.</span>
              </h1>

              <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6" aria-label="Niomi is an:">
                {IDENTITY_WORDS.map((word) => (
                  <span
                    key={word}
                    className="hero-word font-serif text-fluid-2xl text-olive italic"
                    style={{ opacity: 0 }}
                  >
                    {word}
                  </span>
                ))}
              </div>

              <p
                id="hero-tagline"
                className="font-display text-fluid-xl text-ink-muted italic mb-12"
                style={{ opacity: 0 }}
              >
                One person.{' '}
                <span className="text-terracotta not-italic font-medium">Many stories.</span>
              </p>

              <div id="hero-ctas" className="flex flex-col sm:flex-row gap-4" style={{ opacity: 0 }}>
                <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
                  Explore My World
                </Link>
                <Link href="/journal" className="btn-secondary inline-flex items-center gap-2">
                  Read My Journal
                </Link>
              </div>
            </div>

            {/* Scroll indicator */}
            <div
              id="scroll-indicator"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              aria-hidden="true"
              style={{ opacity: 0 }}
            >
              <span className="font-sans text-[10px] text-ink-muted tracking-[0.2em] uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                <ArrowDown size={14} strokeWidth={1.5} className="text-ink-muted" />
              </motion.div>
            </div>
          </div>
          {/* ── End blurrable content layer ───────────────────────────────────── */}

          {/* Signature overlay — above the blur layer, unaffected by filter */}
          <SignatureReveal />

        </section>
      </div>
    </div>
  )
}

// ── Brush Stroke SVG ───────────────────────────────────────────────────────────
function BrushStrokes() {
  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path
        d="M1100 -20 Q1300 200 1440 400 Q1380 550 1200 650 Q1100 700 900 620"
        stroke="rgba(196,113,74,0.07)"
        strokeWidth="120"
        fill="none"
        strokeLinecap="round"
        className="animate-[float_12s_ease-in-out_infinite]"
      />
      <path
        d="M-80 600 Q100 500 280 550 Q400 590 350 720"
        stroke="rgba(107,124,94,0.08)"
        strokeWidth="80"
        fill="none"
        strokeLinecap="round"
        className="animate-[float-slow_15s_ease-in-out_infinite]"
      />
      <circle
        cx="85%"
        cy="20%"
        r="180"
        fill="rgba(196,113,74,0.04)"
        className="animate-[float_10s_ease-in-out_infinite]"
      />
      <ellipse
        cx="30%"
        cy="95%"
        rx="250"
        ry="80"
        fill="rgba(45,74,62,0.05)"
      />
    </svg>
  )
}

// ── Floating Particles ─────────────────────────────────────────────────────────
const PARTICLES = [
  { size: 4, top: '15%', left: '8%', delay: '0s', duration: '7s', color: 'rgba(196,113,74,0.3)' },
  { size: 6, top: '30%', left: '90%', delay: '1.5s', duration: '9s', color: 'rgba(107,124,94,0.25)' },
  { size: 3, top: '70%', left: '15%', delay: '3s', duration: '8s', color: 'rgba(196,113,74,0.2)' },
  { size: 5, top: '55%', left: '75%', delay: '2s', duration: '11s', color: 'rgba(45,74,62,0.2)' },
  { size: 4, top: '85%', left: '60%', delay: '4s', duration: '10s', color: 'rgba(107,124,94,0.3)' },
  { size: 3, top: '10%', left: '55%', delay: '0.5s', duration: '13s', color: 'rgba(196,113,74,0.15)' },
]

function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: p.color,
            animationName: 'float',
            animationDuration: p.duration,
            animationDelay: p.delay,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>
  )
}
