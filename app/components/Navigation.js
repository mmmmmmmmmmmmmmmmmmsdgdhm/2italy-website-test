'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainItems = [
  { href: '/', label: 'Home' },
  { href: '/universities', label: 'Universities' },
  { href: '/offers', label: 'Offers' },
  { href: '/scholarship', label: 'Scholarship' },
];

const learnItems = [
  { href: '/blog', label: 'Blog', desc: 'Written guides' },
  { href: '/resources', label: 'Free Videos', desc: 'Watch on YouTube' },
  { href: '/tutorial', label: 'Tutorial', desc: '17 step-by-step lessons' },
  { href: '/faq', label: 'FAQ', desc: 'Quick answers' },
];

const endItems = [{ href: '/about', label: 'About' }];

function isActive(pathname, href) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const learnRef = useRef(null);
  const learnActive = learnItems.some((item) => isActive(pathname, item.href));

  // Close the Learn dropdown on outside click or Escape
  useEffect(() => {
    if (!learnOpen) return;
    function onClick(e) {
      if (learnRef.current && !learnRef.current.contains(e.target)) setLearnOpen(false);
    }
    function onKey(e) {
      if (e.key === 'Escape') setLearnOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [learnOpen]);

  function closeAll() {
    setOpen(false);
    setLearnOpen(false);
  }

  const linkClass = (href) => (isActive(pathname, href) ? 'active-page' : '');

  return (
    <>
      <nav className={`site-nav ${open ? 'menu-open' : ''}`}>
        <Link href="/" className="site-logo" aria-label="2italy home" onClick={closeAll}>
          <img src="/brand-assets/Asset 165000px.png" alt="2italy" className="site-logo-img" />
        </Link>

        <button
          type="button"
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen((c) => !c)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="site-links">
          {mainItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass(item.href)} onClick={closeAll}>
                {item.label}
              </Link>
            </li>
          ))}

          <li
            ref={learnRef}
            className={`nav-dropdown ${learnOpen ? 'open' : ''}`}
            onMouseEnter={() => setLearnOpen(true)}
            onMouseLeave={() => setLearnOpen(false)}
          >
            <button
              type="button"
              className={`nav-dropdown-toggle ${learnActive ? 'active-page' : ''}`}
              onClick={() => setLearnOpen((c) => !c)}
              aria-expanded={learnOpen}
              aria-haspopup="true"
            >
              Learn
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              {learnItems.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass(item.href)} onClick={closeAll}>
                  <span className="nav-dropdown-label">{item.label}</span>
                  <span className="nav-dropdown-desc">{item.desc}</span>
                </Link>
              ))}
            </div>
          </li>

          {endItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass(item.href)} onClick={closeAll}>
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link href="/consultation" className="nav-cta" onClick={closeAll}>
              Book Free Consultation
            </Link>
          </li>
        </ul>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {mainItems.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)} onClick={closeAll}>
            {item.label}
          </Link>
        ))}

        <span className="mobile-menu-heading">Learn</span>
        {learnItems.map((item) => (
          <Link key={item.href} href={item.href} className={`mobile-sub ${linkClass(item.href)}`} onClick={closeAll}>
            {item.label}
          </Link>
        ))}

        {endItems.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)} onClick={closeAll}>
            {item.label}
          </Link>
        ))}

        <Link href="/consultation" className="mobile-cta" onClick={closeAll}>
          Book Free Consultation
        </Link>
      </div>
    </>
  );
}
