import Styles from './MobileNav.module.scss';
import classNames from 'classnames';
import { withLayoutState } from 'shared/context/LayoutState';
import Close from 'components/Close';

const MobileNav = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  return (
    <div className={classNames(Styles.container, isMobileNavOpen && Styles.open)}>
      <div className={Styles.header}>
        <Close onClick={() => setIsMobileNavOpen(false)} />
      </div>
    </div>
  );
};

export default withLayoutState(MobileNav);
