import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const universities = [
  {
    name: 'Politecnico di Milano',
    description: 'Top-ranked engineering, architecture and design programs with strong employer connections.',
  },
  {
    name: 'Università Bocconi',
    description: 'Leading business and economics education for international students seeking career acceleration.',
  },
  {
    name: 'University of Bologna',
    description: 'Historic research university offering multidisciplinary programs across Europe.',
  },
  {
    name: 'Sapienza University of Rome',
    description: 'A strong public university with competitive programs in medicine, law, and science.',
  },
];

export default function Universities() {
  return (
    <main>
      <Navigation />

      <section className="page-hero">
        <span className="page-hero-eyebrow">Universities</span>
        <h1 className="hero-headline">Italian public universities for global students</h1>
        <p className="hero-sub">We help you identify the universities and programs that match your budget, language, and career goals.</p>
      </section>

      <section className="section-block">
        <span className="section-eyebrow">University network</span>
        <h2 className="section-title">63+ universities with admission support</h2>
        <p className="section-sub">Our team keeps the latest deadlines, fees, English requirements, and admission criteria for Italy’s top public institutions.</p>

        <div className="grid-cards">
          {universities.map((university) => (
            <article key={university.name} className="card">
              <h2>{university.name}</h2>
              <p>{university.description}</p>
            </article>
          ))}
        </div>

        <div className="footer-cta">
          <Link href="/consultation" className="btn-primary">Check your best fit</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
