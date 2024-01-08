import './style.scss';
import Link from 'next/link';
import SectionLabel from '../../commons/section-label';
import RightArrowSvg from '../../commons/right-arrow-svg';

const Features = () => {
  return (
    <section className='features'>
      <div className='my-container'>
        <SectionLabel title='Exclusive Features' />
        <h2 className='features__heading'>EX-IMPLIFY Features</h2>
        <div className='features__list'>
          <div className='features__list-item'>
            <span className='features__item-index'>01</span>
            <h4 className='features__item-heading'>Emotional Support</h4>
            <h4 className='section-description features__item-description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </h4>
            <Link href='/' className='features__item-link'>
              <RightArrowSvg />
            </Link>
          </div>
          <div className='features__list-item'>
            <span className='features__item-index'>01</span>
            <h4 className='features__item-heading'>Emotional Support</h4>
            <h4 className='section-description features__item-description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </h4>
            <Link href='/' className='features__item-link'>
              <RightArrowSvg />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
