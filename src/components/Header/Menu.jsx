import Apps from 'components/Icons/Apps';
import Bell from 'components/Icons/Bell';
import Styles from './Menu.module.scss';

const Menu = (props) => {
  return (
    <div className={Styles.container}>
      <button className={Styles.menu}>
        <Bell className={Styles.icon} />
      </button>
      <button className={Styles.menu}>
        <Apps className={Styles.icon} />
      </button>
    </div>
  );
};

export default Menu;
