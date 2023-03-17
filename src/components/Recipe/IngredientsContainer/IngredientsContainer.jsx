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
      {ingridients.map(({ title, _id, thumb, measure, desc, type }, index) => (
        <Ingredient
          key={index}
          title={title}
          thumb={thumb}
          measure={measure}
          desc={desc}
          type={type}
          id={_id}
        />
      ))}
      <RecipeRpeparation instructions={instructions} previewImg={previewImg} />
    </div>
  );
};

export default IngredientsContainer;
