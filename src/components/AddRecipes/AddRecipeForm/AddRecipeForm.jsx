import { useState } from 'react';
import RecipeDescriptionFields from './RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields';
import Button from 'reusableComponents/Button/Button';
import css from './AddRecipeForm.module.css';

const allCategory = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Dessert',
  'Goat',
  'Lamb',
  'Miscellaneous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
  'Vegan',
  'Vegetarian',
];

const allTime = [
  '5 min',
  '10 min',
  '15 min',
  '20 min',
  '25 min',
  '30 min',
  '35 min',
  '40 min',
  '45 min',
  '50 min',
  '55 min',
  '60 min',
  '65 min',
  '70 min',
  '75 min',
  '80 min',
  '85 min',
  '90 min',
  '95 min',
  '100 min',
  '105 min',
  '110 min',
  '115 min',
  '120 min',
];

const AddRecipeForm = () => {
  // const [allCategory, setAllCategory] = useState();

  const [imgAdd, setImgAdd] = useState('');
  const [nameRecipe, setNameRecipe] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Beef');
  const [cookingTime, setCookingTime] = useState('15 min');

  const [preparation, setPreparation] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
    const obj = {
      imgAdd,
      name: nameRecipe,
      description,
      category,
      cookingTime,
      preparation: preparation.split('\n'),
    };
    console.log(obj);
  };

  // TODO: разбивка по enter на массив при сабмите обработать
  // console.log('🚀 ~ preparation: array enter', preparation.split('\n'));

  return (
    <form onSubmit={onSubmitHandler} className={css.form}>
      <RecipeDescriptionFields
        allCategory={allCategory}
        allTime={allTime}
        image={{ imgAdd, setImgAdd }}
        name={{ nameRecipe, setNameRecipe }}
        descriptionData={{ description, setDescription }}
        categoryData={{ category, setCategory }}
        time={{ cookingTime, setCookingTime }}
      />
      <RecipeIngredientsFields />
      <RecipePreparationFields value={preparation} onChange={setPreparation} />

      <Button
        type="submit"
        label="Add"
        backgroundColor="#22252A"
        color="#FAFAFA"
      />
    </form>
  );
};

export default AddRecipeForm;
