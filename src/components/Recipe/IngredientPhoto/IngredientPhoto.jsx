import React from 'react';
import css from './IngredientPhoto.module.css';
import defaultImage from '../../../assets/images/CheckBoxRecipe/notFound.png';

const IngredientPhoto = ({ image }) => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src={image ? image : defaultImage}
        alt="ingridient"
      />
    </div>
  );
};

export default IngredientPhoto;
