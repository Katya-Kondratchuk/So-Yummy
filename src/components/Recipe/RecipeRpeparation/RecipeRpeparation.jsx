import React from 'react';
import css from './RecipeRpeparation.module.css';
import defaultImage from '../../../assets/images/CheckBoxRecipe/notFoundBig.jpg';

const RecipeRpeparation = ({ instructions, previewImg, youtube }) => {
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
      <img
        src={previewImg ? previewImg : defaultImage}
        alt="recipe"
        className={css.image}
      />
      {/* <div>
      <iframe
          className="vegan__video"
          loop
          src="https://www.youtube.com/embed/6NgheY-r5t0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default RecipeRpeparation;
