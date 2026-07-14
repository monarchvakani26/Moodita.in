import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://moodita.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/gallery',
    '/journal',
    '/food',
    '/travel',
    '/writing',
    '/shop',
    '/newsletter',
    '/contact',
  ]

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic entries would be fetched from the DB in Phase 6
  // const posts = await prisma.post.findMany(...)
  // const artworks = await prisma.artwork.findMany(...)

  return staticEntries
}
