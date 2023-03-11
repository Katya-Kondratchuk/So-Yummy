import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './SearchNavLink.module.css';
import МagnifyinGlass from '../МagnifyinGlass/МagnifyinGlass';
import { useMediaQuery } from '@mui/material';

const SearchNavLink = ({ to, title, closeMenu }) => {
  const isMobile = useMediaQuery('(max-width: 1439px)');
  return (
    <NavLink
      className={clsx(css.navLink, 'navLink')}
      to={to}
      onClick={() => closeMenu()}
    >
      <div className={css.glassWrapper}>
        <МagnifyinGlass />
      </div>
      {isMobile && title}
    </NavLink>
  );
};

export default SearchNavLink;
