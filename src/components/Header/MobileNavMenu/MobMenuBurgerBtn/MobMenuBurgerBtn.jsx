import React from 'react';
import { ReactComponent as MobMenuBtn } from '../../../../assets/images/HeaderMenu/headerMenu.svg';
import css from './MobMenuBurgerBtn.module.css';

const MobMenuBurgerBtn = ({ openMenu }) => {
  return (
    <div>
      <button
        className={css.button}
        onClick={() => {
          openMenu();
        }}
      >
        <MobMenuBtn className={css.svg} />
      </button>
    </div>
  );
};

export default MobMenuBurgerBtn;
