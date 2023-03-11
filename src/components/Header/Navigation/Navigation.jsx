import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink className={s.navigationItem} to="/categories">
        Categories
      </NavLink>
      <NavLink className={s.navigationItem} to="/add">
        Add recipes
      </NavLink>
      <NavLink className={s.navigationItem} to="/my">
        My recipes
      </NavLink>
      <NavLink className={s.navigationItem} to="/favorite">
        Favorites
      </NavLink>
      <NavLink className={s.navigationItem} to="/shopping-list">
        Shopping List
      </NavLink>
      <NavLink className={s.navigationItem} to="/search">
        Search
      </NavLink>
    </nav>
  );
};

export default Navigation;
