import React from 'react';
import css from './TitleShoppingList.module.css';

const TitleShoppingList = () => {
  return (
    <div className={css.title}>
      <span>Products</span>
      <div className={css.rightPartText}>
        <span>Number</span>
        <span>Remove</span>
      </div>
    </div>
  );
};

export default TitleShoppingList;
