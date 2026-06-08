import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Tutorial() {
  return (
    <main>
      <Navigation />
      <section className="hero">
        <span className="page-hero-eyebrow">Tutorial</span>
        <h1>Subscriber-only tutorial</h1>
        <p>This is the beginning of a protected course experience for subscribers. Later we will add access control so only enrolled users can view the content.</p>
      </section>

      <section className="section-block">
        <h2>Course content coming soon</h2>
        <p>Use this page as the template for future lessons and tutorials instead of creating a new HTML file each time.</p>
      </section>

      <Footer />
    </main>
  );
}
