import OffersPage from '../components/OffersPage';
import { pageMetadata } from '../seo';
import { languageAlternates } from '../i18n';

export const metadata = pageMetadata({
  title: 'Packages & Pricing — Admission, Visa and Relocation',
  description: 'Three packages to get you to Italy — from admission essentials to full relocation. Book a free call to get started.',
  path: '/offers',
  languages: languageAlternates('/offers'),
});

export default function Offers() {
  return <OffersPage lang="en" />;
}
