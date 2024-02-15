'use client';
import { isLoggedIn } from '../../lib/isLoggedIn';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function CtaLinks({ styleClasses }: { styleClasses: string }) {
  const pathname = usePathname();
  const hideCTALinkPaths = ['/book', '/cart', '/checkout'];
  console.log(pathname);

  return (
    <div className={`cta-buttons flex gap-3 ${styleClasses}`}>
      <Link className={clsx('btn btn-primary__outlined text__body-large', { hidden: isLoggedIn })} href={'/sign-up'}>
        Sign up
      </Link>
      <Link
        className={clsx('btn btn-secondary text__body-large', { hidden: hideCTALinkPaths.includes(pathname) })}
        href={'/book'}>
        Book a Cleaner
      </Link>
    </div>
  );
}
export default CtaLinks;
