import './style.scss';
import RightArrowSvg from '../../right-arrow-svg';

const ButtonArrowFilled = ({ title = '' }) => {
  return (
    <button className='btn-arrow--filled' type='button'>
      {title}
      <span>
        <RightArrowSvg />
      </span>
    </button>
  );
};

export default ButtonArrowFilled;
