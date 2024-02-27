import React from 'react';
import CtaLinks from '@/app/ui/misc/CtaLinks';

const CtaBanner = () => {
  return (
    <section className="bg-light-primary py-16 text-light-onPrimary">
      <div className="container flex w-full flex-wrap items-center justify-between gap-10 lg:w-10/12">
        <p className="text__headline-large md:text__display-small w-full font-semibold lg:w-6/12">
          Experience simple today, <br className="hidden md:inline-block" />
          book your cleaner with <br />
          BrightBroom
        </p>
        <div className="w-full lg:w-4/12">
          <CtaLinks styleClasses={''} />
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
