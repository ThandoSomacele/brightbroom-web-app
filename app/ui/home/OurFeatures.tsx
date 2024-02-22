import React from 'react';
import Image from 'next/image';
import CtaLinks from '@/ui/misc/CtaLinks';
import Features from '@/ui/home/Features';

const OurFeatures = () => {
  return (
    <section id="features" className="bg-palettes-primary-99 py-16">
      <div className="container flex flex-wrap justify-between gap-4">
        <div className="our-features-left flex w-full flex-col gap-6 lg:w-[40%]">
          <h2 className="text__display-small md:text__display-medium">
            Our Features
            <br />& Services
          </h2>
          <CtaLinks styleClasses={''} />
          <Image
            src={'/assets/our-features.webp '}
            alt={'Clean bedroom with open window'}
            width={404}
            height={277}
            className="w-full rounded-2xl object-cover md:h-80 lg:h-full"
            priority
          />
        </div>
        <div className="how-it-work-right w-full lg:w-[53%]">
          <Features />
        </div>
      </div>
    </section>
  );
};
export default OurFeatures;
