import Styles from './Header.module.scss';
import Menu from './components/Menus';

const Header = (props) => {
  return (
    <div className={Styles.container}>
      <Menu />
    </div>
  );
};

export default Header;
