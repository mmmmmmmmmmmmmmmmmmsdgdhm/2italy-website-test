import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Consultation() {
  return (
    <main>
      <Navigation />

      <section className="page-hero">
        <span className="page-hero-eyebrow">Free consultation · 30 minutes</span>
        {/* COPY: Outcome-focused headline — what they walk away with */}
        <h1 className="hero-headline">Get your personal Italy roadmap — free.</h1>
        {/* COPY: Sub that pre-sells the call outcome, removes sales-pitch fear */}
        <p className="hero-sub">Tell us your goal and we will map the fastest, clearest path to Italy — university, career, or relocation. No obligation. No sales pitch.</p>
        <div className="hero-meta">Free 30-min call · No commitment · We reply within 24 hours</div>
      </section>

      {/* COPY: Mini testimonials near the form — social proof before asking for commitment */}
      <div className="mini-testi-row">
        <div className="mini-testi">
          <div className="testi-stars">★★★★★</div>
          {/* COPY: Testimonial 1 — sets expectation that it is a real planning session */}
          <p>&ldquo;The consultation was eye-opening. In 30 minutes I had a clearer picture of my options than after weeks of research on my own.&rdquo;</p>
          <span className="testi-author"><strong>Layla M.</strong> · Bachelor applicant, Milan</span>
        </div>
        <div className="mini-testi">
          <div className="testi-stars">★★★★★</div>
          {/* COPY: Testimonial 2 — overcomes "it's just a sales call" objection */}
          <p>&ldquo;I expected a sales call. Instead I got a real plan. They told me exactly what documents I needed and which universities matched my profile.&rdquo;</p>
          <span className="testi-author"><strong>Omar S.</strong> · Master&apos;s student, Bologna</span>
        </div>
      </div>

      <section className="section-block consultation-form">
        <span className="section-eyebrow">Book your free call</span>
        <h2 className="section-title">It takes under 2 minutes to book.</h2>
        {/* COPY: Sets expectation — no docs needed yet */}
        <p className="section-sub">Fill in the form and we will review your details and confirm your session within 24 hours.</p>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="hello@example.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>WhatsApp</label>
              <input type="tel" placeholder="+966 ..." />
            </div>
            <div className="form-group">
              <label>Your main goal</label>
              {/* COPY: Replaces Country + Program — reduces fields from 6 to 4 */}
              <select defaultValue="">
                <option value="" disabled>Select your goal</option>
                <option value="university">Study at an Italian university</option>
                <option value="career">Work or launch a career in Italy</option>
                <option value="relocate">Relocate to Italy</option>
                <option value="visa">Visa or permit help</option>
                <option value="other">Something else</option>
              </select>
            </div>
          </div>
          {/* COPY: Positive framing — no "eligibility check" rejection anxiety */}
          <button type="submit" className="btn-primary">Book My Free 30-Min Call →</button>
          {/* COPY: Micro-trust directly under button */}
          <p className="form-trust">Free · No commitment · We reply within 24 hours</p>
        </form>
      </section>

      {/* COPY: "What happens next" flow — eliminates post-submit uncertainty */}
      <section className="section-block">
        <span className="section-eyebrow">What happens next</span>
        <h2 className="section-title">Three steps to your Italy plan.</h2>
        <div className="steps-timeline">
          <div className="step">
            <div className="step-num">01</div>
            <div>
              {/* COPY */}
              <h3>You submit the form</h3>
              <p>Takes under 2 minutes. No documents or transcripts needed at this stage.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div>
              {/* COPY */}
              <h3>We review your details</h3>
              <p>A senior consultant reviews your goals and prepares your session. We confirm your slot within 24 hours.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div>
              {/* COPY */}
              <h3>You get your roadmap</h3>
              <p>On the call we walk through your best universities, visa path, timeline, and costs — specific to your situation.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
