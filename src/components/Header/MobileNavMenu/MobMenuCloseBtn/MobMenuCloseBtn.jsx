import React from 'react';
import { ReactComponent as NavClose } from '../../../../assets/images/NavClose/navClose.svg';
import css from './MobMenuCloseBtn.module.css';
const MobMenuCloseBtn = ({ closeMenu }) => {
  return (
    <button
      className={css.button}
      onClick={() => {
        closeMenu();
      }}
    >
      <NavClose />
    </button>
  );
};

export default MobMenuCloseBtn;
