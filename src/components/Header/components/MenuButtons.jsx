import { Fragment } from 'react';
import Apps from 'components/Icons/Apps';
import Bell from 'components/Icons/Bell';
import Styles from './MenuButtons.module.scss';
import classNames from 'classnames';
import Menu from 'components/Menu';
import Notifications from 'components/Header/components/Notifications';

const Item = ({ icon: Icon, hasSonar = false }) => {
  return (
    <li className={Styles.item}>
      <Menu>
        <Menu.Button as={Fragment}>
          <button className={classNames(Styles.menuButton, hasSonar && Styles.hasSonar)}>
            <Icon className={Styles.icon} />
          </button>
        </Menu.Button>
        <Menu.Items className={Styles.items}>
          <Notifications />
        </Menu.Items>
      </Menu>
    </li>
  );
};

const MenuButtons = (props) => {
  return (
    <ul className={Styles.container}>
      <Item icon={Bell} hasSonar />
      <Item icon={Apps} />
    </ul>
  );
};

export default MenuButtons;
