import ShoppingList from 'components/ShoppingList/ShoppingList';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const ShoppingListPage = () => {
  return (
    <>
      <ShoppingList />
      <GoToTop />
    </>
  );
};

export default ShoppingListPage;
