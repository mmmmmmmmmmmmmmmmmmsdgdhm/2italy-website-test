import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const tutorials = [
  { title: 'Application roadmap', description: 'Step-by-step guidance for Italian university applications.' },
  { title: 'Visa preparation', description: 'Documents, timelines, and filing strategies for the right permit.' },
  { title: 'Living in Italy', description: 'Housing, banking, and daily life preparation before you move.' },
];

export default function Tutorial() {
  return (
    <main>
      <Navigation />

      <section className="page-hero">
        <span className="page-hero-eyebrow">Tutorial</span>
        <h1 className="hero-headline">Subscriber-only tutorials are launching soon.</h1>
        <p className="hero-sub">This page is the starting point for gated course content and in-depth Italy move training.</p>
      </section>

      <section className="section-block">
        <span className="section-eyebrow">Coming soon</span>
        <h2 className="section-title">Private learning for serious movers</h2>
        <p className="section-sub">Get early access to structured lessons on admission, visas, and life abroad.</p>

        <div className="grid-cards">
          {tutorials.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="footer-cta">
          <Link href="/consultation" className="btn-primary">Reserve early access</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
