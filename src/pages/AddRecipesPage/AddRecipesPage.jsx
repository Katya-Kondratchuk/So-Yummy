import AddRecipeForm from 'components/AddRecipes/AddRecipeForm';
import FollowUs from 'components/AddRecipes/FollowUs';
import PopularRecipe from 'components/AddRecipes/PopularRecipe';
import React from 'react';
import Title from 'reusableComponents/Title/Title';
import GoToTop from 'services/scrollToTop';
import s from './AddRecipesPage.module.css';

const AddRecipesPage = () => {
  return (
    <div className={`container ${s.wrapperAddPage}`}>
      <Title text="Add recipe" />
      <div className={s.flexContainer}>
        <AddRecipeForm />
        <div>
          <FollowUs />
          <PopularRecipe />
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default AddRecipesPage;
