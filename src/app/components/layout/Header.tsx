import Image from 'next/image';
import Link from 'next/link';
import CtaButtons from '@/app/components/parts/CtaLinks';
import mainNavData from '@/app/site-data/main-nav.json';
import listGenerator from '../../helpers/listGenerator';

const Header = () => {
  const navList = listGenerator(mainNavData);
  return (
    <div className='navbar bg-light-background flex items-center text-light-onPrimaryContainer py-4 lg:h-20'>
      <div className='container flex'>
        <nav className='navbar-left flex items-center w-2/3 gap-5'>
          <Link href={'/'}>
            <Image className='logo' src='/assets/logo.webp' alt='logo' width={181} height={41} priority />
          </Link>
          <ul className='nav-links flex items-center gap-4 text__body-large font-medium '>{navList}</ul>
        </nav>
        <div className='navbar-right flex w-1/3 justify-end items-center'>
          <CtaButtons />
        </div>
      </div>
    </div>
  );
};
export default Header;
