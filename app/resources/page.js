import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const resources = [
  {
    title: 'University planning',
    // COPY: Outcome-focused description
    description: 'Understand application timing, eligibility, and how to stand out. Walk away knowing exactly which programs fit your profile and when to apply.',
  },
  {
    title: 'Visa guidance',
    // COPY: Specific pain points called out
    description: 'Learn the key requirements and avoid the most common mistakes. We cover student visas, work permits, and the exact documents embassies reject.',
  },
  {
    title: 'Life in Italy',
    // COPY: "No surprises" reassurance
    description: 'Get practical advice on housing, transport, and daily living expectations before you arrive — so there are no surprises on day one.',
  },
];

export default function Resources() {
  return (
    <main>
      <Navigation />

      <section className="page-hero resources-hero">
        <span className="page-hero-eyebrow">Free content</span>
        {/* COPY: Lead-magnet framed headline */}
        <h1 className="hero-headline">Your free Italy Move Starter Guide.</h1>
        {/* COPY: Sub that creates anticipation and hooks the email capture */}
        <p className="hero-sub">Checklists, videos, and guides covering university admission, visas, and life in Italy. Enter your email and we will send everything straight to your inbox.</p>
      </section>

      {/* COPY: Email capture block — fulfils the secondary conversion goal */}
      <section className="section-block lead-capture">
        <span className="section-eyebrow">Get the free guide</span>
        <h2 className="section-title">Everything you need to plan your Italy move.</h2>
        <p className="section-sub">One email. No spam. We will send the Italy Move Starter Guide — university checklist, visa timeline, and cost breakdown — straight to your inbox.</p>
        <form className="lead-form">
          <div className="lead-form-row">
            <input type="text" placeholder="Your first name" className="lead-input" />
            <input type="email" placeholder="Your email address" className="lead-input" />
            {/* COPY: Action-oriented submit */}
            <button type="submit" className="btn-primary">Send Me the Free Guide →</button>
          </div>
          {/* COPY: Micro-trust copy under form */}
          <p className="lead-trust">Free · No spam · Unsubscribe anytime</p>
        </form>
      </section>

      <section className="section-block">
        <span className="section-eyebrow">What you can access</span>
        <h2 className="section-title">Learn before you move.</h2>
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
        {/* COPY: Bridge from self-serve content to 1:1 consultation */}
        <h2 className="section-title">Guides are great. A personal plan is better.</h2>
        <p className="section-sub">These resources give you the overview. A free consultation gives you a personalised roadmap — built around your specific background, goals, and timeline.</p>
        {/* COPY: Specific benefit-driven CTA */}
        <Link href="/consultation" className="btn-primary">Get My Personal Italy Roadmap — Free →</Link>
      </section>

      <Footer />
    </main>
  );
}
