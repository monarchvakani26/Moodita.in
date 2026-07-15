import { siteConfig } from './site-config';

interface OpenGraphOptions {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'book' | 'profile' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station';
  imageUrl?: string;
}

/**
 * Shared helper to build canonical OpenGraph metadata properties.
 */
export function buildOpenGraph({
  title,
  description,
  path,
  type = 'website',
  imageUrl,
}: OpenGraphOptions) {
  const url = `${siteConfig.domain}${path.startsWith('/') ? path : `/${path}`}`;
  
  // Use custom image or dynamic og-image route if not specified
  const image = imageUrl || `${siteConfig.domain}/opengraph-image?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };
}

/**
 * Shared helper to build Twitter metadata properties.
 */
export function buildTwitterCard({
  title,
  description,
  imageUrl,
}: Omit<OpenGraphOptions, 'path' | 'type'>) {
  const image = imageUrl || `${siteConfig.domain}/opengraph-image?title=${encodeURIComponent(title)}`;
  
  return {
    card: 'summary_large_image' as const,
    title,
    description,
    images: [image],
  };
}
