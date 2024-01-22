import './style.scss';
import RightArrowSvg from '../../right-arrow-svg';

const ButtonArrowFilled = ({
  title = '',
  className = '',
  isWhiteBg = false
}) => {
  return (
    <button
      className={`btn-arrow--filled ${
        isWhiteBg ? 'bg--white' : 'bg--black'
      } ${className} `}
      type='button'
    >
      {title}
      <span>
        <RightArrowSvg />
      </span>
    </button>
  );
};

export default ButtonArrowFilled;
