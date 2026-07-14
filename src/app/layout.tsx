import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LenisProvider } from '@/providers/LenisProvider'
import { QueryProvider } from '@/providers/QueryProvider'
import { PageTransition } from '@/components/primitives/PageTransition'
import { GlobalSvgMasks } from '@/components/primitives/GlobalSvgMasks'

import './globals.css'

// ── Google Fonts ───────────────────────────────────────────────────────────────
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// ── Root Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://moodita.in'
  ),
  title: {
    default: 'Moodita by Niomi — Kindness Above Everything',
    template: '%s | Moodita by Niomi',
  },
  description:
    'A digital home for Niomi — advocate, artist, writer, foodie, traveller, and storyteller. Art gallery, journal, recipes, travel diary, and original artwork for sale.',
  keywords: [
    'Moodita',
    'Niomi',
    'advocate',
    'artist',
    'writer',
    'food journal',
    'travel diary',
    'art gallery',
    'paintings',
    'kindness above everything',
  ],
  authors: [{ name: 'Niomi' }],
  creator: 'Niomi',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Moodita by Niomi',
    title: 'Moodita by Niomi — Kindness Above Everything',
    description:
      'A digital home for Niomi — advocate, artist, writer, foodie, traveller, and storyteller.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Moodita by Niomi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moodita by Niomi',
    description: 'Kindness Above Everything',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

// ── Root Layout ────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${inter.variable}`}
    >
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FAF7F2" />
      </head>
      <body className="grain-overlay min-h-screen bg-cream">
        <QueryProvider>
          <LenisProvider>
            {/* Skip to main content for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-cream focus:text-ink focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-soft"
            >
              Skip to main content
            </a>

            <Navbar />

            <main id="main-content" className="relative">
              <PageTransition>{children}</PageTransition>
            </main>

            <Footer />
            <GlobalSvgMasks />

          </LenisProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
