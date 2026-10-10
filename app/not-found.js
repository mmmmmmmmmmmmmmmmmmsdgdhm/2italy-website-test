import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <main>
      <Navigation />

      <section className="page-hero">
        <span className="page-hero-eyebrow">404</span>
        <h1 className="hero-headline">This page took a wrong turn.</h1>
        <p className="hero-sub">The page you are looking for doesn&rsquo;t exist or has moved. Here is where most people head next:</p>
        <div className="hero-cta-row">
          <Link href="/" className="btn-primary">Back to Home →</Link>
          <Link href="/universities" className="btn-ghost">Browse Universities</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
