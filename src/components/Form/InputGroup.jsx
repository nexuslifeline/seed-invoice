import classNames from 'classnames';
import Styles from './shared.module.scss';

const InputGroup = ({ className, children, ...props }) => {
  return (
    <div className={classNames(Styles.inputGroup, className)} {...props}>
      {children}
    </div>
  );
};

InputGroup.InstanceOf = 'InputGroup';

export default InputGroup;
