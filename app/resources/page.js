import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const resources = [
  { title: 'University planning', description: 'Understand application timing, eligibility, and how to stand out.' },
  { title: 'Visa guidance', description: 'Learn the key requirements and avoid the most common mistakes.' },
  { title: 'Life in Italy', description: 'Get practical advice on housing, transport, and daily living expectations before you arrive.' },
];

export default function Resources() {
  return (
    <main>
      <Navigation />

      <section className="page-hero resources-hero">
        <span className="page-hero-eyebrow">Free content</span>
        <h1 className="hero-headline">Learn before you move.</h1>
        <p className="hero-sub">Selected videos and guides that help you understand university admission, visas, and life in Italy.</p>
      </section>

      <section className="section-block">
        <span className="section-eyebrow">What you can access</span>
        <div className="grid-cards">
          {resources.map((resource) => (
            <article key={resource.title} className="card">
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block resources-cta">
        <span className="section-eyebrow">Ready for the next step?</span>
        <h2 className="section-title">Get personal guidance, not only videos.</h2>
        <p className="section-sub">Schedule a free consultation and receive a complete roadmap for your move.</p>
        <Link href="/consultation" className="btn-primary">Book your free call</Link>
      </section>

      <Footer />
    </main>
  );
}
