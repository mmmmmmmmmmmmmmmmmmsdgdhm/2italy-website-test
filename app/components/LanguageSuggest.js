'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { translatedPages } from '../i18n';

const DISMISS_KEY = 'lang-suggest-dismissed';

// Offers the Arabic version to visitors whose browser prefers Arabic. Never redirects.
export default function LanguageSuggest() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const arabicPath = translatedPages[pathname];

  useEffect(() => {
    if (!arabicPath) return setShow(false);
    let dismissed = false;
    try { dismissed = localStorage.getItem(DISMISS_KEY) === '1'; } catch {}
    const prefersArabic = (navigator.languages || [navigator.language]).some((l) => l?.toLowerCase().startsWith('ar'));
    setShow(prefersArabic && !dismissed);
  }, [arabicPath]);

  function dismiss() {
    try { localStorage.setItem(DISMISS_KEY, '1'); } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="lang-suggest" lang="ar" dir="rtl">
      <span>هل تفضّل تصفّح الموقع بالعربية؟</span>
      <Link href={arabicPath} className="lang-suggest-btn" onClick={dismiss}>عرض الصفحة بالعربية</Link>
      <button type="button" className="lang-suggest-close" onClick={dismiss} aria-label="إغلاق">×</button>
    </div>
  );
}
