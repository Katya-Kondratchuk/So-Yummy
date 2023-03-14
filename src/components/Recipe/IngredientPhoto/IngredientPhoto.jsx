import React from 'react';
import css from './IngredientPhoto.module.css';

const IngredientPhoto = ({ image }) => {
  return (
    <div className={css.wrapper}>
      <img src={image} alt="ingridient" />
    </div>
  );
};

export default IngredientPhoto;
