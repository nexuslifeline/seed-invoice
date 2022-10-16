import { Fragment } from 'react';
import Apps from 'components/Icons/Apps';
import Bell from 'components/Icons/Bell';
import Styles from './MenuButtons.module.scss';
import classNames from 'classnames';
import Menu from 'components/Menu';
import Notifications from 'components/Header/components/Notifications';

const MenuButton = ({ button, content }) => {
  return (
    <Menu>
      <Menu.Button as={Fragment}>{button}</Menu.Button>
      <Menu.Items className={Styles.items}>{content}</Menu.Items>
    </Menu>
  );
};

const Item = ({ children, hasSonar, icon: Icon, onClick }) => {
  const button = (
    <button onClick={() => onClick?.()} className={classNames(Styles.menuButton, hasSonar && Styles.hasSonar)}>
      <Icon className={Styles.icon} />
    </button>
  );

  return (
    <li className={Styles.item}>
      {children ? <MenuButton {...{ button, content: children }} /> : <Fragment>{button}</Fragment>}
    </li>
  );
};

const MenuButtons = (props) => {
  return (
    <ul className={Styles.container}>
      <Item icon={Bell} hasSonar>
        <Notifications />
      </Item>
      <Item icon={Apps} />
    </ul>
  );
};

export default MenuButtons;
