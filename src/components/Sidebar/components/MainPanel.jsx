import Styles from './MainPanel.module.scss';
import Home from 'components/Icons/HomeMono';
import Apps from 'components/Icons/AppsMono';
import Gear from 'components/Icons/GearMono';

const MainPanel = (props) => {
  return (
    <div className={Styles.container}>
      {/* <LogoGreenMini className={Styles.logo} /> */}
      <ul className={Styles.menus}>
        <li className={Styles.menu}>
          <Home className={Styles.icon} />
        </li>
        <li className={Styles.menu}>
          <Apps className={Styles.icon} />
        </li>
        <li className={Styles.menu}>
          <Gear className={Styles.icon} />
        </li>
      </ul>
    </div>
  );
};

export default MainPanel;
