import './globals.css';

export const metadata = {
  title: '2italy — Your Path to Italy, Made Simple.',
  description: '2italy helps students and young professionals study and build their careers in Italy.',
  icons: {
    icon: '/brand-assets/Asset 165000px.png',
    apple: '/brand-assets/Asset 165000px.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
