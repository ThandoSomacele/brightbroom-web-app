'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CtaLinks from '../misc/CtaLinks';
import clsx from 'clsx';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { isLoggedIn } from '@/app/lib/isLoggedIn';
import AccountMenu from '../header/AccountMenu';

// Head Nav Links
const navLinks = [
  {
    text: 'Features',
    href: '/#features',
  },
  {
    text: 'How It Works',
    href: '/#how-it-works',
  },
  {
    text: 'Become A Cleaner',
    href: '/become-a-cleaner',
  },
];

// Head Component
const Header = () => {
  const [isShowing, setShow] = useState(false);
  const pathname = usePathname();

  const navList = navLinks.map((linkItem, i) => (
    <li key={i}>
      <Link
        href={linkItem.href}
        className={clsx('text-black', {
          'text-white': pathname !== '/',
        })}
      >
        {linkItem.text}
      </Link>
    </li>
  ));

  const toggleClass = () => {
    setShow(!isShowing);
  };

  return (
    <>
      <div
        className={clsx(
          'navbar sticky top-[-1px] z-40 flex h-20 items-center bg-light-background shadow-md',
          {
            'bg-light-onPrimaryFixed text-light-onPrimary': pathname !== '/',
            hidden: pathname.includes('/dashboard'),
          },
        )}
      >
        <div className="container">
          <div className="flex">
            <nav className="navbar-left flex w-2/3 items-center gap-5 md:w-1/4 lg:w-2/3">
              <Link href={'/'}>
                <Image
                  className="logo"
                  src={`/assets/${pathname !== '/' ? 'logo-white' : 'logo'}.webp`}
                  alt="logo"
                  width={181}
                  height={41}
                  priority
                />
              </Link>
              <ul className="nav-links text__body-large hidden items-center gap-4 lg:flex">
                {navList}
              </ul>
            </nav>
            <div className="navbar-right flex w-1/4 items-center justify-end gap-3 md:w-2/3 lg:w-1/3">
              <CtaLinks styleClasses="hidden md:flex" />

              <div className="hamburger-menu flex w-6 flex-col gap-1 lg:hidden">
                <div className="line1 h-0 w-full border-2 border-light-onPrimaryContainer"></div>
                <div className="line2 h-0 w-full border-2 border-light-onPrimaryContainer"></div>
                <div className="line3 h-0 w-full border-2 border-light-onPrimaryContainer"></div>
              </div>
              {isLoggedIn && (
                <Image
                  src={'/cleaners/cleaner.jpg'}
                  alt="user profile"
                  width={40}
                  height={40}
                  className="cursor-pointer rounded-full object-cover md:h-12 md:w-12"
                  onClick={toggleClass}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {isLoggedIn && <AccountMenu display={isShowing ? 'block' : 'hidden'} />}
    </>
  );
};
export default Header;
