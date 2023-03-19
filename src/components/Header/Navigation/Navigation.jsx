import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink className={css.navigationItem} to="/categories">
        Categories
      </NavLink>
      <NavLink className={css.navigationItem} to="/add">
        Add recipes
      </NavLink>
      <NavLink className={css.navigationItem} to="/my">
        My recipes
      </NavLink>
      <NavLink className={css.navigationItem} to="/favorite">
        Favorites
      </NavLink>
      <NavLink className={css.navigationItem} to="/shopping-list">
        Shopping List
      </NavLink>
      <NavLink className={css.navigationItem} to="/search">
        Search
      </NavLink>
    </nav>
  );
};

export default Navigation;
