import { useState, useCallback, useEffect } from 'react';
import * as yup from 'yup';
import RecipeDescriptionFields from './RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import { getAllCategories } from 'services/api/recipesAPI';
import css from './AddRecipeForm.module.css';

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
  const [allCategory, setAllCategory] = useState([]);

  const [fullImage, setFullImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Beef');
  const [time, setTime] = useState('15 min');

  const [ingridients, setIngridients] = useState([
    {
      id: '663713a4-4cd7-43a7-b691-8e012b1873cb',
      title: 'Avocado',
      amount: '999',
      unit: 'tbs',
    },
    {
      id: '663713a4-eged7-43a7-b691-8e012b1873cb',
      title: 'Pork',
      amount: '999',
      unit: 'g',
    },
    {
      id: '663713agegd7-43a7-b691-8e012b1873cb',
      title: 'Ca',
      amount: '999',
      unit: 'kg',
    },
  ]);

  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      const categoriesList = (await getAllCategories()) || [];
      return categoriesList;
    };
    getCategories()
      .then(data => {
        const categories = data.map(({ title }) => title);
        if (categories.length > 0) {
          setCategory(categories[0]);
        }
        setAllCategory(categories);
      })
      .catch(() => {});
  }, []);

  const onDelIngredient = id => {
    const filteredData = ingridients.filter(el => el.id !== id);
    setIngridients(filteredData);
  };

  const onUpdateData = useCallback(
    (id, data) => {
      const changedData = ingridients.map(el => {
        if (el.id === id) {
          return { ...el, ...data };
        }
        return el;
      });
      setIngridients(changedData);
    },
    [ingridients],
  );

  const recipeShema = yup.object().shape({
    fullImage: yup.string(),
    title: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
    time: yup.string().required(),
    ingridients: yup.array(),
    instructions: yup.array().required(),
  });

  const objData = {
    fullImage,
    title,
    description,
    category,
    time,
    ingridients,
    instructions: instructions.split('\n').filter(el => el.trim().length > 0),
  };

  const isValid = recipeShema.isValidSync(objData);

  const onSubmitHandler = e => {
    e.preventDefault();

    console.log(objData);

    const valid = recipeShema.isValidSync(objData);
    console.log(valid);
  };

  return (
    <form onSubmit={onSubmitHandler} className={css.form}>
      <RecipeDescriptionFields
        allCategory={allCategory}
        allTime={allTime}
        image={{ fullImage, setFullImage }}
        name={{ title, setTitle }}
        descriptionData={{ description, setDescription }}
        categoryData={{ category, setCategory }}
        cokingTime={{ time, setTime }}
      />
      <RecipeIngredientsFields
        ingredients={ingridients}
        setIngredients={setIngridients}
        onUpdate={onUpdateData}
        onRemove={onDelIngredient}
      />
      <RecipePreparationFields
        value={instructions}
        onChange={setInstructions}
      />

      <div className={css.wrapperBtn}>
        <SuperBtn dark typeBtn="submit" title="Add" disabled={!isValid} />
      </div>
    </form>
  );
};

export default AddRecipeForm;
