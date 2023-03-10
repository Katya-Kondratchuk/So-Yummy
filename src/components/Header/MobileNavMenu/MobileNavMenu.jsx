import React from 'react';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import css from './MobileNavMenu.module.css';

const MobileNavMenu = () => {
  return (
    <div className={css.container}>
      <HeaderNavigation />
    </div>
  );
};

export default MobileNavMenu;
