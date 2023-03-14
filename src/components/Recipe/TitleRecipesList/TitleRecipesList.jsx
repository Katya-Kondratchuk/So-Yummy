import React from 'react';
import css from './TitleRecipesList.module.css';

const TitleRecipesList = () => {
  return (
    <div className={css.title}>
      <span className={css.ingredients}>Ingredients</span>
      <div className={css.rightPartText}>
        <span className={css.ingredients}>Number</span>
        <span className={css.ingredients}>Add to list</span>
      </div>
    </div>
  );
};

export default TitleRecipesList;
