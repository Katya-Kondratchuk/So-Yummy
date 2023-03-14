import { useState, useCallback } from 'react';
import RecipeDescriptionFields from './RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields';
import css from './AddRecipeForm.module.css';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';

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

  const [ingredients, setIngredients] = useState([
    {
      id: '663713a4-4cd7-43a7-b691-8e012b1873cb',
      name: 'Avocado',
      amount: '999',
      unit: 'tbs',
    },
    {
      id: '663713a4-eged7-43a7-b691-8e012b1873cb',
      name: 'Pork',
      amount: '999',
      unit: 'g',
    },
    {
      id: '663713agegd7-43a7-b691-8e012b1873cb',
      name: 'Ca',
      amount: '999',
      unit: 'kg',
    },
  ]);

  const [preparation, setPreparation] = useState('');

  const onDelIngredient = id => {
    const filteredData = ingredients.filter(el => el.id !== id);
    setIngredients(filteredData);
  };

  const onUpdateData = useCallback(
    (id, data) => {
      const changedData = ingredients.map(el => {
        if (el.id === id) {
          return { ...el, ...data };
        }
        return el;
      });
      setIngredients(changedData);
    },
    [ingredients],
  );

  const onSubmitHandler = e => {
    e.preventDefault();
    const obj = {
      imgAdd,
      name: nameRecipe,
      description,
      category,
      cookingTime,
      ingredients,
      preparation: preparation.split('\n').filter(el => el.trim().length > 0),
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
      <RecipeIngredientsFields
        ingredients={ingredients}
        setIngredients={setIngredients}
        onUpdate={onUpdateData}
        onRemove={onDelIngredient}
      />
      <RecipePreparationFields value={preparation} onChange={setPreparation} />

      <div className={css.wrapperBtn}>
        <SuperBtn dark typeBtn="submit" title="Add" />
      </div>
    </form>
  );
};

export default AddRecipeForm;
