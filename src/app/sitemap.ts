import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://fullstack-developer.sk').replace(/\/$/, '');
  // Public-page allowlist. Unlisted CV URLs must never be added here.
  return ['/', '/projects', ...projects.map(project => `/projects/${project.slug}`)]
    .map(path => ({ url: `${origin}${path}` }));
}
