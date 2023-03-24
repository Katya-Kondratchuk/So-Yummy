import clsx from 'clsx';
import React, { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './MainNavLink.module.css';

const MainNavLink = ({ to, title, closeMenu = () => {} }) => {
  const location = useLocation();
  const isRecepie = useMemo(
    () => (location?.pathname.includes('/recipe') ? css.recipePageColor : ''),
    [location.pathname],
  );
  return (
    <NavLink
      className={clsx(css.navLink, 'navLink', isRecepie)}
      to={to}
      onClick={() => closeMenu()}
    >
      {title}
    </NavLink>
  );
};

export default MainNavLink;
