import React from 'react';
import css from './Search.module.css';
import SearchInput from 'reusableComponents/SearchInput/SearchInput';

const MainHero = () => {
  return (
    <div>
      <div className={css.heroContainer}>
        <div className={css.heroWrapper}>
          <div className={css.nameWrapper}>
            <span className={css.heroNameCurrent}>So</span>
            <span className={css.heroName}>Yummy</span>
          </div>

          <span className={css.heroDescription}>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </span>
          <div className={css.heroInput}>
            <SearchInput dark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
