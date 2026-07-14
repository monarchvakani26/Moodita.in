/**
 * Prisma seed script — populates the database with sample content
 * for local development and staging.
 * 
 * Run with: npm run db:seed
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding Moodita database…')

  // ── Categories ─────────────────────────────────────────────────────────────
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'art' },
      update: {},
      create: { name: 'Art', slug: 'art', description: 'Original artwork by Niomi', color: 'terracotta', icon: '🎨', order: 1 },
    }),
    prisma.category.upsert({
      where: { slug: 'food' },
      update: {},
      create: { name: 'Food', slug: 'food', description: 'Recipes and kitchen stories', color: 'olive', icon: '✿', order: 2 },
    }),
    prisma.category.upsert({
      where: { slug: 'travel' },
      update: {},
      create: { name: 'Travel', slug: 'travel', description: 'Places and memories', color: 'forest', icon: '◎', order: 3 },
    }),
    prisma.category.upsert({
      where: { slug: 'legal' },
      update: {},
      create: { name: 'Legal', slug: 'legal', description: 'Law, advocacy, and justice', color: 'ink', icon: '⚖️', order: 4 },
    }),
    prisma.category.upsert({
      where: { slug: 'personal' },
      update: {},
      create: { name: 'Personal', slug: 'personal', description: 'Personal reflections', color: 'terracotta', icon: '✦', order: 5 },
    }),
  ])

  console.log(`✅ Created ${categories.length} categories`)

  // ── Blog Posts ──────────────────────────────────────────────────────────────
  const post1 = await prisma.post.upsert({
    where: { slug: 'kindness-as-a-legal-principle' },
    update: {},
    create: {
      slug: 'kindness-as-a-legal-principle',
      title: 'On Kindness as a Legal Principle',
      excerpt: "What happens when you bring compassion into a courtroom that runs on precedent and argument? I've been thinking about this for years.",
      content: 'Full content here — replace with MDX in production.',
      coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=85',
      readingTime: 6,
      published: true,
      featured: true,
      publishedAt: new Date('2026-06-10'),
    },
  })

  console.log(`✅ Created post: ${post1.title}`)

  // ── Artwork ─────────────────────────────────────────────────────────────────
  const artwork1 = await prisma.artwork.upsert({
    where: { slug: 'golden-hour' },
    update: {},
    create: {
      slug: 'golden-hour',
      title: 'Golden Hour',
      description: 'Warm afternoon light filtered through café windows.',
      story: "I painted this during a particularly quiet week when I'd been spending more time sitting in cafés than I probably should.",
      medium: 'Watercolour on 300gsm cold press',
      dimensions: '40 × 30 cm',
      year: 2025,
      available: true,
      featured: true,
      coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=85',
      images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=85'],
      published: true,
    },
  })

  console.log(`✅ Created artwork: ${artwork1.title}`)

  // ── Admin User ──────────────────────────────────────────────────────────────
  // Note: password should be hashed in production using bcrypt
  await prisma.user.upsert({
    where: { email: 'hello@moodita.in' },
    update: {},
    create: {
      email: 'hello@moodita.in',
      name: 'Niomi',
      role: 'SUPER_ADMIN',
    },
  })

  console.log('✅ Created admin user')
  console.log('\n✨ Seed complete!')
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
