import { pageMetadata } from '../seo';
import { languageAlternates } from '../i18n';

export const metadata = pageMetadata({
  title: 'Free Consultation — Get Your Italy Roadmap',
  description: 'Book a free 30-minute call with 2italy. Tell us your background and goals and we will map the clearest path to an Italian university, student visa and life in Italy.',
  path: '/consultation',
  languages: languageAlternates('/consultation'),
});

export default function Layout({ children }) {
  return children;
}
