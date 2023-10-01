import Image from 'next/image';
import CtaButtons from '../parts/CtaButtons';
import Steps from '../parts/Steps';

const HowItWorks = () => {
  return (
    <section className='py-16 bg-light-tertiary text-light-onTertiary'>
      <div className='container flex items-center justify-between'>
        <div className='how-it-work-left w-[45%]'>
          <Image
            src={'/sections/how-it-works-image.webp'}
            alt={'Clean bedroom with open window'}
            width={562}
            height={509}
          />
        </div>
        <div className='how-it-work-right w-[45%] flex flex-col gap-y-7'>
          <h2 className='text__display-medium '>How it works</h2>
          <Steps />
          <CtaButtons />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
