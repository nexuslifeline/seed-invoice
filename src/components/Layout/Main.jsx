import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SlidePanel from 'components/SlidePanel';
import Styles from './Main.module.scss';

const Layout = (props) => {
  return (
    <div className={Styles.container}>
      <Sidebar />
      <Header />

      <div className={Styles.main}>
        <Outlet />
      </div>

      <SlidePanel />
    </div>
  );
};

export default Layout;
