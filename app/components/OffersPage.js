import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';

// Feature order is shared; each tier lists how many of these it includes
const content = {
  en: {
    consultHref: '/consultation',
    eyebrow: 'Our Packages',
    headline: <>Choose Your Path to <span className="grad">Italy</span></>,
    sub: <>Three packages. One goal &mdash; getting you there.</>,
    popular: 'Most Popular',
    cta: 'Book a Free Call',
    trust: ['1,000+ students placed', '84% visa approval', '63+ partner universities'],
    tiers: [
      {
        tier: 'Tier 1', name: 'Admission Essentials', price: 'from €1,000',
        desc: 'Everything you need to secure your university place in Italy.',
        features: [
          ['Admission support & document prep', true], ['University shortlisting & application', true], ['Offer letter management', true],
          ['Tutorial access', false], ['Visa booking & prep', false], ['Hotel & insurance setup', false], ['Scholarship guidance', false],
          ['Italy permit & bank account', false], ['Flight booking', false], ['Airport pickup & city transport', false],
        ],
      },
      {
        tier: 'Tier 2', name: 'Visa Ready', price: 'from €2,000', popular: true,
        desc: 'Full admission support plus everything needed to land your visa.',
        features: [
          ['Admission support & document prep', true], ['Tutorial access', true], ['Visa booking & prep', true], ['Hotel & insurance setup', true],
          ['Scholarship guidance', true], ['Italy permit & bank account', true], ['Flight booking', false], ['Airport pickup & city transport', false],
        ],
      },
      {
        tier: 'Tier 3', name: 'Full Relocation', price: 'from €3,000',
        desc: 'The complete end-to-end journey — from application to arrival day.',
        features: [
          ['Admission support & document prep', true], ['Tutorial access', true], ['Visa booking & prep', true], ['Hotel & insurance setup', true],
          ['Scholarship guidance', true], ['Italy permit & bank account', true], ['Flight booking', true], ['Airport pickup & city transport', true],
        ],
      },
    ],
  },
  ar: {
    consultHref: '/ar/consultation',
    eyebrow: 'باقاتنا',
    headline: <>اختر طريقك إلى <span className="grad">إيطاليا</span></>,
    sub: <>ثلاث باقات. هدف واحد &mdash; أن تصل إلى هناك.</>,
    popular: 'الأكثر طلباً',
    cta: 'احجز مكالمة مجانية',
    trust: ['+1,000 طالب تم قبولهم', '84% نسبة قبول الفيزا', '+63 جامعة شريكة'],
    tiers: [
      {
        tier: 'الباقة 1', name: 'أساسيات القبول', price: 'تبدأ من €1,000',
        desc: 'كل ما تحتاجه لتضمن مقعدك في جامعة إيطالية.',
        features: [
          ['دعم القبول وتجهيز الأوراق', true], ['اختيار الجامعات والتقديم', true], ['متابعة خطاب القبول', true],
          ['الوصول إلى الدورة التعليمية', false], ['حجز موعد الفيزا والتحضير لها', false], ['ترتيب الفندق والتأمين', false], ['الإرشاد للحصول على المنحة', false],
          ['الإقامة الإيطالية والحساب البنكي', false], ['حجز الطيران', false], ['الاستقبال في المطار والتنقل في المدينة', false],
        ],
      },
      {
        tier: 'الباقة 2', name: 'جاهز للفيزا', price: 'تبدأ من €2,000', popular: true,
        desc: 'دعم كامل للقبول، بالإضافة إلى كل ما تحتاجه للحصول على الفيزا.',
        features: [
          ['دعم القبول وتجهيز الأوراق', true], ['الوصول إلى الدورة التعليمية', true], ['حجز موعد الفيزا والتحضير لها', true], ['ترتيب الفندق والتأمين', true],
          ['الإرشاد للحصول على المنحة', true], ['الإقامة الإيطالية والحساب البنكي', true], ['حجز الطيران', false], ['الاستقبال في المطار والتنقل في المدينة', false],
        ],
      },
      {
        tier: 'الباقة 3', name: 'الانتقال الكامل', price: 'تبدأ من €3,000',
        desc: 'الرحلة الكاملة من البداية إلى النهاية — من التقديم حتى يوم الوصول.',
        features: [
          ['دعم القبول وتجهيز الأوراق', true], ['الوصول إلى الدورة التعليمية', true], ['حجز موعد الفيزا والتحضير لها', true], ['ترتيب الفندق والتأمين', true],
          ['الإرشاد للحصول على المنحة', true], ['الإقامة الإيطالية والحساب البنكي', true], ['حجز الطيران', true], ['الاستقبال في المطار والتنقل في المدينة', true],
        ],
      },
    ],
  },
};

export default function OffersPage({ lang = 'en' }) {
  const t = content[lang];

  return (
    <main>
      <Navigation lang={lang} />

      {/* HERO */}
      <section className="page-hero offers-hero">
        <span className="page-hero-eyebrow">{t.eyebrow}</span>
        <h1 className="hero-headline">{t.headline}</h1>
        <p className="hero-sub">{t.sub}</p>
      </section>

      {/* PRICING GRID */}
      <section className="pricing-section">
        <div className="pricing-grid">
          {t.tiers.map((tier) => (
            <div key={tier.name} className={`tier-card${tier.popular ? ' tier-popular' : ''}`}>
              {tier.popular && <div className="popular-badge">{t.popular}</div>}
              <p className="tier-label">{tier.tier}</p>
              <h2 className="tier-name">{tier.name}</h2>
              <p className="tier-price">{tier.price}</p>
              <p className="tier-desc">{tier.desc}</p>
              <div className="tier-divider" />
              <ul className="tier-features">
                {tier.features.map(([label, included]) => (
                  <li key={label} className={included ? '' : 'feat-off'}>
                    {included
                      ? <span className="feat-check">✓</span>
                      : <span className="feat-dash">—</span>
                    }
                    {label}
                  </li>
                ))}
              </ul>
              <Link href={t.consultHref} className={`tier-btn${tier.popular ? ' tier-btn-popular' : ''}`}>
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip-section">
        <div className="trust-strip">
          {t.trust.map((item, i) => (
            <span key={item} style={{ display: 'contents' }}>
              {i > 0 && <span className="trust-dot" aria-hidden="true" />}
              <span className="trust-item">{item}</span>
            </span>
          ))}
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
