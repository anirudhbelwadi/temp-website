import Image from 'next/image';
// import marker from '../../public/images/marker.svg';
import marker from '../../public/images/marker.png';
import bannerimg from '../../public/images/bannerimg.jpg';
import RightArrowSvg from '../commons/right-arrow-svg';

const Home = () => {
  return (
    <main>
      <section>
        <div className='max_container px-4'>
          <div className='grid grid-cols-2 items-center t1024:grid-cols-1 t1024:gap-y-4'>
            <div className='t1024:text-center'>
              <span
                className='relative mb-4 inline-block rounded-[1234px] bg-c-EEE7FA py-1 pl-2.8
                pr-1.2 font-Lufga700 text-1.4 uppercase tracking-[1.4px] before:absolute before:left-1.2 before:top-[50%]
                before:h-0.8 before:w-0.8 before:translate-y-[-50%] before:rounded-[1234px] before:bg-c-5313CA before:content-[""] m640:mb-2.4 m640:text-1'
              >
                100+ Listed Merchants
              </span>
              <h1 className='mb-3.2 font-Lufga700 text-6 m640:mb-1.8 m640:text-3.8'>
                One Stop Solution <br /> to get the <br />
                <span className='relative whitespace-nowrap text-c-5313CA m640:whitespace-normal'>
                  Import & Export Gyan
                  <Image
                    src={marker}
                    width={380}
                    height={28}
                    alt='Marker'
                    className='absolute bottom-[-0.65rem] left-0 z-[-1] t1024:left-[10rem] m640:left-1 m640:h-2.2 m640:w-[28.2rem]'
                  />
                </span>
              </h1>
              <p className='mb-6 w-full max-w-[72%] font-Lufga500 text-1.8 text-c-050729 opacity-65 t1024:max-w-full m640:mb-4'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
              <div>
                <button
                  className='m640: mr-1.2 inline-block h-6.4 rounded-[1000px] border border-c-5313CA px-3.2 font-Lufga700 text-1.8 text-c-5313CA m640:mb-1.2 m640:mr-0 m640:h-6 m640:w-full m640:text-1.6'
                  type='button'
                >
                  How It Works
                </button>
                <button
                  className='relative h-6.4 rounded-[1000px] bg-c-050729 py-0.8 pl-2.4 pr-8 font-Lufga700 text-1.8 text-c-FFFFFF m640:flex m640:h-6 m640:w-full m640:items-center m640:text-1.6'
                  type='button'
                >
                  Explore More
                  <span className='absolute right-0.8 top-[50%] flex h-4.8 w-4.8 translate-y-[-50%] items-center justify-center rounded-[50%] bg-c-FFFFFF m640:right-0.6'>
                    <RightArrowSvg />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <Image
                src={bannerimg}
                width={510}
                height={559}
                alt='Banner'
                className='ml-auto d1194:w-[35rem] t1024:mr-auto t1024:w-[70%] m640:w-[90%]'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
