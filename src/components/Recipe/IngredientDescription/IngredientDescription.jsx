import React from 'react';
import css from './IngredientDescription.module.css';

const IngredientDescription = ({ description }) => {
  return (
    <div className={css.wrapper}>
      <span className={css.name}>Name: {description}</span>
      <span className={css.description}>Description:{description}</span>
    </div>
  );
};

export default IngredientDescription;
