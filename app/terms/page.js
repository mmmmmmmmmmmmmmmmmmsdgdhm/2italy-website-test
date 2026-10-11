import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'The terms that apply when you use the 2italy website and our admission, scholarship, visa and relocation services.',
  path: '/terms',
});

const LAST_UPDATED = '11 October 2026';

const sections = [
  {
    heading: '1. About these terms',
    body: [
      'These terms apply when you use 2italy.co and when you work with 2italy ("we", "us"). By using our website or services, you agree to them. If you sign a service agreement with us, that agreement also applies, and where the two differ, the service agreement takes priority.',
    ],
  },
  {
    heading: '2. Our services',
    body: [
      'We provide guidance and practical support for studying and living in Italy, including university selection and applications, scholarship applications, student visa preparation and relocation support. The exact services included depend on the package you choose, as described on our Offers page and confirmed in writing before you pay.',
    ],
  },
  {
    heading: '3. No guarantee of outcome',
    body: [
      'Admission decisions are made by universities, scholarship decisions by regional scholarship offices, and visa decisions by Italian consulates and authorities. We do not control these decisions and we cannot guarantee admission, a scholarship, a visa or a residence permit. Any statistics on our website describe past results and are not a promise of future results.',
      'What we commit to is careful, professional work: helping you prepare complete and accurate applications and submitting them on time, based on the information and documents you provide.',
    ],
  },
  {
    heading: '4. Your responsibilities',
    list: [
      'Provide information and documents that are true, complete and genuine. Submitting false or altered documents can lead to rejection or a ban, and we will stop working with you if we discover it.',
      'Send requested documents and respond to us on time, so deadlines are not missed.',
      'Pay any official fees yourself, such as university application fees, visa fees, translations, legalisations, insurance, accommodation and travel, unless your package states otherwise.',
      'Attend your own appointments, interviews and exams.',
    ],
  },
  {
    heading: '5. Fees and payment',
    body: [
      'Our free consultation has no cost and no obligation. Package prices on our website are starting prices; your final price depends on your situation and is confirmed in writing before you commit. Payment terms, and any refund conditions, are set out in your service agreement. Fees cover our work and support, which continues regardless of the final decision of a university, scholarship office or consulate.',
    ],
  },
  {
    heading: '6. Website content',
    body: [
      'The guides, articles, university information and videos on our website are provided for general information. Requirements, fees and deadlines change frequently, so always confirm them with the official source or with us before acting. All content on this website, including text, design, videos and the 2italy name and logo, belongs to 2italy and may not be copied or reused without our permission.',
    ],
  },
  {
    heading: '7. Third-party websites',
    body: [
      'Our website links to third-party websites and services, such as universities, government portals, YouTube and WhatsApp. We are not responsible for their content or how they handle your data.',
    ],
  },
  {
    heading: '8. Limitation of liability',
    body: [
      'We are not responsible for decisions made by universities, scholarship offices, consulates or other authorities, for delays or changes in their rules, or for losses caused by incorrect or late information or documents provided by you. To the extent permitted by law, our total liability for any claim related to our services is limited to the fees you paid us for those services.',
    ],
  },
  {
    heading: '9. Changes',
    body: [
      'We may update these terms from time to time. The latest version is always on this page. Changes do not affect a service agreement you have already signed.',
    ],
  },
];

export default function Terms() {
  return (
    <main>
      <Navigation />

      <article className="post">
        <header className="post-header">
          <span className="blog-tag">Legal</span>
          <h1 className="post-title">Terms of Service</h1>
          <div className="post-meta">
            <span>Last updated: {LAST_UPDATED}</span>
          </div>
        </header>

        {sections.map((s) => (
          <section key={s.heading} className="post-section">
            <h2>{s.heading}</h2>
            {s.body?.map((para, i) => <p key={i}>{para}</p>)}
            {s.list && (
              <ul>
                {s.list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}

        <section className="post-section">
          <h2>10. Contact</h2>
          <p>
            Questions about these terms: <a href="mailto:info@2italy.co">info@2italy.co</a>. See also our <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </section>
      </article>

      <div className="section-gap" />

      <Footer />
    </main>
  );
}
