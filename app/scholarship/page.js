'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Scholarship() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  }

  return (
    <main>
      <Navigation />

      {/* HERO */}
      <section className="page-hero scholarship-hero">
        <div className="coming-soon-pill">
          <span className="cs-dot" aria-hidden="true" />
          Coming Soon
        </div>

        <h1 className="hero-headline scholarship-headline">
          We Do It All &mdash;<br />
          <span className="grad">For Free.</span> For a Few.
        </h1>

        <p className="hero-sub scholarship-sub">
          Each year, we fully sponsor a small number of students through the entire journey &mdash; admission, visa, and relocation &mdash; at zero cost. We believe finances should never block talent.
        </p>

        <div className="scholarship-status">
          <p>
            Applications aren&rsquo;t open yet. Eligibility requirements and the number of available spots will be announced here soon. Drop your details below and we&rsquo;ll notify you the moment they open.
          </p>
        </div>
      </section>

      {/* WAITLIST */}
      <section className="waitlist-section">
        <span className="section-eyebrow">Join the Waitlist</span>

        {submitted ? (
          <div className="waitlist-success">
            <span className="success-icon">✓</span>
            <strong>You&rsquo;re on the list.</strong>
            <br />
            We&rsquo;ll reach out as soon as applications open. Keep an eye on your inbox.
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
              className="waitlist-input"
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="waitlist-input"
            />
            <button type="submit" className="btn-primary waitlist-btn">
              Notify Me When It Opens
            </button>
          </form>
        )}
      </section>

      {/* BRAND LINE */}
      <section className="brand-line-section">
        <p className="brand-line-text">
          &ldquo;This is part of our mission &mdash;{' '}
          <strong>we&rsquo;re not just a service, we&rsquo;re your partner for Italy.</strong>&rdquo;
        </p>
      </section>

      <Footer />
    </main>
  );
}
