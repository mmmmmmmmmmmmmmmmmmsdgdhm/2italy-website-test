'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/resources', label: 'Resources' },
  { href: '/universities', label: 'Universities' },
  { href: '/consultation', label: 'Consultation' },
  { href: '/tutorial', label: 'Tutorial' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={`site-nav ${open ? 'menu-open' : ''}`}>
        <div className="site-logo">
          <img src="/brand-assets/Asset 165000px.png" alt="2italy logo" width="34" height="34" />
          <span>2italy</span>
        </div>

        <button
          type="button"
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="site-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={pathname === item.href ? 'active-page' : ''} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? 'active-page' : ''}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        <Link href="/consultation" className="mobile-cta" onClick={() => setOpen(false)}>
          Book a consultation
        </Link>
      </div>
    </>
  );
}
