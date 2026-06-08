import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <section className="hero">
        <span className="page-hero-eyebrow">Study in Italy</span>
        <h1>Your path to Italy, made simple.</h1>
        <p>2italy helps students and young professionals plan their study journey in Italy, from university selection to visa preparation.</p>
        <Link href="/consultation" className="cta-button">Book a free consultation</Link>
      </section>

      <section className="section-block">
        <h2 className="section-title">What we do</h2>
        <div className="grid-cards">
          <article className="card">
            <h2>University matching</h2>
            <p>We help you find the right Italian programs and submit a strong application.</p>
          </article>
          <article className="card">
            <h2>Visa support</h2>
            <p>Get step-by-step help with documents, interviews, and student visa requirements.</p>
          </article>
          <article className="card">
            <h2>Subscriber tutorials</h2>
            <p>Future-ready tutorials will guide you through each stage of your study plan.</p>
          </article>
          <article className="card">
            <h2>Personalized advice</h2>
            <p>Receive tailored recommendations based on your profile and goals.</p>
          </article>
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">How it works</h2>
        <p className="section-sub">Switching from separate HTML pages to this structure means new pages are now driven by reusable components and shared styles, making future updates faster and cleaner.</p>
      </section>

      <Footer />
    </main>
  );
}
