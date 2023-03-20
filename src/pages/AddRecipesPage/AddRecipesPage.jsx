import AddRecipeForm from 'components/AddRecipes/AddRecipeForm';
import FollowUs from 'components/AddRecipes/FollowUs';
import PopularRecipe from 'components/AddRecipes/PopularRecipe';
import React from 'react';
import BGDots from 'reusableComponents/BGDots/BGDots';
import Title from 'reusableComponents/Title/Title';
import s from './AddRecipesPage.module.css';

const AddRecipesPage = () => {
  return (
    <div className={`container ${s.wrapperAddPage}`}>
      <BGDots />
      <Title text="Add recipe" />
      <div className={s.flexContainer}>
        <AddRecipeForm />
        <div>
          <FollowUs />
          <PopularRecipe />
        </div>
      </div>
    </div>
  );
};

export default AddRecipesPage;
