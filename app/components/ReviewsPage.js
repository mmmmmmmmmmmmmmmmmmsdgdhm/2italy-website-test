import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import TrustpilotWidget, { TRUSTPILOT_URL, TRUSTPILOT_REVIEW_URL } from './TrustpilotWidget';

// Student video reviews on YouTube. Add one line per video once students send them:
// { id: 'YOUTUBE_VIDEO_ID', name: 'Ahmad K.', place: 'University of Bologna' },
const videos = [];

const WHATSAPP = '971581808979';

const content = {
  en: {
    consultHref: '/consultation',
    eyebrow: 'Reviews',
    title: <>What our students <span className="grad">say</span></>,
    sub: 'Honest reviews from students we have helped get to Italy — collected independently, so you can trust what you read.',
    trust: {
      title: 'Independent reviews on Trustpilot',
      text: 'Our reviews are collected and published by Trustpilot, an independent review platform. We can’t edit them or pick which ones appear — so what you read is what our students really think.',
      write: 'Write a review',
      read: 'Read all reviews',
      widgetFallback: 'Review us on Trustpilot',
    },
    videos: {
      title: 'Student video stories',
      empty: 'Our first student video stories are coming soon.',
      share: 'Are you a 2italy student? Share your story on video',
      steps: [
        'Record a 30–60 second video on your phone — ideally in Italy.',
        'Tell us who you are, where you study, and how we helped.',
        'Send it to us on WhatsApp. With your permission, we’ll share it on our YouTube channel.',
      ],
      cta: 'Send my video on WhatsApp',
      waText: 'Hi 2italy, I’d like to share my video review.',
    },
    final: {
      title: 'Ready to write your own success story?',
      sub: 'Book a free 30-minute consultation and get a clear plan for studying in Italy.',
      cta: 'Book a Free Consultation →',
    },
  },
  ar: {
    consultHref: '/ar/consultation',
    eyebrow: 'التقييمات',
    title: <>ماذا يقول <span className="grad">طلابنا</span></>,
    sub: 'تقييمات صادقة من طلاب ساعدناهم في الوصول إلى إيطاليا — تُجمع بشكل مستقل، لتثق بما تقرأ.',
    trust: {
      title: 'تقييمات مستقلة على Trustpilot',
      text: 'تُجمع تقييماتنا وتُنشر عبر Trustpilot، وهي منصة تقييم مستقلة. لا يمكننا تعديلها أو اختيار ما يظهر منها — لذلك ما تقرأه هو رأي طلابنا الحقيقي.',
      write: 'اكتب تقييمك',
      read: 'اقرأ كل التقييمات',
      widgetFallback: 'قيّمنا على Trustpilot',
    },
    videos: {
      title: 'قصص طلابنا بالفيديو',
      empty: 'أولى قصص طلابنا بالفيديو قادمة قريباً.',
      share: 'هل أنت طالب لدى 2italy؟ شاركنا قصتك بالفيديو',
      steps: [
        'سجّل فيديو مدته 30 إلى 60 ثانية من هاتفك — ويفضّل أن يكون في إيطاليا.',
        'عرّفنا بنفسك، وأين تدرس، وكيف ساعدناك.',
        'أرسله لنا على واتساب. وبعد موافقتك، سننشره على قناتنا في يوتيوب.',
      ],
      cta: 'أرسل الفيديو على واتساب',
      waText: 'مرحباً 2italy، أود مشاركة تقييمي بالفيديو.',
    },
    final: {
      title: 'جاهز لتكتب قصة نجاحك؟',
      sub: 'احجز استشارة مجانية لمدة 30 دقيقة واحصل على خطة واضحة للدراسة في إيطاليا.',
      cta: 'احجز استشارة مجانية ←',
    },
  },
};

export default function ReviewsPage({ lang = 'en' }) {
  const t = content[lang];

  return (
    <main>
      <Navigation lang={lang} />

      <section className="page-hero">
        <span className="page-hero-eyebrow">{t.eyebrow}</span>
        <h1 className="hero-headline">{t.title}</h1>
        <p className="hero-sub">{t.sub}</p>
      </section>

      {/* Trustpilot */}
      <section className="section-block reviews-trust">
        <h2 className="reviews-heading">{t.trust.title}</h2>
        <p className="reviews-text">{t.trust.text}</p>
        <div className="reviews-widget">
          <TrustpilotWidget template="reviewCollector" fallback={t.trust.widgetFallback} />
        </div>
        <div className="hero-cta-row reviews-actions">
          <a href={TRUSTPILOT_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">{t.trust.write}</a>
          <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">{t.trust.read}</a>
        </div>
      </section>

      {/* Video stories */}
      <section className="section-block">
        <h2 className="reviews-heading">{t.videos.title}</h2>
        {videos.length > 0 ? (
          <div className="reviews-video-grid">
            {videos.map((v) => (
              <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className="reviews-video">
                <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={`${v.name} — ${v.place}`} loading="lazy" />
                <span className="reviews-video-play" aria-hidden="true">▶</span>
                <span className="reviews-video-caption"><strong>{v.name}</strong> · {v.place}</span>
              </a>
            ))}
          </div>
        ) : (
          <p className="reviews-text">{t.videos.empty}</p>
        )}

        <div className="reviews-share">
          <h3>{t.videos.share}</h3>
          <ol>
            {t.videos.steps.map((s) => <li key={s}>{s}</li>)}
          </ol>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.videos.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.videos.cta}
          </a>
        </div>
      </section>

      <section className="cta-final">
        <h2 className="section-title">{t.final.title}</h2>
        <p className="section-sub">{t.final.sub}</p>
        <Link href={t.consultHref} className="btn-primary">{t.final.cta}</Link>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
