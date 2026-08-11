import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Portfolio',
  description: 'Simple Next.js site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
