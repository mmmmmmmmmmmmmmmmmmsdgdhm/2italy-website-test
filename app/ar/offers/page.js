import OffersPage from '../../components/OffersPage';
import { pageMetadata } from '../../seo';
import { languageAlternates } from '../../i18n';

export const metadata = pageMetadata({
  title: 'الباقات والأسعار — القبول والفيزا والانتقال',
  description: 'ثلاث باقات توصلك إلى إيطاليا — من أساسيات القبول حتى الانتقال الكامل. احجز مكالمة مجانية للبدء.',
  path: '/ar/offers',
  locale: 'ar_AR',
  languages: languageAlternates('/offers'),
});

export default function ArabicOffers() {
  return <OffersPage lang="ar" />;
}
