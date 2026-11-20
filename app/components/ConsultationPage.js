'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import { dialCodes } from './countries';
import CountrySelect from './CountrySelect';

// After deploying your Google Apps Script, paste the web app URL here
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyWAN2qlpU0CWHmLvPs3_YIjx6k0g-oFL66ijaDNKkp46aaSeNFE0z8v9hRNst-pdV8/exec';
const WHATSAPP_NUMBER = '971581808979';

const initialForm = {
  name: '',
  email: '',
  country: '',
  city: '',
  whatsapp: '',
  level: '',
  program: '',
  grade: '',
  englishCertificate: '',
  funds: '',
  goals: '',
  vipCode: '',
};

// Option values stay in English so the Google Sheet is consistent across languages
const levelValues = ['Foundation Year', 'Bachelor', 'Master', 'PhD'];
const gradeValues = ['Excellent (3.7+ / A)', 'Very Good (3.3–3.7 / B+)', 'Good (3.0–3.3 / B)', 'Average (2.5–3.0 / C+)', 'Below Average (<2.5)'];
const englishValues = ['IELTS', 'TOEFL', 'Duolingo', 'Other', 'None yet'];
const fundsValues = ['Yes', 'Not yet', 'Not sure'];

const content = {
  en: {
    hero: {
      eyebrow: 'Free consultation · 30 minutes',
      title: 'Afraid of losing one more year?',
      sub: 'Book your specialised consultation call and know exactly what you will face — from your application until you settle in Italy.',
      meta: 'Free 30-min call · No commitment · We reply within 24 hours',
      price: ['FREE', '30-minute consultation'],
    },
    testimonials: [
      ['The consultation was eye-opening. In 30 minutes I had a clearer picture of my options than after weeks of research on my own.', 'Layla M.', 'Bachelor applicant, Milan'],
      ['I expected a sales call. Instead I got a real plan. They told me exactly what documents I needed and which universities matched my profile.', 'Omar S.', "Master's student, Bologna"],
    ],
    success: {
      title: 'Application received!',
      sub: 'Our team will review your profile and contact you within 24 hours to confirm your consultation slot.',
      note: 'Check your WhatsApp and email.',
      serial: 'Your reference number:',
    },
    gift: {
      title: <>Congratulations! Your consultation is <span className="gift-hl">100% free</span></>,
      sub: 'As a thank-you for applying, we have waived the €35 consultation fee. Your 30-minute call with a senior consultant is on us.',
      applied: 'Gift applied to application',
      appliedNoRef: 'Your gift is applied',
      off: '100% OFF',
      offSub: 'Consultation fee waived',
      claim: 'Claim instant booking on WhatsApp',
      later: 'Maybe later',
      close: 'Close',
      waMsg: (ref) => `Hi 2italy! I just applied for a consultation${ref ? ` (ref ${ref})` : ''} and I'd like to claim my free call and book my slot.`,
    },
    header: {
      label: 'Free Consultation Application',
      title: 'Tell us about yourself.',
      desc: 'Fill in as much as you can — the more we know, the more useful your consultation will be. Takes about 3 minutes.',
      badge: <><s>€35</s> Free · 30 min · No obligation</>,
    },
    sections: ['Your Studies', 'Your Situation', 'Where should we send your roadmap?'],
    stepOf: (n) => `Step ${n} of 3`,
    continueLabel: 'Continue →',
    back: '← Back',
    fields: {
      name: ['Full name', 'Your full name'],
      email: ['Email', 'hello@example.com'],
      country: ['Country', 'Start typing or pick your country'],
      city: ['City', 'Your city'],
      whatsapp: ['WhatsApp', '+966 ...'],
      level: ['Academic level', 'Select level'],
      program: ['Desired program', 'e.g. Computer Science, Architecture'],
      grade: ['Current grade / GPA', 'Select your grade'],
      englishCertificate: ['English certificate', 'Select certificate'],
      funds: ['Do you have proof of funds?', 'Select an option'],
      goals: ['Your goals — what do you want to achieve in Italy?', 'e.g. I want to study engineering in Milan, then stay and work in Italy after graduation...'],
      vipCode: ['VIP code', 'e.g. VIP2026'],
    },
    countryNoMatch: 'No country found',
    fundsHint: '(the student visa requires a guaranteed amount — we will tell you the exact figure on the call)',
    vipHint: '(optional — if you received one from us or an agent)',
    levelLabels: levelValues,
    gradeLabels: ['Excellent (3.7+ / A)', 'Very Good (3.3–3.7 / B+)', 'Good (3.0–3.3 / B)', 'Average (2.5–3.0 / C+)', 'Below Average (<2.5)'],
    englishLabels: englishValues,
    fundsLabels: ['Yes, I have it', 'Not yet, but I can arrange it', 'Not sure — I need guidance'],
    submit: 'Submit My Application →',
    submitting: 'Sending your application...',
    trust: 'Free · No commitment · We reply within 24 hours',
    consent: <>By submitting, you agree to our <Link href="/privacy">Privacy Policy</Link>.</>,
    error: 'Something went wrong. Message us on WhatsApp: +971 58 180 8979',
    callNote: 'A 30-minute call where our team gives you personal feedback based on your situation — the same consultation we offered every one of our students who are now in Italy.',
    next: {
      eyebrow: 'Your biggest worries, answered',
      title: 'The three questions every student asks us.',
      steps: [
        ['"What if my visa gets refused?"', 'Most refusals come from incomplete or inconsistent files, not bad luck. We prepare and check every document — admission letter, accommodation, insurance and proof of funds — and get you ready for your embassy appointment. That is how we keep an 84% visa approval rate.'],
        ['"My English isn\'t good enough."', 'You may not need IELTS. Many Italian universities accept a Medium of Instruction letter from your previous studies, Duolingo, or their own online interview. On the call we tell you exactly which universities accept your current level.'],
        ['"I don\'t have enough money for the guarantee."', 'The visa needs a guaranteed amount — often less than students fear. Public tuition in Italy is low, and the DSU scholarship can cover tuition, housing and meals. We calculate your exact guarantee and your full budget, so there are no surprises.'],
      ],
    },
  },

  ar: {
    hero: {
      eyebrow: 'استشارة مجانية · 30 دقيقة',
      title: 'هل تخاف أن تخسر سنة أخرى؟',
      sub: 'احجز مكالمتك الاستشارية المتخصصة واعرف بالضبط ما الذي ينتظرك — من التقديم حتى الاستقرار في إيطاليا.',
      meta: 'مكالمة مجانية 30 دقيقة · دون التزام · نرد خلال 24 ساعة',
      price: ['مجاناً', 'استشارة لمدة 30 دقيقة'],
    },
    testimonials: [
      ['كانت الاستشارة مفيدة جداً. خلال 30 دقيقة أصبحت خياراتي أوضح مما كانت بعد أسابيع من البحث وحدي.', 'ليلى م.', 'متقدّمة لمرحلة البكالوريوس، ميلانو'],
      ['توقعت مكالمة تسويقية، لكنني حصلت على خطة حقيقية. أخبروني بالضبط بالأوراق المطلوبة والجامعات المناسبة لملفي.', 'عمر س.', 'طالب ماجستير، بولونيا'],
    ],
    success: {
      title: 'تم استلام طلبك!',
      sub: 'سيراجع فريقنا ملفك ويتواصل معك خلال 24 ساعة لتأكيد موعد استشارتك.',
      note: 'تابع رسائل واتساب وبريدك الإلكتروني.',
      serial: 'رقم طلبك المرجعي:',
    },
    gift: {
      title: <>مبروك! استشارتك أصبحت <span className="gift-hl">مجانية 100%</span></>,
      sub: 'شكراً لتقديمك الطلب — لقد ألغينا رسوم الاستشارة البالغة €35. مكالمتك لمدة 30 دقيقة مع مستشار خبير علينا.',
      applied: 'تم تفعيل الهدية على الطلب',
      appliedNoRef: 'تم تفعيل هديتك',
      off: 'خصم 100%',
      offSub: 'تم إلغاء رسوم الاستشارة',
      claim: 'احجز موعدك فوراً عبر واتساب',
      later: 'لاحقاً',
      close: 'إغلاق',
      waMsg: (ref) => `مرحباً 2italy! قدّمت للتو طلب استشارة${ref ? ` (رقم الطلب ${ref})` : ''} وأريد الحصول على مكالمتي المجانية وحجز موعدي.`,
    },
    header: {
      label: 'طلب استشارة مجانية',
      title: 'أخبرنا عن نفسك.',
      desc: 'املأ أكبر قدر ممكن من المعلومات — كلما عرفنا أكثر، كانت استشارتك أكثر فائدة. يستغرق الأمر حوالي 3 دقائق.',
      badge: <><s dir="ltr">€35</s> مجاناً · 30 دقيقة · دون التزام</>,
    },
    sections: ['دراستك', 'وضعك الحالي', 'أين نرسل لك خطتك؟'],
    stepOf: (n) => `الخطوة ${n} من 3`,
    continueLabel: 'متابعة ←',
    back: '→ رجوع',
    fields: {
      name: ['الاسم الكامل', 'اسمك الكامل'],
      email: ['البريد الإلكتروني', 'hello@example.com'],
      country: ['الدولة', 'Start typing or pick your country'],
      city: ['المدينة', 'مدينتك'],
      whatsapp: ['واتساب', '+963 ...'],
      level: ['المرحلة الدراسية', 'اختر المرحلة'],
      program: ['التخصص المطلوب', 'مثال: علوم الحاسوب، العمارة'],
      grade: ['المعدل الحالي', 'اختر معدلك'],
      englishCertificate: ['شهادة اللغة الإنجليزية', 'اختر الشهادة'],
      funds: ['هل لديك إثبات مالي؟', 'اختر إجابة'],
      goals: ['أهدافك — ماذا تريد أن تحقق في إيطاليا؟', 'مثال: أريد دراسة الهندسة في ميلانو، ثم البقاء والعمل في إيطاليا بعد التخرج...'],
      vipCode: ['رمز VIP', 'مثال: VIP2026'],
    },
    countryNoMatch: 'No country found',
    fundsHint: '(تتطلب فيزا الدراسة مبلغاً مالياً مضموناً — سنخبرك بالمبلغ المطلوب بالضبط في المكالمة)',
    vipHint: '(اختياري — إذا حصلت عليه منا أو من أحد الوكلاء)',
    levelLabels: ['سنة تحضيرية', 'بكالوريوس', 'ماجستير', 'دكتوراه'],
    gradeLabels: ['ممتاز (3.7+ / A)', 'جيد جداً (3.3–3.7 / B+)', 'جيد (3.0–3.3 / B)', 'متوسط (2.5–3.0 / C+)', 'أقل من المتوسط (<2.5)'],
    englishLabels: ['IELTS', 'TOEFL', 'Duolingo', 'أخرى', 'لا أملك شهادة بعد'],
    fundsLabels: ['نعم، متوفر لدي', 'ليس بعد، لكن يمكنني تأمينه', 'لست متأكداً — أحتاج إلى توجيه'],
    submit: 'أرسل طلبي ←',
    submitting: 'جارٍ إرسال طلبك...',
    trust: 'مجاناً · دون التزام · نرد خلال 24 ساعة',
    consent: <>بإرسال الطلب، أنت توافق على <Link href="/privacy">سياسة الخصوصية</Link>.</>,
    error: <>حدث خطأ ما. راسلنا على واتساب: <bdi dir="ltr">+971 58 180 8979</bdi></>,
    callNote: 'مكالمة لمدة 30 دقيقة يقدّم لك فيها فريقنا رأياً شخصياً بناءً على وضعك — وهي نفس الاستشارة التي قدّمناها لكل طلابنا الموجودين اليوم في إيطاليا.',
    next: {
      eyebrow: 'إجابات عن أكبر مخاوفك',
      title: 'الأسئلة الثلاثة التي يسألنا عنها كل طالب.',
      steps: [
        ['"ماذا لو رُفضت الفيزا؟"', 'معظم حالات الرفض سببها ملف ناقص أو غير متناسق، وليس الحظ. نجهّز ونراجع كل ورقة — خطاب القبول، والسكن، والتأمين، والإثبات المالي — ونحضّرك لموعد السفارة. وبهذا نحافظ على نسبة قبول فيزا 84%.'],
        ['"لغتي الإنجليزية ليست جيدة بما يكفي."', 'قد لا تحتاج إلى IELTS. كثير من الجامعات الإيطالية تقبل شهادة لغة التدريس (Medium of Instruction) من دراستك السابقة، أو Duolingo، أو مقابلة أونلاين خاصة بها. في المكالمة نخبرك بالضبط أي الجامعات تقبل مستواك الحالي.'],
        ['"لا أملك مالاً كافياً للضمان المالي."', 'تتطلب الفيزا مبلغاً مالياً مضموناً — وغالباً يكون أقل مما يخشاه الطلاب. الرسوم في الجامعات الحكومية الإيطالية منخفضة، ومنحة DSU قد تغطي الرسوم والسكن والطعام. نحسب لك مبلغ الضمان بالضبط وميزانيتك الكاملة، حتى لا تتفاجأ بأي شيء.'],
      ],
    },
  },
};

