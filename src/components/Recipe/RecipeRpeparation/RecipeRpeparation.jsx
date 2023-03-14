import React from 'react';
import css from './RecipeRpeparation.module.css';

const RecipeRpeparation = ({ instructions, previewImg }) => {
  const instructionList = instructions.split('\r\n');
  return (
    <div className={css.wrapper}>
      <div className={css.itemsContainer}>
        <span className={css.title}>Recipe Preparation</span>
        {instructionList.map((item, index) => (
          <div key={index} className={css.itemWrapper}>
            <div className={css.itemNumber}>{index + 1}</div>
            <span className={css.description}>{item}</span>
          </div>
        ))}
      </div>
      <img src={previewImg} alt="recipe" className={css.image} />
    </div>
  );
};

export default RecipeRpeparation;
