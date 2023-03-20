import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BGDots from 'reusableComponents/BGDots/BGDots';
import Title from 'reusableComponents/Title/Title';
import { getShoppingList, patchShoppingList } from 'services/api/recipesAPI';
import ShoppingItem from './ShoppingItem/ShoppingItem';

import css from './ShoppingList.module.css';
import TitleShoppingList from './TitleShoppingList/TitleShoppingList';

const ShoppingList = () => {
  const [list, setList] = useState([]);

  const handleDeleteIngridient = async (productId, item, e) => {
    if (e.target.disabled) return;
    e.target.disabled = true;
    await patchShoppingList({ productId: productId, measure: item })
      .then(data => {
        toast.info('You removed ingridient from shopping list', {
          toastId: '1234',
        });
      })
      .catch(error => toast.error(`${error.message}`));
    await getShoppingList()
      .then(({ shoppingList }) => setList(shoppingList))
      .catch(error => console.log(error.message));
  };

  useEffect(() => {
    getShoppingList()
      .then(({ shoppingList }) => setList(shoppingList))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div className="container">
      <BGDots />
      <Title text={'Shopping list'} />
      <TitleShoppingList />
      <ul className={css.shoppingItemList}>
        {list.map(({ thumb, title, measure, productId }, index) => (
          <ShoppingItem
            key={productId + index}
            image={thumb}
            name={title}
            measure={measure}
            id={productId}
            onDelete={(item, e) => handleDeleteIngridient(productId, item, e)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
