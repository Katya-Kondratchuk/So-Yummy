import React from 'react';
import s from './CheckBoxRecipe.module.css';

const CheckBoxRecipe = ({ id }) => {
  return (
    <div className={s.wrapper}>
      <input className={s.input} type={'checkbox'} id={id} />
      <label className={s.label} htmlFor={id}></label>
    </div>
  );
};

export default CheckBoxRecipe;
