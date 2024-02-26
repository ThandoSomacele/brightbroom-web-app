import React from 'react';
import Image from 'next/image';
import CtaLinks from '@/app/ui/misc/CtaLinks';

function Hero() {
  return (
    <section
      id="hero"
      className="bg-light-onPrimaryContainer py-10 text-light-onPrimary md:py-16"
    >
      <div className="container flex h-full flex-row flex-wrap items-center justify-between gap-6">
        <div className="hero-left flex w-full flex-col gap-6 lg:w-[45%]">
          <h1 className="text__display-medium md:text__display-large text-light-primaryContainer ">
            Cleaner bookings made simple
          </h1>
          <p className="lg:text__headline-small text-lg ">
            Say goodbye to the hassle of finding and booking a cleaner &ndash;
            we&apos;ve got you covered. Experience the joy of a spotless home or
            office, without the stress.
          </p>
          <CtaLinks styleClasses={''} />
        </div>
        <div className="hero-right w-full lg:w-[45%]">
          <Image
            src={'/assets/hero.webp'}
            alt={'Cleaned living room'}
            width={486}
            height={509}
            priority
            className="h-80 rounded-xl object-cover object-bottom md:h-96 md:w-full lg:h-[509px] lg:w-[486px] lg:object-right-bottom"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
