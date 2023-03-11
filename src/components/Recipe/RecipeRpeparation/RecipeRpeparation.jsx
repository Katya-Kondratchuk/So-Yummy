import React from 'react';
import s from './RecipeRpeparation.module.css';

const RecipeRpeparation = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.itemsContainer}>
        <span className={s.title}>Recipe Preparation</span>
        <div className={s.itemWrapper}>
          <div className={s.itemNumber}>1</div>
          <span className={s.description}>Stage 1</span>
        </div>
        <div className={s.itemWrapper}>
          <div className={s.itemNumber}>2</div>
          <span className={s.description}>Stage 2</span>
        </div>
        <div className={s.itemWrapper}>
          <div className={s.itemNumber}>3</div>
          <span className={s.description}>Stage 3</span>
        </div>
        <div className={s.itemWrapper}>
          <div className={s.itemNumber}>4</div>
          <span className={s.description}>Stage 4</span>
        </div>
      </div>
      <div className={s.image}>Image</div>
    </div>
  );
};

export default RecipeRpeparation;
