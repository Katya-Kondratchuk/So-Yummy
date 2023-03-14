import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import RecipeRpeparation from '../RecipeRpeparation/RecipeRpeparation';
import TitleRecipesList from '../TitleRecipesList/TitleRecipesList';

const IngredientsContainer = ({
  ingridients = [],
  instructions = '',
  previewImg = '',
}) => {
  return (
    <div className="container">
      <TitleRecipesList />
      {ingridients.map(({ title, thumb, quantity, desc, type }, index) => (
        <Ingredient
          key={index}
          title={title}
          thumb={thumb}
          quantity={quantity}
          desc={desc}
          type={type}
        />
      ))}
      <RecipeRpeparation instructions={instructions} previewImg={previewImg} />
    </div>
  );
};

export default IngredientsContainer;
