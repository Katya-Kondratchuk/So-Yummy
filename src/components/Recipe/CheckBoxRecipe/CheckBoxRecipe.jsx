import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { patchShoppingList, postShoppingList } from 'services/api/recipesAPI';
import css from './CheckBoxRecipe.module.css';

const CheckBoxRecipe = ({ id, measure }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleToShopList = async e => {
    if (isLoading) return;
    setIsLoading(true);
    if (e.target.checked) {
      await postShoppingList({ productId: id, measure })
        .then(data =>
          toast.success('You add ingridient to shopping list', {
            toastId: '123',
          }),
        )
        .catch(error => toast.error(`${error.message}`));
      setIsLoading(false);
    }

    if (!e.target.checked) {
      await patchShoppingList({ productId: id, measure })
        .then(data =>
          toast.info('You removed ingridient from shopping list', {
            toastId: '1234',
          }),
        )
        .catch(error => toast.error(`${error.message}`));
      setIsLoading(false);
    }
  };

  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type={'checkbox'}
        id={id}
        onClick={toggleToShopList}
      />
      <label className={css.label} htmlFor={id}></label>
    </div>
  );
};

export default CheckBoxRecipe;
