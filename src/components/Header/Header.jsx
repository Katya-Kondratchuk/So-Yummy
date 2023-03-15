import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'reusableComponents/Modal/Modal';
// import { UserLogo } from './UserLogo';
import css from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

import MobileNavMenu from './MobileNavMenu/MobileNavMenu';
import MobMenuBurgerBtn from './MobileNavMenu/MobMenuBurgerBtn/MobMenuBurgerBtn';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
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
          <NavLink to="/main" className={css.logoWrapper}>
            <HeaderLogo width={'44px'} height={'44px'} />
          </NavLink>
        </div>
        {!isMobile && <HeaderNavigation />}
        <UserMenu />
        {!isMobile && <ThemeSwitcher />}
        <div className={css.wrapperMenBur}>
          {isMobile && <MobMenuBurgerBtn openMenu={openMenu} />}
        </div>
        <div />
        {isMobile && mobMenu && (
          <Modal onClose={closeMenu}>
            <MobileNavMenu closeMenu={closeMenu} />
          </Modal>
        )}
      </header>
    </div>
  );
};

export default Header;
