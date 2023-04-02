import Styles from './Field.module.scss';
import classNames from 'classnames';

const Field = ({ className, label, children, ...props }) => {
  return (
    <div className={classNames(Styles.container, className)} {...props}>
      {label && <label className={Styles.caption}>{label}</label>}
      {children}
    </div>
  );
};

export default Field;
