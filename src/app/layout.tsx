import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from './components/layout/Header';

const open_sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BrightBroom | Cleaner Bookings',
  description: 'Experience a simple way to book a cleaner on-demand.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={open_sans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
