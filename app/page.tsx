import React from 'react';
import Hero from './ui/home-sections/Hero';
import HowItWorks from './ui/home-sections/HowItWorks';
import IntroHome from './ui/home-sections/IntroHome';
import OurFeatures from './ui/home-sections/OurFeatures';
import CtaBanner from './ui/home-sections/CtaBanner';

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
