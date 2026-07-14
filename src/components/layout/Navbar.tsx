'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/primitives/Logo'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Journal', href: '/journal' },
  { label: 'Writing', href: '/writing' },
  { label: 'Food', href: '/food' },
  { label: 'Travel', href: '/travel' },
  { label: 'Shop', href: '/shop' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          'h-[var(--nav-height)] flex items-center',
          'section-padding',
          scrolled
            ? 'glass shadow-soft'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div className="page-container w-full flex items-center justify-between">
          {/* Logo Lockup */}
          <Link
            href="/"
            className="group select-none"
            aria-label="Moodita — home"
          >
            <Logo variant="navbar" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={pathname === link.href || pathname.startsWith(link.href + '/')}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/shop/cart"
              className="relative p-2 text-ink-soft hover:text-terracotta transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {/* Cart badge — server-rendered initial state 0, hydrated by store */}
              <span
                id="cart-badge"
                className="absolute -top-0.5 -right-0.5 bg-terracotta text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center leading-none hidden"
              >
                0
              </span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-ink-soft hover:text-ink transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'font-display text-3xl text-ink hover:text-terracotta transition-colors duration-300',
                      pathname.startsWith(link.href) && 'text-terracotta'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Tagline at bottom of mobile menu */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-16 font-sans text-xs text-ink-muted tracking-[0.2em] uppercase"
            >
              Kindness Above Everything
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Nav (iOS-feel) */}
      <BottomNav pathname={pathname} />
    </>
  )
}

// ── NavLink helper ─────────────────────────────────────────────────────────────
function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link href={href} className={cn('nav-link', active && 'active')}>
      {children}
    </Link>
  )
}

// ── Bottom Navigation (mobile) ─────────────────────────────────────────────────
const BOTTOM_NAV = [
  { label: 'Home', href: '/', icon: '⌂' },
  { label: 'Gallery', href: '/gallery', icon: '◉' },
  { label: 'Journal', href: '/journal', icon: '✦' },
  { label: 'Shop', href: '/shop', icon: '◈' },
  { label: 'Food', href: '/food', icon: '✿' },
] as const

function BottomNav({ pathname }: { pathname: string }) {
  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-border"
      aria-label="Bottom navigation"
    >
      <div className="flex items-center justify-around h-16 px-2 safe-area-bottom">
        {BOTTOM_NAV.map((item) => {
          const isActive = item.href === '/'
            ? pathname === '/'
            : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-200',
                isActive
                  ? 'text-terracotta'
                  : 'text-ink-muted hover:text-ink'
              )}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="text-[9px] font-sans tracking-wide uppercase">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
