import React from 'react';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import css from './MobileNavMenu.module.css';
import MobMenuCloseBtn from './MobMenuCloseBtn/MobMenuCloseBtn';
import LogoHeader from '../LogoHeader/LogoHeader';
import { Link } from 'react-router-dom';

const MobileNavMenu = ({ closeMenu }) => {
  return (
    <div className={css.container}>
      <div onClick={() => closeMenu()}>
        <Link to="/home" className={css.logoWrapper}>
          <LogoHeader />
        </Link>
      </div>
      <MobMenuCloseBtn closeMenu={closeMenu} />
      <HeaderNavigation closeMenu={closeMenu} />
    </div>
  );
};

export default MobileNavMenu;
