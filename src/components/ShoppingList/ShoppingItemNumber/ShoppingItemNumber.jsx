import React from 'react';
import css from './ShoppingItemNumber.module.css';

const ShoppingItemNumber = ({ text }) => {
  return <div className={css.wrapper}>{text}</div>;
};

export default ShoppingItemNumber;
