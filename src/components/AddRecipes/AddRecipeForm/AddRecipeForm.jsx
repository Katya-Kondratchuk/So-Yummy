import { useState, useCallback, useEffect, useMemo } from 'react';
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
const recipeShema = yup.object().shape({
  fullImage: yup
    .mixed()
    .test('required', 'Photo is required', value => {
      return !value || (value && value.name.length > 0);
    })
    .test('fileType', 'Only picture files are allowed', value => {
      return (
        !value ||
        (value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type))
      );
    })
    .test('fileSize', 'Picture size is too large', value => {
      return !value || (value && value.size <= 16777216);
    })
    .required('Image recipe is required'),
  title: yup.string().required('Title recipe is required'),
  description: yup.string().required('Description recipe is required'),
  category: yup.string().required('Category recipe is required'),
  time: yup.string().required('Time recipe is required'),
  ingridients: yup
    .array()
    .min(1)
    .of(
      yup.object().shape({
        id: yup.string(),
        title: yup
          .string()
          .min(2, 'Minimum 2 characters')
          .max(200, 'Maximum 200 characters')
          .required('Title ingredient is required'),
        amount: yup
          .string('Amount must be a number')
          .min(1, 'At least one digit')
          .max(3, 'Amount must be less than 999')
          .required('Amount ingredient is required'),
        unit: yup.string(),
      }),
    )
    .required('At least one ingredient is required'),
  instructions: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .required('Add recipe instruction'),
});

const createObjError = (acc, curr) => {
  if (curr.path.includes('].')) {
    const el = curr.path;
    const currPath = el.slice(0, el.indexOf('['));
    const index = +el.slice(el.indexOf('[') + 1, el.indexOf(']'));
    const item = el.slice(el.indexOf('.') + 1);
    if (!acc[currPath]) {
      acc[currPath] = [];
    }
    // acc[currPath][index] = { ...acc[currPath][index] };
    acc[currPath][index] = {};
    acc[currPath][index][item] = curr.message;
  } else {
    acc[curr.path] = curr.message;
  }

  return acc;
};

const AddRecipeForm = () => {
  const [allCategory, setAllCategory] = useState([]);

  const [fullImage, setFullImage] = useState(null);
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
  const [formErrors, setFormErrors] = useState({
    fullImage: '',
    title: '',
    description: '',
    category: '',
    time: '',
    ingridients: [
      {
        title: '',
        amount: '',
        unit: '',
      },
    ],
    instructions: '',
  });
  const [isShowErrors, setIsShowErrors] = useState(false);

  const formData = useMemo(
    () => ({
      fullImage,
      title,
      description,
      category,
      time,
      ingridients,
      instructions,
    }),
    [category, description, fullImage, ingridients, instructions, time, title],
  );

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

  useEffect(() => {
    if (!isShowErrors) return;
    async function validateForm() {
      try {
        await recipeShema.validate(formData, { abortEarly: false });
        setFormErrors({});
        return true;
      } catch (error) {
        const errors = error.inner.reduce(createObjError, {});
        setFormErrors(errors);
        return false;
      }
    }
    validateForm();
  }, [formData, isShowErrors]);

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

  const onSubmitHandler = e => {
    e.preventDefault();
    const isValid = recipeShema.isValidSync(formData);
    if (!isValid) {
      setIsShowErrors(true);
      return;
    }
    console.log(formData);
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
        formErrors={formErrors}
      />
      <RecipeIngredientsFields
        ingredients={ingridients}
        setIngredients={setIngridients}
        onUpdate={onUpdateData}
        onRemove={onDelIngredient}
        formErrors={formErrors}
      />
      <RecipePreparationFields
        value={instructions}
        onChange={setInstructions}
        formErrors={formErrors}
      />
      <div className={css.wrapperBtn}>
        <SuperBtn dark typeBtn="submit" title="Add" />
      </div>
    </form>
  );
};

export default AddRecipeForm;
