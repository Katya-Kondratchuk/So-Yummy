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
  }, [recipeId]);

  // if (Object.keys(recipe).length === 0) {
  //   return null;
  // }

  const {
    description,
    time,
    title,
    ingredients,
    instructions,
    previewImg,
    _id,
    // category,
    favorite,
    // fullImage,
    // like,
    // popularity,
    // tags,
    youtube,
  } = recipe;
  return (
    <>
      <div className=" greensImg">
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
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Recipe;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { getRecipeById } from 'services/api/recipesAPI';
// import IngredientsContainer from './IngredientsContainer/IngredientsContainer';

// import css from './Recipe.module.css';
// import TopContainer from './topContainer/TopContainer';

// const Recipe = () => {
//   const { recipeId } = useParams();
//   const [recipe, setRecipe] = useState({});

//   useEffect(() => {
//     getRecipeById(recipeId).then(data => setRecipe(data));
//   }, [recipeId]);

//   if (!recipe) {
//     return null;
//   }
//   const {
//     description,
//     time,
//     title,
//     ingredients,
//     instructions,
//     previewImg,
//     // _id,
//     // category,
//     favorite,
//     // fullImage,
//     // like,
//     // popularity,
//     // tags,
//     youtube,
//   } = recipe;
//   return (
//     recipe.length !== 0 && (
//       <div className=" greensImg">
//         <TopContainer
//           title={title}
//           description={description}
//           time={time}
//           favorite={favorite}
//         />
//         <div className={css.wrapper}>
//           <IngredientsContainer
//             ingridients={ingredients}
//             instructions={instructions}
//             previewImg={previewImg}
//             youtube={youtube}
//           />
//         </div>
//       </div>
//     )
//   );
// };

// export default Recipe;
