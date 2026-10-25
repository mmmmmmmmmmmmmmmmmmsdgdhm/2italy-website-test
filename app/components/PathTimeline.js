'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const content = {
  en: {
    eyebrow: '03 — Your Path',
    title: 'Your path to Italy, step by step.',
    sub: 'One call is all it takes to start. Admission, visa, relocation and career — one team walks you through every step.',
    steps: [
      ['Free Consultation', 'Start with one call', 'We start by understanding your goals, timeline, and background.'],
      ['Custom Roadmap', 'Your plan, your timeline', 'We build a personalised plan covering applications, visas, housing, and career.'],
      ['University Admission', 'From idea to enrollment', 'We manage your applications, documents, deadlines, and interviews with the strongest possible strategy.'],
      ['Visa & Permits', 'From application to approval', 'We help you choose the right visa type, prepare documents, and navigate embassy requirements.'],
      ['Relocation', 'From landing to settled', 'We support your move, housing, banking, residency, and local life so you can arrive ready.'],
      ['Career Placement', 'From ambition to employment', 'We connect you with job opportunities, coach your profile, and prepare you for the local Italian market.'],
    ],
    finish: ['Settled in Italy', 'You arrive prepared, connected, and ready to live your Italian life.'],
    cta: 'Start With Step 1 — Free Consultation →',
    href: '/consultation',
  },
  ar: {
    eyebrow: '03 — طريقك',
    title: 'طريقك إلى إيطاليا، خطوة بخطوة.',
    sub: 'كل ما يلزم للبدء مكالمة واحدة. القبول، الفيزا، الانتقال والعمل — فريق واحد يرافقك في كل خطوة.',
    steps: [
      ['استشارة مجانية', 'نبدأ بمكالمة واحدة', 'نبدأ بفهم أهدافك وجدولك الزمني وخلفيتك الدراسية.'],
      ['خطة مخصّصة', 'خطتك، بجدولك الزمني', 'نضع لك خطة شخصية تشمل التقديم والفيزا والسكن والعمل.'],
      ['القبول الجامعي', 'من الفكرة إلى التسجيل', 'ندير طلباتك وأوراقك ومواعيدك ومقابلاتك بأقوى استراتيجية ممكنة.'],
      ['الفيزا والإقامة', 'من التقديم إلى الموافقة', 'نساعدك في اختيار نوع الفيزا المناسب، وتجهيز الأوراق، والتعامل مع متطلبات السفارة.'],
      ['الانتقال', 'من الوصول إلى الاستقرار', 'ندعمك في السفر والسكن والحساب البنكي والإقامة والحياة اليومية لتصل جاهزاً.'],
      ['التوظيف', 'من الطموح إلى الوظيفة', 'نربطك بفرص العمل، ونطوّر ملفك المهني، ونجهّزك لسوق العمل الإيطالي.'],
    ],
    finish: ['الاستقرار في إيطاليا', 'تصل مستعداً، وعلى تواصل، وجاهزاً لبدء حياتك الجديدة.'],
    cta: 'ابدأ بالخطوة 1 — استشارة مجانية ←',
    href: '/ar/consultation',
  },
};

export default function PathTimeline({ lang = 'en' }) {
  const t = content[lang];
  const timelineRef = useRef(null);
  const nodeRefs = useRef([]);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(-1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timeline.style.setProperty('--progress', '1');
      setActive(nodeRefs.current.length - 1);
      setDone(true);
      return;
    }

    setReady(true);
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = timeline.getBoundingClientRect();
      // The arrow sits where the line crosses 55% of the viewport height
      const anchor = window.innerHeight * 0.55;
      const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      timeline.style.setProperty('--progress', progress.toFixed(4));

      const reached = progress * rect.height;
      let last = -1;
      nodeRefs.current.forEach((node, i) => {
        if (node && node.offsetTop + node.offsetHeight / 2 <= reached + 1) last = i;
      });
      setActive(last);
      setDone(progress >= 0.999);
    };

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const items = [
    ...t.steps.map(([title, tagline, desc]) => ({ title, tagline, desc })),
    { title: t.finish[0], desc: t.finish[1], finish: true },
  ];

  return (
    <section className="section-block path-section" id="how">
      <span className="section-eyebrow">{t.eyebrow}</span>
      <h2 className="section-title">{t.title}</h2>
      <p className="section-sub">{t.sub}</p>

      <div
        ref={timelineRef}
        className={`path-timeline${ready ? ' path-ready' : ''}${done ? ' path-done' : ''}`}
      >
        <div className="path-rail" aria-hidden="true">
          <div className="path-rail-fill" />
        </div>
        <div className="path-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </div>

        <ol className="path-steps">
          {items.map((item, i) => (
            <li
              key={item.title}
              className={`path-step${i % 2 ? ' path-step-alt' : ''}${item.finish ? ' path-finish' : ''}${i <= active ? ' is-active' : ''}`}
            >
              <div className="path-node" ref={(el) => { nodeRefs.current[i] = el; }}>
                {item.finish ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
                  </svg>
                ) : String(i + 1).padStart(2, '0')}
              </div>
              <article className="path-card">
                {item.tagline && <p className="path-tagline">{item.tagline}</p>}
                <h3>{item.title}</h3>
                <p className="path-desc">{item.desc}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <div className="path-cta">
        <Link href={t.href} className="btn-primary">{t.cta}</Link>
      </div>
    </section>
  );
}
