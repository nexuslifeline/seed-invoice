import Styles from './Hamburger.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div class={classNames(Styles.hamburger, isActive && Styles.isActive)} onClick={() => setIsActive(!isActive)}>
      <span class={Styles.line}></span>
      <span class={Styles.line}></span>
      <span class={Styles.line}></span>
    </div>
  );
};

export default Hamburger;
