import './style.scss';

const SectionLabel = ({ title = '', className = '' }) => {
  return <span className={`section-label ${className}`}>{title}</span>;
};

export default SectionLabel;
