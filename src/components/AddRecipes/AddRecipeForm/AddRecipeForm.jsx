import { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeDescriptionFields from './RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields';
import Button from 'reusableComponents/Button/Button';
import s from './AddRecipeForm.module.css';

const AddRecipeForm = props => {
  const [preparation, setPreparation] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  // TODO: разбивка по enter на массив при сабмите обработать
  // console.log('🚀 ~ preparation: array enter', preparation.split('\n'));

  return (
    <form onSubmit={onSubmitHandler} className={s.form}>
      <RecipeDescriptionFields />
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

AddRecipeForm.propTypes = {};

export default AddRecipeForm;
