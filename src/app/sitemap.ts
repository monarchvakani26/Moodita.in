import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

// Dynamic slug lists mapped from the existing static page arrays
const GALLERY_SLUGS = [
  'golden-hour', 'quiet-forest', 'morning-bloom', 'earth-sky', 
  'still-life-3', 'terracotta-dreams', 'city-light', 'wild-herbs', 
  'river-bend', 'petal-study', 'shadow-play', 'copper-morning'
];

const JOURNAL_SLUGS = [
  'kindness-as-a-legal-principle', 'why-i-paint', 'letter-to-the-girl-who-doubted',
  'cooking-as-love-language', 'slow-travel-morocco'
];

const WRITING_SLUGS = [
  'on-being-alone', 'the-color-of-tuesday', 'dear-past-self',
  'what-kindness-costs', 'city-lights-at-3am'
];

const FOOD_SLUGS = [
  'saffron-rice-stew', 'rose-cardamom-kheer', 'herb-chutney-flatbread', 'mango-coconut-tart'
];

const TRAVEL_SLUGS = [
  'marrakech-seven-days', 'kyoto-in-april', 'goa-monsoon', 'lisbon-tram-28'
];

const SHOP_SLUGS = [
  'golden-hour-original', 'quiet-forest-print', 'morning-bloom-card',
  'recipe-ebook-vol1', 'earth-sky-sketch', 'moodita-tote-bag',
  'terracotta-dreams-print', 'kindness-bookmark-set'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/gallery',
    '/journal',
    '/writing',
    '/food',
    '/travel',
    '/shop',
    '/contact',
    '/newsletter'
  ].map(route => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' || route === '/shop' ? 1.0 : 0.8
  }));

  const galleryRoutes = GALLERY_SLUGS.map(slug => ({
    url: `${siteConfig.domain}/gallery/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const journalRoutes = JOURNAL_SLUGS.map(slug => ({
    url: `${siteConfig.domain}/journal/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const writingRoutes = WRITING_SLUGS.map(slug => ({
    url: `${siteConfig.domain}/writing/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5
  }));

  const foodRoutes = FOOD_SLUGS.map(slug => ({
    url: `${siteConfig.domain}/food/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const travelRoutes = TRAVEL_SLUGS.map(slug => ({
    url: `${siteConfig.domain}/travel/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const shopRoutes = SHOP_SLUGS.map(slug => ({
    url: `${siteConfig.domain}/shop/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  return [
    ...staticRoutes,
    ...galleryRoutes,
    ...journalRoutes,
    ...writingRoutes,
    ...foodRoutes,
    ...travelRoutes,
    ...shopRoutes
  ];
}
