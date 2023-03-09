import React from 'react';
import { NavLink } from 'react-router-dom';
import Title from 'reusableComponents/Title/Title';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my"> MyRecipesPage</NavLink>
      <NavLink to="/favorite"> FavoriteRecipesPage</NavLink>
      <NavLink to="/shopping-list"> ShoppingListPage</NavLink>
      <NavLink to="/search">SearchPage</NavLink>
      <Title text={'Main page'} />
    </nav>
  );
};

export default Navigation;
