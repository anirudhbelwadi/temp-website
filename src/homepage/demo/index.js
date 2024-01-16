'use client';

/* eslint-disable import/no-extraneous-dependencies */
import './style.scss';
import { register } from 'swiper/element';
import { Navigation } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import SectionLabel from '../../commons/section-label';

register();

const Demo = () => {
  const demoDescriptionRef = useRef();
  const demoVideoRef = useRef();

  useEffect(() => {
    const swiperParams = {
      modules: [Navigation],
      // inject modules styles to shadow DOM
      injectStylesUrls: ['swiper/element/css/navigation'],
      navigation: {
        prevEl: '.prev',
        nextEl: '.next'
      }
    };
    Object.assign(demoDescriptionRef.current, swiperParams);
    demoDescriptionRef.current.initialize();
  }, []);

  return (
    <section className='demo'>
      <h1 className='prev'>prev</h1>
      <h1 className='next'>next</h1>
      <SectionLabel title='Specially crafted Demo' />
      <h2 className='demo__heading'>
        Learn with us <br />
        How <span>Ex-Implify</span> work
      </h2>
      <p className='section-description demo__description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
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
          </swiper-container>
        </div>
        <div className='demo__video-details-right'>
          <swiper-container ref={demoVideoRef} class='demo__video-container'>
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
          {/* <Image
            src={}
            width={100}
            height={100}
            alt='Play buttom'
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Demo;
