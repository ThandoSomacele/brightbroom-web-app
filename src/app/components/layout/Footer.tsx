import Image from 'next/image';
import Link from 'next/link';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className='bg-light-onPrimaryFixed py-16 text-light-onPrimary bottom-0'>
      <div className='container flex justify-center'>
        <div className='footer-col-1 flex flex-col gap-4 w-1/5'>
          <h3 className='text__title-large'>Quick Links</h3>
          <ul className='nav-links flex flex-col gap-4 text__body-large'>
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
              <Link href={'/become-a-cleaner'}>Become A Cleaner</Link>
            </li>
          </ul>
        </div>
        <div className='footer-col-2 flex flex-col gap-4 w-1/5'>
          <h3 className='text__title-large'>Legal</h3>
          <ul className='nav-links flex flex-col gap-4 text__body-large'>
            <li className='nav-link'>
              <Link href={'/privacy-policy'}>Privacy Policy</Link>
            </li>
            <li className='nav-link'>
              <Link href={'/terms-of-use'}>Terms of Use</Link>
            </li>
          </ul>
        </div>
        <div className='footer-col-3 flex flex-col justify-self-end gap-4 w-2/5'>
          <Link href={'/'}>
            <Image className='logo' src='/assets/logo-white.webp' alt='logo' width={343} height={77} priority />
          </Link>
          <small>Copyright © {year} BrightBroom Pty (Ltd). All Rights Reserved</small>
          <div className='social-icons '>
            <ul className='flex gap-4'>
              <li>
                <Link href={'#'}>
                  <Image
                    className='social-icon'
                    src='/social/facebook.webp'
                    alt='Social icon Facebook'
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
              </li>
              <li>
                <Link href={'#'}>
                  <Image
                    className='social-icon'
                    src='/social/x.webp'
                    alt='Social icon X'
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
              </li>
              <li>
                <Link href={'#'}>
                  <Image
                    className='social-icon'
                    src='/social/instagram.webp'
                    alt='Social icon Linkedin'
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
              </li>
              <li>
                <Link href={'#'}>
                  <Image
                    className='social-icon'
                    src='/social/linkedin.webp'
                    alt='Social icon Linkedin'
                    width={24}
                    height={24}
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
