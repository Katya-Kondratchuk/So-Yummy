import React from 'react';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import css from './MobileNavMenu.module.css';
import MobMenuCloseBtn from './MobMenuCloseBtn/MobMenuCloseBtn';
import { Link } from 'react-router-dom';
import Logo from 'reusableComponents/Logo/Logo';

const MobileNavMenu = ({ closeMenu }) => {
  return (
    <div className={css.container}>
      <div onClick={() => closeMenu()}>
        <Link to="/home" className={css.logoWrapper}>
          <Logo />
        </Link>
      </div>
      <MobMenuCloseBtn closeMenu={closeMenu} />
      <HeaderNavigation closeMenu={closeMenu} />
    </div>
  );
};

export default MobileNavMenu;
