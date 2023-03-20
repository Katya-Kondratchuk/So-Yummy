import Recipe from 'components/Recipe/Recipe';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const RecipiesPage = () => {
  return (
    <>
      <Recipe />
      <GoToTop />
    </>
  );
};

export default RecipiesPage;
