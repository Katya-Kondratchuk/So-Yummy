import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BGDots from 'reusableComponents/BGDots/BGDots';
import { getShoppingList, patchShoppingList } from 'services/api/recipesAPI';
import ShoppingItem from './ShoppingItem/ShoppingItem';

import css from './ShoppingList.module.css';
import TitleShoppingList from './TitleShoppingList/TitleShoppingList';

const ShoppingList = () => {
  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteIngridient = async (id, measure) => {
    if (isLoading) return;
    await patchShoppingList({ productId: id, measure: measure[0] })
      .then(data =>
        toast.info('You removed ingridient from shopping list', {
          toastId: '1234',
        }),
      )
      .catch(error => toast.error(`${error.message}`));
    await getShoppingList()
      .then(({ shoppingList }) => setList(getRandomFour(shoppingList)))
      .catch(error => console.log(error.message));
    setIsLoading(false);
  };

  useEffect(() => {
    getShoppingList()
      .then(({ shoppingList }) => setList(getRandomFour(shoppingList)))
      .catch(error => console.log(error.message));
  }, []);

  function getRandomFour(mainMeals) {
    const shuffledArray = mainMeals.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 20);
  }

  return (
    <div className=" greensImg">
      <div className="container">
        <BGDots />
        <div className={css.title}>Shopping list</div>
        <TitleShoppingList />
        <ul className={css.shoppingItemList}>
          {list.map(({ thumb, title, measure, productId }, index) => (
            <ShoppingItem
              image={thumb}
              name={title}
              text={measure}
              onDelete={() => handleDeleteIngridient(productId, measure)}
              key={productId + index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
