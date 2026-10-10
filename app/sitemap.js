import { SITE_URL } from './seo';
import { posts } from './blog/posts';

const pages = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/consultation', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/universities', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/offers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/scholarship', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/resources', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/tutorial', priority: 0.6, changeFrequency: 'monthly' },
];

export default function sitemap() {
  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: new Date(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
