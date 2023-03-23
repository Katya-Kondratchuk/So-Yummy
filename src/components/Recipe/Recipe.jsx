import React, { useEffect, useRef, useState } from 'react';
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
  const ownInfoRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    // console.log(location);
    if (location.state?.from || ownInfoRef.current) {
      ownInfoRef.current = location.state?.from ?? ownInfoRef.current;
      console.log(ownInfoRef.current);
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
  }, [recipeId, location.state?.from, location]);

  const {
    description,
    time,
    title,
    ingredients,
    instructions,
    previewImg,
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
          <IngredientsContainer
            ingridients={ingredients}
            instructions={instructions}
            previewImg={previewImg}
            youtube={youtube}
            fullImg={fullImg}
          />
        </div>
      )}
    </>
  );
};

export default Recipe;
