import Image from 'next/image';
import SectionLabel from '../../commons/section-label';
import './style.scss';
import ButtonArrowFilled from '../../commons/buttons/button-arrow-filled';

const Knowledge = () => {
  return (
    <section className='knowledge'>
      <SectionLabel title='Knowledge section' />
      <h3 className='section-heading40'>Insightful Content to Consume </h3>
      <div className='knowledge__box-wrapper'>
        <div className='knowledge__box'>
          <Image
            src='https://placehold.co/424x230'
            alt='knowledge'
            width={424}
            height={230}
            className='knowledge__img'
          />
          <div className='knowledge__date-name-wrapper'>
            <span>June 25th, 2024</span>
            <span className='knowledge__name'>Category name</span>
          </div>
          <p className='knowledge__desc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className='knowledge__box'>
          <Image
            src='https://placehold.co/424x230'
            alt='knowledge'
            width={424}
            height={230}
            className='knowledge__img'
          />
          <div className='knowledge__date-name-wrapper'>
            <span>June 25th, 2024</span>
            <span className='knowledge__name'>Category name</span>
          </div>
          <p className='knowledge__desc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className='knowledge__box'>
          <Image
            src='https://placehold.co/424x230'
            alt='knowledge'
            width={424}
            height={230}
            className='knowledge__img'
          />
          <div className='knowledge__date-name-wrapper'>
            <span>June 25th, 2024</span>
            <span className='knowledge__name'>Category name</span>
          </div>
          <p className='knowledge__desc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className='knowledge__box'>
          <Image
            src='https://placehold.co/424x230'
            alt='knowledge'
            width={424}
            height={230}
            className='knowledge__img'
          />
          <div className='knowledge__date-name-wrapper'>
            <span>June 25th, 2024</span>
            <span className='knowledge__name'>Category name</span>
          </div>
          <p className='knowledge__desc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className='btn_wrapper'>
        <ButtonArrowFilled title='See All News' />
      </div>
    </section>
  );
};

export default Knowledge;
