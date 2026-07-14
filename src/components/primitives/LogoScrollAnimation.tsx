'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Premium scroll-linked logo animation.
 * Coordinates between the large deconstructing Hero logo and the assembling Navbar logo.
 * If no Hero logo is present (e.g. on other pages), the Navbar logo resolves to full state instantly.
 */
export function LogoScrollAnimation() {
  const pathname = usePathname()

  useEffect(() => {
    // Force a small timeout to let the DOM fully settle and fonts load
    const timeoutId = setTimeout(() => {
      const heroLogo = document.querySelector('[data-logo-variant="hero"]')
      const navLogo = document.querySelector('[data-logo-variant="navbar"]')

      if (!navLogo) return

      const navSpiral = navLogo.querySelector('.logo-path-spiral')
      const navCore = navLogo.querySelector('.logo-path-sun-core')
      const navRays = navLogo.querySelector('.logo-path-rays')
      const navTitle = navLogo.querySelector('.logo-text-title')
      const navSubtitle = navLogo.querySelector('.logo-text-subtitle')

      // Clean up previous ScrollTriggers to avoid memory leaks/conflicts
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.id === 'logo-trigger') t.kill()
      })

      if (!heroLogo) {
        // We are on a subpage — Navbar logo should be fully assembled and visible immediately
        gsap.set(navSpiral, { strokeDashoffset: 0 })
        gsap.set(navCore, { scale: 1 })
        gsap.set(navRays, { scale: 1, rotation: 0 })
        gsap.set([navTitle, navSubtitle], { opacity: 1, x: 0 })
        return
      }

      // We are on the homepage — set up progressive scroll assembly
      const heroSpiral = heroLogo.querySelector('.logo-path-spiral')
      const heroCore = heroLogo.querySelector('.logo-path-sun-core')
      const heroRays = heroLogo.querySelector('.logo-path-rays')

      // 1. Initial State (scrolled to top)
      gsap.set(navSpiral, { strokeDashoffset: 200 })
      gsap.set(navCore, { scale: 0 })
      gsap.set(navRays, { scale: 0, rotation: -90 })
      gsap.set([navTitle, navSubtitle], { opacity: 0, x: -12 })

      // 2. Scroll Trigger Timeline — pure scrub, CSS sticky handles visual pinning
      //    No pin:true → GSAP never injects a .pin-spacer div → zero hydration mismatch
      const tl = gsap.timeline({
        id: 'logo-trigger',
        scrollTrigger: {
          trigger: '#hero-scroll-spacer', // 200vh outer spacer
          start: 'top top',
          end: 'bottom top',              // fires over the full 200vh spacer
          scrub: 0.8,
        },
      })

      // Hero logo deconstructs and fades out
      tl.to(
        heroLogo,
        { opacity: 0, y: -30, duration: 1 },
        0
      )
      tl.to(
        heroSpiral,
        { strokeDashoffset: 140, duration: 1 },
        0
      )
      tl.to(
        heroCore,
        { scale: 0, duration: 0.8 },
        0
      )
      tl.to(
        heroRays,
        { scale: 0, rotation: 45, duration: 0.8 },
        0
      )

      // Navbar logo progressively constructs and reveals
      tl.to(
        navSpiral,
        { strokeDashoffset: 0, duration: 1 },
        0.1
      )
      tl.to(
        navCore,
        { scale: 1, duration: 0.8 },
        0.2
      )
      tl.to(
        navRays,
        { scale: 1, rotation: 0, duration: 0.8 },
        0.2
      )
      tl.to(
        [navTitle, navSubtitle],
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.1 },
        0.3
      )
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null
}
