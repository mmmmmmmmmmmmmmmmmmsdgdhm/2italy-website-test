import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import JourneyTimeline from './JourneyTimeline';
import PathTimeline from './PathTimeline';

const painIcons = [
  <svg key="docs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4h9l3 3v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" opacity="0.4" />
    <path d="M4 7h9l3 3v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
  </svg>,
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
    <path d="M4 4l16 16" />
  </svg>,
  <svg key="visa" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M9 10l6 4M15 10l-6 4" />
  </svg>,
];

const content = {
  en: {
    consultHref: '/consultation',
    hero: {
      eyebrow: 'Overwhelmed by Italian university applications?',
      lines: ['Get Into an Italian', <span key="g" className="grad">University</span>, 'Without the Guesswork.'],
      sub: 'We handle every step — application, visa, housing, and relocation — so you can focus on your future in Italy.',
      badges: [['1,000+', 'Students Placed'], ['84%', 'Visa Approval Rate'], ['63+', 'Partner Universities']],
      cta: 'Book My Free Italy Consultation →',
      ghost: 'See the journey',
      trust: ['✓ Free 30-min call', '✓ No obligation', '✓ Reply within 24 hours'],
      imgAlt: 'Student in Rome, Italy',
    },
    manifesto: 'We exist to make Italy accessible. Whether you are applying to a top university, launching your career, or starting your life abroad — we remove the complexity so you can move with total confidence.',
    pain: {
      label: '01 — Where you are now',
      headline: ['Lost.', 'Overwhelmed.', 'Scattered.'],
      cards: [['Scattered Info', 'No clear path'], ['Missed Deadlines', 'Wrong documents'], ['Visa Rejected', 'No local network']],
      points: ['Scattered information, no clear path', 'Missed deadlines, wrong documents', 'Visa rejections, no local network'],
    },
    bridge: {
      eyebrow: 'Your Transformation',
      text: 'Most students spend months stuck. We cut through all of it — one partner, one clear path.',
      cta: 'Start Your Journey →',
    },
    vision: {
      label: '02 — Where you will be',
      headline: ['Settled.', 'Thriving.', 'In Italy.'],
      points: ['One clear roadmap, proactive support', 'Expert-reviewed files, visa approved', 'Warm introductions, insider knowledge'],
    },
    testimonials: {
      eyebrow: '04 — Student Stories',
      title: 'Students who made the move.',
      more: 'Read & write reviews →',
      moreHref: '/reviews',
      items: [
        ['"I had no idea where to start with the Italian university application process. 2italy mapped everything out and I got accepted to my first-choice program in Milan."', 'Sara K.', 'MSc Student, Politecnico di Milano'],
        ['"The visa process felt impossible until 2italy took it over. Zero stress, zero mistakes. I had my permit in hand before I even landed."', 'James T.', 'Software Engineer, Rome'],
        ['"From job applications to finding my apartment in Florence, they handled everything. I just showed up and started living my Italian life."', 'Amara B.', 'UX Designer, Florence'],
      ],
    },
    final: {
      title: 'Ready to begin your Italy journey?',
      sub: "Book a free 30-minute consultation. No obligation, no pressure — just a clear picture of what's possible for you.",
      cta: 'Book My Free Italy Consultation →',
    },
  },

  ar: {
    consultHref: '/ar/consultation',
    hero: {
      eyebrow: 'تشعر بالحيرة أمام التقديم على الجامعات الإيطالية؟',
      lines: ['ادخل جامعة', <span key="g" className="grad">إيطالية</span>, 'دون تخمين أو ضياع.'],
      sub: 'نتولّى كل خطوة — التقديم، الفيزا، السكن والانتقال — لتتفرّغ لمستقبلك في إيطاليا.',
      badges: [['+1,000', 'طالب تم قبولهم'], ['84%', 'نسبة قبول الفيزا'], ['+63', 'جامعة شريكة']],
      cta: 'احجز استشارتك المجانية ←',
      ghost: 'شاهد مراحل الرحلة',
      trust: ['✓ مكالمة مجانية 30 دقيقة', '✓ دون أي التزام', '✓ نرد خلال 24 ساعة'],
      imgAlt: 'طالبة في روما، إيطاليا',
    },
    manifesto: 'وُجدنا لنجعل إيطاليا في متناولك. سواء كنت تتقدّم إلى جامعة مرموقة، أو تبدأ مسيرتك المهنية، أو تبني حياتك في الخارج — نزيل التعقيد عن طريقك لتنتقل بثقة كاملة.',
    pain: {
      label: '01 — أين أنت الآن',
      headline: ['ضائع.', 'مُرهَق.', 'مُشتَّت.'],
      cards: [['معلومات متفرقة', 'لا يوجد طريق واضح'], ['مواعيد فائتة', 'أوراق خاطئة'], ['رفض الفيزا', 'لا معارف هناك']],
      points: ['معلومات متفرقة ولا طريق واضح', 'مواعيد نهائية فائتة وأوراق خاطئة', 'رفض الفيزا وغياب أي معارف محلية'],
    },
    bridge: {
      eyebrow: 'رحلة التحوّل',
      text: 'يقضي معظم الطلاب أشهراً عالقين. نحن نختصر عليك كل ذلك — شريك واحد، وطريق واحد واضح.',
      cta: 'ابدأ رحلتك ←',
    },
    vision: {
      label: '02 — أين ستكون',
      headline: ['مستقر.', 'ناجح.', 'في إيطاليا.'],
      points: ['خطة واحدة واضحة ودعم مستمر', 'ملفات يراجعها خبراء وفيزا مقبولة', 'تعارف مفيد ومعرفة من الداخل'],
    },
    testimonials: {
      eyebrow: '04 — قصص طلابنا',
      title: 'طلاب انتقلوا إلى إيطاليا.',
      more: 'اقرأ التقييمات أو اكتب تقييمك ←',
      moreHref: '/ar/reviews',
      items: [
        ['"لم أكن أعرف من أين أبدأ بالتقديم على الجامعات الإيطالية. رسمت لي 2italy الطريق كاملاً، وحصلت على قبول في البرنامج الذي اخترته أولاً في ميلانو."', 'سارة ك.', 'طالبة ماجستير، Politecnico di Milano'],
        ['"كانت إجراءات الفيزا تبدو مستحيلة حتى تولّتها 2italy. دون توتر ودون أخطاء. استلمت إقامتي قبل أن أصل."', 'جيمس ت.', 'مهندس برمجيات، روما'],
        ['"من طلبات العمل إلى إيجاد شقتي في فلورنسا، تولّوا كل شيء. كل ما فعلته أنني وصلت وبدأت حياتي في إيطاليا."', 'أمارا ب.', 'مصممة تجربة مستخدم، فلورنسا'],
      ],
    },
    final: {
      title: 'جاهز لبدء رحلتك إلى إيطاليا؟',
      sub: 'احجز استشارة مجانية لمدة 30 دقيقة. دون التزام ودون ضغط — فقط صورة واضحة لما يمكنك تحقيقه.',
      cta: 'احجز استشارتك المجانية ←',
    },
  },
};

