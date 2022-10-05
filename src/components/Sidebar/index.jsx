import Styles from './Sidebar.module.scss';
import SubPanel from './components/SubPanel';
import MainPanel from './components/MainPanel';

const Sidebar = (props) => {
  return (
    <div className={Styles.container}>
      <MainPanel />
      <SubPanel />
    </div>
  );
};

export default Sidebar;
