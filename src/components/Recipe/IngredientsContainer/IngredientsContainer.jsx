import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import RecipeRpeparation from '../RecipeRpeparation/RecipeRpeparation';
import TitleRecipesList from '../TitleRecipesList/TitleRecipesList';

const IngredientsContainer = ({
  ingridients = [],
  instructions = '',
  preview = '',
  previewImg = '',
  youtube,
  fullImg,
}) => {
  return (
    <div className="container">
      <TitleRecipesList />
      <ul>
        {ingridients.map(
          ({ title, _id, thumb, measure, desc, type }, index) => (
            <Ingredient
              key={index}
              title={title}
              thumb={thumb}
              measure={measure}
              desc={desc}
              type={type}
              id={_id}
            />
          ),
        )}
      </ul>
      <RecipeRpeparation
        instructions={instructions}
        preview={preview}
        previewImg={previewImg}
        youtube={youtube}
        fullImg={fullImg}
      />
    </div>
  );
};

export default IngredientsContainer;
