import React from 'react';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import css from './MobileNavMenu.module.css';
import MobMenuCloseBtn from './MobMenuCloseBtn/MobMenuCloseBtn';
import { Link } from 'react-router-dom';
import Logo from 'reusableComponents/Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const MobileNavMenu = ({ closeMenu }) => {
  return (
    <div className={css.container}>
      <div onClick={() => closeMenu()}>
        <Link to="/main" className={css.logoWrapper}>
          <Logo />
        </Link>
      </div>
      <MobMenuCloseBtn className={css.mobNavBtn} closeMenu={closeMenu} />
      <HeaderNavigation closeMenu={closeMenu} />
      <ThemeSwitcher />
    </div>
  );
};

export default MobileNavMenu;
