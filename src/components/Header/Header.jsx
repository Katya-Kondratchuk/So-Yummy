import React from 'react';
// import Logo from './Logo';
import Navigation from './Navigation/Navigation';
// import { UserLogo } from './UserLogo';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className="container">
      <div className={s.header}>
        {/* <Logo /> */}
        <Navigation />
        {/* <UserLogo /> */}
      </div>
    </header>
  );
};

export default Header;
