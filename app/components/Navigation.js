import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-nav">
      <div className="site-logo">
        <img src="/brand-assets/Asset 165000px.png" alt="2italy logo" width="34" height="34" />
        <span>2italy</span>
      </div>
      <ul className="site-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/resources">Resources</Link></li>
        <li><Link href="/universities">Universities</Link></li>
        <li><Link href="/consultation">Consultation</Link></li>
        <li><Link href="/tutorial">Tutorial</Link></li>
      </ul>
    </nav>
  );
}
