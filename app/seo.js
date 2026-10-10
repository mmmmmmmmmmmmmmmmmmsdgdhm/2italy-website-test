// Shared SEO settings. `pageMetadata` gives every page a canonical URL and a
// complete Open Graph block (page-level openGraph replaces the layout's, it doesn't merge).

export const SITE_URL = 'https://2italy.co';
export const SITE_NAME = '2italy';

export const ogImage = {
  url: '/og',
  width: 1200,
  height: 630,
  alt: '2italy — Study, visa and relocation to Italy',
};

export function pageMetadata({ title, description, path, locale = 'en_US', type = 'website', extraOpenGraph = {} }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: typeof title === 'string' ? `${title} | ${SITE_NAME}` : title?.absolute,
      description,
      url: path,
      siteName: SITE_NAME,
      locale,
      type,
      images: [ogImage],
      ...extraOpenGraph,
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImage.url],
    },
  };
}
