'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CtaLinks from '../misc/CtaLinks';
import clsx from 'clsx';
import { usePathname, useParams, useRouter } from 'next/navigation';
import UserAvatar from '@/ui/header/UserAvatar';
import { Link as ScrollLink, animateScroll } from 'react-scroll';

// Head Component
const Header = () => {
  const [displayMobileNavMenu, setDisplyMobileNavMenu] = useState('hidden');
  const pathname = usePathname();

  const toggleMobileNavMenu = () => {
    if (displayMobileNavMenu === 'flex') setDisplyMobileNavMenu('hidden');
    else setDisplyMobileNavMenu('flex');
  };

  return (
    <>
      <div
        className={clsx(
          'navbar sticky top-[-1px] z-40 flex h-20 items-center bg-light-background shadow-md',
          {
            'bg-light-onPrimaryFixed text-black lg:text-light-onPrimary':
              pathname !== '/',
            hidden: pathname.includes('/dashboard'),
          },
        )}
      >
        <div className="container">
          <div className="flex">
            <nav className="navbar-left flex w-2/3 items-center gap-5 md:w-1/4 lg:w-2/3">
              {pathname === '/' ? (
                <ScrollLink
                  className={`cursor-pointer`}
                  activeClass="text-red-800"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-78}
                  duration={500}
                >
                  <Image
                    className={`logo w-40 lg:w-[344px]`}
                    src={`/assets/${pathname !== '/' ? 'logo-white' : 'logo'}.webp`}
                    alt="logo"
                    width={344}
                    height={77}
                    priority
                  />
                </ScrollLink>
              ) : (
                <Link href={'/'}>
                  <Image
                    className={`logo w-40 lg:w-[344px]`}
                    src={`/assets/${pathname !== '/' ? 'logo-white' : 'logo'}.webp`}
                    alt="logo"
                    width={181}
                    height={41}
                    priority
                  />
                </Link>
              )}
              <ul
                className={`nav-links text__body-large fixed right-0 top-[78px] w-full flex-col items-start gap-3 bg-gray-50 p-5 font-medium lg:static lg:flex lg:flex-row lg:items-center lg:gap-4 lg:bg-transparent lg:p-0 ${displayMobileNavMenu} z-50`}
              >
                <li
                  key={'how'}
                  className="w-full lg:w-auto"
                  onClick={toggleMobileNavMenu}
                >
                  {pathname === '/' ? (
                    <ScrollLink
                      className="m-0 block w-full cursor-pointer rounded-sm p-2 px-4 transition-all ease-in-out lg:rounded-none lg:p-0"
                      activeClass="lg:border-light-primaryFixedDim lg:border-b-2 bg-palettes-primary-95 lg:bg-transparent rounded-none"
                      to="how-it-works"
                      spy={true}
                      smooth={true}
                      offset={-78}
                      duration={500}
                      onClick={toggleMobileNavMenu}
                    >
                      How It Works
                    </ScrollLink>
                  ) : (
                    <Link
                      className={
                        'm-0 block w-full cursor-pointer rounded-sm p-2 px-4 transition-all ease-in-out lg:rounded-none lg:p-0'
                      }
                      href={'/#how-it-works'}
                    >
                      How It Works
                    </Link>
                  )}
                </li>
                <li
                  key={'features'}
                  className="w-full lg:w-auto"
                  onClick={toggleMobileNavMenu}
                >
                  {pathname === '/' ? (
                    <ScrollLink
                      className="m-0 block w-full cursor-pointer rounded-sm p-2 px-4 transition-all ease-in-out lg:rounded-none lg:p-0"
                      activeClass="lg:border-light-primaryFixedDim lg:border-b-2 bg-palettes-primary-95 lg:bg-transparent"
                      to="features"
                      spy={true}
                      smooth={true}
                      offset={-78}
                      duration={500}
                      onClick={toggleMobileNavMenu}
                    >
                      Features
                    </ScrollLink>
                  ) : (
                    <Link
                      className={
                        'm-0 block w-full cursor-pointer rounded-sm p-2 px-4 transition-all ease-in-out lg:rounded-none lg:p-0'
                      }
                      href={'/#features'}
                    >
                      Features
                    </Link>
                  )}
                </li>

                <li
                  key={'become'}
                  className="w-full lg:w-auto"
                  onClick={toggleMobileNavMenu}
                >
                  <Link
                    className={clsx(
                      'm-0 block w-full cursor-pointer rounded-sm p-2 px-4 transition-all ease-in-out lg:rounded-none lg:p-0',
                      {
                        'bg-palettes-primary-95 lg:border-b-2 lg:border-light-primaryFixedDim lg:bg-transparent':
                          pathname === '/become-a-cleaner',
                      },
                    )}
                    href={'/become-a-cleaner'}
                  >
                    Become a Cleaner
                  </Link>
                </li>
                <li
                  key={'book'}
                  className="w-full md:hidden lg:w-auto "
                  onClick={toggleMobileNavMenu}
                >
                  <Link
                    className={
                      'block w-full rounded-2xl bg-light-secondary p-2 text-center text-white'
                    }
                    href={'/book'}
                  >
                    Book A Cleaner
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="navbar-right flex w-1/4 items-center justify-end gap-3 md:w-2/3 lg:w-1/3">
              <CtaLinks styleClasses="hidden md:flex" />
              {/* <UserAvatar /> */}
              <>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  onClick={toggleMobileNavMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={'h-5 w-5'}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke={pathname !== '/' ? 'white' : 'currentColor'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
                <div
                  className={`fixed right-0 top-0 z-40 h-full w-full space-y-1 bg-transparent  ${displayMobileNavMenu} `}
                  onClick={toggleMobileNavMenu}
                ></div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
