import React from 'react';
import { ReactComponent as MobMenuBtn } from '../../../../assets/images/HeaderMenu/headerMenu.svg';
import { ReactComponent as MobMenuBtnWhite } from '../../../../assets/images/HeaderMenu/menu-03.svg';
import css from './MobMenuBurgerBtn.module.css';

const MobMenuBurgerBtn = ({ openMenu, isDarkMode }) => {
  return (
    <button
      className={css.button}
      onClick={() => {
        openMenu();
      }}
      key={isDarkMode}
    >
      {isDarkMode ? (
        <MobMenuBtnWhite className={css.svg} />
      ) : (
        <MobMenuBtn className={css.svg} />
      )}
    </button>
  );
};

export default MobMenuBurgerBtn;
