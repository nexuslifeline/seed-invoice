import Styles from './Panels.module.scss';
import classNames from 'classnames';

const Panel = ({ children, hasBackground = false }) => {
  return <div className={classNames(Styles.container, hasBackground && Styles.hasBackground)}>{children}</div>;
};

export default Panel;
