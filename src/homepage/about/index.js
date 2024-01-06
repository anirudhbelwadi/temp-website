import './style.scss';
import Image from 'next/image';
import ButtonArrowFilled from '../../commons/buttons/button-arrow-filled';
import SectionLabel from '../../commons/section-label';

const About = () => {
  return (
    <section className='about'>
      <div className='my-container'>
        <div className='about__group'>
          <div className='about__group-left'>
            <div className='about__img-wrapper'>
              <Image
                src='https://placehold.co/260x290/fff/000'
                alt='Associated company'
                width={260}
                height={290}
              />
              <Image
                src='https://placehold.co/260x600/fff/000'
                alt='Associated company'
                width={260}
                height={600}
              />
            </div>
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
              <Image
                src='https://placehold.co/260x290/fff/000'
                alt='Associated company'
                width={260}
                height={290}
              />
              <Image
                src='https://placehold.co/260x600/fff/000'
                alt='Associated company'
                width={260}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
