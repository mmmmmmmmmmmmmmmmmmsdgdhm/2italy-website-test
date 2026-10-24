import ReviewsPage from '../../components/ReviewsPage';
import { pageMetadata } from '../../seo';
import { languageAlternates } from '../../i18n';

export const metadata = pageMetadata({
  title: 'تقييمات الطلاب — ماذا يقول طلابنا',
  description: 'تقييمات مستقلة على Trustpilot وقصص بالفيديو من طلاب ساعدتهم 2italy في القبول بالجامعات الإيطالية والحصول على المنح وفيزا الدراسة.',
  path: '/ar/reviews',
  locale: 'ar_AR',
  languages: languageAlternates('/reviews'),
});

export default function ArabicReviews() {
  return <ReviewsPage lang="ar" />;
}
