import Styles from './SlidePanel.module.scss';
import Times from 'components/Icons/Times';

const SlidePanel = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <button className={Styles.close}>
          <Times className={Styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default SlidePanel;
