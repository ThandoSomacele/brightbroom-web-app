import React from 'react';
import Image from 'next/image';
import CtaLinks from '../ui/CtaLinks';

const HowItWorks = () => {
  const stepsList = [
    { order: 1, desc: 'Choose your location' },
    { order: 2, desc: 'Select a date and time' },
    { order: 3, desc: 'Book your cleaner' },
    { order: 4, desc: 'Enjoy life’s moments' },
  ];

  return (
    <section id='how-it-works' className='py-10 md:py-16 bg-light-tertiary text-light-onTertiary'>
      <div className='container flex flex-wrap items-center justify-between gap-6'>
        <div className='how-it-work-left w-full lg:w-[45%]'>
          <Image
            src={'/assets/how-it-works.webp '}
            alt={'Clean bedroom with open window'}
            width={562}
            height={509}
            className='w-full md:h-80 lg:h-full object-cover rounded-2xl'
          />
        </div>
        <div className='how-it-work-right w-full lg:w-[45%] flex flex-col gap-y-7 pl-5 md:pl-10 lg:pl-0'>
          <h2 className='text__display-small md:text__display-medium'>How it works</h2>
          <ul className='steps flex flex-col gap-8'>
            {stepsList.map(step => (
              <li className='step flex gap-6' key={step.order}>
                <Image
                  src={`/steps/step-${step.order}.webp`}
                  width={50}
                  height={50}
                  alt={`Step ${step.order} icon`}
                  style={{ objectFit: 'contain' }}
                />
                <div className='text flex flex-col'>
                  <h3 className='text-lg font-bold text-light-onTertiary'>Step {step.order}</h3>
                  <p className='text-base md:text-2xl text-light-onTertiary'>{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <CtaLinks styleClasses={''} />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
