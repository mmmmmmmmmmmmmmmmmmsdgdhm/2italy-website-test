'use client';
import { useEffect, useRef, useState } from 'react';

const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

const phases = [
  {
    id: 1,
    name: 'Admission',
    period: 'Nov → Apr · 6 months',
    desc: 'Programs, documents, applications, acceptance.',
    left: '0%',
    width: '54.5%',
  },
  {
    id: 2,
    name: 'Scholarship',
    period: 'Mar → Jun · 4 months',
    desc: 'DSU application, ISEE, confirmation.',
    left: '36.4%',
    width: '36.4%',
  },
  {
    id: 3,
    name: 'Visa',
    period: 'Jun → Sep · 4 months',
    desc: 'Embassy, documents, visa issued, travel ready.',
    left: '63.6%',
    width: '36.4%',
  },
];

export default function JourneyTimeline() {
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
      <span className="section-eyebrow">The Full Timeline</span>
      <h2 className="section-title">Three phases. Ten months. One clear path.</h2>
      <p className="section-sub">
        From your first application to your visa in hand — here is how long each phase of the journey takes.
      </p>

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
                  left: ph.left,
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
          <span className="journey-total-label">Total duration</span>
          <span className="journey-total-value">~10 months · November → September</span>
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
