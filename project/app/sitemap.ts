import type { MetadataRoute } from 'next';
import { services } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://electhomecare.com.au';

  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/gallery', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/careers', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const servicePages = services.map((s) => ({
    url: `/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...servicePages].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
