import Image from 'next/image';
import CtaLinks from '../parts/CtaLinks';

function Hero() {
  return (
    <section id='hero' className='bg-light-onPrimaryContainer py-16 text-light-onPrimary'>
      <div className='container flex flex-col lg:flex-row justify-between h-full items-center gap-y-6'>
        <div className='hero-left w-full lg:w-[45%] flex flex-col gap-y-6'>
          <h1 className='text__display-medium lg:text__display-large text-light-primaryContainer '>
            Cleaner bookings made simple
          </h1>
          <p className='lg:text__headline-small text-lg'>
            Say goodbye to the hassle of finding and booking a cleaner &ndash; we&apos;ve got you covered. Experience
            the joy of a spotless home or office, without the stress.
          </p>
          <CtaLinks />
        </div>
        <div className='hero-right w-full lg:w-[45%]'>
          <Image
            src={'/sections/hero-image.webp'}
            alt={'Cleaned living room'}
            width={486}
            height={509}
            priority
            className='lg:w-[486px] lg:h-[509px] lg:object-right-bottom md:w-full md:h-96 h-80 object-cover rounded-xl object-bottom'
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
