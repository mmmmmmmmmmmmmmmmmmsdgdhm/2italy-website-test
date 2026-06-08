import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Resources() {
  return (
    <main>
      <Navigation />
      <section className="hero">
        <span className="page-hero-eyebrow">Free content</span>
        <h1>Resources for your Italy journey</h1>
        <p>Browse videos, guides, and tips to understand application steps, visa rules, and life in Italy.</p>
      </section>

      <section className="section-block">
        <div className="grid-cards">
          <article className="card">
            <h2>Study abroad tips</h2>
            <p>Essential advice about choosing programs, deadlines, and application strategy.</p>
          </article>
          <article className="card">
            <h2>Visa preparation</h2>
            <p>Learn the documents and timelines you need to succeed with your student visa.</p>
          </article>
          <article className="card">
            <h2>Life in Italy</h2>
            <p>Discover housing, transport, and daily living expectations for new students.</p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
