import Link from 'next/link';
import React from 'react';

function CtaLinks(props: any) {
  const isLogged = true;
  // if (location.pathname !== '/book' || window.location.pathname !== '/cart' || window.location.pathname !== '/checkout')
  return (
    <div className={`cta-buttons flex gap-3 ${props.classes}`}>
      {isLogged ? null : (
        <Link className='btn btn-primary__outlined text__body-large' href={'/sign-up'}>
          Sign up
        </Link>
      )}

      <Link className='btn btn-secondary text__body-large' href={'/book'}>
        Book a Cleaner
      </Link>
    </div>
  );
}
export default CtaLinks;
