import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// COPY: 17 episodes mapped from the course roadmap
const episodes = [
  { ep: '01', title: 'The Pre-Admission',        desc: 'Understand what Italy requires before you apply — programs, eligibility, and strategic positioning.',      phase: 1 },
  { ep: '02', title: 'Pre-Enrollment',            desc: 'Navigate the UNIVERSITALY portal step by step and lock in your place before the deadline.',               phase: 1 },
  { ep: '03', title: 'DOV',                       desc: 'Get your Dichiarazione di Valore right. We walk through every document and common rejection reasons.',     phase: 1 },
  { ep: '04', title: 'ISEE',                      desc: 'The financial declaration that determines your tuition fees and scholarship eligibility. Do it correctly.', phase: 1 },
  { ep: '05', title: 'Scholarship MEGI',          desc: 'How to apply for the MEGI merit scholarship — eligibility criteria, documents, and submission strategy.',  phase: 1 },
  { ep: '06', title: 'Visa Checklist Preparation',desc: 'Every document you need for the Italian student visa, in the exact order the consulate expects them.',     phase: 2 },
  { ep: '07', title: 'Appointment Booking',       desc: 'How to book your consulate appointment — timing, slots, and what to do if no slots are available.',        phase: 2 },
  { ep: '08', title: 'Car Transportation to Lebanon', desc: 'Step-by-step logistics for getting to the Beirut consulate for your visa submission.',                 phase: 2 },
  { ep: '09', title: 'TLS Official Submission',   desc: 'What to expect at the TLS Contact center — documents to carry, process walkthrough, and common mistakes.', phase: 2 },
  { ep: '10', title: 'Waiting & Flight Booking',  desc: 'What to do while waiting for your visa — flight booking timing, accommodation deposit, and checklists.',   phase: 3 },
  { ep: '11', title: 'Arriving & Accommodation',  desc: 'Your first 72 hours in Italy — where to go, what to register, and how to settle in fast.',                 phase: 3 },
  { ep: '12', title: 'Permit & Scholarship Submission', desc: 'Apply for your residence permit and submit your scholarship confirmation without mistakes.',         phase: 3 },
  { ep: '13', title: 'Transportation Card',       desc: 'Get your student transport card and navigate Italian cities like a local from day one.',                    phase: 3 },
  { ep: '14', title: 'Searching for a Job',       desc: 'How to find work as a student in Italy — platforms, CVs, interviews, and your legal work hours.',          phase: 4 },
  { ep: '15', title: 'Job Visa Transition',       desc: 'Convert your student visa to a work permit after graduation — timeline, requirements, and pitfalls.',      phase: 4 },
  { ep: '16', title: 'Marriage in Italy',         desc: 'Everything a foreign student needs to know about getting married in Italy — legally and practically.',      phase: 4 },
  { ep: '17', title: 'Things to Be Aware Of',     desc: 'Insider tips, cultural realities, and the warnings no official guide will ever tell you.',                 phase: 4 },
];

const phases = [
  { num: 1, label: 'Before You Apply',   color: '#26b6ba' },
  { num: 2, label: 'The Application',    color: '#158f3e' },
  { num: 3, label: 'Getting to Italy',   color: '#f19762' },
  { num: 4, label: 'Life in Italy',      color: '#0d3a36' },
];

// Cycle through thumbnail gradients for visual variety
const thumbGrads = [
  'linear-gradient(135deg, #0d3a36 0%, #26b6ba 100%)',
  'linear-gradient(135deg, #158f3e 0%, #26b6ba 100%)',
  'linear-gradient(135deg, #0d3a36 0%, #f19762 100%)',
  'linear-gradient(135deg, #26b6ba 0%, #158f3e 100%)',
  'linear-gradient(135deg, #f19762 0%, #0d3a36 100%)',
  'linear-gradient(135deg, #0d3a36 0%, #158f3e 100%)',
];

export default function Tutorial() {
  return (
    <main>
      <Navigation />

      {/* ── Dark hero — high contrast vs the rest of the page ── */}
      <section className="tut-hero">
        <div className="tut-hero-inner">
          <div className="tut-hero-left">
            {/* COPY */}
            <span className="tut-eyebrow">Members Only · 17 Video Lessons</span>
            <h1 className="tut-headline">
              The complete roadmap<br />
              <span className="tut-headline-accent">from application to Italy.</span>
            </h1>
            {/* COPY */}
            <p className="tut-sub">Every step of the journey — pre-admission, visa, arrival, and life in Italy — broken into short, actionable video lessons. No fluff. No guesswork.</p>
            <div className="tut-hero-cta">
              <Link href="/consultation" className="btn-primary">Get Access — Book a Free Call →</Link>
              <span className="tut-hero-note">Access included with consultation package</span>
            </div>
          </div>
          <div className="tut-hero-stats">
            <div className="tut-stat">
              <span className="tut-stat-num">17</span>
              <span className="tut-stat-label">Video Lessons</span>
            </div>
            <div className="tut-stat">
              <span className="tut-stat-num">4</span>
              <span className="tut-stat-label">Phases</span>
            </div>
            <div className="tut-stat">
              <span className="tut-stat-num">A–Z</span>
              <span className="tut-stat-label">Complete Journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Phase legend ── */}
      <div className="tut-phases">
        {phases.map((p) => (
          <div key={p.num} className="tut-phase-tag" style={{ borderColor: p.color, color: p.color }}>
            <span className="tut-phase-dot" style={{ background: p.color }} />
            Phase {p.num} — {p.label}
          </div>
        ))}
      </div>

      {/* ── Locked video grid ── */}
      <div className="tut-grid">
        {episodes.map((ep, i) => {
          const phase = phases.find((p) => p.num === ep.phase);
          return (
            <article key={ep.ep} className="vid-card">
              {/* Thumbnail */}
              <div className="vid-thumb" style={{ background: thumbGrads[i % thumbGrads.length] }}>
                <span className="vid-ep-badge">EP {ep.ep}</span>
                {/* Lock overlay */}
                <div className="vid-lock-overlay">
                  <div className="vid-lock-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M12 2C9.24 2 7 4.24 7 7v1H5v14h14V8h-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v1H9V7c0-1.66 1.34-3 3-3zm0 9a2 2 0 110 4 2 2 0 010-4z"/>
                    </svg>
                  </div>
                  <span className="vid-lock-label">Members Only</span>
                </div>
                {/* Phase colour bar at bottom of thumb */}
                <div className="vid-phase-bar" style={{ background: phase.color }} />
              </div>
              {/* Info */}
              <div className="vid-info">
                <div className="vid-phase-tag" style={{ color: phase.color }}>
                  Phase {ep.phase} · {phase.label}
                </div>
                <h3 className="vid-title">{ep.title}</h3>
                <p className="vid-desc">{ep.desc}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Bottom CTA — dark strip ── */}
      <section className="tut-cta-strip">
        <div className="tut-cta-inner">
          <div>
            {/* COPY */}
            <h2 className="tut-cta-title">Ready to unlock all 17 lessons?</h2>
            <p className="tut-cta-sub">Access is included with our consultation package. Book a free call and we will walk you through everything.</p>
          </div>
          <Link href="/consultation" className="btn-primary tut-cta-btn">Book My Free Call → Get Access</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
