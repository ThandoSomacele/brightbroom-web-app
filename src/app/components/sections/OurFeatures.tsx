import Image from 'next/image';
import CtaButtons from '../parts/CtaButtons';
import Features from '../parts/Features';

const OurFeatures = () => {
  return (
    <section className='py-16 bg-palettes-primary-99'>
      <div className='container flex'>
        <div className='our-features-left w-[45%] flex flex-col justify-between gap-10'>
          <div className='flex flex-col gap-10'>
            <h2 className='text__display-medium'>
              Our Features
              <br />& Services
            </h2>
            <CtaButtons />
          </div>
          <Image
            src={'/sections/our-features-image.webp'}
            alt={'Clean bedroom with open window'}
            width={404}
            height={277}
          />
        </div>
        <div className='how-it-work-right w-[45%] flex flex-col gap-y-7'>
          <Features />
        </div>
      </div>
    </section>
  );
};
export default OurFeatures;
