import PreviewCategories from 'components/Main/PreviewCategories/PreviewCategories';
import MainHero from 'components/Main/Search/Search';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const MainPage = () => {
  return (
    <>
      <MainHero />
      <PreviewCategories />
      <GoToTop />
    </>
  );
};

export default MainPage;
