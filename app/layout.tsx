import React from 'react';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/app/ui/main-layout/Header';
import '@/app/ui/global.css';
import Footer from '@/app/ui/main-layout/Footer';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | BrightBroom',
    default: ' BrightBroom | Cleaner Bookings Made Simple',
  },
  description:
    'Experience a simple way to book a cleaner on-demand with BrightBroom.com',
  metadataBase: new URL('http://brightbroom.vercel.app/'),
  generator: 'BrightBroom',
  applicationName: 'BrightBroom',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'BrightBroom',
    'Cleaners',
    'Domestic Worker',
    'Cleaning',
    'Home',
    'House',
  ],
  // authors: [{ name: 'Thando Somacele' }],
  creator: 'Thando Somacele',
  // publisher: 'Thando Somacele',
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/en-GB',
      'en-ZA': '/en-ZA',
    },
  },
  openGraph: {
    title: 'BrightBroom Cleaner Bookings',
    description:
      'Experience a simple way to book a cleaner on-demand with BrightBroom.com',
    images: '/opengraph-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
