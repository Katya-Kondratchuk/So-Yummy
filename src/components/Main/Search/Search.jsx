import React from 'react';
import css from './Search.module.css';
import SearchInput from 'reusableComponents/SearchInput/SearchInput';

const MainHero = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.heroWrapper}>
        <span className={css.heroName}>SoYummy</span>
        <span className={css.heroDescription}>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </span>
        <SearchInput />
      </div>
    </div>
  );
};

export default MainHero;