export default function HomePage({ lang = 'en' }) {
  const t = content[lang];

  return (
    <main>
      <Navigation lang={lang} />

      {/* ── CHAPTER 0 — HOOK ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow">{t.hero.eyebrow}</span>
          <h1 className="hero-headline">
            {t.hero.lines.map((line, i) => <span key={i} className="line">{line}</span>)}
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>

          <div className="trust-badges">
            {t.hero.badges.map(([num, label]) => (
              <div key={label} className="trust-badge">
                <span className="badge-num">{num}</span>
                <span className="badge-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="hero-cta-row">
            <Link href={t.consultHref} className="btn-primary">{t.hero.cta}</Link>
            <a href="#transform" className="btn-ghost">{t.hero.ghost}</a>
          </div>

          <div className="trust-bar">
            {t.hero.trust.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src="/hero-student.jpg" alt={t.hero.imgAlt} className="hero-img" />
        </div>
      </section>

      {/* ── MANIFESTO ────────────────────────────────────────── */}
      <section className="scrub-section">
        <div className="scrub-inner">
          <p>{t.manifesto}</p>
        </div>
      </section>

      <div className="section-gap" />

      {/* ── CHAPTER 1 — YOUR TRANSFORMATION ─────────────────── */}
      <section className="transform-section" id="transform">

        <div className="transform-phase phase-pain">
          <span className="phase-label">{t.pain.label}</span>
          <h2 className="transform-headline pain-text">
            {t.pain.headline.map((word, i, all) => <span key={i}>{word}{i < all.length - 1 && <br />}</span>)}
          </h2>
          <div className="pain-illustration">
            {t.pain.cards.map(([title, sub], i) => (
              <div key={title} className="pain-icon-card">
                {painIcons[i]}
                <strong>{title}</strong>
                <span>{sub}</span>
              </div>
            ))}
          </div>
          <ul className="phase-points">
            {t.pain.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>

        <div className="transform-bridge">
          <span className="bridge-eyebrow">{t.bridge.eyebrow}</span>
          <p className="bridge-text">{t.bridge.text}</p>
          <Link href={t.consultHref} className="btn-primary">{t.bridge.cta}</Link>
        </div>

        <div className="transform-phase phase-vision">
          <span className="phase-label">{t.vision.label}</span>
          <h2 className="transform-headline vision-text">
            {t.vision.headline.map((word, i, all) => <span key={i}>{word}{i < all.length - 1 && <br />}</span>)}
          </h2>
          <div className="avatar-slot" aria-hidden="true" />
          <ul className="phase-points">
            {t.vision.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>

      </section>

      <div className="section-gap" />

      {/* ── JOURNEY TIMELINE ─────────────────────────────────── */}
      <JourneyTimeline lang={lang} />

      <div className="section-gap" />

      {/* ── CHAPTER 2 — YOUR PATH (services + process) ───────── */}
      <PathTimeline lang={lang} />

      <div className="section-gap" />

      {/* ── CHAPTER 3 — STUDENT STORIES ──────────────────────── */}
      <section className="testimonials-section" id="testimonials">
        <span className="section-eyebrow">{t.testimonials.eyebrow}</span>
        <h2 className="section-title">{t.testimonials.title}</h2>
        <div className="testi-grid">
          {t.testimonials.items.map(([quote, name, role]) => (
            <article key={name} className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>{quote}</p>
              <p className="testi-author"><strong>{name}</strong> • {role}</p>
            </article>
          ))}
        </div>
        <Link href={t.testimonials.moreHref} className="btn-ghost testi-more">{t.testimonials.more}</Link>
      </section>

      <div className="section-gap" />

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="cta-final">
        <h2 className="section-title">{t.final.title}</h2>
        <p className="section-sub">{t.final.sub}</p>
        <Link href={t.consultHref} className="btn-primary">{t.final.cta}</Link>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
