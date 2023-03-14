// import React, { useState } from 'react';
import { useParams } from 'react-router';
import IngredientsContainer from './IngredientsContainer/IngredientsContainer';

import css from './Recipe.module.css';
import TopContainer from './topContainer/TopContainer';

const dish = {
  idMeal: '52960',
  image: '../../../assets/images/CheckBoxRecipe/Salmon.png',
  strMeal: 'Salmon Avocado Salad',
  strInstructions:
    'Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.',
  time: '20 min',
  strIngredient1: 'Salmon',
  strIngredient2: 'Avocado',
  strIngredient3: 'Cucumber',
  strIngredient4: 'Spinach',
  strIngredient5: 'Mint',
  strIngredient6: 'Lime',
  strIngredient7: 'Honey',
  strIngredient8: 'Olive Oil',
  strMeasure1: '400g',
  strMeasure2: '3',
  strMeasure3: '1',
  strMeasure4: '400g',
  strMeasure5: '4 tbs',
  strMeasure6: 'zest and juice of 1',
  strMeasure7: '2 tsp',
  strMeasure8: '3 tbs',
  description: 'description',
};

const Recipe = () => {
  const { recipeId } = useParams();
  // const [recipe, setRecipe] = useState();
  console.log(recipeId);
  return (
    <>
      <TopContainer />
      <div className={css.wrapper}>
        <IngredientsContainer
          image={dish.image}
          text={dish.strMeasure1}
          id="1"
          name={dish.strIngredient1}
          description={dish.strIngredient2}
        />
      </div>
    </>
  );
};

export default Recipe;
