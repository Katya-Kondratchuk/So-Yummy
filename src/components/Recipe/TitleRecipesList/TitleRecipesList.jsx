import React from 'react';
import css from './TitleRecipesList.module.css';

const TitleRecipesList = () => {
  return (
    <div className={css.title}>
      <span className={css.ingredients}>Ingredients</span>
      <div className={css.rightPartText}>
        <span>Number</span>
        <span>Add to list</span>
      </div>
    </div>
  );
};

export default TitleRecipesList;
