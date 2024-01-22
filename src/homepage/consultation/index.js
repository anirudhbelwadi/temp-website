import './style.scss';
import { useEffect, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import SectionLabel from '../../commons/section-label';
import SwiperNavigationArrows from '../../commons/swiper-navigation-arrows';
import useDeviceSize from '../../hooks/use-device-size';

const Consultation = () => {
  const consultationSwiperRef = useRef();
  const { width } = useDeviceSize();

  useEffect(() => {
    const params = {
      modules: [Navigation],
      navigation: {
        prevEl: '.consultation .navigation--left',
        nextEl: '.consultation .navigation--right'
      },
      allowTouchMove: false,
      speed: 500,
      breakpoints: {
        1194: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    };
    Object.assign(consultationSwiperRef.current, params);
    if (width) consultationSwiperRef.current.initialize();
  }, [width]);

  return (
    <section className='consultation'>
      <div className='consultation__label-wrapper'>
        <SectionLabel title='Our Consultations' />
        {width >= 640 && <SwiperNavigationArrows />}
      </div>
      <h2 className='section-heading40'>
        Certification through <span>Consultations</span>
      </h2>
      <p className='section-description consultation__description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <swiper-container ref={consultationSwiperRef} init='false'>
        <swiper-slide>
          <div className='consultation__slide'>
            <Image
              src='https://placehold.co/150x110'
              alt='Consultation'
              width={150}
              height={110}
              className='consultation__img'
            />
            <span className='consultation__number'>02</span>
            <h4 className='consultation__slide-heading'>Consultation 2</h4>
            <p className='section-description consultation__slide-description'>
              Receive empathetic and compassionate guidance tailored to your
              unique mental health needs, helping you navigate challenges with
              confidence.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className='consultation__slide'>
            <Image
              src='https://placehold.co/150x110'
              alt='Consultation'
              width={150}
              height={110}
              className='consultation__img'
            />
            <span className='consultation__number'>02</span>
            <h4 className='consultation__slide-heading'>Consultation 2</h4>
            <p className='section-description consultation__slide-description'>
              Receive empathetic and compassionate guidance tailored to your
              unique mental health needs, helping you navigate challenges with
              confidence.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className='consultation__slide'>
            <Image
              src='https://placehold.co/150x110'
              alt='Consultation'
              width={150}
              height={110}
              className='consultation__img'
            />
            <span className='consultation__number'>02</span>
            <h4 className='consultation__slide-heading'>Consultation 2</h4>
            <p className='section-description consultation__slide-description'>
              Receive empathetic and compassionate guidance tailored to your
              unique mental health needs, helping you navigate challenges with
              confidence.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className='consultation__slide'>
            <Image
              src='https://placehold.co/150x110'
              alt='Consultation'
              width={150}
              height={110}
              className='consultation__img'
            />
            <span className='consultation__number'>02</span>
            <h4 className='consultation__slide-heading'>Consultation 2</h4>
            <p className='section-description consultation__slide-description'>
              Receive empathetic and compassionate guidance tailored to your
              unique mental health needs, helping you navigate challenges with
              confidence.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className='consultation__slide'>
            <Image
              src='https://placehold.co/150x110'
              alt='Consultation'
              width={150}
              height={110}
              className='consultation__img'
            />
            <span className='consultation__number'>02</span>
            <h4 className='consultation__slide-heading'>Consultation 2</h4>
            <p className='section-description consultation__slide-description'>
              Receive empathetic and compassionate guidance tailored to your
              unique mental health needs, helping you navigate challenges with
              confidence.
            </p>
          </div>
        </swiper-slide>
      </swiper-container>
      {width < 640 && <SwiperNavigationArrows />}
    </section>
  );
};

export default Consultation;
