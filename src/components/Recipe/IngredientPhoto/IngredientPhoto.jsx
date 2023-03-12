import React from 'react';
import css from './IngredientPhoto.module.css';

const IngredientPhoto = ({ image }) => {
  return (
    <div className={css.wrapper}>
      <img
        src="https://www.themealdb.com/images/media/meals/1549542994.jpg"
        alt="ss"
      />
    </div>
  );
};

export default IngredientPhoto;
