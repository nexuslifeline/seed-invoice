import MagnifyingGlass from 'components/Icons/MagnifyingGlass';
import Styles from './SubPanelSection.module.scss';
import classNames from 'classnames';
import { useLocation, Link } from 'react-router-dom';
import { navLinks } from '../../../router/nav';

const SubPanelSection = ({ title, children }) => {
  const location = useLocation();
  const subLinks = navLinks.find((v) => v.children.some((child) => child.to === location.pathname));

  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        {title}
        <button className={Styles.btnSearch}>
          <MagnifyingGlass />
        </button>
      </div>
      {children}
      <ul className={Styles.menus}>
        {subLinks.children.map(({ icon: Icon, text, to }) => {
          return (
            <li className={classNames(Styles.menu, to === location.pathname && Styles.active)}>
              <Link to={to} className={Styles.link}>
                <Icon className={Styles.icon} />
                {text}
              </Link>
            </li>
          );
        })}
        {/* <li className={classNames(Styles.menu, Styles.active)}>
          <Star className={Styles.icon} />
          {'Invoices'}
        </li>
        <li className={Styles.menu}>
          <Bookmark className={Styles.icon} />
          {'Recurring Invoices'}
        </li>
        <li className={Styles.menu}>
          <Cash className={Styles.icon} />
          {'Payments'}
        </li>
        <li className={Styles.menu}>
          <Card className={Styles.icon} />
          {'Expenses'}
        </li> */}
      </ul>
    </div>
  );
};

export default SubPanelSection;
