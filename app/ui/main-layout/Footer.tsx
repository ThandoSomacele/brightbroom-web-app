'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkList from '@/app/lib/LinkList';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

// Footer Nav Links
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
    text: 'Become a Cleaner',
    href: '/become-a-cleaner',
  },
];

// Page paths to hide Footer
const pathsToHideFooter = ['/book', '/dashboard'];

function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const footerNavList = LinkList(navLinks);
  return (
    <footer
      className={clsx(
        'bottom-0 bg-light-onPrimaryFixed py-16 text-light-onPrimary',
        {
          hidden: pathsToHideFooter.includes(pathname),
        },
      )}
    >
      <div className="container flex flex-wrap justify-between gap-10">
        <div className="footer-col-1 flex w-full flex-col gap-4 md:w-1/5">
          <h3 className="text__title-large">Quick Links</h3>
          <ul className="nav-links text__body-large flex flex-col gap-4">
            {footerNavList}
          </ul>
        </div>
        <div className="footer-col-2 flex w-full flex-col gap-4 md:w-1/5">
          <h3 className="text__title-large">Legal</h3>
          <ul className="nav-links text__body-large flex flex-col gap-4">
            <li className="nav-link">
              <Link href={'/privacy-policy'}>Privacy Policy</Link>
            </li>
            <li className="nav-link">
              <Link href={'/terms-of-use'}>Terms of Use</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col-3 flex w-full flex-col gap-4 justify-self-end md:w-2/5">
          <Link href={'/'}>
            <Image
              className="logo"
              src="/assets/logo-white.webp"
              alt="logo"
              width={343}
              height={77}
              priority
            />
          </Link>
          <small>
            Copyright © {year} BrightBroom Pty (Ltd). All Rights Reserved
          </small>
          <div className="social-icons ">
            <ul className="flex gap-4">
              <li>
                <Link href={'#'}>
                  <Image
                    src="/social/facebook.webp"
                    alt="Social icon Facebook"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                    priority
                  />
                </Link>
              </li>
              <li>
                <Link href={'#'}>
                  <Image
                    src="/social/x.webp"
                    alt="Social icon X"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                    priority
                  />
                </Link>
              </li>
              <li>
                <Link href={'#'}>
                  <Image
                    src="/social/instagram.webp"
                    alt="Social icon Linkedin"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                    priority
                  />
                </Link>
              </li>
              <li>
                <Link href={'#'}>
                  <Image
                    src="/social/linkedin.webp"
                    alt="Social icon Linkedin"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                    priority
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
