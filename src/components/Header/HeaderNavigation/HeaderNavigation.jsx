import React from 'react';
import MainNavLink from './MainNavLink/MainNavLink';
import МagnifyinGlass from './МagnifyinGlass/МagnifyinGlass';
import css from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
  return (
    <nav className={css.navMenu}>
      <MainNavLink to="/categories" title="Categories" />
      <MainNavLink to="/add" title="Add recipes" />
      <MainNavLink to="/my" title="My recipes" />
      <MainNavLink to="/favorite" title="Favorites" />
      <MainNavLink to="/shopping-list" title="Shopping list" />
      <MainNavLink to="/search" title="Search">
        <МagnifyinGlass />
      </MainNavLink>
    </nav>
  );
};

export default HeaderNavigation;
