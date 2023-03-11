import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Logo from './Logo';
// import { UserLogo } from './UserLogo';
import css from './Header.module.css';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import LogoHeader from './LogoHeader/LogoHeader';

import MobileNavMenu from './MobileNavMenu/MobileNavMenu';
import MobMenuBurgerBtn from './MobileNavMenu/MobMenuBurgerBtn/MobMenuBurgerBtn';

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
    <header className="container">
      <div className={css.header}>
        <div className={css.wrapperLogo}>
          <Link to="/main" className={css.logoWrapper}>
            <LogoHeader />
          </Link>
        </div>
        {isMobile && mobMenu && <MobileNavMenu closeMenu={closeMenu} />}
        {!isMobile && <HeaderNavigation />}
        {isMobile && <MobMenuBurgerBtn openMenu={openMenu} />}

        {/* <UserLogo /> */}
      </div>
    </header>
  );
};

export default Header;
