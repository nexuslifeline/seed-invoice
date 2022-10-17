import Styles from './MainPanel.module.scss';
import PurpleMini from 'components/Icons/Logo/PurpleMini';
import { Link } from 'react-router-dom';
import Profile from 'components/Sidebar/components/ProfileMenu';
import { navLinks } from 'router/nav';
import classNames from 'classnames';

const MainPanel = ({ activeIndex }) => {
  const getNavUrl = (idx) => {
    const link = navLinks?.[idx] || {};
    return link.to || link.groups?.[0]?.children?.[0]?.to;
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.logoContainer}>
        <PurpleMini className={Styles.logo} />
      </div>
      <ul className={Styles.menus}>
        {navLinks.map(({ icon: Icon }, idx) => {
          return (
            <li key={idx} className={classNames(Styles.menu, idx === activeIndex && Styles.active)}>
              <Link to={getNavUrl(idx)} className={Styles.link}>
                <Icon className={Styles.icon} />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={Styles.bottom}>
        <Profile />
      </div>
    </div>
  );
};

export default MainPanel;
