import './style.scss';
import Image from 'next/image';
import SectionLabel from '../../commons/section-label';
import searchIcon from '../../../public/images/common/search-icon.svg';

const Locator = () => {
  return (
    <section className='locator'>
      <div className='locator__group'>
        <div className='locator__group--left'>
          <Image
            src='https://placehold.co/550x550'
            width={550}
            height={550}
            alt='Locator'
          />
        </div>
        <div className='locator__group--right'>
          <SectionLabel title='All in one search' />
          <h2 className='locator__heading'>
            A Search finder to help you get the Accurate Info
          </h2>
          <p className='section-description locator__description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className='locator__input-wrapper'>
            <input
              type='text'
              placeholder='Search keyword here...'
              className='locator__input'
            />
            <Image
              src={searchIcon}
              width={64}
              height={64}
              alt='Search'
              className='locator__search-icon'
            />
            <div className='locator__search-background' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locator;
