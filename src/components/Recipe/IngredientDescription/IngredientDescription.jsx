import React from 'react';
import s from './IngredientDescription.module.css';

const IngredientDescription = ({ description }) => {
  return (
    <div className={s.wrapper}>
      <span className={s.name}>Name: {description}</span>
      <span className={s.description}>Description:{description}</span>
    </div>
  );
};

export default IngredientDescription;
