'use client';

import './style.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import RightArrowSvg from '../right-arrow-svg';
import { emailBlack } from '../../../public/images';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className='footer'>
      <div className='my-container'>
        <div className='footer__wrapper'>
          <div className='footer__logo-wrapper'>
            <Image
              src='https://placehold.co/58x24'
              width={58}
              height={24}
              alt='Eximplify Logo'
            />
            <span>Ex.Implify</span>
          </div>
          <div className='footer__input-wrapper'>
            <Image
              src={emailBlack}
              width={24}
              height={24}
              alt='Eximplify Logo'
            />
            <input
              type='text'
              placeholder='Subscribe Newsletter!'
              className='footer__input'
            />
            <span className='footer__submit-icon'>
              <RightArrowSvg />
            </span>
          </div>
          <div className='footer__links'>
            <Link
              href='/'
              className={`footer__link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link href='/' className='footer__link'>
              About Us
            </Link>
            <Link href='/' className='footer__link'>
              Our Pricing
            </Link>
            <Link href='/' className='footer__link'>
              Container Tracker
            </Link>
            <Link href='/' className='footer__link'>
              Export Calculator
            </Link>
            <Link href='/' className='footer__link'>
              Trade Shows
            </Link>
            <Link href='/' className='footer__link'>
              Blogs
            </Link>
          </div>
          <div className='footer__tnc-wrapper'>
            <p>
              EX-IMPLIFY Copyright {new Date().getFullYear()}, All Rights
              Reserved
            </p>
            <div className='link-wrapper'>
              <Link href='/'>Terms and conditions</Link>
              <Link href='/' className='pp'>
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
