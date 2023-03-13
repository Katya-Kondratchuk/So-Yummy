import ShoppingList from 'components/ShoppingList/ShoppingList';
import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import RecipeRpeparation from '../RecipeRpeparation/RecipeRpeparation';
import TitleRecipesList from '../TitleRecipesList/TitleRecipesList';

const IngredientsContainer = ({ image, text, id, name, description }) => {
  return (
    <div className="container">
      <TitleRecipesList />
      <Ingredient
        image={image}
        text={text}
        id={id}
        name={name}
        description={description}
      />
      <Ingredient
        image={image}
        text={text}
        id={id}
        name={name}
        description={description}
      />
      <Ingredient
        image={image}
        text={text}
        id={id}
        name={name}
        description={description}
      />
      <Ingredient
        image={image}
        text={text}
        id={id}
        name={name}
        description={description}
      />
      <RecipeRpeparation />
      <ShoppingList />
    </div>
  );
};

export default IngredientsContainer;
