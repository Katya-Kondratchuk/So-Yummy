import React from 'react';
import css from './ShoppingItemDescription.module.css';

const ShoppingItemDescription = ({ name }) => {
  return (
    <div className={css.wrapper}>
      <span className={css.name}>{name}</span>
    </div>
  );
};

export default ShoppingItemDescription;
