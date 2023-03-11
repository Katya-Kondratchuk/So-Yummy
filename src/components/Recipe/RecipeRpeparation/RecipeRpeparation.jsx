import React from 'react';
import css from './RecipeRpeparation.module.css';

const RecipeRpeparation = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.itemsContainer}>
        <span className={css.title}>Recipe Preparation</span>
        <div className={css.itemWrapper}>
          <div className={css.itemNumber}>1</div>
          <span className={css.description}>Stage 1</span>
        </div>
        <div className={css.itemWrapper}>
          <div className={css.itemNumber}>2</div>
          <span className={css.description}>Stage 2</span>
        </div>
        <div className={css.itemWrapper}>
          <div className={css.itemNumber}>3</div>
          <span className={css.description}>Stage 3</span>
        </div>
        <div className={css.itemWrapper}>
          <div className={css.itemNumber}>4</div>
          <span className={css.description}>Stage 4</span>
        </div>
      </div>
      <div className={css.image}>Image</div>
    </div>
  );
};

export default RecipeRpeparation;
