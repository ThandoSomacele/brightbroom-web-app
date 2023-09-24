import Link from 'next/link';

function CtaButtons() {
  return (
    <div className='cta-buttons flex gap-3'>
      <Link className='btn btn-primary__outlined text__body-large' href={'#'}>
        Login
      </Link>

      <Link className='btn btn-secondary text__body-large' href={'#'}>
        Book Your Cleaner
      </Link>
    </div>
  );
}
export default CtaButtons;
