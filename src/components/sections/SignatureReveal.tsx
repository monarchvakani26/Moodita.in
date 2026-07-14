'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-scrubbed signature reveal overlay for the Hero section.
 *
 * DOM contract:
 *   #hero-scroll-spacer  — the 200vh outer scroll distance container (already in Hero.tsx)
 *   #hero-content-layer  — wraps all blurrable hero content (text + background)
 *   #hero-signature      — this component's signature wrapper (positioned above the blur layer)
 *
 * Sequence (all scrubbed — reversible by scrolling back up):
 *   0 → 35%   Blur + dim #hero-content-layer, wipe signature in (left→right clip-path)
 *   35 → 55%  Hold — signature fully revealed, blur fully applied
 *   55 → 80%  Signature drifts upward + fades out
 *   80 → 100% Un-blur hero content, restore brightness
 */
export function SignatureReveal() {
  useEffect(() => {
    // Small timeout to ensure Lenis + GSAP ticker are registered and layout is stable
    const setupId = setTimeout(() => {
      const spacer = document.querySelector('#hero-scroll-spacer')
      const contentLayer = document.querySelector<HTMLElement>('#hero-content-layer')
      const signature = document.querySelector<HTMLElement>('#hero-signature')

      if (!spacer || !contentLayer || !signature) return

      // Kill any pre-existing signature trigger from a previous render/hot-reload
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.id === 'signature-trigger') t.kill()
      })

      // ── Initial states ─────────────────────────────────────────────────────────
      gsap.set(contentLayer, { filter: 'blur(0px) brightness(1)', willChange: 'filter' })
      gsap.set(signature, {
        clipPath: 'inset(0 100% 0 0)',  // fully hidden: right edge fully clipped
        opacity: 1,
        y: 0,
        scale: 1,
        willChange: 'clip-path, transform, opacity',
      })

      // ── Master scrubbed timeline ───────────────────────────────────────────────
      // The timeline total duration is 1.0 — each phase occupies a proportion of that.
      const tl = gsap.timeline({
        defaults: { ease: 'none' },        // linear scrub — no spring/bounce
        scrollTrigger: {
          id: 'signature-trigger',
          trigger: '#hero-scroll-spacer',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,                      // slight smoothing so it feels unhurried
          invalidateOnRefresh: true,
        },
      })

      // Phase 1 (0 → 35%): Blur + dim content; wipe signature in left-to-right
      tl.to(contentLayer, {
        filter: 'blur(10px) brightness(0.65)',
        duration: 0.35,
      }, 0)

      tl.to(signature, {
        clipPath: 'inset(0 0% 0 0)',       // fully revealed
        duration: 0.35,
      }, 0)

      // Phase 2 (35% → 55%): Hold — empty tween advances the timeline clock
      tl.to({}, { duration: 0.20 }, 0.35)

      // Phase 3 (55% → 80%): Signature drifts up and fades
      tl.to(signature, {
        y: -90,
        opacity: 0,
        scale: 0.94,
        duration: 0.25,
      }, 0.55)

      // Phase 4 (80% → 100%): Un-blur and restore hero content
      tl.to(contentLayer, {
        filter: 'blur(0px) brightness(1)',
        duration: 0.20,
      }, 0.80)

    }, 350)   // 350ms: enough for Lenis init + first paint, not long enough to feel delayed

    return () => {
      clearTimeout(setupId)
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.id === 'signature-trigger') t.kill()
      })
    }
  }, [])

  return (
    /*
     * Positioned absolutely above #hero-content-layer.
     * pointer-events-none: signature is decorative, never blocks clicks.
     * z-20: above the blurrable content layer (which is z-10 and below).
     */
    <div
      className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none bg-transparent"
      aria-hidden="true"
      style={{ background: 'transparent', backgroundColor: 'transparent' }}
    >
      <div
        id="hero-signature"
        style={{ clipPath: 'inset(0 100% 0 0)', background: 'transparent', backgroundColor: 'transparent' }}   // SSR-safe initial state matches gsap.set
        className="relative w-[85vw] max-w-[700px] select-none bg-transparent"
      >
        <img
          src="/niomi-signature-sacramento-v3.png"
          alt="Niomi Gada signature"
          width={700}
          height={700}
          className="w-full h-auto drop-shadow-[0_4px_24px_rgba(196,113,74,0.15)] bg-transparent"
          style={{ background: 'transparent', backgroundColor: 'transparent' }}
          draggable={false}
        />
      </div>
    </div>
  )
}
