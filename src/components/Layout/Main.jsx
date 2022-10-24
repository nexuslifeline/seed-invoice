import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SlidePanel from 'components/SlidePanel';
import Styles from './Main.module.scss';
import { LayoutStateContext } from 'shared/context/LayoutState';
import { useState } from 'react';

const Layout = () => {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  return (
    <LayoutStateContext.Provider value={{ isSlideOpen, setIsSlideOpen }}>
      <div className={Styles.container}>
        <Sidebar />
        <Header />

        <div className={Styles.main}>
          <Outlet />
        </div>

        <SlidePanel />
      </div>
    </LayoutStateContext.Provider>
  );
};

export default Layout;
