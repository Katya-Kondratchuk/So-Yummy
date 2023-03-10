import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './MainNavLink.module.css';
import './MainNavLink.css';

const MainNavLink = ({ to, title, children }) => {
  return (
    <NavLink className={clsx(css.navLink, 'navLink')} to={to}>
      {children && <div className={css.glassWrapper}>{children}</div>}
      {title}
    </NavLink>
  );
};

export default MainNavLink;
