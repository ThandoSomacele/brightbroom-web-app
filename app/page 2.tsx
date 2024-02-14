import Hero from './components/home-sections/Hero';
import HowItWorks from './components/home-sections/HowItWorks';
import IntroHome from './components/home-sections/IntroHome';
import OurFeatures from './components/home-sections/OurFeatures';
import CtaBanner from './components/home-sections/CtaBanner';

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
