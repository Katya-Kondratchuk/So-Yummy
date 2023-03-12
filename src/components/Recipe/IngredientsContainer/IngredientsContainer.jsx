import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import RecipeRpeparation from '../RecipeRpeparation/RecipeRpeparation';
import TitleRecipesList from '../TitleRecipesList/TitleRecipesList';

const IngredientsContainer = ({ image, text, id, description }) => {
  return (
    <div className="container">
      <TitleRecipesList />
      <Ingredient image={image} text={text} id={id} description={description} />
      <Ingredient image={image} text={text} id={id} description={description} />
      <Ingredient image={image} text={text} id={id} description={description} />
      <Ingredient image={image} text={text} id={id} description={description} />
      <RecipeRpeparation />
    </div>
  );
};

export default IngredientsContainer;
