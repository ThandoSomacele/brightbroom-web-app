import CtaButtons from './CtaButtons';

function IntroHome() {
  return (
    <section className='p-24 bg-palettes-primary-99'>
      <div className='container flex flex-col items-center gap-y-6'>
        <h2 className='text__display-medium text-center '>Welcome to BrightBroom</h2>
        <p className=' text__body-large text-center'>
          Welcome to BrightBroom, where cleanliness meets simplicity. We understand the demands of modern life, and
          we&apos;re here to make one aspect of it easier &ndash; keeping your home spotless. With just a few clicks,
          you can book a professional cleaner for a day or even on a weekly basis, without any obligations.
        </p>
        <CtaButtons />
      </div>
    </section>
  );
}
export default IntroHome;
