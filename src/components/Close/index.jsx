import Styles from './Close.module.scss';
import Times from 'components/Icons/Times';

const Close = (props) => {
  return (
    <button className={Styles.close} {...props}>
      <Times className={Styles.icon} />
    </button>
  );
};

export default Close;
