import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <NavLink to="/search">Ingredients</NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my"> MyRecipes</NavLink>
      <NavLink to="/favorite"> Favorite</NavLink>
      <NavLink to="/shopping-list"> Shopping list</NavLink>
    </nav>
  );
};

export default Nav;
