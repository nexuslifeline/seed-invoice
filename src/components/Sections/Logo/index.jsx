import Styles from './LogoSection.module.scss';
import Logo from 'components/Icons/LogoWhite';

const LogoSection = ({ children }) => {
  return (
    <div className={Styles.logoSection}>
      <Logo className={Styles.logo} />
      <div className={Styles.logoHeadlines}>
        <h1 className={Styles.headline}>{`Seed`}</h1>
        <p className={Styles.subheadline}>{`A workplace to grow your business`}</p>
      </div>
    </div>
  );
};

export default LogoSection;
