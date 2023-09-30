import CtaButtons from '../parts/CtaButtons';

const CtaBanner = () => {
  return (
    <section className='py-16 bg-light-primary'>
      <div className='container flex w-10/12 items-center justify-between'>
        <p className='text__display-medium text-light-onPrimary w-6/12'>
          Experience simple today, book your cleaner with BrightBroom
        </p>
        <div className='w-4/12'>
          <CtaButtons />
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
