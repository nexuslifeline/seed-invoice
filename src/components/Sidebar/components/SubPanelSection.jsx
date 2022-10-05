import MagnifyingGlass from 'components/Icons/MagnifyingGlass';
import Star from 'components/Icons/Star';
import Cash from 'components/Icons/Cash';
import Card from 'components/Icons/Card';
import Styles from './SubPanelSection.module.scss';
import Bookmark from 'components/Icons/Bookmark';

const SubPanelSection = ({ title }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        {title}
        <button className={Styles.btnSearch}>
          <MagnifyingGlass />
        </button>
      </div>
      <ul className={Styles.menus}>
        <li className={Styles.menu}>
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
        </li>
      </ul>
    </div>
  );
};

export default SubPanelSection;
