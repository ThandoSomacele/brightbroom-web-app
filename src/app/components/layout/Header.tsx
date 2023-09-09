import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='navbar h-20 bg-light-background flex items-center text-light-onPrimaryContainer'>
      <div className='container flex'>
        <div className='navbar-left flex items-center w-1/2 gap-5'>
          <Image className='logo' src='/logo.png' alt='logo' width={181} height={41} priority />
          <ul className='nav-links flex gap-4 text__body-large font-medium'>
            <li className='nav-link'>
              <Link href={'/#features'}>Features</Link>
            </li>
            <li className='nav-link'>
              <Link href={'/#how-it-works'}>How It Works</Link>
            </li>
            <li className='nav-link'>
              <Link href={'/#become-a-cleaner'}>Become A Cleaner</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-right flex  w-1/2 gap-5 justify-end'>
          <button className='btn btn-primary__outlined text__body-large'>
            <Link href={'#'} />
            Login
          </button>
          <button className='btn btn-secondary text__body-large'>
            <Link href={'#'} />
            Book Your Cleaner
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
