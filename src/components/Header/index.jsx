import Styles from './Header.module.scss';
import Menu from './components/Menus';
import SearchBar from './components/SearchBar';

const Header = (props) => {
  return (
    <div className={Styles.container}>
      <SearchBar />
      <Menu />
    </div>
  );
};

export default Header;
