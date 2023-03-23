import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BGDots from 'reusableComponents/BGDots/BGDots';
import Title from 'reusableComponents/Title/Title';
import { getShoppingList, patchShoppingList } from 'services/api/recipesAPI';
import { IngredientsLoader } from 'reusableComponents/ContentLoader/IngredientsLoader';

import ShoppingItem from './ShoppingItem/ShoppingItem';
import { nanoid } from '@reduxjs/toolkit';

import css from './ShoppingList.module.css';
import TitleShoppingList from './TitleShoppingList/TitleShoppingList';

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteIngridient = async (productId, item, e) => {
    if (e.target.disabled) return;
    e.target.disabled = true;
    await patchShoppingList({ productId: productId, measure: item })
      .then(({ shoppingList }) => {
        setList(shoppingList);
        toast.info('You removed ingridient from shopping list', {
          toastId: '1234',
        });
      })
      .catch(error => console.log(error.message));
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      await getShoppingList()
        .then(({ shoppingList }) => {
          setList(shoppingList);
        })
        .catch(error => console.log(error));
      setIsLoading(false);
    }, 1000);
    return;
  }, []);

  return (
    <div className="container">
      <BGDots />
      <Title text={'Shopping list'} />
      <TitleShoppingList />
      {isLoading ? (
        <div className="container">
          <IngredientsLoader />
        </div>
      ) : list.length > 0 ? (
        <ul className={css.shoppingItemList}>
          {list.map(({ thumb, title, measure, productId }, index) => (
            <ShoppingItem
              key={nanoid()}
              image={thumb}
              name={title}
              measure={measure}
              id={productId}
              onDelete={(item, e) => handleDeleteIngridient(productId, item, e)}
            />
          ))}
        </ul>
      ) : (
        <div className={css.emptyShoppingList}>
          <div className={css.emptyShoppingListImg}></div>
          <p className={css.emptyShoppingListText}>Shopping list is empty</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
