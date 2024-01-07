'use client';

import './style.scss';
import Image from 'next/image';
import ButtonArrowFilled from '../../commons/buttons/button-arrow-filled';
import SectionLabel from '../../commons/section-label';
import aboutVector1 from '../../../public/images/homepage/about-vector1.svg';
import aboutVector2 from '../../../public/images/homepage/about-vector2.svg';
import aboutVector3 from '../../../public/images/homepage/about-vector3.svg';
import useDeviceSize from '../../hooks/use-device-size';

const About = () => {
  const { width } = useDeviceSize();
  return (
    <section className='about'>
      <div className='my-container'>
        <div className='about__group'>
          <div className='about__group-left'>
            {width > 834 && (
              <div className='about__img-wrapper'>
                <Image
                  src='https://placehold.co/260x290/fff/000'
                  alt='About us, who we are'
                  width={260}
                  height={290}
                />
                <Image
                  src='https://placehold.co/260x600/fff/000'
                  alt='About us, who we are'
                  width={260}
                  height={600}
                />
              </div>
            )}
            <div className='about__btn-wrapper'>
              <ButtonArrowFilled title='Know Us more' />
            </div>
            <p className='section-description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,but also
            </p>
          </div>
          <div className='about__group-right'>
            <SectionLabel title='About Who we are' />
            <h2 className='about__heading'>
              One Stop Solution <br />
              to get the <br />
              <span>Import & Export Gyan</span>
            </h2>
            <div className='about__img-wrapper'>
              {width > 834 ? (
                <>
                  <Image
                    src='https://placehold.co/260x290/fff/000'
                    alt='About us, who we are'
                    width={260}
                    height={290}
                  />
                  <Image
                    src='https://placehold.co/260x600/fff/000'
                    alt='About us, who we are'
                    width={260}
                    height={600}
                  />
                </>
              ) : (
                <>
                  <Image
                    src='https://placehold.co/150x180/fff/000'
                    alt='About us, who we are'
                    width={150}
                    height={180}
                    className='about__img1'
                  />
                  <Image
                    src='https://placehold.co/150x400/fff/000'
                    alt='About us, who we are'
                    width={150}
                    height={400}
                    className='about__img2'
                  />
                  <Image
                    src='https://placehold.co/150x180/fff/000'
                    alt='About us, who we are'
                    width={150}
                    height={180}
                    className='about__img3'
                  />
                </>
              )}
            </div>
          </div>
          <Image
            src={aboutVector1}
            alt='About Vector Image'
            width={637}
            height={640}
            className='about__vector1'
          />
          <Image
            src={aboutVector2}
            alt='About Vector Image'
            width={498}
            height={907}
            className='about__vector2'
          />
          <Image
            src={aboutVector3}
            alt='About Vector Image'
            width={426}
            height={526}
            className='about__vector3'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
