import Styles from './SubPanel.module.scss';
// import LogoBlackFull from 'components/Icons/LogoBlackFull';
import SubPanelSection from './SubPanelSection';
import classNames from 'classnames';

const SubPanel = ({ isCollapse }) => {
  return (
    <div className={classNames(Styles.container, isCollapse && Styles.collapse)}>
      {/* <div className={Styles.logoContainer}>
        <LogoBlackFull className={Styles.logo} />
      </div> */}
      <SubPanelSection title={'Workspace'} />
    </div>
  );
};

export default SubPanel;
