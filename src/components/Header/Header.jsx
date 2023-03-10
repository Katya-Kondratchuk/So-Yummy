import React from 'react';
// import Logo from './Logo';
// import { UserLogo } from './UserLogo';
import s from './Header.module.css';
import Navigation from './Navigation/Navigation';


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
