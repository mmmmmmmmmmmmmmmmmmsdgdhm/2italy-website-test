import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'FAQ — Studying in Italy as an International Student',
  description: 'Answers to the most common questions about studying in Italy: language requirements, costs, DSU scholarships, the student visa, working while studying, deadlines and how 2italy works.',
  path: '/faq',
});

// `link` is optional and rendered after the answer text
const groups = [
  {
    title: 'Studying in Italy',
    items: [
      {
        q: 'Do I need to speak Italian to study in Italy?',
        a: 'No. Italian public universities offer many bachelor and master programmes taught fully in English — in engineering, medicine, economics, architecture, design and more. Learning some Italian still helps a lot with daily life, part-time jobs and your career after graduation.',
      },
      {
        q: 'Do I need IELTS or TOEFL?',
        a: 'Most English-taught programmes ask for an English certificate such as IELTS or TOEFL, and each programme sets its own minimum score. Some universities accept alternatives, so we check the exact requirement for every programme on your shortlist.',
      },
      {
        q: 'How much does it cost to study in Italy?',
        a: 'Public universities charge tuition based on your family income, so fees are often between a few hundred and a few thousand euros per year. Students who win a DSU scholarship are usually exempt from tuition altogether.',
        link: { href: '/universities', label: 'Compare universities and fees' },
      },
      {
        q: 'When should I start my application?',
        a: 'Ideally 9 to 12 months before your intended start date. Application windows for international students often open in the autumn or winter of the year before, and a late start can cost you a full academic year.',
        link: { href: '/universities', label: 'See current application windows' },
      },
      {
        q: 'What are Universitaly and the Declaration of Value (DOV)?',
        a: 'Universitaly is the Italian government portal where non-EU students complete pre-enrolment before applying for a student visa. The Declaration of Value (or an equivalent recognition statement) confirms that your previous qualifications are recognised in Italy. Both are required steps, and both are covered in our packages.',
      },
    ],
  },
  {
    title: 'Scholarships',
    items: [
      {
        q: 'What is the DSU scholarship?',
        a: 'DSU (Diritto allo Studio Universitario) is a need-based scholarship run by each Italian region. Depending on the region and your family situation, it can include a tuition waiver, free or subsidised housing, meals at university canteens and a yearly cash grant.',
        link: { href: '/blog/dsu-scholarship-italy-guide', label: 'Read our full DSU guide' },
      },
      {
        q: 'Can international students get the DSU scholarship?',
        a: 'Yes. Because your family income is not registered in Italy, you apply with an ISEE Parificato — an equivalent calculation based on your family documents from your home country. Eligibility depends on the regional income limits, and each region publishes its own rules and deadlines every year.',
      },
    ],
  },
  {
    title: 'Visa and life in Italy',
    items: [
      {
        q: 'How much money do I need to show for the student visa?',
        a: 'You must prove you can support yourself during your studies. The minimum amount is set by the Italian authorities and is updated every year, and consulates may ask for specific proof such as a bank statement or guarantee. We confirm the current amount and the accepted documents for your consulate in your consultation.',
      },
      {
        q: 'Where do I apply for the visa if I am from Syria?',
        a: 'Syrian applicants usually submit their student visa application at the TLScontact centre in Beirut, which handles appointments for the Italian embassy. We help you book the appointment, prepare every document in the order the consulate expects, and plan the trip.',
      },
      {
        q: 'Can I work while studying in Italy?',
        a: 'Yes. With a student residence permit you can generally work part-time, up to 20 hours per week.',
      },
      {
        q: 'Can I stay in Italy after graduation?',
        a: 'Yes. After graduating you can stay in Italy to look for work or start a business, and then convert your student permit into a work permit.',
      },
    ],
  },
  {
    title: 'Working with 2italy',
    items: [
      {
        q: 'Is the consultation really free?',
        a: 'Yes. It is a free 30-minute call with no obligation. We look at your background, grades, budget and goals, and tell you honestly what is possible and which path makes sense for you.',
        link: { href: '/consultation', label: 'Book your free consultation' },
      },
      {
        q: 'How much do your services cost?',
        a: 'We offer three packages: Admission Essentials (from €1,000), Visa Ready (from €2,000) and Full Relocation (from €3,000). The final price depends on your situation, and we confirm it in writing before you commit.',
        link: { href: '/offers', label: 'Compare packages' },
      },
      {
        q: 'Do you guarantee admission or a visa?',
        a: 'No — and you should be careful with anyone who does. Universities decide admissions and consulates decide visas. What we guarantee is that your applications are complete, correct and submitted on time, which is where most students lose their chance.',
      },
      {
        q: 'How do I contact you?',
        a: 'Message us on WhatsApp at +971 58 180 8979, email info@2italy.co, or book a free call through the consultation page. We reply within 24 hours.',
      },
    ],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: groups.flatMap((g) =>
    g.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
};

export default function FAQ() {
  return (
    <main>
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />

      <article className="post">
        <header className="post-header">
          <span className="blog-tag">FAQ</span>
          <h1 className="post-title">Frequently asked questions</h1>
        </header>

        <p className="post-intro">
          The questions we hear most from students planning to study in Italy. Can&rsquo;t find yours? Ask us directly in a free consultation.
        </p>

        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="faq-group-title">{g.title}</h2>
            {g.items.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>
                  {item.a}
                  {item.link && (
                    <>
                      {' '}
                      <Link href={item.link.href}>{item.link.label} →</Link>
                    </>
                  )}
                </p>
              </details>
            ))}
          </section>
        ))}

        <div className="post-cta">
          <h2>Still have questions?</h2>
          <p>Every situation is different. Tell us about yours and we&rsquo;ll give you a clear answer in a free 30-minute call.</p>
          <Link href="/consultation" className="btn-primary">Book a Free Consultation →</Link>
        </div>
      </article>

      <div className="section-gap" />

      <Footer />
    </main>
  );
}
