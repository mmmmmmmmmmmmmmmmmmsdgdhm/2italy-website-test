'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const universities = [
  { name: "Politecnico di Milano", call: "", fee: 50, feeLabel: "€50", english: "proficiency", admission: "Oct 1, 2025", deadline: "Dec 1, 2025", status: "closed", cgpa: "Min 3.3 (PK)" },
  { name: "University of Padua", call: "1st Call", fee: 60, feeLabel: "€60", english: "proficiency", admission: "Nov 2, 2025", deadline: "Feb 2, 2026", status: "closed", cgpa: "Min 3.3 (PK)" },
  { name: "University of Macerata", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Jan 7, 2026", deadline: "Apr 24, 2026", status: "closed", cgpa: "None" },
  { name: "University of Milano-Bicocca", call: "1st Call", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Nov 5, 2025", deadline: "Jan 16, 2026", status: "closed", cgpa: "None" },
  { name: "University of Bergamo", call: "1st Call", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Nov 24, 2025", deadline: "Jan 15, 2026", status: "closed", cgpa: "None" },
  { name: "University of Pavia", call: "1st Call", fee: 35, feeLabel: "€35", english: "proficiency", admission: "Nov 12, 2025", deadline: "Nov 20, 2025", status: "closed", cgpa: "Min 2.65" },
  { name: "University of Genoa", call: "", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Nov 26, 2025", deadline: "Mar 20, 2026", status: "closed", cgpa: "75–82%" },
  { name: "University of Camerino", call: "", fee: 20, feeLabel: "€20", english: "proficiency", admission: "Nov 15, 2025", deadline: "Mar 31, 2026", status: "closed", cgpa: "Min 70% (PK)" },
  { name: "University of Turin", call: "", fee: 60, feeLabel: "€60", english: "ielts", admission: "Nov 26, 2025", deadline: "Jan 29, 2026", status: "closed", cgpa: "None" },
  { name: "University of Bologna", call: "", fee: 0, feeLabel: "Free / €20 / €50", english: "ielts", admission: "Nov 28, 2025", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Florence", call: "1st Call", fee: 20, feeLabel: "€20", english: "ielts", admission: "Dec 8, 2025", deadline: "Feb 6, 2026", status: "closed", cgpa: "None" },
  { name: "University of Florence", call: "2nd Call", fee: 20, feeLabel: "€20", english: "ielts", admission: "Feb 15, 2026", deadline: "Apr 17, 2026", status: "open", cgpa: "None" },
  { name: "Politecnico di Milano", call: "Architecture & Design", fee: 150, feeLabel: "€150", english: "proficiency", admission: "Feb 27, 2026", deadline: "Mar 31, 2026", status: "closed", cgpa: "Min 3.3 (PK)" },
  { name: "Sapienza University of Rome", call: "", fee: 30, feeLabel: "€30", english: "ielts", admission: "Dec 22, 2025", deadline: "May 15, 2026", status: "open", cgpa: "Varies" },
  { name: "University of L'Aquila", call: "", fee: 20, feeLabel: "€20", english: "proficiency", admission: "Dec 1, 2025", deadline: "Feb 25, 2026", status: "closed", cgpa: "None" },
  { name: "University of Pisa", call: "", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Dec 1, 2025", deadline: "Apr 30, 2026", status: "open", cgpa: "None" },
  { name: "Marche Polytechnic", call: "1st Call", fee: 10, feeLabel: "€10", english: "ielts", admission: "Dec 16, 2025", deadline: "Jan 30, 2026", status: "closed", cgpa: "None" },
  { name: "Marche Polytechnic", call: "2nd Call", fee: 10, feeLabel: "€10", english: "ielts", admission: "Mar 1, 2026", deadline: "Apr 30, 2026", status: "open", cgpa: "None" },
  { name: "Marche Polytechnic", call: "3rd Call", fee: 10, feeLabel: "€10", english: "ielts", admission: "Jun 1, 2026", deadline: "Jun 30, 2026", status: "open", cgpa: "None" },
  { name: "University of Trento", call: "", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Dec 18, 2025", deadline: "Mar 23, 2026", status: "closed", cgpa: "None" },
  { name: "Ca' Foscari University Venice", call: "", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Dec 17, 2025", deadline: "Jan 14, 2026", status: "closed", cgpa: "Min 2.8" },
  { name: "Polytechnic University of Turin", call: "1st Call", fee: 50, feeLabel: "€50", english: "proficiency", admission: "Dec 19, 2025", deadline: "Feb 14, 2026", status: "closed", cgpa: "None" },
  { name: "Polytechnic University of Turin", call: "2nd Call", fee: 50, feeLabel: "€50", english: "proficiency", admission: "Mar 3, 2026", deadline: "Apr 17, 2026", status: "open", cgpa: "None" },
  { name: "University of Bergamo", call: "2nd Call", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Jan 1, 2026", deadline: "Jan 30, 2026", status: "closed", cgpa: "None" },
  { name: "University of Siena", call: "", fee: 50, feeLabel: "€49.90", english: "proficiency", admission: "Nov 6, 2025", deadline: "May 6, 2026", status: "open", cgpa: "None" },
  { name: "University of Tuscia", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Jan 15, 2026", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Parma", call: "", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Jan 15, 2026", deadline: "Apr 17, 2026", status: "open", cgpa: "None" },
  { name: "University of Padua", call: "Limited Places", fee: 60, feeLabel: "€60", english: "proficiency", admission: "Jan 7, 2026", deadline: "—", status: "closed", cgpa: "Min 3.3 (PK)" },
  { name: "University of Pavia", call: "2nd Call", fee: 35, feeLabel: "€35", english: "proficiency", admission: "Jan 12, 2026", deadline: "Jan 20, 2026", status: "closed", cgpa: "Min 2.65" },
  { name: "University of Trieste", call: "1st Call", fee: 40, feeLabel: "€40", english: "proficiency", admission: "Dec 15, 2025", deadline: "Jan 15, 2026", status: "closed", cgpa: "None" },
  { name: "University of Trieste", call: "2nd Call", fee: 40, feeLabel: "€40", english: "proficiency", admission: "Feb 15, 2026", deadline: "Apr 30, 2026", status: "open", cgpa: "None" },
  { name: "University of Milano-Bicocca", call: "Limited Places", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Feb 10, 2026", deadline: "Mar 31, 2026", status: "closed", cgpa: "None" },
  { name: "Politecnico di Milano", call: "Engineering", fee: 150, feeLabel: "€150", english: "proficiency", admission: "Jan 13, 2026", deadline: "Feb 26, 2026", status: "closed", cgpa: "Min 3.3 (PK)" },
  { name: "University of Insubria", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Jan 15, 2026", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Tor Vergata", call: "", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Jan 21, 2026", deadline: "Apr 30, 2026", status: "open", cgpa: "Varies" },
  { name: "University of Milan", call: "", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Jan 22, 2026", deadline: "Open", status: "open", cgpa: "Varies" },
  { name: "University of Messina", call: "1st Call", fee: 30, feeLabel: "€30", english: "ielts", admission: "Nov 24, 2025", deadline: "Dec 22, 2025", status: "closed", cgpa: "None" },
  { name: "University of Messina", call: "2nd Call", fee: 30, feeLabel: "€30", english: "ielts", admission: "Feb 1, 2026", deadline: "Mar 31, 2026", status: "closed", cgpa: "None" },
  { name: "University of Messina", call: "3rd Call", fee: 30, feeLabel: "€30", english: "ielts", admission: "Apr 13, 2026", deadline: "May 10, 2026", status: "open", cgpa: "None" },
  { name: "University of Catania", call: "", fee: 10, feeLabel: "€10", english: "proficiency", admission: "Feb 10, 2026", deadline: "Mar 17, 2026", status: "closed", cgpa: "70% / 3.0" },
  { name: "University of Brescia", call: "", fee: 20, feeLabel: "€20", english: "proficiency", admission: "Feb 5, 2026", deadline: "—", status: "open", cgpa: "None" },
  { name: "University of Sassari", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Jan 10, 2026", deadline: "—", status: "closed", cgpa: "None" },
  { name: "University of Modena", call: "", fee: 20, feeLabel: "€20", english: "proficiency", admission: "Feb 10, 2026", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Cassino", call: "", fee: 15, feeLabel: "€15", english: "proficiency", admission: "Feb 13, 2026", deadline: "Apr 30, 2026", status: "open", cgpa: "Varies" },
  { name: "University of Milano-Bicocca", call: "2nd Call", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Mar 16, 2026", deadline: "Apr 16, 2026", status: "open", cgpa: "70% / 3.0" },
  { name: "University of Bozen-Bolzano", call: "", fee: 50, feeLabel: "€50", english: "proficiency", admission: "Jan 31, 2026", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Verona", call: "", fee: 50, feeLabel: "€50", english: "proficiency", admission: "Feb 2, 2026", deadline: "Mar 30, 2026", status: "closed", cgpa: "None" },
  { name: "University of Padua", call: "2nd Call", fee: 60, feeLabel: "€60", english: "proficiency", admission: "Mar 2, 2026", deadline: "May 2, 2026", status: "open", cgpa: "None" },
  { name: "University of Calabria", call: "", fee: 10, feeLabel: "€10", english: "proficiency", admission: "—", deadline: "Open", status: "open", cgpa: "Min 3.3 (PK)" },
  { name: "University of Pavia", call: "3rd Call", fee: 35, feeLabel: "€35", english: "proficiency", admission: "Mar 10, 2026", deadline: "Mar 18, 2026", status: "closed", cgpa: "None" },
  { name: "Polytechnic University of Bari", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "Roma Tre University", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "May 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University of Bari Aldo Moro", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University of Basilicata", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University Campania Luigi Vanvitelli", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Eastern Piedmont", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "—", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Ferrara", call: "", fee: 20, feeLabel: "€20", english: "proficiency", admission: "Jan 15, 2026", deadline: "Apr 30, 2026", status: "open", cgpa: "None" },
  { name: "University of Foggia", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Naples Federico II", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Naples Parthenope", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University of Palermo", call: "", fee: 0, feeLabel: "Free", english: "ielts", admission: "Jan 15, 2026", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Perugia", call: "", fee: 0, feeLabel: "Free", english: "ielts", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University of Salento", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University of Salerno", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University of Teramo", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Cagliari", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "—", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University of Udine", call: "", fee: 20, feeLabel: "€20", english: "proficiency", admission: "—", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Chieti-Pescara (d'Annunzio)", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "Magna Graecia University of Catanzaro", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "Mediterranean University of Reggio Calabria", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University of Molise", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "Open", status: "open", cgpa: "None" },
  { name: "University of Sannio", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "IUAV University of Venice", call: "Architecture & Design", fee: 30, feeLabel: "€30", english: "proficiency", admission: "Mar 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University of Valle d'Aosta", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "—", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "Scuola Normale Superiore", call: "Pisa — Highly Selective", fee: 0, feeLabel: "Free", english: "ielts", admission: "—", deadline: "—", status: "unknown", cgpa: "Varies" },
  { name: "University of Campania Luigi Vanvitelli", call: "2nd Round", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Jun 2026", deadline: "—", status: "unknown", cgpa: "None" },
  { name: "University of Enna Kore", call: "", fee: 0, feeLabel: "Free", english: "proficiency", admission: "Apr 3, 2026", deadline: "—", status: "unknown", cgpa: "None" },
];

const STATUS_LABELS = { open: 'Open', closed: 'Closed', unknown: 'TBC' };

export default function Universities() {
  const [search, setSearch]       = useState('');
  const [statusFilter, setStatus] = useState('all');
  const [feeFilter, setFee]       = useState('all');
  const [engFilter, setEng]       = useState('all');

  const filtered = useMemo(() => universities.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || u.status === statusFilter;
    const matchFee    = feeFilter === 'all' || (feeFilter === 'free' ? u.fee === 0 : u.fee > 0);
    const matchEng    = engFilter === 'all' || u.english === engFilter;
    return matchSearch && matchStatus && matchFee && matchEng;
  }), [search, statusFilter, feeFilter, engFilter]);

  return (
    <main>
      <Navigation />

      <section className="page-hero">
        <span className="page-hero-eyebrow">Universities</span>
        <h1 className="hero-headline">Italian public universities for global students</h1>
        <p className="hero-sub">We match you to the right program based on your GPA, budget, language level, and career goals — in one free call. No spreadsheets, no guesswork.</p>
      </section>

      {/* Filter + search bar */}
      <div className="uni-toolbar section-block">
        <input
          type="text"
          className="uni-search"
          placeholder="Search university..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="uni-filters">
          <div className="filter-group">
            <span className="filter-label">Status</span>
            {['all','open','closed','unknown'].map((v) => (
              <button key={v} className={`filter-btn ${statusFilter === v ? 'active' : ''}`} onClick={() => setStatus(v)}>
                {v === 'all' ? 'All' : STATUS_LABELS[v]}
              </button>
            ))}
          </div>
          <div className="filter-group">
            <span className="filter-label">Fee</span>
            {[['all','All'],['free','Free'],['paid','Paid']].map(([v,l]) => (
              <button key={v} className={`filter-btn ${feeFilter === v ? 'active' : ''}`} onClick={() => setFee(v)}>{l}</button>
            ))}
          </div>
          <div className="filter-group">
            <span className="filter-label">English</span>
            {[['all','All'],['proficiency','Proficiency'],['ielts','IELTS']].map(([v,l]) => (
              <button key={v} className={`filter-btn ${engFilter === v ? 'active' : ''}`} onClick={() => setEng(v)}>{l}</button>
            ))}
          </div>
        </div>
        <span className="uni-count">{filtered.length} of {universities.length} universities</span>
      </div>

      {/* Table */}
      <div className="section-block uni-table-wrap">
        <table className="uni-table">
          <thead>
            <tr>
              <th>University</th>
              <th>Fee</th>
              <th>English</th>
              <th>Admission Opens</th>
              <th>Deadline</th>
              <th>Min CGPA</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={7} className="uni-empty">No universities match your filters.</td></tr>
            ) : filtered.map((u, i) => (
              <tr key={i}>
                <td className="uni-name-cell">
                  <span className="uni-name">{u.name}</span>
                  {u.call && <span className="uni-call">{u.call}</span>}
                </td>
                <td><span className={`uni-fee ${u.fee === 0 ? 'free' : ''}`}>{u.feeLabel}</span></td>
                <td><span className={`uni-eng ${u.english}`}>{u.english === 'ielts' ? 'IELTS' : 'Proficiency'}</span></td>
                <td className="uni-date">{u.admission}</td>
                <td className="uni-date">{u.deadline}</td>
                <td className="uni-cgpa">{u.cgpa}</td>
                <td><span className={`uni-status ${u.status}`}>{STATUS_LABELS[u.status]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="section-block" style={{textAlign:'center'}}>
        <span className="section-eyebrow">Not sure which to pick?</span>
        <h2 className="section-title">We do the matching for you.</h2>
        <p className="section-sub">Tell us your GPA, budget, and goals — we will shortlist the best-fit universities and walk you through the application in one free call.</p>
        <Link href="/consultation" className="btn-primary">Get My University Shortlist — Free →</Link>
      </section>

      <Footer />
    </main>
  );
}
