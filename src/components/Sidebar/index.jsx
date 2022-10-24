import Styles from './Sidebar.module.scss';
import SubPanel from './components/SubPanel';
import MainPanel from './components/MainPanel';
import { navLinks } from 'router/nav';
import { useLocation } from 'react-router-dom';
import { withLayoutState } from 'shared/context/LayoutState';

const Sidebar = ({ isMainNavOpen }) => {
  const location = useLocation();

  const navIndex = navLinks.findIndex(({ groups }) =>
    groups?.some(({ children }) => children?.some((child) => child?.to === location?.pathname))
  );

  const linkGroups = navLinks?.[navIndex]?.groups || [];

  return (
    <div className={Styles.container}>
      <MainPanel activeIndex={navIndex} />
      <SubPanel linkGroups={linkGroups} isCollapse={!linkGroups?.length > 0 || isMainNavOpen} />
    </div>
  );
};

export default withLayoutState(Sidebar);
