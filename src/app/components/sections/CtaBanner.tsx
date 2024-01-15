import CtaLinks from '../parts/CtaLinks';

const CtaBanner = () => {
  return (
    <section className='py-16 bg-light-primary text-light-onPrimary'>
      <div className='container flex flex-wrap w-full lg:w-10/12 items-center justify-between gap-10'>
        <p className='text__headline-large font-semibold md:text__display-medium w-full lg:w-6/12'>
          Experience simple today, <br className='hidden md:inline-block' />
          book your cleaner with <br />
          BrightBroom
        </p>
        <div className='w-full lg:w-4/12'>
          <CtaLinks />
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
