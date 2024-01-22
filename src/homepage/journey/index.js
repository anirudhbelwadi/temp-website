import './style.scss';
import Image from 'next/image';
import ButtonArrowFilled from '../../commons/buttons/button-arrow-filled';
import useDeviceSize from '../../hooks/use-device-size';

const Journey = () => {
  const { width } = useDeviceSize();
  return (
    <section className='journey'>
      <div className='journey__heading-details'>
        <h2 className='section-heading60'>
          Start Your <span> Journey</span>
          {width > 640 && <br />} with <span>Ex-Implify</span>
        </h2>
        <p className='section-description'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <ButtonArrowFilled isWhiteBg title='Sign In here' />
        <ButtonArrowFilled title='Register Now' className='register_btn' />
      </div>
      <Image
        src='https://placehold.co/1080x400'
        alt='Consultation'
        width={1080}
        height={400}
        className='journey__img'
      />
    </section>
  );
};

export default Journey;
