import React from 'react';
import css from './TitleShoppingList.module.css';

const TitleShoppingList = () => {
  return (
    <div className={css.titleWrapper}>
      <div className={css.title}>
        <span className={css.products}>Products</span>
        <div className={css.rightPartText}>
          <span>Number</span>
          <span>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default TitleShoppingList;
