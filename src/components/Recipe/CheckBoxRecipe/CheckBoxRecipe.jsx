import React from 'react';
import css from './CheckBoxRecipe.module.css';
import { nanoid } from '@reduxjs/toolkit';

const CheckBoxRecipe = ({ id }) => {
  const cbId = nanoid();
  return (
    <div className={css.wrapper}>
      <input className={css.input} type={'checkbox'} id={cbId} />
      <label className={css.label} htmlFor={cbId}></label>
    </div>
  );
};

export default CheckBoxRecipe;
