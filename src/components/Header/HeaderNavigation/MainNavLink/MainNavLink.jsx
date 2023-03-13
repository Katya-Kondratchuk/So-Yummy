import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './MainNavLink.module.css';

const MainNavLink = ({ to, title, closeMenu = () => {} }) => {
  return (
    <NavLink
      className={clsx(css.navLink, 'navLink')}
      to={to}
      onClick={() => closeMenu()}
    >
      {title}
    </NavLink>
  );
};

export default MainNavLink;
