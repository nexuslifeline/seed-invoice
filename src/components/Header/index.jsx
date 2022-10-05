import Hamburger from 'components/Hamburger';
import Styles from './Header.module.scss';
import Menu from './components/Menus';

const Header = (props) => {
  return (
    <div className={Styles.container}>
      <Hamburger />
      <Menu />
    </div>
  );
};

export default Header;
