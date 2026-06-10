import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const tutorials = [
  {
    title: 'Application roadmap',
    // COPY: More specific outcome description
    description: 'Step-by-step guidance for Italian university applications — from choosing programs to submitting your final documents.',
  },
  {
    title: 'Visa preparation',
    // COPY: Expanded to cover full permit scope
    description: 'Documents, timelines, and filing strategies for the right permit. Covers student visas, work visas, and residence permits.',
  },
  {
    title: 'Living in Italy',
    // COPY: Arrival confidence framing
    description: 'Housing, banking, and daily life preparation before you move — so you arrive confident, not confused.',
  },
];

export default function Tutorial() {
  return (
    <main>
      <Navigation />

      <section className="page-hero">
        <span className="page-hero-eyebrow">Tutorial</span>
        <h1 className="hero-headline">Subscriber-only tutorials are launching soon.</h1>
        {/* COPY: Anticipation + waitlist hook */}
        <p className="hero-sub">In-depth, step-by-step training on Italy university applications, visas, and relocation. Join the waitlist for early access and a discount on launch day.</p>
      </section>

      <section className="section-block">
        <span className="section-eyebrow">Coming soon</span>
        <h2 className="section-title">Private learning for serious movers</h2>
        {/* COPY: Social proof placeholder */}
        <p className="section-sub">Join 200+ students already on the early access list.</p>

        <div className="grid-cards">
          {tutorials.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        {/* COPY: Email waitlist capture — converts dead-end traffic */}
        <div className="lead-capture-inline">
          <h3 className="lead-capture-title">Get early access</h3>
          <p className="lead-capture-sub">We will notify you the moment tutorials go live — plus an exclusive launch discount.</p>
          <form className="lead-form">
            <div className="lead-form-row">
              <input type="email" placeholder="Your email address" className="lead-input" />
              <button type="submit" className="btn-primary">Reserve My Early Access →</button>
            </div>
            <p className="lead-trust">Free · No spam · Unsubscribe anytime</p>
          </form>
        </div>
      </section>

      {/* COPY: Fallback CTA — turns waitlist-only traffic into consultation bookings */}
      <section className="section-block" style={{textAlign: 'center'}}>
        <span className="section-eyebrow">Can&apos;t wait?</span>
        <h2 className="section-title">Get 1:1 guidance now.</h2>
        <p className="section-sub">While tutorials are in production, our consultants are available today. Book a free 30-minute call and get a personalised Italy plan built for your specific situation.</p>
        <Link href="/consultation" className="btn-primary">Book My Free 1:1 Session →</Link>
      </section>

      <Footer />
    </main>
  );
}
