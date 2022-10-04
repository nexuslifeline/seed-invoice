import Styles from './Sidebar.module.scss';

const Sidebar = (props) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.mainPanel}> </div>
      <div className={Styles.subPanel}></div>
    </div>
  );
};

export default Sidebar;
