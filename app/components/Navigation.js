'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { otherLanguagePath } from '../i18n';

const content = {
  en: {
    mainItems: [
      { href: '/', label: 'Home' },
      { href: '/universities', label: 'Universities' },
      { href: '/offers', label: 'Offers' },
      { href: '/scholarship', label: 'Scholarship' },
    ],
    learnLabel: 'Learn',
    learnItems: [
      { href: '/blog', label: 'Blog', desc: 'Written guides' },
      { href: '/resources', label: 'Free Videos', desc: 'Watch on YouTube' },
      { href: '/tutorial', label: 'Tutorial', desc: '17 step-by-step lessons' },
      { href: '/faq', label: 'FAQ', desc: 'Quick answers' },
    ],
    endItems: [
      { href: '/reviews', label: 'Reviews' },
      { href: '/about', label: 'About' },
    ],
    cta: { href: '/consultation', label: 'Book Free Consultation' },
    home: '/',
    homeLabel: '2italy home',
    menuLabel: 'Toggle navigation menu',
    switchLabel: 'عربي',
    switchLang: 'ar',
  },
  ar: {
    mainItems: [
      { href: '/ar', label: 'الرئيسية' },
      { href: '/universities', label: 'الجامعات' },
      { href: '/ar/offers', label: 'الباقات' },
      { href: '/scholarship', label: 'المنحة' },
    ],
    learnLabel: 'تعلّم',
    learnItems: [
      { href: '/blog', label: 'المدوّنة', desc: 'أدلة مكتوبة' },
      { href: '/resources', label: 'فيديوهات مجانية', desc: 'شاهد على يوتيوب' },
      { href: '/tutorial', label: 'الدورة التعليمية', desc: '17 درساً خطوة بخطوة' },
      { href: '/faq', label: 'الأسئلة الشائعة', desc: 'إجابات سريعة' },
    ],
    endItems: [
      { href: '/ar/reviews', label: 'التقييمات' },
      { href: '/about', label: 'من نحن' },
    ],
    cta: { href: '/ar/consultation', label: 'احجز استشارة مجانية' },
    home: '/ar',
    homeLabel: 'الصفحة الرئيسية لـ 2italy',
    menuLabel: 'فتح القائمة',
    switchLabel: 'EN',
    switchLang: 'en',
  },
};

function isActive(pathname, href) {
  return href === '/' || href === '/ar'
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation({ lang = 'en' }) {
  const t = content[lang];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const learnRef = useRef(null);
  const learnActive = t.learnItems.some((item) => isActive(pathname, item.href));
  const switchHref = otherLanguagePath(pathname, lang);

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

  const langSwitch = (className) => (
    <Link href={switchHref} className={className} lang={t.switchLang} hrefLang={t.switchLang} onClick={closeAll}>
      {t.switchLabel}
    </Link>
  );

  return (
    <>
      <nav className={`site-nav ${open ? 'menu-open' : ''}`}>
        <Link href={t.home} className="site-logo" aria-label={t.homeLabel} onClick={closeAll}>
          <img src="/brand-assets/Asset 165000px.png" alt="2italy" className="site-logo-img" />
        </Link>

        <div className="nav-mobile-actions">
          {langSwitch('lang-switch')}
          <button
            type="button"
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen((c) => !c)}
            aria-label={t.menuLabel}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <ul className="site-links">
          {t.mainItems.map((item) => (
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
              {t.learnLabel}
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              {t.learnItems.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass(item.href)} onClick={closeAll}>
                  <span className="nav-dropdown-label">{item.label}</span>
                  <span className="nav-dropdown-desc">{item.desc}</span>
                </Link>
              ))}
            </div>
          </li>

          {t.endItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass(item.href)} onClick={closeAll}>
                {item.label}
              </Link>
            </li>
          ))}

          <li>{langSwitch('lang-switch')}</li>

          <li>
            <Link href={t.cta.href} className="nav-cta" onClick={closeAll}>
              {t.cta.label}
            </Link>
          </li>
        </ul>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {t.mainItems.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)} onClick={closeAll}>
            {item.label}
          </Link>
        ))}

        <span className="mobile-menu-heading">{t.learnLabel}</span>
        {t.learnItems.map((item) => (
          <Link key={item.href} href={item.href} className={`mobile-sub ${linkClass(item.href)}`} onClick={closeAll}>
            {item.label}
          </Link>
        ))}

        {t.endItems.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)} onClick={closeAll}>
            {item.label}
          </Link>
        ))}

        <Link href={t.cta.href} className="mobile-cta" onClick={closeAll}>
          {t.cta.label}
        </Link>
      </div>
    </>
  );
}
