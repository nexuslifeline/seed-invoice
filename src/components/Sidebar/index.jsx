import Styles from './Sidebar.module.scss';
import SubPanel from './components/SubPanel';
import MainPanel from './components/MainPanel';
import Hamburger from 'components/Hamburger';
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <div className={Styles.container}>
      <MainPanel />
      <SubPanel isCollapse={isCollapse} />
      <button className={Styles.btnMenu} onClick={() => setIsCollapse(!isCollapse)}>
        <Hamburger isArrow={!isCollapse} />
      </button>
    </div>
  );
};

export default Sidebar;
