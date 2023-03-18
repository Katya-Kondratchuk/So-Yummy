import React from 'react';
import ShoppingItemDescription from '../ShoppingItemDescription/ShoppingItemDescription';
import ShoppingItemNumber from '../ShoppingItemNumber/ShoppingItemNumber';
import ShoppingItemPhoto from '../ShoppingItemPhoto/ShoppingItemPhoto';
import css from './ShoppingItem.module.css';

const ShoppingItem = ({ image, name, measure, id, onDelete }) => {
  return (
    <li className={css.wrapper}>
      <div className={css.leftWrapper}>
        <ShoppingItemPhoto image={image} />
        <ShoppingItemDescription name={name} />
      </div>
      <div>
        {measure.map(item => (
          <div key={`${id}${measure.indexOf(item)}`}>
            <ShoppingItemNumber text={item} />
            <button
              className={css.button}
              type="button"
              onClick={() => {
                onDelete(item);
              }}
            ></button>
          </div>
        ))}
      </div>
    </li>
  );
};

export default ShoppingItem;
