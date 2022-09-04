import Styles from './LogoSection.module.scss';
import Logo from 'components/Icons/LogoWhite';

const LogoSection = () => {
  return (
    <div className={Styles.container}>
      <Logo className={Styles.logo} />
      <div className={Styles.logoHeadlines}>
        <h3 className={Styles.headline}>{`Seed Platform`}</h3>
        <p className={Styles.subheadline}>{`A workplace to grow your business`}</p>
      </div>
    </div>
  );
};

export default LogoSection;