function Options({ values, labels, placeholder }) {
  return (
    <>
      <option value="" disabled>{placeholder}</option>
      {values.map((v, i) => <option key={v} value={v}>{labels[i]}</option>)}
    </>
  );
}

function GiftPopup({ g, serial, waLink, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="gift-overlay" onClick={onClose}>
      <div className="gift-modal" role="dialog" aria-modal="true" aria-labelledby="gift-title" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="gift-close" onClick={onClose} aria-label={g.close}>×</button>
        <div className="gift-icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5" />
          </svg>
        </div>
        <h2 id="gift-title" className="gift-title">{g.title}</h2>
        <p className="gift-sub">{g.sub}</p>

        <div className="gift-ticket">
          <div className="gift-ticket-top">
            <span className="gift-ticket-check">✓</span>
            {serial ? <>{g.applied} <strong dir="ltr">{serial}</strong></> : g.appliedNoRef}
          </div>
          <div className="gift-ticket-body">
            <div className="gift-ticket-cell">
              <div className="gift-price"><s>€35</s> <span>€0</span></div>
            </div>
            <div className="gift-ticket-cell">
              <div className="gift-off">{g.off}</div>
              <div className="gift-off-sub">{g.offSub}</div>
            </div>
          </div>
        </div>

        <a href={waLink} target="_blank" rel="noopener noreferrer" className="gift-claim">{g.claim}</a>
        <button type="button" className="gift-later" onClick={onClose}>{g.later}</button>
      </div>
    </div>
  );
}

