import Apps from 'components/Icons/Apps';
import Bell from 'components/Icons/Bell';
import Styles from './MenuButtons.module.scss';
import classNames from 'classnames';
import Menu from 'components/Menu';
import Notifications from 'components/Header/components/NotificationDropdown';

const MenuButton = ({ button, content, hasSonar, children }) => {
  return (
    <Menu>
      <Menu.Button className={classNames(Styles.menuButton, hasSonar && Styles.hasSonar)}>{button}</Menu.Button>
      <Menu.Items className={Styles.items}>{content}</Menu.Items>
    </Menu>
  );
};

const Item = ({ children, hasSonar, icon: Icon, onClick }) => {
  return (
    <li className={Styles.item}>
      {children ? (
        <MenuButton {...{ button: () => <Icon className={Styles.icon} />, content: children, hasSonar }} />
      ) : (
        <button className={classNames(Styles.menuButton, hasSonar && Styles.hasSonar)}>
          <Icon className={Styles.icon} />
        </button>
      )}
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
