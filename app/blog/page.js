import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Blog | 2italy — Italian University, Visa & Relocation Guides',
  description:
    'Expert guides on studying in Italy, student visa applications, DSU scholarships, Italian university admissions, and relocating to Italy as an international student. Written by the 2italy team.',
  keywords: [
    'study in Italy',
    'Italian university admission',
    'Italy student visa',
    'DSU scholarship Italy',
    'relocate to Italy',
    'international students Italy',
    'Italian university guide',
    'Italy student life',
  ].join(', '),
};

const upcomingTopics = [
  {
    tag: 'Admissions',
    title: 'How to Apply to an Italian University as an International Student',
    desc: 'A step-by-step walkthrough of the Italian university application process — from choosing a program to submitting your Dichiarazione di Valore.',
  },
  {
    tag: 'Scholarships',
    title: 'DSU Scholarships Explained: Who Qualifies and How to Apply',
    desc: 'Italy\'s regional DSU scholarships cover tuition, housing, and a monthly stipend. We break down eligibility, ISEE Parificato, and application deadlines.',
  },
  {
    tag: 'Visa',
    title: 'Italy Student Visa Guide: Documents, Timeline, and Common Mistakes',
    desc: 'Everything you need to know about the Type D student visa — what to prepare, how long it takes, and the errors that cause rejections.',
  },
  {
    tag: 'Student Life',
    title: 'Best Cities in Italy for International Students in 2025',
    desc: 'Milan, Rome, Bologna, Florence, Turin — we compare cost of living, university quality, job markets, and student communities.',
  },
  {
    tag: 'Relocation',
    title: 'Your First Month in Italy: Housing, Residency, and Banking',
    desc: 'A practical guide to getting settled — finding accommodation, registering at the Comune, opening an Italian bank account, and getting your codice fiscale.',
  },
  {
    tag: 'Language',
    title: 'Do You Need to Speak Italian to Study in Italy?',
    desc: 'Hundreds of Italian university programs are taught entirely in English. We list the top English-taught degrees and what language certificates you need.',
  },
  {
    tag: 'Career',
    title: 'Working While Studying in Italy: Rules, Permits, and Opportunities',
    desc: 'International students in Italy can work up to 20 hours per week. Here is how to find part-time work, internships, and graduate jobs in Italy.',
  },
  {
    tag: 'Admissions',
    title: 'Italian University Rankings 2025: Which Universities Accept International Students',
    desc: 'A guide to Italy\'s top universities — Politecnico di Milano, Bologna, Sapienza, Bocconi — and how competitive they are for international applicants.',
  },
];

export default function Blog() {
  return (
    <main>
      <Navigation />

      {/* HERO */}
      <section className="page-hero blog-hero">
        <div className="coming-soon-pill">
          <span className="cs-dot" aria-hidden="true" />
          Coming Soon
        </div>

        <h1 className="hero-headline blog-headline">
          The <span className="grad">2italy</span> Blog
        </h1>

        <p className="hero-sub blog-sub">
          Honest, practical guides on Italian university admissions, student visas,
          DSU scholarships, relocation, and life in Italy — written by consultants
          who have guided 1,000+ students through the process.
        </p>

        <div className="blog-notify-row">
          <Link href="/consultation" className="btn-primary">
            Talk to Us Directly →
          </Link>
          <a href="https://www.youtube.com/@2ItalyCo" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Watch Our Videos
          </a>
        </div>
      </section>

      {/* WHAT'S COMING */}
      <section className="section-block blog-topics-section">
        <span className="section-eyebrow">What We Are Writing</span>
        <h2 className="section-title">Guides launching soon.</h2>
        <p className="section-sub">
          Every article is based on real student cases — not generic advice.
          Here is what is coming first.
        </p>

        <div className="blog-grid">
          {upcomingTopics.map((topic, i) => (
            <article key={i} className="blog-card">
              <span className="blog-tag">{topic.tag}</span>
              <h3 className="blog-card-title">{topic.title}</h3>
              <p className="blog-card-desc">{topic.desc}</p>
              <span className="blog-soon-badge">Coming Soon</span>
            </article>
          ))}
        </div>
      </section>

      <div className="section-gap" />

      {/* CAN'T WAIT — direct contact */}
      <section className="blog-contact-section">
        <span className="section-eyebrow">Can't Wait?</span>
        <h2 className="section-title">Get the answer now — directly from us.</h2>
        <p className="section-sub">
          Every question in these articles is one our consultants answer every day.
          Book a free 30-minute call and get answers specific to your situation —
          country, background, goals, timeline.
        </p>
        <div className="blog-contact-cta">
          <Link href="/consultation" className="btn-primary">
            Book a Free Consultation →
          </Link>
          <div className="blog-contact-facts">
            <span>✓ Free, no obligation</span>
            <span>✓ 1,000+ students guided</span>
            <span>✓ Reply within 24 hours</span>
          </div>
        </div>
      </section>

      <div className="section-gap" />

      <Footer />
    </main>
  );
}
