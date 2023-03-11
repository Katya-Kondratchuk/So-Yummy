import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Footer.module.css';

const Nav = () => {
  return (
    <nav className={s.navCentre}>
      <NavLink to="/search">SearchPage</NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my"> MyRecipesPage</NavLink>
      <NavLink to="/favorite"> FavoriteRecipesPage</NavLink>
      <NavLink to="/shopping-list"> ShoppingListPage</NavLink>
    </nav>
  );
};

export default Nav;
