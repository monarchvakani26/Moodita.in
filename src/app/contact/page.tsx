import type { Metadata } from 'next'
import Link from 'next/link'
import { RevealText } from '@/components/primitives/RevealText'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { Instagram, Mail, Linkedin, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Niomi — collaborations, commissions, speaking, or just a hello.',
}

export default function ContactPage() {
  return (
    <div className="pt-[var(--nav-height)] pb-24">

      {/* Header */}
      <div className="section-padding py-20 bg-cream border-b border-border">
        <div className="page-container max-w-2xl">
          <RevealText>
            <p className="font-sans text-xs text-ink-muted tracking-[0.25em] uppercase mb-4">Get In Touch</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h1 className="font-display text-fluid-4xl text-ink leading-tight tracking-tight mb-5">
              Say hello.
            </h1>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-sans text-fluid-base text-ink-muted leading-relaxed">
              For collaborations, commissions, speaking engagements, or just a warm hello — Niomi reads every message personally.
            </p>
          </RevealText>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding py-16 bg-cream">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">

            {/* Form */}
            <form
              action="/api/contact"
              method="POST"
              className="space-y-6"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block font-sans text-xs text-ink-soft mb-2 tracking-wide">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Priya Sharma"
                    className="w-full bg-paper border border-border rounded-xl px-4 py-3.5 text-sm font-sans text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive/40 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-sans text-xs text-ink-soft mb-2 tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-paper border border-border rounded-xl px-4 py-3.5 text-sm font-sans text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive/40 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block font-sans text-xs text-ink-soft mb-2 tracking-wide">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  className="w-full bg-paper border border-border rounded-xl px-4 py-3.5 text-sm font-sans text-ink focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive/40 transition-all duration-200"
                >
                  <option value="">Select a topic…</option>
                  <option value="collab">Collaboration</option>
                  <option value="commission">Commission a Painting</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="legal">Legal Consultation</option>
                  <option value="press">Press / Media</option>
                  <option value="hello">Just Saying Hello</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-sans text-xs text-ink-soft mb-2 tracking-wide">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell Niomi what's on your mind…"
                  className="w-full bg-paper border border-border rounded-xl px-4 py-3.5 text-sm font-sans text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive/40 transition-all duration-200 resize-none"
                />
              </div>

              <MagneticButton type="submit" className="btn-primary flex items-center gap-2" strength={0.25}>
                <Send size={14} strokeWidth={1.5} />
                Send Message
              </MagneticButton>
            </form>

            {/* Info panel */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-fluid-xl text-ink mb-5">Connect directly.</h2>
                <div className="space-y-4">
                  {[
                    { href: 'mailto:hello@moodita.in', icon: <Mail size={16} className="text-olive" />, bg: 'bg-olive/10', hover: 'hover:border-olive/40 hover:bg-olive/5', label: 'Email', value: 'hello@moodita.in', textHover: 'group-hover:text-olive' },
                    { href: 'https://instagram.com/moodita', icon: <Instagram size={16} className="text-terracotta" />, bg: 'bg-terracotta/10', hover: 'hover:border-terracotta/40 hover:bg-terracotta/5', label: 'Instagram', value: '@moodita', textHover: 'group-hover:text-terracotta' },
                    { href: 'https://linkedin.com/in/niomi', icon: <Linkedin size={16} className="text-forest" />, bg: 'bg-forest/10', hover: 'hover:border-forest/40 hover:bg-forest/5', label: 'LinkedIn', value: 'Niomi on LinkedIn', textHover: 'group-hover:text-forest' },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-paper border border-border ${link.hover} transition-all duration-300 group`}
                    >
                      <div className={`w-10 h-10 rounded-full ${link.bg} flex items-center justify-center shrink-0`}>
                        {link.icon}
                      </div>
                      <div>
                        <p className="font-sans text-xs text-ink-muted tracking-wide mb-0.5">{link.label}</p>
                        <p className={`font-sans text-sm text-ink transition-colors ${link.textHover}`}>{link.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <blockquote className="font-serif text-fluid-lg text-olive italic border-l-2 border-terracotta pl-5 leading-snug">
                &ldquo;Every message is read. Every person matters. Thank you for taking the time.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
