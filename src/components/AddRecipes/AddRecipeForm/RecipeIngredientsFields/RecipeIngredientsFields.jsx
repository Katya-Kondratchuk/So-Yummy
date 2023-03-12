import { useState } from 'react';
// import PropTypes from 'prop-types';
import IngridientField from './IngridientField/IngridientField';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as IncreaseIcon } from 'assets/images/AddRecipe/increase.svg';
import { ReactComponent as DecreaseIcon } from 'assets/images/AddRecipe/decrease.svg';

import css from './RecipeIngredientsFields.module.css';
import meals from 'data/meals.json';

const units = ['tbs', 'tsp', 'kg', 'g'];

const RecipeIngredientsFields = () => {
  const [ingredients, setIngredients] = useState([
    {
      id: '663713a4-4cd7-43a7-b691-8e012b1873cb',
      name: 'Avocado',
      amount: '3',
      unit: 'tbs',
    },
    {
      id: '663713a4-eged7-43a7-b691-8e012b1873cb',
      name: 'Kivi',
      amount: '1',
      unit: 'g',
    },
    {
      id: '663713agegd7-43a7-b691-8e012b1873cb',
      name: 'Data',
      amount: '2',
      unit: 'kg',
    },
  ]);

  const onDelIngredient = id => {
    const filteredData = ingredients.filter(el => el.id !== id);
    setIngredients(filteredData);
  };

  const onUpdateData = (id, data) => {
    const changedData = ingredients.map(el => {
      if (el.id === id) {
        return { ...el, ...data };
      }
      return el;
    });
    setIngredients(changedData);
  };

  return (
    <div className={css.wrapperIngredientsFields}>
      <div className={css.wrapperTitle}>
        <h3 className={css.title}>Ingredients</h3>
        <div className={css.wrapperButtons}>
          <button
            type="button"
            className={css.btnDecrease}
            onClick={() => {
              setIngredients(ingredients.slice(0, ingredients.length - 1));
            }}
          >
            <DecreaseIcon width="14px" height="14px" />
          </button>

          <div className={css.amountIngredientrs}>{ingredients.length}</div>

          <button
            type="button"
            className={css.btnIncrease}
            onClick={() => {
              const id = uuidv4();
              const newData = { id, name: '', amount: '1', unit: 'g' };
              const updateIngredients = [...ingredients, newData];
              setIngredients(updateIngredients);
            }}
          >
            <IncreaseIcon width="14px" height="14px" />
          </button>
        </div>
      </div>
      {ingredients.length === 0 && (
        <p className={css.textNotify}>
          Add the right ingredients to your recipe
        </p>
      )}
      {ingredients.length > 0 && (
        <ul>
          {ingredients.map(el => (
            <IngridientField
              meals={meals}
              units={units}
              classItem={css.itemIngridient}
              key={el.id}
              id={el.id}
              data={el}
              onUpdate={onUpdateData}
              onRemove={onDelIngredient}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

// RecipeIngredientsFields.propTypes = {};

export default RecipeIngredientsFields;
