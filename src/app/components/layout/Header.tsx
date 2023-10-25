import Image from 'next/image';
import Link from 'next/link';
import CtaButtons from '@/app/components/parts/CtaLinks';

const Header = () => {
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
      href: '/#become-a-cleaner',
    },
  ];

  return (
    <div className='navbar bg-light-background flex items-center text-light-onPrimaryContainer py-4 lg:h-20'>
      <div className='container flex'>
        <nav className='navbar-left flex items-center w-1/2 gap-5'>
          <Link href={'/'}>
            <Image className='logo' src='/assets/logo.webp' alt='logo' width={181} height={41} priority />
          </Link>
          <ul className='nav-links flex gap-4 text__body-large font-medium '>
            {navLinks.map((link, i) => (
              <li className='nav-link'>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
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
