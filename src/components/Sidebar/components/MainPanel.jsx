import Styles from './MainPanel.module.scss';
import PurpleMini from 'components/Icons/Logo/PurpleMini';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from './nav';
import Avatar from 'components/Avatar';

const MainPanel = (props) => {
  const location = useLocation();

  return (
    <div className={Styles.container}>
      <div className={Styles.logoContainer}>
        <PurpleMini className={Styles.logo} />
      </div>
      <ul className={Styles.menus}>
        {navLinks.map(({ icon: Icon, children }, idx) => {
          const found = children.some((child) => child.to === location.pathname);
          return (
            <li key={idx} className={classNames(Styles.menu, found && Styles.active)}>
              <Link to={children[0].to} className={Styles.link}>
                <Icon className={Styles.icon} />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={Styles.bottom}>
        <Avatar
          round
          containerProps={{
            borderWidth: 0,
            width: 40,
            height: 40,
          }}
          src=''
          initials={'PC'}
          profileId={5}
          isOnline
        />
      </div>
    </div>
  );
};

export default MainPanel;
