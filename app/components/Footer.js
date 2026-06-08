import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="section-block footer-block">
        <h2>Need help with your Italy plan?</h2>
        <p>Contact us for free guidance on universities, visas, and study abroad preparation.</p>
        <div className="footer-cta">
          <Link href="/consultation" className="btn-primary cta-button">Book a consultation</Link>
        </div>
      </div>
      <div className="footer-meta">
        <p>© 2026 2italy. All rights reserved.</p>
      </div>
    </footer>
  );
}
