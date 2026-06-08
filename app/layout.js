import './globals.css';

export const metadata = {
  title: '2italy — Your Path to Italy, Made Simple.',
  description: '2italy helps students and young professionals study and build their careers in Italy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
