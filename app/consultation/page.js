import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Consultation() {
  return (
    <main>
      <Navigation />
      <section className="hero">
        <span className="page-hero-eyebrow">Consultation</span>
        <h1>Book your free consultation</h1>
        <p>Talk with our team to clarify your study plan, visa requirements, and next steps for Italy.</p>
      </section>

      <section className="section-block">
        <p>If you already have a request form in the old site, we can connect it here later. For now, this page is ready to turn into a working contact form.</p>
      </section>

      <Footer />
    </main>
  );
}
