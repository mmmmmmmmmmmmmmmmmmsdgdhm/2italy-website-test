import Link from 'next/link';

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/2italyCo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@2ItalyCo',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=963990681443&text&type=phone_number&app_absent=0',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-1-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4C8.3 7 7.5 7.8 7.5 9.4c0 1.6 1.2 3.2 1.3 3.4.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.1-1.5.2-.7.2-1.4.1-1.5-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.4A10 10 0 1 0 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/2ItalyCo/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2V8.6h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 2.9H13.4v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
];

const services = [
  { label: 'Admission Essentials', href: '/offers' },
  { label: 'Visa Ready', href: '/offers' },
  { label: 'Full Relocation', href: '/offers' },
  { label: 'Scholarship', href: '/scholarship' },
];

const company = [
  { label: 'About', href: '/#mission' },
  { label: 'Our Process', href: '/#how' },
  { label: 'Resources', href: '/resources' },
  { label: 'Universities', href: '/universities' },
  { label: 'Offers', href: '/offers' },
];

const contact = [
  { label: 'info@2italy.co', href: 'mailto:info@2italy.co' },
  { label: 'Book a Free Call', href: '/consultation' },
  { label: '@2ItalyCo on YouTube', href: 'https://www.youtube.com/@2ItalyCo', external: true },
  { label: '@2italyCo on Instagram', href: 'https://www.instagram.com/2italyCo', external: true },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* Brand column */}
        <div className="footer-brand">
          <img src="/brand-assets/Asset 165000px.png" alt="2italy" className="footer-logo" />
          <p className="footer-tagline">
            Helping ambitious people build their life in Italy — from the first application to the first day settled.
          </p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social-link"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Services</h4>
          <ul className="footer-col-list">
            {services.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="footer-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Company</h4>
          <ul className="footer-col-list">
            {company.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="footer-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Contact</h4>
          <ul className="footer-col-list">
            {contact.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="footer-link">{item.label}</a>
                ) : (
                  <a href={item.href} className="footer-link">{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <span>© 2italy 2026</span>
        <span className="footer-bottom-sep">Admission &nbsp;·&nbsp; Visas &nbsp;·&nbsp; Relocation</span>
        <span>info@2italy.co</span>
      </div>
    </footer>
  );
}
