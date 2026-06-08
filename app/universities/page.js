import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Universities() {
  return (
    <main>
      <Navigation />
      <section className="hero">
        <span className="page-hero-eyebrow">Universities</span>
        <h1>Italian university guidance</h1>
        <p>Find the best Italian universities for your field, whether it is engineering, business, design, or language studies.</p>
      </section>

      <section className="section-block">
        <div className="grid-cards">
          <article className="card">
            <h2>Politecnico di Milano</h2>
            <p>Top choice for engineering, architecture, and design programs.</p>
          </article>
          <article className="card">
            <h2>Bocconi University</h2>
            <p>Best for business, economics, and international management.</p>
          </article>
          <article className="card">
            <h2>University of Bologna</h2>
            <p>One of Europe’s oldest universities with strong humanities and sciences.</p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
