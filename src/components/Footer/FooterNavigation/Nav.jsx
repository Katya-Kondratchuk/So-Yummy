import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Footer.module.css';

const Nav = () => {
  return (
    <nav className={s.navCentre}>
      <NavLink to="/search">Ingredients</NavLink>
      <NavLink to="/add">My recipes</NavLink>
      <NavLink to="/my"> My recipes</NavLink>
      <NavLink to="/favorite"> Favorite</NavLink>
      <NavLink to="/shopping-list"> Shopping list</NavLink>
    </nav>
  );
};

export default Nav;
