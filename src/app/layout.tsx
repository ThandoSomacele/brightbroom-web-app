import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/app/components/layout/Header';
import '@/app/globals.css';
// import Meta from './components/layout/meta';
// import Footer from '@/app/components/layout/Footer';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BrightBroom | Cleaner Bookings Made Simple',
  generator: 'BrightBroom',
  applicationName: 'BrightBroom',
  referrer: 'origin-when-cross-origin',
  keywords: ['BrightBroom', 'Cleaners', 'Domestic Worker', 'Cleaning'],
  // authors: [{ name: 'Thando Somacele' }],
  creator: 'Thando Somacele',
  // publisher: 'Thando Somacele',
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  metadataBase: new URL('https://brightbroom.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
