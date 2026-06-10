'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
};

export default function Consultation() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(form),
      });
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  }

  return (
    <main>
      <Navigation />

      <section className="page-hero">
        <span className="page-hero-eyebrow">Free consultation · 30 minutes</span>
        {/* COPY: Outcome-focused headline */}
        <h1 className="hero-headline">Get your personal Italy roadmap — free.</h1>
        {/* COPY: Sub that pre-sells the call outcome */}
        <p className="hero-sub">Tell us about your background and goals. We will review your profile and map the fastest, clearest path to Italy — no obligation, no sales pitch.</p>
        <div className="hero-meta">Free 30-min call · No commitment · We reply within 24 hours</div>
      </section>

      {/* Mini testimonials */}
      <div className="mini-testi-row">
        <div className="mini-testi">
          <div className="testi-stars">★★★★★</div>
          {/* COPY */}
          <p>&ldquo;The consultation was eye-opening. In 30 minutes I had a clearer picture of my options than after weeks of research on my own.&rdquo;</p>
          <span className="testi-author"><strong>Layla M.</strong> · Bachelor applicant, Milan</span>
        </div>
        <div className="mini-testi">
          <div className="testi-stars">★★★★★</div>
          {/* COPY */}
          <p>&ldquo;I expected a sales call. Instead I got a real plan. They told me exactly what documents I needed and which universities matched my profile.&rdquo;</p>
          <span className="testi-author"><strong>Omar S.</strong> · Master&apos;s student, Bologna</span>
        </div>
      </div>

      {status === 'success' ? (
        <div className="app-form-wrap">
          <div className="app-form-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            {/* COPY: Success state */}
            <div className="app-form-success-icon">✓</div>
            <h2 className="section-title">Application received!</h2>
            <p className="section-sub">Our team will review your profile and contact you within 24 hours to confirm your consultation slot.</p>
            <p style={{ color: 'var(--teal)', fontWeight: 700, marginTop: '1rem' }}>Check your WhatsApp and email.</p>
          </div>
        </div>
      ) : (
        <div className="app-form-wrap">
          {/* Application form header */}
          <div className="app-form-header">
            <div className="app-form-header-left">
              <span className="app-form-label">Free Consultation Application</span>
              {/* COPY: Application framing — makes it feel official */}
              <h2 className="app-form-title">Tell us about yourself.</h2>
              <p className="app-form-desc">Fill in as much as you can — the more we know, the more useful your consultation will be. Takes about 3 minutes.</p>
            </div>
            <div className="app-form-header-right">
              <span className="app-form-badge">Free · 30 min · No obligation</span>
            </div>
          </div>

          <div className="app-form-card">
            <form onSubmit={handleSubmit}>

              {/* ── Personal info ── */}
              <div className="app-form-section">
                <div className="app-form-section-header">
                  <span className="app-form-section-num">01</span>
                  <span className="app-form-section-title">Personal Information</span>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full name <span className="req">*</span></label>
                    <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email <span className="req">*</span></label>
                    <input name="email" type="email" placeholder="hello@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Country <span className="req">*</span></label>
                    <input name="country" type="text" placeholder="Your country" value={form.country} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input name="city" type="text" placeholder="Your city" value={form.city} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>WhatsApp <span className="req">*</span></label>
                    <input name="whatsapp" type="tel" placeholder="+966 ..." value={form.whatsapp} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              {/* ── Academic profile ── */}
              <div className="app-form-section">
                <div className="app-form-section-header">
                  <span className="app-form-section-num">02</span>
                  <span className="app-form-section-title">Academic Profile</span>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Academic level <span className="req">*</span></label>
                    <select name="level" value={form.level} onChange={handleChange} required>
                      <option value="" disabled>Select level</option>
                      <option value="Foundation Year">Foundation Year</option>
                      <option value="Bachelor">Bachelor</option>
                      <option value="Master">Master</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Desired program</label>
                    <input name="program" type="text" placeholder="e.g. Computer Science, Architecture" value={form.program} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Current grade / GPA</label>
                    <select name="grade" value={form.grade} onChange={handleChange}>
                      <option value="" disabled>Select your grade</option>
                      <option value="Excellent (3.7+ / A)">Excellent (3.7+ / A)</option>
                      <option value="Very Good (3.3–3.7 / B+)">Very Good (3.3–3.7 / B+)</option>
                      <option value="Good (3.0–3.3 / B)">Good (3.0–3.3 / B)</option>
                      <option value="Average (2.5–3.0 / C+)">Average (2.5–3.0 / C+)</option>
                      <option value="Below Average (<2.5)">Below Average (&lt;2.5)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>English certificate</label>
                    <select name="englishCertificate" value={form.englishCertificate} onChange={handleChange}>
                      <option value="" disabled>Select certificate</option>
                      <option value="IELTS">IELTS</option>
                      <option value="TOEFL">TOEFL</option>
                      <option value="Duolingo">Duolingo</option>
                      <option value="Other">Other</option>
                      <option value="None yet">None yet</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ── Situation ── */}
              <div className="app-form-section">
                <div className="app-form-section-header">
                  <span className="app-form-section-num">03</span>
                  <span className="app-form-section-title">Your Situation</span>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    {/* COPY: Updated to €10,000 as per requirement */}
                    <label>Do you have proof of funds? <span className="form-label-hint">(€10,000 minimum for student visa)</span></label>
                    <select name="funds" value={form.funds} onChange={handleChange}>
                      <option value="" disabled>Select an option</option>
                      <option value="Yes">Yes, I have it</option>
                      <option value="Not yet">Not yet, but I can arrange it</option>
                      <option value="Not sure">Not sure — I need guidance</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Your goals — what do you want to achieve in Italy?</label>
                  <textarea name="goals" rows={4} placeholder="e.g. I want to study engineering in Milan, then stay and work in Italy after graduation..." value={form.goals} onChange={handleChange} style={{ resize: 'vertical' }} />
                </div>
              </div>

              {/* Submit */}
              <div className="app-form-submit">
                <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending your application...' : 'Submit My Application →'}
                </button>
                <p className="form-trust">Free · No commitment · We reply within 24 hours</p>
                {status === 'error' && (
                  <p className="form-error">
                    Something went wrong. Message us on WhatsApp: +963 990 681 443
                  </p>
                )}
              </div>

            </form>
          </div>
        </div>
      )}

      {/* What happens next */}
      <section className="section-block">
        <span className="section-eyebrow">What happens next</span>
        <h2 className="section-title">Three steps to your Italy plan.</h2>
        <div className="steps-timeline">
          <div className="step">
            <div className="step-num">01</div>
            <div>
              {/* COPY */}
              <h3>You submit the form</h3>
              <p>Takes about 3 minutes. No documents needed at this stage.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div>
              {/* COPY */}
              <h3>We review your profile</h3>
              <p>A senior consultant reviews your background and prepares your session. We confirm within 24 hours.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div>
              {/* COPY */}
              <h3>You get your roadmap</h3>
              <p>On the call we walk through your best universities, visa path, timeline, and costs — specific to your situation.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
