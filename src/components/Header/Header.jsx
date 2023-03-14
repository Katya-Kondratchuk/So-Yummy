import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'reusableComponents/Logo/Logo';
// import { UserLogo } from './UserLogo';
import css from './Header.module.css';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

import MobileNavMenu from './MobileNavMenu/MobileNavMenu';
import MobMenuBurgerBtn from './MobileNavMenu/MobMenuBurgerBtn/MobMenuBurgerBtn';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  const [mobMenu, setMobMenu] = useState(false);

  const isMobile = useMediaQuery('(max-width: 1439px)');

  const closeMenu = () => {
    setMobMenu(false);
  };
  const openMenu = () => {
    setMobMenu(true);
  };
  return (
    <div className="container">
      <header className={css.header}>
        <div className={css.wrapperLogo}>
          <Link to="/main" className={css.logoWrapper}>
            <Logo width={'44px'} height={'44px'} />
          </Link>
        </div>
        {isMobile && mobMenu && <MobileNavMenu closeMenu={closeMenu} />}
        {!isMobile && <HeaderNavigation />}
        {isMobile && <MobMenuBurgerBtn openMenu={openMenu} />}
        <UserMenu />
      </header>
    </div>
  );
};

export default Header;
