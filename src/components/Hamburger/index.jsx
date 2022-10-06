import Styles from './Hamburger.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classNames(Styles.hamburger, isActive && Styles.isActive)} onClick={() => setIsActive(!isActive)}>
      <span className={Styles.line}></span>
      <span className={Styles.line}></span>
      <span className={Styles.line}></span>
    </div>
  );
};

export default Hamburger;
