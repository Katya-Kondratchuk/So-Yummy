import React from 'react';
import css from './Search.module.css';
import SearchInput from 'reusableComponents/SearchInput/SearchInput';

const MainHero = () => {
  return (
    <div className={css.topContainer}>
      <div className={css.containerWrapper}>
        <span className={css.dishName}>SoYummy</span>
        <span className={css.dishDescription}>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </span>
        <SearchInput />
      </div>
    </div>
  );
};

export default MainHero;
