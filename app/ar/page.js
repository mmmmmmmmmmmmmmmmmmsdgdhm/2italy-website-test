import HomePage from '../components/HomePage';
import { pageMetadata } from '../seo';
import { languageAlternates } from '../i18n';

export const metadata = pageMetadata({
  title: { absolute: '2italy — طريقك إلى إيطاليا بكل وضوح' },
  description: 'تساعد 2italy الطلاب والشباب على الدراسة وبناء مستقبلهم في إيطاليا — القبول الجامعي، فيزا الدراسة، منح DSU والانتقال، مع فريق واحد لكل خطوة.',
  path: '/ar',
  locale: 'ar_AR',
  languages: languageAlternates('/'),
});

export default function ArabicHome() {
  return <HomePage lang="ar" />;
}
