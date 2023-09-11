import Link from 'next/link';

function CtaButtons() {
  return (
    <div className='cta-buttons flex gap-3'>
      <button className='btn btn-primary__outlined text__body-large'>
        <Link href={'#'} />
        Login
      </button>
      <button className='btn btn-secondary text__body-large'>
        <Link href={'#'} />
        Book Your Cleaner
      </button>
    </div>
  );
}
export default CtaButtons;
