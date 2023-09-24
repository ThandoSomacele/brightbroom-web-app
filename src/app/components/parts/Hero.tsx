import Image from 'next/image';
import CtaButtons from './CtaButtons';

function Hero() {
  return (
    <section className='hero bg-light-onPrimaryContainer xlg:h-[44em] py-24'>
      <div className='container flex lg:flex-row sm:flex-col gap-[10%] h-full items-center'>
        <div className='hero-left w-[45%] flex flex-col text-light-primaryContainer gap-y-6'>
          <h1 className='text__display-large'>Cleaner bookings made simple</h1>
          <p className='text__headline-small text-light-onPrimary'>
            Say goodbye to the hassle of finding and booking a cleaner &ndash; we&apos;ve got you covered. Experience
            the joy of a spotless home or office, without the stress.
          </p>
          <CtaButtons />
        </div>
        <div className='hero-right w-[45%]'>
          <Image src={'/hero-image.png'} alt={'Cleaned living room'} width={486} height={509} />
        </div>
      </div>
    </section>
  );
}
export default Hero;
