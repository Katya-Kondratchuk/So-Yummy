import React from 'react';
import css from './ShoppingItemPhoto.module.css';

const ShoppingItemPhoto = ({ image }) => {
  return (
    <div className={css.wrapper}>
      <img className={css.image} src={image} alt="ingredient" />
    </div>
  );
};

export default ShoppingItemPhoto;
