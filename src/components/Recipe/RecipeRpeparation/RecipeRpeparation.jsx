import React from 'react';
import css from './RecipeRpeparation.module.css';

const RecipeRpeparation = ({ instructions, previewImg }) => {
  let i = 0;
  const instructionList = instructions.split('\r\n');
  return (
    <div className={css.wrapper}>
      <div className={css.itemsContainer}>
        <span className={css.title}>Recipe Preparation</span>
        <div className={css.descriptionWrapper}>
          {instructionList.map((item, index) => (
            <div key={index} className={css.itemWrapper}>
              {item.length > 1 && (
                <div className={css.itemNumber}>{(i += 1)}</div>
              )}
              {item.length > 1 && (
                <span className={css.description}>{item}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <img src={previewImg} alt="recipe" className={css.image} />
    </div>
  );
};

export default RecipeRpeparation;
