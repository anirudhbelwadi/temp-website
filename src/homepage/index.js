import Image from 'next/image';
import marker from '../../public/images/marker.svg';

const Home = () => {
  return (
    <main>
      <section>
        <div className='max_container px-16'>
          <div className='grid grid-cols-2 items-center'>
            <div>
              <span
                className='relative mb-4 inline-block rounded-[1234px] bg-c-EEE7FA py-1
                pl-2.8 pr-1.2 font-Lufga700 text-1.4 uppercase tracking-[1.4px] before:absolute before:left-1.2
                before:top-[50%] before:h-0.8 before:w-0.8 before:translate-y-[-50%] before:rounded-[1234px] before:bg-c-5313CA before:content-[""]'
              >
                100+ Listed Merchants
              </span>
              <h1 className='mb-3.2 font-Lufga700 text-6'>
                One Stop Solution <br /> to get the <br />
                <span className='relative text-c-5313CA'>
                  Import & Export Gyan
                  <Image
                    src={marker}
                    width={380}
                    height={28}
                    alt='Marker'
                    className='left-0 absolute bottom-[-0.65rem] z-[-1]'
                  />
                </span>
              </h1>
              <p className='mb-6 w-full max-w-[72%] font-Lufga500 text-1.8 text-c-050729 opacity-65'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
              <div className=''>
                <button
                  className='h-6.4 min-w-[173px] rounded-[1000px] border border-c-5313CA px-3.2 font-Lufga700 text-1.8 text-c-5313CA '
                  type='button'
                >
                  How It Works
                </button>
                {/* <button>Explore More</button> */}
              </div>
            </div>
            <div>def</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
