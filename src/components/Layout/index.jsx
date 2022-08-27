import { Outlet } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
};

export default Layout;
