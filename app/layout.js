import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import WhatsAppButton from './components/WhatsAppButton';
import { SITE_URL, SITE_NAME, ogImage } from './seo';

const defaultDescription =
  '2italy helps students and young professionals study and build their careers in Italy — university admission, student visa, DSU scholarships and relocation, handled by one team.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '2italy — Your Path to Italy, Made Simple.',
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  icons: {
    icon: '/brand-assets/Asset 165000px.png',
    apple: '/brand-assets/Asset 165000px.png',
  },
  openGraph: {
    title: '2italy — Your Path to Italy, Made Simple.',
    description: defaultDescription,
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogImage.url],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
