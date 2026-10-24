'use client';

import { useRef } from 'react';
import Script from 'next/script';

export const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/2italy.co';
export const TRUSTPILOT_REVIEW_URL = 'https://www.trustpilot.com/evaluate/2italy.co';

const BUSINESS_UNIT_ID = '6adb6ba691bd82e6106bf5bc';
const TEMPLATES = {
  reviewCollector: { id: '56278e9abfbbba0bdcd568bc', height: '52px' },
};

// Trustpilot TrustBox. onReady fires on every mount, so the widget also renders
// after client-side navigation (the script only scans the page once on its own).
export default function TrustpilotWidget({ template = 'reviewCollector', fallback = 'Trustpilot' }) {
  const ref = useRef(null);
  const { id, height } = TEMPLATES[template];

  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
        onReady={() => {
          if (ref.current && window.Trustpilot) window.Trustpilot.loadFromElement(ref.current, true);
        }}
      />
      <div
        ref={ref}
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id={id}
        data-businessunit-id={BUSINESS_UNIT_ID}
        data-style-height={height}
        data-style-width="100%"
      >
        <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer">{fallback}</a>
      </div>
    </>
  );
}
