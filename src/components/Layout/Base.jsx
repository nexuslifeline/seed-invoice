import { Outlet } from 'react-router-dom';
import Styles from './Base.module.scss';
import LogoSection from 'components/Sections/Logo';
import Circles from 'components/Backgrounds/Circles';

const Layout = ({ children }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.paneLeft}>
        {children}
        <Outlet />
      </div>
      <div className={Styles.paneRight}>
        <LogoSection />
        <Circles />
      </div>
    </div>
  );
};

export default Layout;
