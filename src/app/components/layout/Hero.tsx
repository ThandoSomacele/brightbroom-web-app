import Image from 'next/image';
import CtaButtons from '../parts/CtaButtons';

function Hero() {
  return (
    <section className='hero bg-light-onPrimaryContainer xlg:h-[44em] lg:h-[90vh] p-8'>
      <div className='container flex lg:flex-row sm:flex-col gap-[10%] h-full items-center'>
        <div className='hero-left w-[45%] sm:w-full first-letter:flex flex-col text-light-primaryContainer gap-6'>
          <h1 className='text__display-large'>Cleaner bookings made simple</h1>
          <p className='text__body-large text-light-onPrimary'>
            Say goodbye to the hassle of finding and booking a cleaner – we've got you covered. Experience the joy of a
            spotless home or office, without the stress.
          </p>
          <CtaButtons />
        </div>
        <div className='hero-right w-[45%'>
          <Image src={'/hero-image.png'} alt={'Cleaned living room'} width={486} height={509} />
        </div>
      </div>
    </section>
  );
}
export default Hero;
