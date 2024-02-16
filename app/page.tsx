import React from 'react';
import Hero from '@/app/ui/home/Hero';
import HowItWorks from '@/app/ui/home/HowItWorks';
import IntroHome from '@/app/ui/home/IntroHome';
import OurFeatures from '@/app/ui/home/OurFeatures';
import CtaBanner from '@/app/ui/home/CtaBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroHome />
      <HowItWorks />
      <OurFeatures />
      <CtaBanner />
    </main>
  );
}
