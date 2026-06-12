'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const videos = [
  {
    id: 'K89RRUGWGws',
    titleAr: 'احسب المخاطرة… قبل أن تحسب الندم',
    titleEn: 'Calculate the Risk Before You Calculate the Regret',
    tag: 'Mindset',
  },
  {
    id: 'CSBFnA_Mc5I',
    titleAr: '3 شروط لو نقصت واحدة… تُرفض في إيطاليا',
    titleEn: '3 Conditions — Miss One and You Get Rejected',
    tag: 'Admission',
  },
  {
    id: 'o_aLPytETTo',
    titleAr: 'إيطاليا ليست للجميع... التأخير في التقديم قد يكلّفك سنة كاملة',
    titleEn: 'Late Applications Can Cost You a Full Year',
    tag: 'Timing',
  },
];

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <article className="video-card">
      <div className="video-thumb-wrap" onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe
            className="video-iframe"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.titleEn}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={thumb}
              alt={video.titleEn}
              className="video-thumb"
              onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }}
            />
            <div className="video-play-btn" aria-label="Play video">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </>
        )}
      </div>

      <div className="video-meta">
        <span className="video-tag">{video.tag}</span>
        <p className="video-title-ar" dir="rtl" lang="ar">{video.titleAr}</p>
        <p className="video-title-en">{video.titleEn}</p>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="video-yt-link"
        >
          Watch on YouTube ↗
        </a>
      </div>
    </article>
  );
}

export default function Resources() {
  return (
    <main>
      <Navigation />

      {/* HERO */}
      <section className="page-hero resources-hero">
        <span className="page-hero-eyebrow">Free Videos</span>
        <h1 className="hero-headline">
          Watch. Learn. <span className="grad">Move to Italy.</span>
        </h1>
        <p className="hero-sub">
          Real talk about university applications, visa requirements, and life in Italy —
          straight from our team, in Arabic.
        </p>
        <a
          href="https://www.youtube.com/@2ItalyCo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary yt-channel-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ flexShrink: 0 }}>
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
          </svg>
          Visit our YouTube Channel
        </a>
      </section>

      {/* VIDEO GRID */}
      <section className="videos-section">
        <div className="videos-grid">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-block resources-cta">
        <span className="section-eyebrow">Ready for the next step?</span>
        <h2 className="section-title">Videos give you the overview. A call gives you a plan.</h2>
        <p className="section-sub">
          Book a free 30-minute consultation and get a personalised roadmap built around your background, goals, and timeline.
        </p>
        <Link href="/consultation" className="btn-primary">Book My Free Consultation →</Link>
      </section>

      <Footer />
    </main>
  );
}
