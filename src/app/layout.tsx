import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LenisProvider } from '@/providers/LenisProvider';
import { QueryProvider } from '@/providers/QueryProvider';
import { PageTransition } from '@/components/primitives/PageTransition';
import { GlobalSvgMasks } from '@/components/primitives/GlobalSvgMasks';
import { siteConfig } from '@/lib/site-config';
import { getPersonSchema, getWebsiteSchema } from '@/lib/schema';

import './globals.css';

// ── Google Fonts ───────────────────────────────────────────────────────────────
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// ── Viewport Config (Next.js 15 Convention) ────────────────────────────────────
export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
};

// ── Root Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Art, Writing & Creativity by Niomi Gada`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    siteConfig.owner,
    'advocate',
    'artist',
    'writer',
    'food journal',
    'travel diary',
    'art gallery',
    'paintings',
    'kindness above everything',
  ],
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  publisher: siteConfig.owner,
  category: 'Portfolio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: '/',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Art, Writing & Creativity by Niomi Gada`,
    description: siteConfig.description,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} by ${siteConfig.owner}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.owner}`,
    description: siteConfig.tagline,
    images: ['/opengraph-image.png'],
  },
  manifest: '/manifest.webmanifest',
};

// ── Root Layout ────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = getPersonSchema();
  const websiteSchema = getWebsiteSchema();

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
        {/* Favicons (Next.js automatically falls back to file-based icon exports, but link tags guarantee compatibility) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Structured Schema Injections */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
  );
}

