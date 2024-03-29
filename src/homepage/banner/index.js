import './style.scss';
import Image from 'next/image';
import marker from '../../../public/images/homepage/marker.png';
import bannerimg from '../../../public/images/homepage/bannerimg.jpg';
import SectionLabel from '../../commons/section-label';
import ButtonTransparent from '../../commons/buttons/button-transparent';
import ButtonArrowFilled from '../../commons/buttons/button-arrow-filled';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner__group'>
        <div className='banner__group-left'>
          <div className='banner__label-wrapper'>
            <SectionLabel title='100+ Listed Merchants' />
          </div>
          <h1 className='banner__heading'>
            One Stop Solution <br /> to get the <br />
            <span>
              Import & Export Gyan
              <Image
                src={marker}
                width={380}
                height={28}
                alt='Marker'
                className='banner__marker-img'
              />
            </span>
          </h1>
          <p className='section-description banner__description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <ButtonTransparent
            title='How It Works'
            className='banner__btn--transparent'
          />
          <ButtonArrowFilled
            title='Explore More'
            className='banner__btn-arrow--filled'
          />
        </div>
        <div className='banner__group-right'>
          <Image
            src={bannerimg}
            width={510}
            height={559}
            alt='Banner'
            className='banner__banner-img'
          />
        </div>
      </div>
      <div className='banner__collabration'>
        <div className='banner__marquee'>
          <div className='banner__company-logos-flex'>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
          </div>
          <div className='banner__company-logos-flex'>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
            <div className='banner__company-log'>
              <Image
                src='https://placehold.co/150x100/fff/000'
                alt='Associated company'
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
