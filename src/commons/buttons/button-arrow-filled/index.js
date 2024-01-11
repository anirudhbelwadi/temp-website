import './style.scss';
import RightArrowSvg from '../../right-arrow-svg';

const ButtonArrowFilled = ({ title = '', className = '' }) => {
  return (
    <button className={`btn-arrow--filled ${className}`} type='button'>
      {title}
      <span>
        <RightArrowSvg />
      </span>
    </button>
  );
};

export default ButtonArrowFilled;
