import Image from 'next/image';
import '../style.scss';
import marker from '../../../public/images/marker.png';
import bannerimg from '../../../public/images/bannerimg.jpg';
import RightArrowSvg from '../../commons/right-arrow-svg';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='my_container'>
        <div className='grid_box'>
          <div className='box_left'>
            <span className='label'>100+ Listed Merchants</span>
            <h1 className='heading'>
              One Stop Solution <br /> to get the <br />
              <span className='relative'>
                Import & Export Gyan
                <Image src={marker} width={380} height={28} alt='Marker' />
              </span>
            </h1>
            <p className='para_text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button className='trasparent_btn' type='button'>
              How It Works
            </button>
            <button className='arrow_btn' type='button'>
              Explore More
              <span className=''>
                <RightArrowSvg />
              </span>
            </button>
          </div>
          <div className='box_right'>
            <Image
              src={bannerimg}
              width={510}
              height={559}
              alt='Banner'
              className='bannerimg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
