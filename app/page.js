import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import JourneyTimeline from './components/JourneyTimeline';

export default function Home() {
  return (
    <main>
      <Navigation />

      {/* ── CHAPTER 0 — HOOK ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow">Overwhelmed by Italian university applications?</span>
          <h1 className="hero-headline">
            <span className="line">Get Into an Italian</span>
            <span className="line"><span className="grad">University</span></span>
            <span className="line">Without the Guesswork.</span>
          </h1>
          <p className="hero-sub">
            We handle every step — application, visa, housing, and relocation — so you can focus on your future in Italy.
          </p>

          <div className="trust-badges">
            <div className="trust-badge">
              <span className="badge-num">1,000+</span>
              <span className="badge-label">Students Placed</span>
            </div>
            <div className="trust-badge">
              <span className="badge-num">84%</span>
              <span className="badge-label">Visa Approval Rate</span>
            </div>
            <div className="trust-badge">
              <span className="badge-num">63+</span>
              <span className="badge-label">Partner Universities</span>
            </div>
          </div>

          <div className="hero-cta-row">
            <Link href="/consultation" className="btn-primary">Book My Free Italy Consultation →</Link>
            <a href="#transform" className="btn-ghost">See the journey</a>
          </div>

          <div className="trust-bar">
            <span>✓ Free 30-min call</span>
            <span>✓ No obligation</span>
            <span>✓ Reply within 24 hours</span>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src="/hero-student.jpg" alt="Student in Rome, Italy" className="hero-img" />
        </div>
      </section>

      {/* ── MANIFESTO ────────────────────────────────────────── */}
      <section className="scrub-section">
        <div className="scrub-inner">
          <p>We exist to make Italy accessible. Whether you are applying to a top university, launching your career, or starting your life abroad — we remove the complexity so you can move with total confidence.</p>
        </div>
      </section>

      <div className="section-gap" />

      {/* ── CHAPTER 1 — YOUR TRANSFORMATION ─────────────────── */}
      <section className="transform-section" id="transform">

        <div className="transform-phase phase-pain">
          <span className="phase-label">01 — Where you are now</span>
          <h2 className="transform-headline pain-text">
            Lost.<br />Overwhelmed.<br />Scattered.
          </h2>
          <div className="avatar-slot" aria-hidden="true" />
          <ul className="phase-points">
            <li>Scattered information, no clear path</li>
            <li>Missed deadlines, wrong documents</li>
            <li>Visa rejections, no local network</li>
          </ul>
        </div>

        <div className="transform-bridge">
          <span className="bridge-eyebrow">Your Transformation</span>
          <p className="bridge-text">
            Most students spend months stuck. We cut through all of it — one partner, one clear path.
          </p>
          <Link href="/consultation" className="btn-primary">Start Your Journey →</Link>
        </div>

        <div className="transform-phase phase-vision">
          <span className="phase-label">02 — Where you will be</span>
          <h2 className="transform-headline vision-text">
            Settled.<br />Thriving.<br />In Italy.
          </h2>
          <div className="avatar-slot" aria-hidden="true" />
          <ul className="phase-points">
            <li>One clear roadmap, proactive support</li>
            <li>Expert-reviewed files, visa approved</li>
            <li>Warm introductions, insider knowledge</li>
          </ul>
        </div>

      </section>

      <div className="section-gap" />

      {/* ── JOURNEY TIMELINE ─────────────────────────────────── */}
      <JourneyTimeline />

      <div className="section-gap" />

      {/* ── CHAPTER 2 — WHAT WE DO ───────────────────────────── */}
      <section className="section-block" id="services">
        <span className="section-eyebrow">03 — What We Do</span>
        <h2 className="section-title">Everything you need. In one place.</h2>
        <p className="section-sub">Admission, visa, career, relocation — handled by one team so nothing falls through the cracks.</p>
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

      <div className="section-gap" />

      {/* ── CHAPTER 3 — OUR PROCESS ──────────────────────────── */}
      <section className="how-section" id="how">
        <span className="section-eyebrow">04 — How It Works</span>
        <h2 className="section-title">Your path to Italy, step by step.</h2>
        <p className="section-sub">One call is all it takes to start. We handle everything that comes after.</p>
        <div className="steps-timeline">
          <div className="step">
            <div className="step-num">01</div>
            <div>
              <h3>Free Consultation</h3>
              <p>We start by understanding your goals, timeline, and background.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div>
              <h3>Custom Roadmap</h3>
              <p>We build a personalised plan covering applications, visas, housing, and career.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div>
              <h3>Guided Execution</h3>
              <p>We work alongside you through every task, from documents to appointments.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <div>
              <h3>Settled in Italy</h3>
              <p>You arrive prepared, connected, and ready to live your Italian life.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-gap" />

      {/* ── CHAPTER 4 — STUDENT STORIES ──────────────────────── */}
      <section className="testimonials-section" id="testimonials">
        <span className="section-eyebrow">05 — Student Stories</span>
        <h2 className="section-title">Students who made the move.</h2>
        <div className="testi-grid">
          <article className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p>"I had no idea where to start with the Italian university application process. 2italy mapped everything out and I got accepted to my first-choice program in Milan."</p>
            <p className="testi-author"><strong>Sara K.</strong> • MSc Student, Politecnico di Milano</p>
          </article>
          <article className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p>"The visa process felt impossible until 2italy took it over. Zero stress, zero mistakes. I had my permit in hand before I even landed."</p>
            <p className="testi-author"><strong>James T.</strong> • Software Engineer, Rome</p>
          </article>
          <article className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p>"From job applications to finding my apartment in Florence, they handled everything. I just showed up and started living my Italian life."</p>
            <p className="testi-author"><strong>Amara B.</strong> • UX Designer, Florence</p>
          </article>
        </div>
      </section>

      <div className="section-gap" />

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="cta-final">
        <h2 className="section-title">Ready to begin your Italy journey?</h2>
        <p className="section-sub">Book a free 30-minute consultation. No obligation, no pressure — just a clear picture of what's possible for you.</p>
        <Link href="/consultation" className="btn-primary">Book My Free Italy Consultation →</Link>
      </section>

      <Footer />
    </main>
  );
}
