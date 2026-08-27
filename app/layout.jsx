import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Kunita Kousei | Portfolio',
  description: 'Kunita Kouseiのポートフォリオサイト',
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
