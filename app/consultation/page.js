import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Consultation() {
  return (
    <main>
      <Navigation />

      <section className="page-hero">
        <span className="page-hero-eyebrow">Free consultation · 30 minutes</span>
        <h1 className="hero-headline">Start your Italy move with a clear plan.</h1>
        <p className="hero-sub">Tell us about your background and goals so we can map your best study or career path.</p>
        <div className="hero-meta">No obligation · Customized guidance · 100% online booking</div>
      </section>

      <section className="section-block consultation-form">
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
              <label>Country</label>
              <input type="text" placeholder="Country" />
            </div>
            <div className="form-group">
              <label>WhatsApp</label>
              <input type="tel" placeholder="+966 ..." />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Program</label>
              <input type="text" placeholder="Desired program" />
            </div>
            <div className="form-group">
              <label>Academic level</label>
              <select>
                <option>Foundation Year</option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>PhD</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary">Check my eligibility</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
