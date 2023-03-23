import React from 'react';
import ShoppingItemDescription from '../ShoppingItemDescription/ShoppingItemDescription';
import ShoppingItemNumber from '../ShoppingItemNumber/ShoppingItemNumber';
import ShoppingItemPhoto from '../ShoppingItemPhoto/ShoppingItemPhoto';
import css from './ShoppingItem.module.css';
import defaultImage from '../../../assets/images/CheckBoxRecipe/notFound.png';
import { nanoid } from '@reduxjs/toolkit';
import { ReactComponent as CloseIcon } from 'assets/images/AddRecipe/close.svg';

const ShoppingItem = ({ image, name, measure, id, onDelete }) => {
  return (
    <li className={css.wrapper}>
      <ShoppingItemPhoto image={image ? image : defaultImage} />
      <div>
        <ShoppingItemDescription name={name} />
      </div>
      <div className={css.rightThumb}>
        {measure.map(item => (
          <div className={css.rightWrapper} key={nanoid()}>
            <ShoppingItemNumber text={item} />
            <button
              className={css.button}
              type="button"
              onClick={e => {
                onDelete(item, e);
              }}
            >
              <CloseIcon width="18px" height="18px" />
            </button>
          </div>
        ))}
      </div>
    </li>
  );
};

export default ShoppingItem;
