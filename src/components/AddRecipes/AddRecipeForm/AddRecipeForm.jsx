import { useState, useCallback, useEffect, useMemo } from 'react';
import { recipeShema } from 'services/shemasForm';
import RecipeDescriptionFields from './RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import {
  addOwnRecipe,
  getAllCategories,
  getIngregientsList,
} from 'services/api/recipesAPI';
import css from './AddRecipeForm.module.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { createObjErrorResipeForm } from 'services/createObjErrorResipeForm';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import storageServises from 'services/localStorage';

const STORAGE_KEY_ADD_RESIPE = 'add-data-recipe';

let isLoadAllCategory = false;
let isLoadAllIngredients = false;

const AddRecipeForm = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);

  const [fullImage, setFullImage] = useState(null);
  const [title, setTitle] = useState(
    () => storageServises.get(STORAGE_KEY_ADD_RESIPE)?.title || '',
  );
  const [description, setDescription] = useState(
    () => storageServises.get(STORAGE_KEY_ADD_RESIPE)?.description || '',
  );
  const [category, setCategory] = useState(
    () => storageServises.get(STORAGE_KEY_ADD_RESIPE)?.category || 'Beef',
  );
  const [time, setTime] = useState(
    () => storageServises.get(STORAGE_KEY_ADD_RESIPE)?.time || '15 min',
  );

  const [ingredients, setIngredients] = useState(
    () => storageServises.get(STORAGE_KEY_ADD_RESIPE)?.ingredients || [],
  );

  const [instructions, setInstructions] = useState(
    () => storageServises.get(STORAGE_KEY_ADD_RESIPE)?.instructions || '',
  );

  const [formErrors, setFormErrors] = useState({});
  const [isShowErrors, setIsShowErrors] = useState(false);
  const [isAddRecipe, setIsAddRecipe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const resetDataForm = () => {
    setFullImage(null);
    storageServises.save(STORAGE_KEY_ADD_RESIPE, null);
  };

  useEffect(() => {
    storageServises.save(STORAGE_KEY_ADD_RESIPE, {
      category,
      description,
      fullImage,
      ingredients,
      instructions,
      time,
      title,
    });
    return () => {};
  }, [
    category,
    description,
    fullImage,
    ingredients,
    instructions,
    time,
    title,
  ]);

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
    if (allCategory.length || isLoadAllCategory) return;

    isLoadAllCategory = true;

    const getCategories = async () => {
      const categoriesList = (await getAllCategories()) || [];
      return categoriesList;
    };

    setIsLoading(true);

    getCategories()
      .then(data => {
        const categories = data.map(({ title }) => title);
        if (categories.length > 0 && !category) {
          setCategory(categories[0]);
        }
        setAllCategory(categories);
      })
      .catch(() => {})
      .finally(() => {
        isLoadAllCategory = false;
        setIsLoading(false);
      });
  }, [allCategory.length, category]);

  useEffect(() => {
    if (!isShowErrors) return;
    async function validateForm() {
      try {
        await recipeShema.validate(formData, { abortEarly: false });
        setFormErrors({});
        return true;
      } catch (error) {
        const errors = error.inner.reduce(createObjErrorResipeForm, {});
        setFormErrors(errors);
        return false;
      }
    }
    validateForm();
  }, [formData, isShowErrors]);

  useEffect(() => {
    if (isLoadAllIngredients) return;
    isLoadAllIngredients = true;

    const getAllIngredientsList = async () => {
      const ingredientsList = (await getIngregientsList()) || [];
      return ingredientsList;
    };
    setIsLoading(true);
    getAllIngredientsList()
      .then(data => {
        const normalizedIngredientsList = data.map(({ _id, ttl }) => ({
          _id,
          ttl,
        }));
        setAllIngredients(normalizedIngredientsList);
      })
      .catch(() => {})
      .finally(() => {
        isLoadAllIngredients = false;
        setIsLoading(false);
      });
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
    if (isAddRecipe) {
      return;
    }

    const isValid = recipeShema.isValidSync(formData);
    if (!isValid) {
      setIsShowErrors(true);
      return;
    }
    setIsAddRecipe(true);

    const dataForSend = {
      fullImage,
      title,
      description,
      category,
      time: time.slice(0, time.indexOf(' ')),
      ingredients: ingredients.map(({ amount, unit, title }) => ({
        measure: `${amount} ${unit}`,
        id: title._id,
      })),
      instructions: instructions
        .split('\n')
        .filter(el => el.length !== 0)
        .join('\r\n'),
    };

    setIsLoading(true);

    addOwnRecipe(dataForSend)
      .then(data => {
        setIsAddRecipe(false);
        setIsLoading(false);
        if (data?.error) {
          toast.error(data.error.response.data.message);
          return;
        }
        toast.success(`Your recipe ${title} has been created`);
        resetDataForm();
        setIsShowErrors(false);
        navigate('/my');
      })
      .catch(e => {
        toast.error('Something went wrong, try add your recipe again');
        setIsAddRecipe(false);
        setIsLoading(false);
      });
  };

  const isDisabledBtnSubmit =
    isAddRecipe || (isShowErrors && Object.keys(formErrors).length > 0);

  return (
    <form onSubmit={onSubmitHandler} className={css.form}>
      {isLoading && <LoaderSuspense />}
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
        <SuperBtn
          dark
          typeBtn="submit"
          title="Add"
          disabled={isDisabledBtnSubmit}
        />
      </div>
    </form>
  );
};

export default AddRecipeForm;
