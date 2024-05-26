'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function CtaLinks({ styleClasses }: { styleClasses: string }) {
  const pathname = usePathname();
  const hideCTALinkPaths = ['/book', '/cart', '/checkout'];
  // console.log(pathname);

  return (
    <div className={`cta-buttons flex gap-3 ${styleClasses}`}>
      <Link
        className={clsx('btn btn-primary__outlined text__body-large')}
        href={'/login'}
      >
        Sign In
      </Link>
      <Link
        className={clsx('btn btn-secondary text__body-large', {
          hidden: hideCTALinkPaths.includes(pathname),
        })}
        href={'/book'}
      >
        Book a Cleaner
      </Link>
    </div>
  );
}
