import type { MetadataRoute } from 'next'

import { serviceDetails, siteConfig } from '@/lib/site-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ['', '/hizmetler', '/blog', '/announcements'].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const serviceRoutes = serviceDetails.map((service) => ({
    url: `${siteConfig.url}/hizmetler/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
