import Styles from './Sidebar.module.scss';
import SubPanel from './components/SubPanel';
import MainPanel from './components/MainPanel';
import Hamburger from 'components/Hamburger';
import { useState } from 'react';
import { navLinks } from 'router/nav';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const [isCollapse, setIsCollapse] = useState(false);
  const navIndex = navLinks.findIndex(({ groups }) =>
    groups?.some(({ children }) => children?.some((child) => child?.to === location?.pathname))
  );

  const linkGroups = navLinks?.[navIndex]?.groups || [];

  return (
    <div className={Styles.container}>
      <MainPanel activeIndex={navIndex} />
      <SubPanel linkGroups={linkGroups} isCollapse={!linkGroups?.length > 0 || isCollapse} />

      <button className={Styles.btnMenu} onClick={() => setIsCollapse(!isCollapse)}>
        <Hamburger isArrow={!isCollapse} />
      </button>
    </div>
  );
};

export default Sidebar;
