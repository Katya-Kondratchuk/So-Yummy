import Favorite from 'components/Favorite/Favorite';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const FavoriteRecipesPage = () => {
  return (
    <>
      <Favorite />
      <GoToTop />
    </>
  );
};

export default FavoriteRecipesPage;
