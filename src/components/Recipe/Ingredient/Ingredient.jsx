import React from 'react';
import IngredientPhoto from '../IngredientPhoto/IngredientPhoto';
import IngredientDescription from '../IngredientDescription/IngredientDescription';
import CheckBoxRecipe from '../CheckBoxRecipe/CheckBoxRecipe';
import IngredientsNumber from '../IngredientsNumber/IngredientsNumber';
import css from './Ingredient.module.css';

const Ingredient = ({ title, thumb, measure, desc, type, id }) => {
  return (
    <li className={css.thumb} key={id}>
      <div className={css.wrapper}>
        <IngredientPhoto image={thumb} />
        <IngredientDescription name={title} description={desc} />
        <IngredientsNumber measure={measure} />
        <CheckBoxRecipe id={id} measure={measure} />
      </div>
    </li>
  );
};

export default Ingredient;
