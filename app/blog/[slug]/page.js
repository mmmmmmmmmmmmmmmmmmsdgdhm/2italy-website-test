import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { posts, getPost } from '../posts';

const labels = {
  en: { back: '← All articles', cta: 'Book a Free Consultation →', other: 'اقرأ بالعربية', ctaTitle: 'Ready to start your Italy journey?' },
  ar: { back: 'كل المقالات →', cta: 'احجز استشارة مجانية ←', other: 'Read in English', ctaTitle: 'جاهز لبدء رحلتك إلى إيطاليا؟' },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | 2italy`,
    description: post.description,
    keywords: post.keywords?.join(', '),
    alternates: post.translation
      ? { languages: { [post.lang]: `/blog/${post.slug}`, [post.lang === 'en' ? 'ar' : 'en']: `/blog/${post.translation}` } }
      : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      locale: post.lang === 'ar' ? 'ar_AR' : 'en_US',
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const t = labels[post.lang];
  const isAr = post.lang === 'ar';
  const dateStr = new Date(post.date).toLocaleDateString(isAr ? 'ar' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <main>
      <Navigation />

      <article className={`post${isAr ? ' post-ar' : ''}`} lang={post.lang} dir={isAr ? 'rtl' : 'ltr'}>
        <div className="post-topbar">
          <Link href="/blog" className="post-back">{t.back}</Link>
          {post.translation && (
            <Link href={`/blog/${post.translation}`} className="post-lang-switch" lang={isAr ? 'en' : 'ar'}>
              {t.other}
            </Link>
          )}
        </div>

        <header className="post-header">
          <span className="blog-tag">{post.tag}</span>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span>{dateStr}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <p className="post-intro">{post.intro}</p>

        {post.sections.map((s) => (
          <section key={s.heading} className="post-section">
            <h2>{s.heading}</h2>
            {s.body.map((para, i) => <p key={i}>{para}</p>)}
          </section>
        ))}

        <div className="post-cta">
          <h2>{t.ctaTitle}</h2>
          <p>{post.conclusion}</p>
          <Link href="/consultation" className="btn-primary">{t.cta}</Link>
        </div>
      </article>

      <div className="section-gap" />

      <Footer />
    </main>
  );
}
