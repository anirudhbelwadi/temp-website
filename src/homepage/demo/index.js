import './style.scss';
import { Navigation, EffectCreative } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import SectionLabel from '../../commons/section-label';
import playIcon from '../../../public/images/common/play-icon.svg';
import SwiperNavigationArrows from '../../commons/swiper-navigation-arrows';

const Demo = () => {
  const demoDescriptionRef = useRef();
  const demoVideoRef = useRef();

  useEffect(() => {
    const params = {
      modules: [Navigation, EffectCreative],
      navigation: {
        prevEl: '.demo .navigation--left',
        nextEl: '.demo .navigation--right'
      },
      allowTouchMove: false,
      speed: 500
    };
    Object.assign(demoDescriptionRef.current, params);
    Object.assign(demoVideoRef.current, {
      ...params,
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }
    });
    demoDescriptionRef.current.initialize();
    demoVideoRef.current.initialize();
  }, []);

  return (
    <section className='demo'>
      <SectionLabel title='Specially crafted Demo' />
      <h2 className='demo__heading'>
        Learn with us <br />
        How <span>Ex-Implify</span> work
      </h2>
      <div className='demo__desc-wrapper'>
        <p className='section-description demo__description'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <SwiperNavigationArrows />
      </div>
      <div className='demo__video-details'>
        <div className='demo__video-details-left'>
          <swiper-container
            ref={demoDescriptionRef}
            className='demo__description'
            init='false'
          >
            <swiper-slide>
              <span className='demo__video-number'>01</span>
              <h3 className='demo__video-name'>Dashboard Demo</h3>
              <p className='section-description demo__video-descrption'>
                Learn to Easily manage the Dashboard through live Demo
              </p>
            </swiper-slide>
            <swiper-slide>
              <span className='demo__video-number'>02</span>
              <h3 className='demo__video-name'>Dashboard Demo 2</h3>
              <p className='section-description demo__video-descrption'>
                Learn to Easily manage the Dashboard through live Demo
              </p>
            </swiper-slide>
            <swiper-slide>
              <span className='demo__video-number'>02</span>
              <h3 className='demo__video-name'>Dashboard Demo 2</h3>
              <p className='section-description demo__video-descrption'>
                Learn to Easily manage the Dashboard through live Demo
              </p>
            </swiper-slide>
          </swiper-container>
        </div>
        <div className='demo__video-details-right'>
          <Image
            src={playIcon}
            alt='Play video'
            width={100}
            height={100}
            className='demo__play-icon'
          />
          <swiper-container
            ref={demoVideoRef}
            class='demo__video-container'
            init='false'
          >
            <swiper-slide>
              <Image
                src='https://placehold.co/580x340'
                width={550}
                height={550}
                alt='Eximplify Demo'
                className='demo__video-thumb'
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src='https://placehold.co/580x340'
                width={550}
                height={550}
                alt='Eximplify Demo'
                className='demo__video-thumb'
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                src='https://placehold.co/580x340'
                width={550}
                height={550}
                alt='Eximplify Demo'
                className='demo__video-thumb'
              />
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </section>
  );
};

export default Demo;
