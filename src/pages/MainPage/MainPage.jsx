import PreviewCategories from 'components/Main/PreviewCategories/PreviewCategories';
import MainHero from 'components/Main/Search/Search';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
// import PreviewCategories from 'components/PreviewCategories/PreviewCategories';

const MainPage = () => {
  return (
    <div>
      <MainHero />
      <PreviewCategories />
    </div>
  );
};

export default MainPage;
