import Styles from './Rectangle.module.scss';

const Rectangle = ({ ...props }) => {
  return <div className={Styles.circle} style={{ ...props }} />;
};

export default Rectangle;
