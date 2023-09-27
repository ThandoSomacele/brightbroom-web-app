import Image from 'next/image';
import CtaButtons from './CtaButtons';
import Steps from './Steps';

const HowItWorks = () => {
  return (
    <section className='p-10 bg-light-tertiary'>
      <div className='container flex items-center gap-y-6'>
        <div className='how-it-work-left w-[45%]'>
          <Image
            src={'/assets/how-it-works-image.png'}
            alt={'Clean bedroom with open window'}
            width={562}
            height={509}
          />
        </div>
        <div className='how-it-work-right w-[45%] flex flex-col text-light-primaryContainer gap-y-6'>
          <h2 className='text__display-medium'>How it works</h2>
          <Steps />
          <CtaButtons />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
