import HomePage from './components/HomePage';
import { languageAlternates } from './i18n';

export const metadata = {
  alternates: { canonical: '/', languages: languageAlternates('/') },
};

export default function Home() {
  return <HomePage lang="en" />;
}