export default function ConsultationPage({ lang = 'en' }) {
  const t = content[lang];
  const f = t.fields;
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serial, setSerial] = useState('');
  const [showGift, setShowGift] = useState(false);
  const [step, setStep] = useState(1);
  const cardRef = useRef(null);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.gift.waMsg(serial))}`;

  // Agents can share links like /consultation?code=AGENT10 to pre-fill the VIP code
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) setForm((prev) => ({ ...prev, vipCode: code.trim().slice(0, 50) }));
  }, []);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Picking a country puts its dialling code in the WhatsApp field, swapping out the
  // previous country's code but leaving any number the user already typed after it
  function handleCountrySelect(country) {
    const code = dialCodes[country];
    setForm((prev) => {
      const prevCode = dialCodes[prev.country];
      let whatsapp = prev.whatsapp;
      if (code) {
        if (!whatsapp.trim()) whatsapp = `${code} `;
        else if (prevCode && whatsapp.startsWith(prevCode)) whatsapp = code + whatsapp.slice(prevCode.length);
      }
      return { ...prev, country, whatsapp };
    });
  }

  // Only the current step's fields are rendered, so the browser's required-field check covers just that step
  function goToStep(n) {
    setStep(n);
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (step < 3) return goToStep(step + 1);
    if (!dialCodes[form.country]) return;
    setStatus('submitting');
    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ ...form, language: lang }),
      });
      // The sheet assigns the serial; if the reply can't be read, still show success
      try {
        const reply = await res.json();
        if (reply.serial) setSerial(reply.serial);
      } catch {}
      setStatus('success');
      setShowGift(true);
      setForm(initialForm);
      setStep(1);
    } catch {
      setStatus('error');
    }
  }

  const req = <span className="req">*</span>;

  return (
    <main>
      <Navigation lang={lang} />

      <section className="page-hero">
        <span className="page-hero-eyebrow">{t.hero.eyebrow}</span>
        <h1 className="hero-headline">{t.hero.title}</h1>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="hero-meta">{t.hero.meta}</div>
        <div className="consult-price">
          <s dir="ltr">€35</s>
          <strong>{t.hero.price[0]}</strong>
          <span>{t.hero.price[1]}</span>
        </div>
      </section>

      {/* Mini testimonials */}
      <div className="mini-testi-row">
        {t.testimonials.map(([quote, name, role]) => (
          <div key={name} className="mini-testi">
            <div className="testi-stars">★★★★★</div>
            <p>&ldquo;{quote}&rdquo;</p>
            <span className="testi-author"><strong>{name}</strong> · {role}</span>
          </div>
        ))}
      </div>

      {status === 'success' ? (
        <div className="app-form-wrap">
          <div className="app-form-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div className="app-form-success-icon">✓</div>
            <h2 className="section-title">{t.success.title}</h2>
            <p className="section-sub">{t.success.sub}</p>
            {serial && (
              <p style={{ fontWeight: 600, marginTop: '1rem' }}>
                {t.success.serial} <strong style={{ color: 'var(--forest)', fontSize: '1.2rem' }} dir="ltr">{serial}</strong>
              </p>
            )}
            <p style={{ color: 'var(--teal)', fontWeight: 700, marginTop: '1rem' }}>{t.success.note}</p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="gift-claim" style={{ display: 'inline-block', width: 'auto', marginTop: '1.2rem' }}>
              {t.gift.claim}
            </a>
          </div>
          {showGift && <GiftPopup g={t.gift} serial={serial} waLink={waLink} onClose={() => setShowGift(false)} />}
        </div>
      ) : (
        <div className="app-form-wrap">
          {/* Application form header */}
          <div className="app-form-header">
            <div className="app-form-header-left">
              <span className="app-form-label">{t.header.label}</span>
              <h2 className="app-form-title">{t.header.title}</h2>
              <p className="app-form-desc">{t.header.desc}</p>
            </div>
            <div className="app-form-header-right">
              <span className="app-form-badge">{t.header.badge}</span>
            </div>
          </div>

          <div className="app-form-card" ref={cardRef}>
            <form onSubmit={handleSubmit}>

              <div className="form-steps" aria-live="polite">
                <div className="form-steps-label">{t.stepOf(step)}</div>
                <div className="form-steps-bar">
                  {[1, 2, 3].map((n) => <span key={n} className={n <= step ? 'is-done' : ''} />)}
                </div>
              </div>

              {/* ── Step 3: personal info ── */}
              {step === 3 && <div className="app-form-section">
                <div className="app-form-section-header">
                  <span className="app-form-section-num">03</span>
                  <span className="app-form-section-title">{t.sections[2]}</span>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{f.name[0]} {req}</label>
                    <input name="name" type="text" placeholder={f.name[1]} value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>{f.email[0]} {req}</label>
                    <input name="email" type="email" dir="ltr" placeholder={f.email[1]} value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{f.country[0]} {req}</label>
                    <CountrySelect value={form.country} onSelect={handleCountrySelect} placeholder={f.country[1]} noMatch={t.countryNoMatch} />
                  </div>
                  <div className="form-group">
                    <label>{f.city[0]}</label>
                    <input name="city" type="text" placeholder={f.city[1]} value={form.city} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{f.whatsapp[0]} {req}</label>
                    <input name="whatsapp" type="tel" dir="ltr" placeholder={f.whatsapp[1]} value={form.whatsapp} onChange={handleChange} required />
                  </div>
                </div>
              </div>}

              {/* ── Step 1: academic profile ── */}
              {step === 1 && <div className="app-form-section">
                <div className="app-form-section-header">
                  <span className="app-form-section-num">01</span>
                  <span className="app-form-section-title">{t.sections[0]}</span>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{f.level[0]} {req}</label>
                    <select name="level" value={form.level} onChange={handleChange} required>
                      <Options values={levelValues} labels={t.levelLabels} placeholder={f.level[1]} />
                    </select>
                  </div>
                  <div className="form-group">
                    <label>{f.program[0]}</label>
                    <input name="program" type="text" placeholder={f.program[1]} value={form.program} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{f.grade[0]}</label>
                    <select name="grade" value={form.grade} onChange={handleChange}>
                      <Options values={gradeValues} labels={t.gradeLabels} placeholder={f.grade[1]} />
                    </select>
                  </div>
                  <div className="form-group">
                    <label>{f.englishCertificate[0]}</label>
                    <select name="englishCertificate" value={form.englishCertificate} onChange={handleChange}>
                      <Options values={englishValues} labels={t.englishLabels} placeholder={f.englishCertificate[1]} />
                    </select>
                  </div>
                </div>
              </div>}

              {/* ── Step 2: situation ── */}
              {step === 2 && <div className="app-form-section">
                <div className="app-form-section-header">
                  <span className="app-form-section-num">02</span>
                  <span className="app-form-section-title">{t.sections[1]}</span>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{f.funds[0]} <span className="form-label-hint">{t.fundsHint}</span></label>
                    <select name="funds" value={form.funds} onChange={handleChange}>
                      <Options values={fundsValues} labels={t.fundsLabels} placeholder={f.funds[1]} />
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>{f.goals[0]}</label>
                  <textarea name="goals" rows={4} placeholder={f.goals[1]} value={form.goals} onChange={handleChange} style={{ resize: 'vertical' }} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{f.vipCode[0]} <span className="form-label-hint">{t.vipHint}</span></label>
                    <input name="vipCode" type="text" placeholder={f.vipCode[1]} maxLength={50} value={form.vipCode} onChange={handleChange} />
                  </div>
                </div>
              </div>}

              {/* Continue / submit */}
              <div className="app-form-submit">
                <div className="form-step-actions">
                  {step > 1 && (
                    <button type="button" className="form-step-back" onClick={() => goToStep(step - 1)}>{t.back}</button>
                  )}
                  <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
                    {step < 3 ? t.continueLabel : status === 'submitting' ? t.submitting : t.submit}
                  </button>
                </div>
                <p className="form-trust">{t.trust}</p>
                {step === 3 && <p className="form-consent">{t.consent}</p>}
                {status === 'error' && <p className="form-error">{t.error}</p>}
              </div>

            </form>
          </div>
          <p className="app-form-call-note">{t.callNote}</p>
        </div>
      )}

      {/* Answers to the three most common objections: visa, English, money */}
      <section className="section-block">
        <span className="section-eyebrow">{t.next.eyebrow}</span>
        <h2 className="section-title">{t.next.title}</h2>
        <div className="steps-timeline">
          {t.next.steps.map(([title, desc], i) => (
            <div key={title} className="step">
              <div className="step-num" aria-hidden="true">{['✈', 'A', '€'][i]}</div>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
