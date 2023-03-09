import React from 'react';
import { NavLink } from 'react-router-dom';
import TreshIcon from 'reusableComponents/TreshIcon/TreshIcon';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/search">SearchPage</NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my"> MyRecipesPage</NavLink>
      <NavLink to="/favorite"> FavoriteRecipesPage</NavLink>
      <NavLink to="/shopping-list"> ShoppingListPage</NavLink>
      <TreshIcon />
    </nav>
  );
};

export default Nav;
