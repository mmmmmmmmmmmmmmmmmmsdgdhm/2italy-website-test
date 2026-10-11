import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How 2italy collects, uses and protects your personal data when you use our website, forms and services.',
  path: '/privacy',
});

const LAST_UPDATED = '11 October 2026';

const sections = [
  {
    heading: '1. Who we are',
    body: [
      '2italy ("we", "us") helps students and young professionals study and live in Italy. This policy explains what personal data we collect through 2italy.co and our services, why we collect it, and the choices you have. For any privacy question or request, contact us at info@2italy.co.',
    ],
  },
  {
    heading: '2. What we collect',
    body: ['We only collect the information you choose to give us, plus basic anonymous usage statistics:'],
    list: [
      'Consultation form: your name, email address, country, city, WhatsApp number, academic level, desired programme, grades, English certificate, financial situation, your goals, and any VIP or referral code.',
      'Scholarship waitlist: your name and email address.',
      'Messages: anything you send us by WhatsApp, email or social media.',
      'Service documents: if you become a client, the documents needed for your applications, scholarship and visa (for example passport, transcripts, certificates and family financial documents).',
      'Usage statistics: anonymous, aggregated data about page visits (such as pages viewed, country, device type and referring website), collected without cookies.',
    ],
  },
  {
    heading: '3. How we use your data',
    list: [
      'To review your profile and contact you about your free consultation.',
      'To provide the services you sign up for — university applications, scholarship applications, visa preparation and relocation support.',
      'To notify you when our sponsored scholarship opens, if you joined the waitlist.',
      'To answer your questions and messages.',
      'To understand how our website is used and improve it.',
    ],
    after: [
      'We process your data because you asked us to (to answer your enquiry or deliver our services), with your consent (for example the scholarship waitlist), or for our legitimate interest in running and improving our website. We do not sell your personal data, and we do not use it for third-party advertising.',
    ],
  },
  {
    heading: '4. Who we share it with',
    body: ['We share your data only where it is needed to help you, or with trusted providers that run our website and tools:'],
    list: [
      'Universities, regional scholarship offices (DSU), Universitaly, consulates and visa centres — only the information needed for applications you ask us to make.',
      'Google (Google Sheets) — stores consultation and waitlist form submissions.',
      'GoDaddy — provides our email service.',
      'Vercel — hosts our website and provides anonymous visitor statistics.',
      'Meta (WhatsApp) — when you contact us on WhatsApp.',
      'YouTube — when you play a video embedded on our site, YouTube may set its own cookies.',
    ],
    after: [
      'Some of these providers may process data outside your country or outside the European Union. They are established companies that apply recognised safeguards to protect personal data.',
    ],
  },
  {
    heading: '5. How long we keep it',
    body: [
      'We keep enquiry data (consultation and waitlist submissions) for up to 24 months after our last contact with you, unless you become a client. Client files are kept for as long as needed to provide our services and meet legal or accounting obligations, and then deleted. You can ask us to delete your data sooner at any time.',
    ],
  },
  {
    heading: '6. Your rights',
    body: ['You can ask us at any time to:'],
    list: [
      'See the personal data we hold about you.',
      'Correct anything that is inaccurate.',
      'Delete your data.',
      'Stop or limit how we use it, or withdraw your consent (for example, leave the scholarship waitlist).',
      'Receive a copy of your data in a common format.',
    ],
    after: [
      'Email info@2italy.co and we will respond within 30 days. If you are in the European Union and believe we have not handled your data correctly, you also have the right to complain to your local data protection authority.',
    ],
  },
  {
    heading: '7. Cookies',
    body: [
      'Our website does not use advertising or tracking cookies, and our visitor statistics work without cookies. Embedded YouTube videos may set cookies only when you choose to play them.',
    ],
  },
  {
    heading: '8. Security',
    body: [
      'We use reputable providers, secure connections (HTTPS) and limited access to protect your information. No system is completely secure, so please avoid sending sensitive documents through public channels and ask us for the safest way to share them.',
    ],
  },
  {
    heading: '9. Children',
    body: [
      'Our services are intended for people aged 16 and over. If you are under 18, please involve a parent or guardian before signing up for our services.',
    ],
  },
  {
    heading: '10. Changes to this policy',
    body: [
      'We may update this policy from time to time. The latest version is always on this page, with the date it was last updated.',
    ],
  },
];

export default function Privacy() {
  return (
    <main>
      <Navigation />

      <article className="post">
        <header className="post-header">
          <span className="blog-tag">Legal</span>
          <h1 className="post-title">Privacy Policy</h1>
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
            {s.after?.map((para, i) => <p key={i}>{para}</p>)}
          </section>
        ))}

        <section className="post-section">
          <h2>11. Contact</h2>
          <p>
            Questions or requests about your data: <a href="mailto:info@2italy.co">info@2italy.co</a>. See also our <Link href="/terms">Terms of Service</Link>.
          </p>
        </section>
      </article>

      <div className="section-gap" />

      <Footer />
    </main>
  );
}
