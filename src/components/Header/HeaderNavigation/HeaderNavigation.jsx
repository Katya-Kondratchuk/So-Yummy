import css from './HeaderNavigation.module.css';
import MainNavLink from './MainNavLink/MainNavLink';
import SearchNavLink from './SearchNavLink/SearchNavLink';

const HeaderNavigation = ({ closeMenu }) => {
  return (
    <nav className={css.navMenu}>
      <MainNavLink to="/categories" title="Categories" closeMenu={closeMenu} />
      <MainNavLink to="/add" title="Add recipes" closeMenu={closeMenu} />
      <MainNavLink to="/my" title="My recipes" closeMenu={closeMenu} />
      <MainNavLink to="/favorite" title="Favorites" closeMenu={closeMenu} />
      <MainNavLink
        to="/shopping-list"
        title="Shopping list"
        closeMenu={closeMenu}
      />
      <SearchNavLink to="/search" title="Search" closeMenu={closeMenu} />
    </nav>
  );
};

export default HeaderNavigation;
