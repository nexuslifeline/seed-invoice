import Styles from './SlidePanel.module.scss';
import Times from 'components/Icons/Times';
import classNames from 'classnames';
import { withLayoutState } from 'shared/context/LayoutState';

const SlidePanel = ({ isSlideOpen, setIsSlideOpen }) => {
  return (
    <div className={classNames(Styles.container, isSlideOpen && Styles.open)}>
      <div className={Styles.header}>
        <button className={Styles.close} onClick={() => setIsSlideOpen(false)}>
          <Times className={Styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default withLayoutState(SlidePanel);
