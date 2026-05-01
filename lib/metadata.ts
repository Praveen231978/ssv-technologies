import type { Metadata } from 'next'

const BASE_URL = 'https://ssv-tech.com'
const DEFAULT_OG_IMAGE = '/og/home.png'
const SITE_NAME = 'SSV Technologies'

interface PageMetadataOptions {
  /** Page-specific title (will be appended with site name via the root layout template) */
  title: string
  /** Page-specific description */
  description: string
  /** Canonical path, e.g. "/about" */
  path: string
  /** Optional OG image override; defaults to DEFAULT_OG_IMAGE */
  ogImage?: string
  /** Optional keywords */
  keywords?: string[]
}

/**
 * Merges page-specific metadata with shared Open Graph defaults.
 * Use this in every page file to ensure consistent, unique metadata.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
}: PageMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  }
}
