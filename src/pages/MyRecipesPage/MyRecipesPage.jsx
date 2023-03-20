import MyRecipes from 'components/MyRecipes';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const MyRecipesPage = () => {
  return (
    <>
      <MyRecipes />
      <GoToTop />
    </>
  );
};

export default MyRecipesPage;
