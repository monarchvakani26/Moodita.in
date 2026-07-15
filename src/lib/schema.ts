import { siteConfig } from './site-config';

/**
 * Generates JSON-LD Person schema.
 */
export function getPersonSchema() {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'Person' as const,
    '@id': `${siteConfig.domain}/#person`,
    name: siteConfig.owner,
    jobTitle: ['Advocate', 'Artist', 'Writer'],
    url: siteConfig.domain,
    image: `${siteConfig.domain}/about-portrait.jpg`, // Matches existing about image path or placeholder
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
    ],
  };
}

/**
 * Generates JSON-LD Website and Organization schemas.
 */
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org' as const,
    '@graph': [
      {
        '@type': 'Organization' as const,
        '@id': `${siteConfig.domain}/#organization`,
        name: siteConfig.name,
        url: siteConfig.domain,
        logo: {
          '@type': 'ImageObject' as const,
          url: `${siteConfig.domain}/icon.png`,
          width: '512',
          height: '512',
        },
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.linkedin,
        ],
      },
      {
        '@type': 'WebSite' as const,
        '@id': `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.domain}/#person`,
        },
        potentialAction: {
          '@type': 'SearchAction' as const,
          target: {
            '@type': 'EntryPoint' as const,
            urlTemplate: `${siteConfig.domain}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}

interface ArticleSchemaOptions {
  headline: string;
  description: string;
  image: string;
  datePublished: string | Date;
  dateModified?: string | Date;
  path: string;
}

/**
 * Generates JSON-LD Article/Blog Posting schema.
 */
export function getArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  path,
}: ArticleSchemaOptions) {
  const url = `${siteConfig.domain}${path.startsWith('/') ? path : `/${path}`}`;
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'BlogPosting' as const,
    '@id': `${url}/#article`,
    isPartOf: {
      '@type': 'WebPage' as const,
      '@id': url,
      url: url,
    },
    headline,
    description,
    image,
    datePublished: new Date(datePublished).toISOString(),
    dateModified: new Date(dateModified || datePublished).toISOString(),
    author: {
      '@type': 'Person' as const,
      name: siteConfig.owner,
      url: siteConfig.domain,
    },
    publisher: {
      '@type': 'Organization' as const,
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject' as const,
        url: `${siteConfig.domain}/icon.png`,
      },
    },
  };
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Generates JSON-LD BreadcrumbList schema.
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'BreadcrumbList' as const,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };
}

interface ProductSchemaOptions {
  name: string;
  image: string;
  description: string;
  sku: string;
  price: number;
  availability: 'InStock' | 'OutOfStock';
  path: string;
}

/**
 * Generates JSON-LD Product schema.
 */
export function getProductSchema({
  name,
  image,
  description,
  sku,
  price,
  availability,
  path,
}: ProductSchemaOptions) {
  const url = `${siteConfig.domain}${path.startsWith('/') ? path : `/${path}`}`;
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'Product' as const,
    '@id': `${url}/#product`,
    name,
    image,
    description,
    sku,
    offers: {
      '@type': 'Offer' as const,
      url: url,
      price: price.toString(),
      priceCurrency: 'INR',
      availability: `https://schema.org/${availability}`,
      seller: {
        '@type': 'Organization' as const,
        name: siteConfig.name,
      },
    },
  };
}
