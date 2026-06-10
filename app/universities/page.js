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
        {/* COPY: Match-angle sub — personalised to GPA, budget, goals */}
        <p className="hero-sub">We match you to the right program based on your GPA, budget, language level, and career goals — in one free call. No spreadsheets, no guesswork.</p>
      </section>

      <section className="section-block">
        <span className="section-eyebrow">University network</span>
        <h2 className="section-title">63+ universities with admission support</h2>
        {/* COPY: Emphasise live, maintained data — not a static list */}
        <p className="section-sub">Our team tracks the latest deadlines, fees, English requirements, and admission criteria across Italy's top public institutions — updated every semester.</p>

        <div className="grid-cards">
          {universities.map((university) => (
            <article key={university.name} className="card">
              <h2>{university.name}</h2>
              <p>{university.description}</p>
            </article>
          ))}
        </div>

        {/* Mid-section CTA — catches visitors who have seen enough */}
        <div className="section-cta-center">
          {/* COPY: Specific benefit-driven button */}
          <Link href="/consultation" className="btn-primary">Find My Best University Match →</Link>
        </div>
      </section>

      {/* COPY: "What's included" value section — answers "what do I actually get?" */}
      <section className="section-block">
        <span className="section-eyebrow">What you get</span>
        <h2 className="section-title">We do the research. You make the decision.</h2>
        <p className="section-sub">Your university match includes everything you need to apply with confidence.</p>
        <div className="what-included-grid">
          <div className="wi-item">
            <span className="step-num">01</span>
            <div>
              {/* COPY */}
              <h3>Shortlist of matched programs</h3>
              <p>Based on your GPA, budget, language level, and career direction — not generic rankings.</p>
            </div>
          </div>
          <div className="wi-item">
            <span className="step-num">02</span>
            <div>
              {/* COPY */}
              <h3>Deadlines &amp; requirements</h3>
              <p>Application windows, document checklists, and language test thresholds for each program on your list.</p>
            </div>
          </div>
          <div className="wi-item">
            <span className="step-num">03</span>
            <div>
              {/* COPY */}
              <h3>Honest admission read</h3>
              <p>Where your profile is genuinely competitive, where you need to strengthen, and what strong fallback options exist.</p>
            </div>
          </div>
        </div>
        <div className="section-cta-center">
          {/* COPY: Outcome-specific CTA */}
          <Link href="/consultation" className="btn-primary">Get My University Shortlist — Free →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
