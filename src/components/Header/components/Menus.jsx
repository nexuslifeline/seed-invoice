import Apps from 'components/Icons/Apps';
import Bell from 'components/Icons/Bell';
import Styles from './Menus.module.scss';
import classNames from 'classnames';

const Item = ({ icon: Icon, hasSonar = false }) => {
  return (
    <li className={classNames(Styles.menu, hasSonar && Styles.hasSonar)}>
      <Icon className={Styles.icon} />
    </li>
  );
};

const MenuList = (props) => {
  return (
    <ul className={Styles.container}>
      <Item icon={Bell} hasSonar />
      <Item icon={Apps} />
    </ul>
  );
};

export default MenuList;
