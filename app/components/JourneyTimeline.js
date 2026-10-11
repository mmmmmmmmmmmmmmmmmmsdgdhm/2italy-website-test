'use client';
import { useEffect, useRef, useState } from 'react';

const content = {
  en: {
    months: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    phases: [
      { id: 1, name: 'Admission', period: 'Nov → Apr · 6 months', desc: 'Programs, documents, applications, acceptance.', start: '0%', width: '54.5%' },
      { id: 2, name: 'Scholarship', period: 'Mar → Jun · 4 months', desc: 'DSU application, ISEE, confirmation.', start: '36.4%', width: '36.4%' },
      { id: 3, name: 'Visa', period: 'Jun → Sep · 4 months', desc: 'Embassy, documents, visa issued, travel ready.', start: '63.6%', width: '36.4%' },
    ],
    eyebrow: 'The Full Timeline',
    title: 'Three phases. Ten months. One clear path.',
    sub: 'From your first application to your visa in hand — here is how long each phase of the journey takes.',
    totalLabel: 'Total duration',
    totalValue: '~10 months · November → September',
  },
  ar: {
    months: ['نوف', 'ديس', 'ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت'],
    phases: [
      { id: 1, name: 'القبول', period: 'نوفمبر ← أبريل · 6 أشهر', desc: 'البرامج، الأوراق، التقديم، القبول.', start: '0%', width: '54.5%' },
      { id: 2, name: 'المنحة', period: 'مارس ← يونيو · 4 أشهر', desc: 'طلب DSU، ISEE، التأكيد.', start: '36.4%', width: '36.4%' },
      { id: 3, name: 'الفيزا', period: 'يونيو ← سبتمبر · 4 أشهر', desc: 'السفارة، الأوراق، صدور الفيزا، الاستعداد للسفر.', start: '63.6%', width: '36.4%' },
    ],
    eyebrow: 'الجدول الزمني الكامل',
    title: 'ثلاث مراحل. عشرة أشهر. طريق واحد واضح.',
    sub: 'من أول طلب تقديم حتى استلام الفيزا — هذه المدة التي تستغرقها كل مرحلة من الرحلة.',
    totalLabel: 'المدة الإجمالية',
    totalValue: 'حوالي 10 أشهر · من نوفمبر إلى سبتمبر',
  },
};

export default function JourneyTimeline({ lang = 'en' }) {
  const { months, phases, ...t } = content[lang];
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`section-block journey-section${visible ? ' journey-visible' : ''}`}>
      <span className="section-eyebrow">{t.eyebrow}</span>
      <h2 className="section-title">{t.title}</h2>
      <p className="section-sub">{t.sub}</p>

      {/* ── Desktop duration timeline ── */}
      <div className="journey-wrap">
        <div className="journey-ruler">
          <div className="journey-label-spacer" />
          <div className="journey-months">
            {months.map((m, i) => (
              <span
                key={m}
                className="journey-month"
                style={{ transitionDelay: visible ? `${i * 0.05}s` : '0s' }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {phases.map((ph, i) => (
          <div key={ph.id} className="journey-row" style={{ transitionDelay: visible ? `${i * 0.2}s` : '0s' }}>
            <div className="journey-row-label">
              <strong>{ph.name}</strong>
              <span className="journey-duration">{ph.period}</span>
            </div>
            <div className="journey-track">
              <div
                className={`journey-bar bar-phase-${ph.id}`}
                style={{
                  insetInlineStart: ph.start,
                  width: visible ? ph.width : '0%',
                  transitionDelay: visible ? `${i * 0.2 + 0.15}s` : '0s',
                }}
              >
                <span style={{ transitionDelay: visible ? `${i * 0.2 + 0.5}s` : '0s' }}>{ph.desc}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="journey-total">
          <span className="journey-total-label">{t.totalLabel}</span>
          <span className="journey-total-value">{t.totalValue}</span>
        </div>
      </div>

      {/* ── Mobile stacked ── */}
      <div className="journey-mobile">
        {phases.map((ph, i) => (
          <div key={ph.id} className="journey-mob-row" style={{ transitionDelay: visible ? `${i * 0.15}s` : '0s' }}>
            <div className={`journey-mob-dot bar-phase-${ph.id}`}>{ph.id}</div>
            <div className="journey-mob-body">
              <strong>{ph.name}</strong>
              <span className="journey-duration">{ph.period}</span>
              <p>{ph.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
