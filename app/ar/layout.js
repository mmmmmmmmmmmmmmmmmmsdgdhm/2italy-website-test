// Everything under /ar renders right-to-left in Arabic
export default function ArabicLayout({ children }) {
  return (
    <div lang="ar" dir="rtl" className="lang-ar">
      {children}
    </div>
  );
}
