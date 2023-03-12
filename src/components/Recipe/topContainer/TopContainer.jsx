import React from 'react';
import css from './TopContainer.module.css';
import Timer from '../../../assets/images/CheckBoxRecipe/Timer.png';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import clsx from 'clsx';

const TopContainer = () => {
  return (
    <div className={css.topContainer}>
      <div className={css.containerWrapper}>
        <span className={css.dishName}>Salad</span>
        <span className={css.dishDescription}>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </span>
        <div className={clsx(css.btnTxt, css.btn)}>
          <SuperBtn title="Add to favorite recipes" otln typeBtn="button" />
        </div>
        <div className={css.dishTime}>
          <img src={Timer} alt="Timer" width="20" height="20" />
          <span className={css.time}>20 min</span>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
