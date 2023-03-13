import React from 'react';
import css from './ShoppingItemPhoto.module.css';

const ShoppingItemPhoto = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src="https://www.themealdb.com/images/media/meals/1549542994.jpg"
        alt="ss"
      />
    </div>
  );
};

export default ShoppingItemPhoto;
