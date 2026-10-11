// English page → Arabic page. Add a line here when a new page is translated.
export const translatedPages = {
  '/': '/ar',
  '/consultation': '/ar/consultation',
  '/offers': '/ar/offers',
};

const toEnglish = Object.fromEntries(Object.entries(translatedPages).map(([en, ar]) => [ar, en]));

// Where the language switch should go from the current page.
// Pages without a translation send Arabic readers to the Arabic homepage (and vice versa).
export function otherLanguagePath(pathname, lang) {
  return lang === 'ar' ? toEnglish[pathname] ?? '/' : translatedPages[pathname] ?? '/ar';
}

// hreflang links for a translated page pair, for pageMetadata({ languages })
export function languageAlternates(enPath) {
  return { en: enPath, ar: translatedPages[enPath], 'x-default': enPath };
}
