import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRecipeById } from 'services/api/recipesAPI';
import IngredientsContainer from './IngredientsContainer/IngredientsContainer';

import css from './Recipe.module.css';
import TopContainer from './topContainer/TopContainer';

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getRecipeById(recipeId).then(data => setRecipe(data));
  }, [recipeId]);

  if (!recipe) {
    return null;
  }
  const {
    description,
    time,
    title,
    ingridients,
    instructions,
    previewImg,
    // _id,
    // category,
    // favorite,
    // fullImage,
    // like,
    // popularity,
    // tags,
    // youtube,
  } = recipe;
  return (
    recipe.length !== 0 && (
      <div>
        <TopContainer title={title} description={description} time={time} />
        <div className={css.wrapper}>
          <IngredientsContainer
            ingridients={ingridients}
            instructions={instructions}
            previewImg={previewImg}
          />
        </div>
      </div>
    )
  );
};

export default Recipe;
