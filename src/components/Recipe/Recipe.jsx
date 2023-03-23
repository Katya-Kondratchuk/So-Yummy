import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { IngredientsLoader } from 'reusableComponents/ContentLoader/IngredientsLoader';
import { getOwnRecipeById, getRecipeById } from 'services/api/recipesAPI';
import IngredientsContainer from './IngredientsContainer/IngredientsContainer';

import css from './Recipe.module.css';
import TopContainer from './topContainer/TopContainer';

const Recipe = () => {
  const { recipeId } = useParams();
  const location = useLocation();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (location.state?.from) {
      setTimeout(async () => {
        await getOwnRecipeById(recipeId)
          .then(data => setRecipe(data))
          .catch(error => console.log(error));
        setIsLoading(false);
      }, 1000);
      return;
    }

    setTimeout(async () => {
      await getRecipeById(recipeId)
        .then(data => setRecipe(data))
        .catch(error => console.log(error));
      setIsLoading(false);
    }, 1000);
  }, [recipeId, location.state?.from]);

  const {
    description,
    time,
    title,
    ingredients,
    instructions,
    preview,
    _id,
    favorite,
    youtube,
    fullImg,
  } = recipe;

  return (
    <>
      <TopContainer
        title={title}
        description={description}
        time={time}
        favorite={favorite}
        id={_id}
      />
      {isLoading ? (
        <div className="container">
          <IngredientsLoader />
        </div>
      ) : (
        <div className={css.wrapper}>
          {
            <IngredientsContainer
              ingridients={ingredients}
              instructions={instructions}
              preview={preview}
              youtube={youtube}
              fullImg={fullImg}
            />
          }
        </div>
      )}
    </>
  );
};

export default Recipe;
