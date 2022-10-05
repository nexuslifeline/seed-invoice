import Styles from './SubPanel.module.scss';
// import LogoBlackFull from 'components/Icons/LogoBlackFull';
import SubPanelSection from './SubPanelSection';

const SubPanel = () => {
  return (
    <div className={Styles.container}>
      {/* <div className={Styles.logoContainer}>
        <LogoBlackFull className={Styles.logo} />
      </div> */}
      <SubPanelSection title={'Workspace'} />
    </div>
  );
};

export default SubPanel;
