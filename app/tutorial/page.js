import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Italy Study Tutorial — 31 Video Lessons from University Seat to Life in Italy',
  description: 'A step-by-step video course in 4 milestones: securing your university seat, collecting scholarships, getting your visa approved and completing your relocation — plus bonus lessons on life in Italy.',
  path: '/tutorial',
});

// COPY: the course roadmap, in viewing order. Lessons are numbered continuously across milestones.
const milestones = [
  {
    label: 'University Seat Secured', badge: '1', color: '#26b6ba', videos: [
      'Pre-admission: what Italy requires', 'Course search: choosing programs', 'Entry tests', 'University interviews',
      'University applications', 'DOV (Dichiarazione di Valore)', 'Pre-enrollment on Universitaly',
    ],
  },
  {
    label: 'Scholarships Collected', badge: '2', color: '#158f3e', videos: [
      'ISEE & CAF: getting your ISEE done', 'Scholarships: all 4 (MEGI + 3 others)',
    ],
  },
  {
    label: 'Visa Approved', badge: '3', color: '#f19762', videos: [
      'Visa checklist preparation', 'Financial guarantee (bank proof)', 'Appointment booking', 'Transportation to Lebanon',
      'TLS official submission', 'Waiting & flight booking',
    ],
  },
  {
    label: 'Relocation Complete', badge: '4', color: '#0d3a36', videos: [
      'First-month checklist', 'Arrival & staying connected (SIM)', 'Arriving & accommodation', 'Tax code (Codice Fiscale)',
      'University enrollment', 'Residence permit', 'Scholarship confirmation submission', 'Banking',
      'ISEE & student benefits in Italy', 'Residency, ID & health card', 'Digital IDs: SPID & PEC', 'Transportation card',
    ],
  },
  {
    label: 'Bonus: Life in Italy', badge: '★', color: '#c9962b', videos: [
      'Searching for a job', 'Job visa transition', 'Marriage in Italy', 'Settling in & staying safe',
    ],
  },
];

const totalVideos = milestones.reduce((sum, m) => sum + m.videos.length, 0);

const LockIcon = () => (
  <svg className="rm-lock" viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-label="Members only">
    <path d="M12 2C9.24 2 7 4.24 7 7v1H5v14h14V8h-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v1H9V7c0-1.66 1.34-3 3-3zm0 9a2 2 0 110 4 2 2 0 010-4z"/>
  </svg>
);

export default function Tutorial() {
  let lessonNum = 0;

  return (
    <main>
      <Navigation />

      {/* ── Dark hero — high contrast vs the rest of the page ── */}
      <section className="tut-hero">
        <div className="tut-hero-inner">
          <div className="tut-hero-left">
            {/* COPY */}
            <span className="tut-eyebrow">Members Only · {totalVideos} Video Lessons</span>
            <h1 className="tut-headline">
              The complete roadmap<br />
              <span className="tut-headline-accent">from application to Italy.</span>
            </h1>
            {/* COPY */}
            <p className="tut-sub">Every step of the journey — university seat, scholarships, visa, relocation and life in Italy — broken into short, actionable video lessons. No fluff. No guesswork.</p>
            <div className="tut-hero-cta">
              <Link href="/consultation" className="btn-primary">Get Access — Book a Free Call →</Link>
              <span className="tut-hero-note">Access included with consultation package</span>
            </div>
          </div>
          <div className="tut-hero-stats">
            <div className="tut-stat">
              <span className="tut-stat-num">{totalVideos}</span>
              <span className="tut-stat-label">Video Lessons</span>
            </div>
            <div className="tut-stat">
              <span className="tut-stat-num">4</span>
              <span className="tut-stat-label">Milestones + Bonus</span>
            </div>
            <div className="tut-stat">
              <span className="tut-stat-num">A–Z</span>
              <span className="tut-stat-label">Complete Journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Roadmap: one milestone per row, open one to see its lessons ── */}
      <section className="roadmap">
        <div className="roadmap-intro">
          <h2 className="roadmap-title">Your journey, milestone by milestone</h2>
          <p className="roadmap-sub">Open a milestone to see its lessons.</p>
        </div>

        <div className="roadmap-path">
          {milestones.map((m, i) => (
            <details key={m.label} className="rm-stage" open={i === 0} style={{ '--c': m.color }}>
              <summary className="rm-head">
                <span className="rm-dot" aria-hidden="true">{m.badge}</span>
                <span className="rm-head-text">
                  <span className="rm-title">{m.label}</span>
                  <span className="rm-meta">{m.videos.length} videos</span>
                </span>
                <span className="rm-chev" aria-hidden="true">▾</span>
              </summary>
              <ol className="rm-list">
                {m.videos.map((title) => {
                  lessonNum += 1;
                  return (
                    <li key={title} className="rm-video">
                      <span className="rm-num">{String(lessonNum).padStart(2, '0')}</span>
                      <span className="rm-video-title">{title}</span>
                      <LockIcon />
                    </li>
                  );
                })}
              </ol>
            </details>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA — dark strip ── */}
      <section className="tut-cta-strip">
        <div className="tut-cta-inner">
          <div>
            {/* COPY */}
            <h2 className="tut-cta-title">Ready to unlock all {totalVideos} lessons?</h2>
            <p className="tut-cta-sub">Access is included with our consultation package. Book a free call and we will walk you through everything.</p>
          </div>
          <Link href="/consultation" className="btn-primary tut-cta-btn">Book My Free Call → Get Access</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
