import Hero from '@/app/components/sections/Hero';
import HowItWorks from '@/app/components/sections/HowItWorks';
import IntroHome from '@/app/components/sections/IntroHome';
import OurFeatures from './components/sections/OurFeatures';
import CtaBanner from './components/sections/CtaBanner';

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
