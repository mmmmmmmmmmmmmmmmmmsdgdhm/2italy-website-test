import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="section-block">
        <h2>Need help with your Italy plan?</h2>
        <p>Contact us for free guidance on universities, visas, and study abroad preparation.</p>
        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/consultation" className="cta-button">Book a consultation</Link>
        </div>
      </div>
      <div style={{ paddingTop: '2rem', color: '#4a7a72', fontSize: '0.95rem' }}>
        <p>© 2026 2italy. All rights reserved.</p>
      </div>
    </footer>
  );
}
