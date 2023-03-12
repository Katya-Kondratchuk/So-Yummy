import MainHero from 'components/Main/Search/Search';
import PreviewCategories from 'components/PreviewCategories/PreviewCategories';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';

const MainPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          type="button"
          style={{ marginLeft: '100px' }}
          onClick={() => dispatch(logoutUser())}
        >
          Log out
        </button>
      </div>
      <MainHero />
      <PreviewCategories />
    </div>
  );
};

export default MainPage;
