import Hero from '@/app/components/parts/Hero';
import HowItWorks from '@/app/components/parts/HowItWorks';
import IntroHome from '@/app/components/parts/IntroHome';

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroHome />
      <HowItWorks />
    </main>
  );
}
