'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { Mail } from 'lucide-react'

/**
 * Newsletter signup CTA section — editorial, warm, personal.
 */
export function NewsletterCTA() {
  return (
    <section className="section-padding py-28 bg-forest relative overflow-hidden" aria-labelledby="newsletter-heading">

      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-forest-light/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-olive-dark/20 blur-3xl" />
      </div>

      <div className="page-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          <RevealText>
            <span className="inline-block font-sans text-[10px] text-cream/50 tracking-[0.25em] uppercase mb-6 border border-cream/15 px-4 py-2 rounded-full">
              Monthly Letters
            </span>
          </RevealText>

          <RevealText delay={0.1}>
            <h2
              id="newsletter-heading"
              className="font-display text-fluid-3xl text-cream leading-tight tracking-tight mb-6"
            >
              Receive letters<br />
              <span className="text-terracotta-light italic">from Niomi.</span>
            </h2>
          </RevealText>

          <RevealText delay={0.2}>
            <p className="font-sans text-sm text-cream/60 leading-relaxed mb-10 max-w-md mx-auto">
              Art updates. New recipes. Travel stories. Quiet reflections. 
              Once a month, in your inbox — like a letter from a friend.
            </p>
          </RevealText>

          {/* Subscription form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            action="/api/newsletter/subscribe"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            aria-label="Newsletter subscription form"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <div className="relative flex-1">
              <Mail
                size={16}
                strokeWidth={1.5}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 rounded-full pl-10 pr-4 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta/40 transition-all duration-200"
              />
            </div>
            <MagneticButton
              type="submit"
              className="btn-primary shrink-0 rounded-full px-6 py-3.5 text-sm"
              strength={0.25}
            >
              Subscribe
            </MagneticButton>
          </motion.form>

          <RevealText delay={0.4}>
            <p className="font-sans text-[11px] text-cream/30 mt-5">
              No spam. Unsubscribe any time.
            </p>
          </RevealText>
        </div>
      </div>
    </section>
  )
}
