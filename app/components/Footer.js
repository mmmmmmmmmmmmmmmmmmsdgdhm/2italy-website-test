import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="section-block footer-block">
        <h2>Need help with your Italy plan?</h2>
        {/* COPY: Updated sub with clearer value prop */}
        <p>Book a free 30-minute consultation. No obligation — just a clear plan for your move to Italy.</p>
        <div className="footer-cta">
          {/* COPY: Benefit-driven button label */}
          <Link href="/consultation" className="btn-primary cta-button">Book My Free Italy Consultation →</Link>
          {/* COPY: Micro-trust line under footer CTA */}
          <p className="footer-trust">Free · No commitment · 1,000+ students helped</p>
        </div>
      </div>
      <div className="footer-meta">
        <p>© 2026 2italy. All rights reserved.</p>
      </div>
    </footer>
  );
}
