import Styles from './Close.module.scss';
import Times from 'components/Icons/Times';
import classNames from 'classnames';

const Close = ({ className, ...props }) => {
  return (
    <button className={classNames(Styles.close, className)} {...props}>
      <Times className={Styles.icon} />
    </button>
  );
};

export default Close;
