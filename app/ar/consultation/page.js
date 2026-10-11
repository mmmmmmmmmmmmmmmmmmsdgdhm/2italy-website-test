import ConsultationPage from '../../components/ConsultationPage';
import { pageMetadata } from '../../seo';
import { languageAlternates } from '../../i18n';

export const metadata = pageMetadata({
  title: 'استشارة مجانية — احصل على خطتك للدراسة في إيطاليا',
  description: 'احجز مكالمة مجانية لمدة 30 دقيقة مع 2italy. أخبرنا عن خلفيتك وأهدافك وسنرسم لك أوضح طريق إلى جامعة إيطالية وفيزا الدراسة والحياة في إيطاليا.',
  path: '/ar/consultation',
  locale: 'ar_AR',
  languages: languageAlternates('/consultation'),
});

export default function ArabicConsultation() {
  return <ConsultationPage lang="ar" />;
}
