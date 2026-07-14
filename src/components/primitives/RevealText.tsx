'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

type ValidTag = 'div' | 'p' | 'section' | 'article' | 'header' | 'footer' | 'span' | 'li' | 'ul' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'

interface RevealTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
  tag?: ValidTag
}

/**
 * GSAP scroll-triggered text reveal component.
 * Wraps children in a fade+slide-up animation on scroll.
 */
export function RevealText({
  children,
  className,
  delay = 0,
  once = true,
  tag: Tag = 'div',
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once,
        },
      }
    )
  }, [delay, once])

  const Comp = Tag as 'div'
  return (
    <Comp ref={ref as React.RefObject<HTMLDivElement>} className={cn('will-change-transform', className)}>
      {children}
    </Comp>
  )
}

interface RevealImageProps {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
}

/**
 * GSAP scroll-triggered image/block reveal.
 * Scale + fade animation for visual blocks.
 */
export function RevealImage({ children, className, delay = 0, once = true }: RevealImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, scale: 1.04 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once,
        },
      }
    )
  }, [delay, once])

  return (
    <div ref={wrapRef} className={cn('overflow-hidden will-change-transform', className)}>
      {children}
    </div>
  )
}
