import React from 'react';
import Image from 'next/image';
import CtaLinks from '../misc/CtaLinks';
import Features from './Features';

const OurFeatures = () => {
  return (
    <section id='features' className='py-16 bg-palettes-primary-99'>
      <div className='container flex flex-wrap justify-between gap-4'>
        <div className='our-features-left w-full lg:w-[40%] flex flex-col gap-6'>
          <h2 className='text__display-small md:text__display-medium'>
            Our Features
            <br />& Services
          </h2>
          <CtaLinks styleClasses={''} />
          <Image
            src={'/assets/our-features.webp '}
            alt={'Clean bedroom with open window'}
            width={404}
            height={277}
            className='w-full md:h-80 lg:h-full object-cover rounded-2xl'
            priority
          />
        </div>
        <div className='how-it-work-right w-full lg:w-[53%]'>
          <Features />
        </div>
      </div>
    </section>
  );
};
export default OurFeatures;
