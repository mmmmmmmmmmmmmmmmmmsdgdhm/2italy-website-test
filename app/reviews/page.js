import ReviewsPage from '../components/ReviewsPage';
import { pageMetadata } from '../seo';
import { languageAlternates } from '../i18n';

export const metadata = pageMetadata({
  title: 'Student Reviews — What Our Students Say',
  description: 'Independent Trustpilot reviews and video stories from students 2italy helped get into Italian universities, win scholarships and secure their student visa.',
  path: '/reviews',
  languages: languageAlternates('/reviews'),
});

export default function Reviews() {
  return <ReviewsPage lang="en" />;
}
