import React from 'react';
import ShoppingItemDescription from '../ShoppingItemDescription/ShoppingItemDescription';
import ShoppingItemNumber from '../ShoppingItemNumber/ShoppingItemNumber';
import ShoppingItemPhoto from '../ShoppingItemPhoto/ShoppingItemPhoto';
import css from './ShoppingItem.module.css';

const ShoppingItem = ({ image, name, text, id, onDelete }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.leftWrapper}>
        <ShoppingItemPhoto image={image} />
        <ShoppingItemDescription name={name} />
      </div>
      <ShoppingItemNumber text={text} />
      <button className={css.button} type="button" onClick={onDelete}></button>
    </div>
  );
};

export default ShoppingItem;
