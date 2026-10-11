import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'About Us — Who We Are and How We Work',
  description: '2italy helps students and young professionals get into Italian universities, win DSU scholarships, secure their student visa and settle in Italy — with honest advice and one team for every step.',
  path: '/about',
});

const sections = [
  {
    heading: 'Why we exist',
    body: [
      'Getting into an Italian university is very possible, but the information is scattered across university websites, regional scholarship offices, the Universitaly portal and consulate rules that change every year. Most students lose months trying to piece it together, and many miss a deadline or submit the wrong document and lose a full year.',
      'We started 2italy to remove that confusion. One team, one clear roadmap, and someone who has done it before checking every step with you.',
    ],
  },
  {
    heading: 'Who we help',
    body: [
      'We work with students applying for foundation, bachelor, master and PhD programmes, and with young professionals building a career in Italy. Many of the students we work with come from Syria, Lebanon and across the Arab world, so we know the specific paperwork, translations and visa appointments involved — and we support you in both Arabic and English.',
    ],
  },
];

const services = [
  ['University admission', 'Choosing the right programmes for your profile and budget, preparing your documents and managing applications and deadlines.'],
  ['Scholarships', 'Regional DSU scholarships — including the ISEE Parificato — which can cover tuition, housing, meals and a yearly grant.'],
  ['Student visa', 'Universitaly pre-enrolment, the visa checklist, booking your appointment and preparing your submission.'],
  ['Relocation', 'Accommodation, insurance, residence permit, bank account and your first days in Italy.'],
  ['Career', 'Finding part-time work while you study and moving from a student permit to a work permit after graduation.'],
];

const principles = [
  ['Honest advice first', 'If Italy is not the right fit for your goals or budget, we tell you in the free consultation — before you pay anything.'],
  ['No promises we cannot keep', 'Universities decide admissions and consulates decide visas. We never guarantee an outcome; we make your application as strong and complete as it can be.'],
  ['Clear pricing', 'Our packages and starting prices are published on our website, and you know exactly what is included before you commit.'],
  ['One team, start to finish', 'The same people who plan your application stay with you through the visa and your arrival, so nothing falls through the cracks.'],
];

export default function About() {
  return (
    <main>
      <Navigation />

      <article className="post">
        <header className="post-header">
          <span className="blog-tag">About us</span>
          <h1 className="post-title">We make Italy accessible — one clear step at a time.</h1>
        </header>

        <p className="post-intro">
          2italy helps students and young professionals study and build their lives in Italy. From choosing a university to landing at the airport, we handle the applications, scholarships, visa and relocation so you can focus on your future.
        </p>

        {sections.map((s) => (
          <section key={s.heading} className="post-section">
            <h2>{s.heading}</h2>
            {s.body.map((para, i) => <p key={i}>{para}</p>)}
          </section>
        ))}

        <section className="post-section">
          <h2>What we do</h2>
          <ul>
            {services.map(([title, desc]) => (
              <li key={title}><strong>{title}</strong> — {desc}</li>
            ))}
          </ul>
          <p>
            See our <Link href="/offers">packages</Link>, browse the <Link href="/universities">universities we cover</Link>, or read our free guides on the <Link href="/blog">blog</Link>.
          </p>
        </section>

        <section className="post-section">
          <h2>How we work</h2>
          <ul>
            {principles.map(([title, desc]) => (
              <li key={title}><strong>{title}.</strong> {desc}</li>
            ))}
          </ul>
        </section>

        <section className="post-section">
          <h2>Giving back</h2>
          <p>
            Each year we fully sponsor a small number of students through the entire journey — admission, visa and relocation — at no cost. <Link href="/scholarship">Join the scholarship waitlist</Link> to hear when applications open.
          </p>
        </section>

        <div className="post-cta">
          <h2>Let&rsquo;s map your path to Italy</h2>
          <p>Book a free 30-minute call. We&rsquo;ll look at your background and goals and tell you honestly what&rsquo;s possible.</p>
          <Link href="/consultation" className="btn-primary">Book a Free Consultation →</Link>
        </div>
      </article>

      <div className="section-gap" />

      <Footer />
    </main>
  );
}
