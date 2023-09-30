import Image from 'next/image';
import CtaButtons from '../parts/CtaButtons';

function Hero() {
  return (
    <section className='bg-light-onPrimaryContainer py-16'>
      <div className='container flex flex-row justify-between h-full items-center'>
        <div className='hero-left w-[45%] flex flex-col text-light-primaryContainer gap-y-6'>
          <h1 className='text__display-large'>Cleaner bookings made simple</h1>
          <p className='text__headline-small text-light-onPrimary'>
            Say goodbye to the hassle of finding and booking a cleaner &ndash; we&apos;ve got you covered. Experience
            the joy of a spotless home or office, without the stress.
          </p>
          <CtaButtons />
        </div>
        <div className='hero-right w-[45%]'>
          <Image src={'/sections/hero-image.webp'} alt={'Cleaned living room'} width={486} height={509} />
        </div>
      </div>
    </section>
  );
}
export default Hero;
