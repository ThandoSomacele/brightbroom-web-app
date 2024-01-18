import Image from 'next/image';
import Link from 'next/link';
import CtaLinks from '@/app/components/parts/CtaLinks';
import LinkList from '@/app/helpers/LinkList';

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
  const isLoggedIn = true;

  const navList = LinkList(navLinks);

  return (
    <div className='navbar sticky top-[-1px] bg-light-background text-light-onPrimaryContainer flex items-center h-20 z-10 shadow-md'>
      <div className='container'>
        <div className='flex'>
          <nav className='navbar-left flex items-center gap-5 w-2/3 md:w-1/4 lg:w-2/3'>
            <Link href={'/'}>
              <Image className='logo' src='/assets/logo.webp' alt='logo' width={181} height={41} priority />
            </Link>
            <ul className='nav-links hidden lg:flex items-center gap-4 text__body-large'>{navList}</ul>
          </nav>
          <div className='navbar-right flex gap-3 justify-end items-center w-1/4 md:w-2/3 lg:w-1/3'>
            <CtaLinks classes='hidden md:flex' />

            <div className='hamburger-menu lg:hidden flex flex-col gap-1 w-6'>
              <div className='line1 h-0 border-2 border-light-onPrimaryContainer w-full'></div>
              <div className='line2 h-0 border-2 border-light-onPrimaryContainer w-full'></div>
              <div className='line3 h-0 border-2 border-light-onPrimaryContainer w-full'></div>
            </div>
            {isLoggedIn && (
              <Image
                src={'/cleaners/cleaner.jpg'}
                alt='user profile'
                width={40}
                height={40}
                className='object-cover rounded-full md:w-12 md:h-12'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
