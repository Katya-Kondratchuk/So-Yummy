import React from 'react';
import IngredientPhoto from '../IngredientPhoto/IngredientPhoto';
import IngredientDescription from '../IngredientDescription/IngredientDescription';
import CheckBoxRecipe from '../CheckBoxRecipe/CheckBoxRecipe';
import IngredientsNumber from '../IngredientsNumber/IngredientsNumber';
import css from './Ingredient.module.css';

const Ingredient = ({ image, text, id, name, description }) => {
  return (
    <div className={css.wrapper}>
      <IngredientPhoto image={image} />
      <IngredientDescription name={name} description={description} />
      <IngredientsNumber text={text} />
      <CheckBoxRecipe id={id} />
    </div>
  );
};

export default Ingredient;
