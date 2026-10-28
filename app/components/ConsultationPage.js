'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';

// After deploying your Google Apps Script, paste the web app URL here
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyWAN2qlpU0CWHmLvPs3_YIjx6k0g-oFL66ijaDNKkp46aaSeNFE0z8v9hRNst-pdV8/exec';

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
      title: 'Get your personal Italy roadmap — free.',
      sub: 'Tell us about your background and goals. We will review your profile and map the fastest, clearest path to Italy — no obligation, no sales pitch.',
      meta: 'Free 30-min call · No commitment · We reply within 24 hours',
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
    header: {
      label: 'Free Consultation Application',
      title: 'Tell us about yourself.',
      desc: 'Fill in as much as you can — the more we know, the more useful your consultation will be. Takes about 3 minutes.',
      badge: 'Free · 30 min · No obligation',
    },
    sections: ['Personal Information', 'Academic Profile', 'Your Situation'],
    fields: {
      name: ['Full name', 'Your full name'],
      email: ['Email', 'hello@example.com'],
      country: ['Country', 'Your country'],
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
    fundsHint: '(€10,000 minimum for student visa)',
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
    next: {
      eyebrow: 'What happens next',
      title: 'Three steps to your Italy plan.',
      steps: [
        ['You submit the form', 'Takes about 3 minutes. No documents needed at this stage.'],
        ['We review your profile', 'A senior consultant reviews your background and prepares your session. We confirm within 24 hours.'],
        ['You get your roadmap', 'On the call we walk through your best universities, visa path, timeline, and costs — specific to your situation.'],
      ],
    },
  },

  ar: {
    hero: {
      eyebrow: 'استشارة مجانية · 30 دقيقة',
      title: 'احصل على خطتك الشخصية للدراسة في إيطاليا — مجاناً.',
      sub: 'أخبرنا عن خلفيتك وأهدافك. سنراجع ملفك ونرسم لك أسرع وأوضح طريق إلى إيطاليا — دون أي التزام ودون محاولات بيع.',
      meta: 'مكالمة مجانية 30 دقيقة · دون التزام · نرد خلال 24 ساعة',
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
    header: {
      label: 'طلب استشارة مجانية',
      title: 'أخبرنا عن نفسك.',
      desc: 'املأ أكبر قدر ممكن من المعلومات — كلما عرفنا أكثر، كانت استشارتك أكثر فائدة. يستغرق الأمر حوالي 3 دقائق.',
      badge: 'مجاناً · 30 دقيقة · دون التزام',
    },
    sections: ['المعلومات الشخصية', 'الملف الأكاديمي', 'وضعك الحالي'],
    fields: {
      name: ['الاسم الكامل', 'اسمك الكامل'],
      email: ['البريد الإلكتروني', 'hello@example.com'],
      country: ['الدولة', 'دولتك'],
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
    fundsHint: '(الحد الأدنى €10,000 لفيزا الدراسة)',
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
    next: {
      eyebrow: 'ماذا يحدث بعد ذلك',
      title: 'ثلاث خطوات نحو خطتك في إيطاليا.',
      steps: [
        ['ترسل الطلب', 'يستغرق حوالي 3 دقائق. لا حاجة لأي أوراق في هذه المرحلة.'],
        ['نراجع ملفك', 'يراجع مستشار خبير خلفيتك ويحضّر لجلستك. نؤكد الموعد خلال 24 ساعة.'],
        ['تحصل على خطتك', 'خلال المكالمة نستعرض معك أفضل الجامعات، ومسار الفيزا، والجدول الزمني، والتكاليف — بحسب وضعك تحديداً.'],
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

export default function ConsultationPage({ lang = 'en' }) {
  const t = content[lang];
  const f = t.fields;
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serial, setSerial] = useState('');

  // Agents can share links like /consultation?code=AGENT10 to pre-fill the VIP code
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) setForm((prev) => ({ ...prev, vipCode: code.trim().slice(0, 50) }));
  }, []);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
      setForm(initialForm);
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
          </div>
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

          <div className="app-form-card">
            <form onSubmit={handleSubmit}>

              {/* ── Personal info ── */}
              <div className="app-form-section">
                <div className="app-form-section-header">
                  <span className="app-form-section-num">01</span>
                  <span className="app-form-section-title">{t.sections[0]}</span>
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
                    <input name="country" type="text" placeholder={f.country[1]} value={form.country} onChange={handleChange} required />
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
              </div>

              {/* ── Academic profile ── */}
              <div className="app-form-section">
                <div className="app-form-section-header">
                  <span className="app-form-section-num">02</span>
                  <span className="app-form-section-title">{t.sections[1]}</span>
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
              </div>

              {/* ── Situation ── */}
              <div className="app-form-section">
                <div className="app-form-section-header">
                  <span className="app-form-section-num">03</span>
                  <span className="app-form-section-title">{t.sections[2]}</span>
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
              </div>

              {/* Submit */}
              <div className="app-form-submit">
                <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? t.submitting : t.submit}
                </button>
                <p className="form-trust">{t.trust}</p>
                <p className="form-consent">{t.consent}</p>
                {status === 'error' && <p className="form-error">{t.error}</p>}
              </div>

            </form>
          </div>
        </div>
      )}

      {/* What happens next */}
      <section className="section-block">
        <span className="section-eyebrow">{t.next.eyebrow}</span>
        <h2 className="section-title">{t.next.title}</h2>
        <div className="steps-timeline">
          {t.next.steps.map(([title, desc], i) => (
            <div key={title} className="step">
              <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
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
