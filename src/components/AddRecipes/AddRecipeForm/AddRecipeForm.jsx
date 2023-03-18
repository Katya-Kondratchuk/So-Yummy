import { useState, useCallback, useEffect, useMemo } from 'react';
import * as yup from 'yup';
import RecipeDescriptionFields from './RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import { getAllCategories, getIngregientsList } from 'services/api/recipesAPI';
import css from './AddRecipeForm.module.css';

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
  title: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(200, 'Maximum 600 characters')
    .required('Title recipe is required'),
  description: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(600, 'Maximum 600 characters')
    .required('Description recipe is required'),
  category: yup.string().required('Category recipe is required'),
  time: yup.string().required('Time recipe is required'),
  ingredients: yup
    .array()
    .min(1, 'You need and minimun one ingregient')
    .max(20, 'No more than 20 ingredients')
    .of(
      yup.object().shape({
        id: yup.string(),
        title: yup
          .object()
          .shape({
            _id: yup.string(),
            ttl: yup
              .string()
              .min(2, 'Minimum 2 characters')
              .max(200, 'Maximum 250 characters')
              .required('You need choose name from the drop down list'),
          })
          .required('You need choose name from the drop down list'),
        amount: yup
          .string('Amount must be a number')
          .min(1, 'You need to add weight')
          .max(3, 'Amount must be less than 999')
          .required('Amount ingredient is required'),
        unit: yup.string().required(),
      }),
    )
    .required('At least one ingredient is required'),
  instructions: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(2000, 'Maximum 2000 characters')
    .required('Recipe instruction is required'),
});

const createObjError = (acc, curr) => {
  if (curr.path.includes('].')) {
    const el = curr.path;
    const currPath = el.slice(0, el.indexOf('['));
    const index = +el.slice(el.indexOf('[') + 1, el.indexOf(']'));
    // const item = el.slice(el.indexOf('.') + 1);
    if (!acc[currPath]) {
      acc[currPath] = [];
    }
    // acc[currPath][index] = { ...acc[currPath][index] };
    // acc[currPath][index] = {};
    acc[currPath][index] = curr.message;
  } else {
    acc[curr.path] = curr.message;
  }

  return acc;
};

const AddRecipeForm = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);

  const [fullImage, setFullImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Beef');
  const [time, setTime] = useState('15 min');

  const [ingredients, setIngredients] = useState([
    {
      id: '663713a4-4cd7-43a7-b691-8e012b1873cb',
      title: { _id: '640c2dd963a319ea671e37d7', ttl: 'Walnuts' },
      amount: '999',
      unit: 'tbs',
    },
    {
      id: '663713a4-eged7-43a7-b691-8e012b1873cb',
      title: { _id: '640c2dd963a319ea671e372b', ttl: 'Oil' },
      amount: '999',
      unit: 'g',
    },
    {
      id: '663713agegd7-43a7-b691-8e012b1873cb',
      title: { _id: '640c2dd963a319ea671e36b9', ttl: 'Cumin Seeds' },
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
    ingredients: [],
    instructions: '',
  });
  // console.log('🚀 ~ formErrors:', formErrors);
  const [isShowErrors, setIsShowErrors] = useState(false);

  const formData = useMemo(
    () => ({
      fullImage,
      title,
      description,
      category,
      time,
      ingredients,
      instructions,
    }),
    [category, description, fullImage, ingredients, instructions, time, title],
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

  useEffect(() => {
    const getAllIngregientsList = async () => {
      const categoriesList = (await getIngregientsList()) || [];
      return categoriesList;
    };
    getAllIngregientsList()
      .then(data => {
        const normalizedIngredientsList = data.map(({ _id, ttl }) => ({
          _id,
          ttl,
        }));

        setAllIngredients(normalizedIngredientsList);
      })
      .catch(() => {});
  }, []);

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
    const isValid = recipeShema.isValidSync(formData);

    if (!isValid) {
      setIsShowErrors(true);
      return;
    }

    const dataForSend = {
      fullImage,
      title,
      description,
      category,
      time,
      ingridients: ingredients.map(({ amount, unit, title }) => ({
        measure: `${amount} ${unit}`,
        id: title._id,
      })),
      instructions: instructions
        .split('\n')
        .filter(el => el.length !== 0)
        .join('\r\n'),
    };
    console.log(dataForSend);
  };

  return (
    <form onSubmit={onSubmitHandler} className={css.form}>
      <RecipeDescriptionFields
        allCategory={allCategory}
        image={{ fullImage, setFullImage }}
        name={{ title, setTitle }}
        descriptionData={{ description, setDescription }}
        categoryData={{ category, setCategory }}
        cokingTime={{ time, setTime }}
        formErrors={formErrors}
      />
      <RecipeIngredientsFields
        ingredients={ingredients}
        setIngredients={setIngredients}
        onUpdate={onUpdateData}
        onRemove={onDelIngredient}
        formErrors={formErrors}
        allIngredients={allIngredients}
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
