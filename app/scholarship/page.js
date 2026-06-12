'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const regionalScholarships = [
  { region: 'Tuscany',              provider: 'DSU Toscana',                                    name: 'DSU Toscana Scholarship' },
  { region: 'Lombardy',             provider: 'EDiSU Lombardia',                                name: 'EDiSU Lombardia Scholarship' },
  { region: 'Lazio',                provider: 'LazioDisco',                                     name: 'LazioDisco Scholarship' },
  { region: 'Piedmont',             provider: 'EDiSU Piemonte',                                 name: 'EDiSU Piemonte Scholarship' },
  { region: 'Emilia-Romagna',       provider: 'ER.GO',                                          name: 'ER.GO Scholarship' },
  { region: 'Sicily',               provider: 'ERSU Palermo, ERSU Catania',                     name: 'ERSU Sicilia Scholarship' },
  { region: 'Veneto',               provider: 'ESU Veneto',                                     name: 'ESU Veneto Scholarship' },
  { region: 'Campania',             provider: 'ADISU Campania',                                  name: 'ADISU Campania Scholarship' },
  { region: 'Calabria',             provider: 'ARDIS Calabria',                                  name: 'ARDIS Calabria Scholarship' },
  { region: 'Apulia (Puglia)',       provider: 'ADISU Puglia',                                   name: 'ADISU Puglia Scholarship' },
  { region: 'Marche',               provider: 'ERDIS Marche',                                   name: 'ERDIS Marche Scholarship' },
  { region: 'Abruzzo',              provider: 'A.D.S.U Abruzzo',                                name: 'ADSU Abruzzo Scholarship' },
  { region: 'Liguria',              provider: 'ALiSEO Liguria',                                 name: 'ALiSEO Liguria Scholarship' },
  { region: 'Friuli Venezia Giulia',provider: 'ARDIS Friuli Venezia Giulia',                   name: 'ARDIS FVG Scholarship' },
  { region: 'Trentino-Alto Adige',  provider: 'Opera Universitaria Trento, Opera Universitaria Bolzano', name: 'Opera Universitaria Scholarship' },
  { region: 'Umbria',               provider: 'A.Di.S.U Umbria',                                name: 'ADiSU Umbria Scholarship' },
  { region: 'Molise',               provider: 'EDISU Molise',                                   name: 'EDISU Molise Scholarship' },
  { region: 'Basilicata',           provider: 'ARDSU Basilicata',                               name: 'ARDSU Basilicata Scholarship' },
  { region: 'Sardinia',             provider: 'ERSU Cagliari, ERSU Sassari',                    name: 'ERSU Sardinia Scholarship' },
  { region: 'Aosta Valley',         provider: "Università della Valle d'Aosta",                 name: 'Regional Scholarship Aosta' },
];

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

      {/* REGIONAL SCHOLARSHIPS TABLE */}
      <section className="regional-section">
        <span className="section-eyebrow">Regional Scholarships in Italy</span>
        <h2 className="section-title">Know What's Available</h2>
        <p className="section-sub">
          Italy's regional scholarship system covers tuition, housing, and living costs.
          Each region has its own provider — here's the full list.
        </p>

        <div className="reg-table-wrap">
          <table className="reg-table">
            <thead>
              <tr>
                <th>Region</th>
                <th>Scholarship Provider</th>
                <th>Scholarship Name</th>
              </tr>
            </thead>
            <tbody>
              {regionalScholarships.map((row, i) => (
                <tr key={i}>
                  <td className="reg-region">{row.region}</td>
                  <td>{row.provider}</td>
                  <td className="reg-name">{row.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
