import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <section className="hero">
        <div className="hero-inner">
          {/* COPY: Pain-first eyebrow — speaks to the overwhelm */}
          <span className="hero-eyebrow">Overwhelmed by Italian university applications?</span>
          <h1 className="hero-headline">
            {/* COPY: Outcome headline — transformation, not features */}
            <span className="line">Get Into an Italian</span>
            <span className="line"><span className="grad">University</span></span>
            <span className="line">Without the Guesswork.</span>
          </h1>
          {/* COPY: Differentiator sub — done-for-you + hard proof numbers */}
          <p className="hero-sub">
            We handle every step — application, visa, housing, and relocation. 1,000+ students placed across Italy. 84% visa approval rate.
          </p>
          <div className="hero-cta-row">
            {/* COPY: Single benefit-driven primary CTA above the fold */}
            <Link href="/consultation" className="btn-primary">Book My Free Italy Consultation →</Link>
            <a href="#how" className="btn-ghost">See how it works</a>
          </div>
          {/* COPY: Trust strip under CTA — reduces hesitation */}
          <div className="trust-bar">
            <span>✓ Free 30-min call</span>
            <span>✓ No obligation</span>
            <span>✓ 63+ partner universities</span>
          </div>
        </div>
      </section>

      <section className="brand-mark">
        <span className="brand-eyebrow">Your Partner for Italy</span>
        <div className="brand-logo-wrap">
          <img src="/brand-assets/Asset 165000px.png" alt="2italy" className="brand-logo-img" />
        </div>
        <p className="brand-tagline-text">Admission · Careers · Visas · Relocation</p>
      </section>

      <section className="scrub-section">
        <div className="scrub-inner">
          <p>We exist to make Italy accessible. Whether you are applying to a top university, launching your career, or starting your life abroad — we remove the complexity so you can move with total confidence.</p>
        </div>
      </section>

      <section className="section-block" id="services">
        <span className="section-eyebrow">What We Do</span>
        <h2 className="section-title">One partner. Every step.</h2>
        <p className="section-sub">From your first idea to your first day in Italy, we handle the complexity so you do not have to.</p>
        <div className="services-grid">
          <article className="service-card">
            <span className="service-num">01</span>
            <h3 className="service-title">University Admission</h3>
            <p className="service-tagline">From idea to enrollment</p>
            <p className="service-desc">We manage your applications, documents, deadlines, and interviews with the strongest possible strategy.</p>
          </article>
          <article className="service-card">
            <span className="service-num">02</span>
            <h3 className="service-title">Career Placement</h3>
            <p className="service-tagline">From ambition to employment</p>
            <p className="service-desc">We connect you with job opportunities, coach your profile, and prepare you for the local Italian market.</p>
          </article>
          <article className="service-card">
            <span className="service-num">03</span>
            <h3 className="service-title">Visa &amp; Permits</h3>
            <p className="service-tagline">From application to approval</p>
            <p className="service-desc">We help you choose the right visa type, prepare documents, and navigate embassy requirements.</p>
          </article>
          <article className="service-card">
            <span className="service-num">04</span>
            <h3 className="service-title">Relocation</h3>
            <p className="service-tagline">From landing to settled</p>
            <p className="service-desc">We support your move, housing, banking, residency, and local life so you can arrive ready.</p>
          </article>
        </div>
      </section>

      <section className="section-block" id="trust">
        <span className="section-eyebrow">Proven Results</span>
        <h2 className="section-title">Numbers that speak.</h2>
        <div className="trust-grid">
          <div className="trust-stat">
            <span className="num">1000+</span>
            <span className="label">Students Guided</span>
          </div>
          <div className="trust-stat">
            <span className="num">15+</span>
            <span className="label">Partner Universities</span>
          </div>
          <div className="trust-stat">
            <span className="num">3.5</span>
            <span className="label">Years Experience</span>
          </div>
          <div className="trust-stat">
            <span className="num">84%</span>
            <span className="label">Visa Success Rate</span>
          </div>
        </div>
        {/* COPY: Mid-page CTA after proof — catches visitors convinced by numbers */}
        <div className="section-cta-center">
          <Link href="/consultation" className="btn-primary">Book My Free Italy Consultation →</Link>
        </div>
      </section>

      <section className="mission-section" id="mission">
        <div className="mission-inner">
          <div>
            <h2 className="section-title">Stop playing catch up. Enjoy peace of mind.</h2>
            <p className="section-sub">Moving to Italy is overwhelming when you go it alone. We unify every layer so you move through the process without friction.</p>
            <Link href="/consultation" className="btn-primary">Start your journey</Link>
          </div>
          <div className="comparison-grid">
            <div className="cmp-header">Going alone</div>
            <div className="cmp-header">With 2italy</div>
            <div className="cmp-row"><span className="cmp-bad">Scattered information</span><span className="cmp-good">One clear roadmap</span></div>
            <div className="cmp-row"><span className="cmp-bad">Missed deadlines</span><span className="cmp-good">Proactive reminders</span></div>
            <div className="cmp-row"><span className="cmp-bad">Visa rejections</span><span className="cmp-good">Expert-reviewed files</span></div>
            <div className="cmp-row"><span className="cmp-bad">No local network</span><span className="cmp-good">Warm introductions</span></div>
            <div className="cmp-row"><span className="cmp-bad">Guessing the market</span><span className="cmp-good">Insider knowledge</span></div>
          </div>
        </div>
      </section>

      <section className="how-section" id="how">
        <span className="section-eyebrow">Our Process</span>
        <h2 className="section-title">Four steps. Total clarity.</h2>
        <p className="section-sub">From your first call to your first day in Italy — every detail is handled.</p>
        <div className="steps-timeline">
          <div className="step"><div className="step-num">01</div><div><h3>Free Consultation</h3><p>We start by understanding your goals, timeline, and background.</p></div></div>
          <div className="step"><div className="step-num">02</div><div><h3>Custom Roadmap</h3><p>We build a personalised plan covering applications, visas, housing, and career.</p></div></div>
          <div className="step"><div className="step-num">03</div><div><h3>Guided Execution</h3><p>We work alongside you through every task, from documents to appointments.</p></div></div>
          <div className="step"><div className="step-num">04</div><div><h3>Settled in Italy</h3><p>You arrive prepared, connected, and ready to live your Italian life.</p></div></div>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <span className="section-eyebrow">Student Stories</span>
        <h2 className="section-title">Real people. Real moves.</h2>
        <div className="testi-grid">
          <article className="testi-card"><div className="testi-stars">★★★★★</div><p>"I had no idea where to start with the Italian university application process. 2italy mapped everything out and I got accepted to my first-choice program in Milan."</p><p className="testi-author"><strong>Sara K.</strong> • MSc Student, Politecnico di Milano</p></article>
          <article className="testi-card"><div className="testi-stars">★★★★★</div><p>"The visa process felt impossible until 2italy took it over. Zero stress, zero mistakes. I had my permit in hand before I even landed."</p><p className="testi-author"><strong>James T.</strong> • Software Engineer, Rome</p></article>
          <article className="testi-card"><div className="testi-stars">★★★★★</div><p>"From job applications to finding my apartment in Florence, they handled everything. I just showed up and started living my Italian life."</p><p className="testi-author"><strong>Amara B.</strong> • UX Designer, Florence</p></article>
        </div>
      </section>

      {/* COPY: FAQ / Objection-handling section — removes top 4 fears before final CTA */}
      <section className="section-block" id="faq">
        <span className="section-eyebrow">Common Questions</span>
        <h2 className="section-title">Is this right for me?</h2>
        <div className="faq-grid">
          <div className="faq-item">
            {/* COPY: Objection 1 — cost */}
            <h3 className="faq-q">How much does it cost?</h3>
            <p className="faq-a">The consultation is completely free. Our paid packages are structured by service — so you only pay for what you actually need. We discuss pricing openly on the call with no pressure.</p>
          </div>
          <div className="faq-item">
            {/* COPY: Objection 2 — eligibility / grades */}
            <h3 className="faq-q">What if my grades are not perfect?</h3>
            <p className="faq-a">Italy's public universities accept students with a wide range of academic backgrounds. We match you to programs where your profile is genuinely competitive — not ones where you will struggle to get in.</p>
          </div>
          <div className="faq-item">
            {/* COPY: Objection 3 — language barrier */}
            <h3 className="faq-q">Do I need to speak Italian?</h3>
            <p className="faq-a">Many top Italian universities offer full degree programs taught entirely in English. We identify those programs for you and guide you through any Italian language requirements if they apply to your chosen course.</p>
          </div>
          <div className="faq-item">
            {/* COPY: Objection 4 — complexity / overwhelm */}
            <h3 className="faq-q">The process looks overwhelming — can you really handle it all?</h3>
            <p className="faq-a">Yes — that is exactly why we exist. We have guided 1,000+ students through this. You tell us your goal; we build the roadmap, track the deadlines, and walk you through every document and appointment.</p>
          </div>
        </div>
      </section>

      <section className="cta-final">
        {/* COPY: Final CTA headline */}
        <h2 className="section-title">Your Italian chapter starts with one call.</h2>
        <p className="section-sub">Book a free 30-minute consultation and get a clear picture of your path to Italy — no obligation, no pressure.</p>
        {/* COPY: Benefit-driven final CTA button */}
        <Link href="/consultation" className="btn-primary">Book My Free Italy Consultation →</Link>
      </section>

      <Footer />
    </main>
  );
}
