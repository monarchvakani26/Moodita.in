import Link from 'next/link'
import { Instagram, Mail, Linkedin, ArrowUpRight } from 'lucide-react'

const FOOTER_LINKS = {
  explore: [
    { label: 'About Niomi Gada', href: '/about' },
    { label: 'Creative Gallery', href: '/gallery' },
    { label: 'Journal', href: '/journal' },
    { label: 'Writing', href: '/writing' },
  ],
  world: [
    { label: 'Food Journal', href: '/food' },
    { label: 'Travel Diary', href: '/travel' },
    { label: 'The Shop', href: '/shop' },
    { label: 'Newsletter', href: '/newsletter' },
  ],
  connect: [
    { label: 'Contact', href: '/contact' },
    { label: 'Instagram', href: 'https://instagram.com/moodita', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/niomi', external: true },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest text-cream" role="contentinfo">
      {/* Main footer */}
      <div className="page-container section-padding py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            <Link
              href="/"
              className="font-display text-3xl text-cream hover:text-terracotta-light transition-colors duration-300"
              aria-label="Moodita — home"
            >
              moodita
            </Link>
            <p className="font-serif text-sm text-cream/70 italic leading-relaxed max-w-xs">
              Kindness Above Everything
            </p>
            <p className="font-sans text-xs text-cream/50 leading-relaxed max-w-xs">
              A digital home for Niomi Gada — advocate, artist, writer, foodie, traveller, and storyteller.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              <SocialLink
                href="https://instagram.com/moodita"
                aria-label="Follow on Instagram"
                icon={<Instagram size={16} strokeWidth={1.5} />}
              />
              <SocialLink
                href="mailto:hello@moodita.in"
                aria-label="Send an email"
                icon={<Mail size={16} strokeWidth={1.5} />}
              />
              <SocialLink
                href="https://linkedin.com/in/niomi"
                aria-label="Connect on LinkedIn"
                icon={<Linkedin size={16} strokeWidth={1.5} />}
              />
            </div>
          </div>

          {/* Link columns */}
          <FooterLinkGroup title="Explore" links={FOOTER_LINKS.explore} />
          <FooterLinkGroup title="My World" links={FOOTER_LINKS.world} />
          <FooterLinkGroup title="Connect" links={FOOTER_LINKS.connect} />
        </div>
      </div>

      {/* Newsletter strip */}
      <div className="border-t border-cream/10">
        <div className="page-container section-padding py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-display text-lg text-cream">Receive monthly letters from Niomi Gada.</p>
              <p className="font-sans text-xs text-cream/50 mt-1">Art updates, recipes, travel stories, and thoughts.</p>
            </div>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 bg-terracotta text-cream px-6 py-3 rounded-full text-sm font-sans font-medium hover:bg-terracotta-dark transition-colors duration-300 shrink-0"
            >
              Subscribe to the letter
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="page-container section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/40 font-sans">
            <p>© {year} Moodita by Niomi Gada. All rights reserved. <span className="mx-2 opacity-30">|</span> Website designed by Monarch Vakani</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-cream/70 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-cream/70 transition-colors">Terms</Link>
              <Link href="/admin" className="hover:text-cream/70 transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function FooterLinkGroup({
  title,
  links,
}: {
  title: string
  links: Array<{ label: string; href: string; external?: boolean }>
}) {
  return (
    <div className="space-y-4">
      <p className="font-sans text-xs text-cream/40 tracking-[0.15em] uppercase">{title}</p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="font-sans text-sm text-cream/70 hover:text-cream transition-colors duration-200 inline-flex items-center gap-1 group"
            >
              {link.label}
              {link.external && (
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialLink({
  href,
  icon,
  'aria-label': ariaLabel,
}: {
  href: string
  icon: React.ReactNode
  'aria-label': string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all duration-200"
    >
      {icon}
    </a>
  )
}
