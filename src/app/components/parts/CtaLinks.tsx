import Link from 'next/link';
import React from 'react';

function CtaLinks(props: any) {
  return (
    <div className={`cta-buttons flex gap-3 ${props.classes}`}>
      <Link className='btn btn-primary__outlined text__body-large' href={'/sign-up'}>
        Sign up
      </Link>

      <Link className='btn btn-secondary text__body-large' href={'/book-a-cleaner'}>
        Book a Cleaner
      </Link>
    </div>
  );
}
export default CtaLinks;
