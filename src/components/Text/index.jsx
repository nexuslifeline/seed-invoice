import Styles from './Text.module.scss';
import classNames from 'classnames';
import { snakeToCamel } from 'shared/lib/utils';

const Text = ({ as: Elem = 'p', children, content, variant = 'title', size, className, style, ...props }) => {
  const sizeClass = size ? Styles[snakeToCamel(size)] : '';
  return (
    <Elem className={classNames(Styles[snakeToCamel(variant)], sizeClass, className)} style={{ style, ...props }}>
      {children || content}
    </Elem>
  );
};

export default Text;
