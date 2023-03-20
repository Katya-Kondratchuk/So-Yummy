import Categories from 'components/Categories/Categories';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const CategoriesPage = () => {
  return (
    <>
      <Categories />
      <GoToTop />
    </>
  );
};

export default CategoriesPage;
