import PropTypes from 'prop-types';
import IngridientField from './IngridientField/IngridientField';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as IncreaseIcon } from 'assets/images/AddRecipe/increase.svg';
import { ReactComponent as DecreaseIcon } from 'assets/images/AddRecipe/decrease.svg';
import css from './RecipeIngredientsFields.module.css';
import { units } from 'data/dataForAddRecipeForm';

const RecipeIngredientsFields = ({
  ingredients = [],
  setIngredients,
  onUpdate,
  onRemove,
  allIngredients = [],
  formErrors = {},
}) => {
  return (
    <div className={css.wrapperIngredientsFields}>
      <div className={css.wrapperTitle}>
        <h3 className={css.title}>Ingredients</h3>
        <div className={css.wrapperButtons}>
          <button
            type="button"
            className={css.btnDecrease}
            disabled={ingredients.length === 0}
            onClick={() => {
              if (ingredients.length === 0) {
                return;
              }
              setIngredients(ingredients.slice(0, ingredients.length - 1));
            }}
          >
            <DecreaseIcon width="14px" height="14px" />
          </button>

          <div className={css.amountIngredientrs}>{ingredients.length}</div>

          <button
            type="button"
            className={css.btnIncrease}
            disabled={ingredients.length === 20}
            onClick={() => {
              if (ingredients.length === 20) {
                return;
              }
              const id = uuidv4();
              const newData = { id, title: {}, amount: '1', unit: 'g' };
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
      {ingredients.length === 0 && formErrors?.ingredients && (
        <p className={css.errorMessage}>{formErrors.ingredients}</p>
      )}
      {ingredients.length > 0 && (
        <ul>
          {ingredients.map((el, index) => (
            <IngridientField
              allIngredients={allIngredients}
              units={units}
              classItem={css.itemIngridient}
              key={el.id}
              id={el.id}
              data={el}
              onUpdate={onUpdate}
              onRemove={onRemove}
              errorMessage={
                formErrors?.ingredients ? formErrors.ingredients[index] : ''
              }
            />
          ))}
        </ul>
      )}
    </div>
  );
};

RecipeIngredientsFields.propTypes = {
  ingredients: PropTypes.array,
  setIngredients: PropTypes.func,
  onUpdate: PropTypes.func,
  onRemove: PropTypes.func,
  allIngredients: PropTypes.array,
  formErrors: PropTypes.object,
};

export default RecipeIngredientsFields;
