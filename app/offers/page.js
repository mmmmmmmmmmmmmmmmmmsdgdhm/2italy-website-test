import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Offers — 2italy',
  description: 'Three packages to get you to Italy — from admission essentials to full relocation. Book a free call to get started.',
};

const tiers = [
  {
    tier: 'Tier 1',
    name: 'Admission Essentials',
    price: 'from €1,000',
    desc: 'Everything you need to secure your university place in Italy.',
    popular: false,
    features: [
      { label: 'Admission support & document prep', included: true },
      { label: 'University shortlisting & application', included: true },
      { label: 'Offer letter management', included: true },
      { label: 'Tutorial access', included: false },
      { label: 'Visa booking & prep', included: false },
      { label: 'Hotel & insurance setup', included: false },
      { label: 'Scholarship guidance', included: false },
      { label: 'Italy permit & bank account', included: false },
      { label: 'Flight booking', included: false },
      { label: 'Airport pickup & city transport', included: false },
    ],
  },
  {
    tier: 'Tier 2',
    name: 'Visa Ready',
    price: 'from €2,000',
    desc: 'Full admission support plus everything needed to land your visa.',
    popular: true,
    features: [
      { label: 'Admission support & document prep', included: true },
      { label: 'Tutorial access', included: true },
      { label: 'Visa booking & prep', included: true },
      { label: 'Hotel & insurance setup', included: true },
      { label: 'Scholarship guidance', included: true },
      { label: 'Italy permit & bank account', included: true },
      { label: 'Flight booking', included: false },
      { label: 'Airport pickup & city transport', included: false },
    ],
  },
  {
    tier: 'Tier 3',
    name: 'Full Relocation',
    price: 'from €3,000',
    desc: 'The complete end-to-end journey — from application to arrival day.',
    popular: false,
    features: [
      { label: 'Admission support & document prep', included: true },
      { label: 'Tutorial access', included: true },
      { label: 'Visa booking & prep', included: true },
      { label: 'Hotel & insurance setup', included: true },
      { label: 'Scholarship guidance', included: true },
      { label: 'Italy permit & bank account', included: true },
      { label: 'Flight booking', included: true },
      { label: 'Airport pickup & city transport', included: true },
    ],
  },
];

export default function Offers() {
  return (
    <main>
      <Navigation />

      {/* HERO */}
      <section className="page-hero offers-hero">
        <span className="page-hero-eyebrow">Our Packages</span>
        <h1 className="hero-headline">
          Choose Your Path to <span className="grad">Italy</span>
        </h1>
        <p className="hero-sub">
          Three packages. One goal &mdash; getting you there.
        </p>
      </section>

      {/* PRICING GRID */}
      <section className="pricing-section">
        <div className="pricing-grid">
          {tiers.map((t) => (
            <div key={t.name} className={`tier-card${t.popular ? ' tier-popular' : ''}`}>
              {t.popular && <div className="popular-badge">Most Popular</div>}
              <p className="tier-label">{t.tier}</p>
              <h2 className="tier-name">{t.name}</h2>
              <p className="tier-price">{t.price}</p>
              <p className="tier-desc">{t.desc}</p>
              <div className="tier-divider" />
              <ul className="tier-features">
                {t.features.map((f) => (
                  <li key={f.label} className={f.included ? '' : 'feat-off'}>
                    {f.included
                      ? <span className="feat-check">✓</span>
                      : <span className="feat-dash">—</span>
                    }
                    {f.label}
                  </li>
                ))}
              </ul>
              <Link href="/consultation" className={`tier-btn${t.popular ? ' tier-btn-popular' : ''}`}>
                Book a Free Call
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip-section">
        <div className="trust-strip">
          <span className="trust-item">1,000+ students placed</span>
          <span className="trust-dot" aria-hidden="true" />
          <span className="trust-item">84% visa approval</span>
          <span className="trust-dot" aria-hidden="true" />
          <span className="trust-item">63+ partner universities</span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
