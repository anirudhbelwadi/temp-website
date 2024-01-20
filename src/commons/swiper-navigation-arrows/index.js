import './style.scss';
import RightArrowSvg from '../right-arrow-svg';

const SwiperNavigationArrows = () => {
  return (
    <div className='navigation_wrapper'>
      <span className='navigation navigation--left'>
        <RightArrowSvg />
      </span>
      <span className='navigation navigation--right'>
        <RightArrowSvg />
      </span>
    </div>
  );
};

export default SwiperNavigationArrows;
