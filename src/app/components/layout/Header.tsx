import Image from 'next/image';
import Link from 'next/link';
import CtaButtons from '@/app/components/parts/CtaButtons';

const Header = () => {
  return (
    <div className='navbar bg-light-background flex items-center text-light-onPrimaryContainer py-4 lg:h-20'>
      <div className='container flex'>
        <nav className='navbar-left flex items-center w-1/2 gap-5'>
          <Image className='logo' src='/assets/logo.webp' alt='logo' width={181} height={41} priority />
          <ul className='nav-links flex gap-4 text__body-large font-medium lg:flex-row sm:flex-col'>
            <li className='nav-link'>
              <Link href={'/#features'}>Features</Link>
            </li>
            <li className='nav-link'>
              <Link href={'/#how-it-works'}>How It Works</Link>
            </li>
            <li className='nav-link md:hidden sm:block'>
              <Link href={'/#book-cleaner'}>Book A Cleaner</Link>
            </li>
            <li className='nav-link'>
              <Link href={'/#become-a-cleaner'}>Become A Cleaner</Link>
            </li>
          </ul>
        </nav>
        <div className='navbar-right flex w-1/2 justify-end items-center'>
          <CtaButtons />
        </div>
      </div>
    </div>
  );
};
export default Header;
