import './style.scss';

const ButtonTransparent = ({ title = '', className = '' }) => {
  return (
    <button className={`btn--transparent ${className}`} type='button'>
      {title}
    </button>
  );
};

export default ButtonTransparent;
