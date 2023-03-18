import React from 'react';
import css from './TopContainer.module.css';
import Timer from '../../../assets/images/CheckBoxRecipe/Timer.png';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import clsx from 'clsx';
import HeroTransformer from '../heroTransformer/HeroTransformer';

const TopContainer = ({ title, description, time, favorite }) => {
  // const titleStr =
  //   favorite === false ? 'Add to favorite recipes' : 'Already favorite';
  return (
    <>
      <HeroTransformer />
      <div className={css.containerThumb}>
        <div className={css.containerWrapper}>
          <span className={css.dishName}>{title}</span>
          <span className={css.dishDescription}>{description}</span>
          <div className={clsx(css.btnTxt, css.btn)}>
            {favorite === false && (
              <SuperBtn title="Add to favorite recipes" otln typeBtn="button" />
            )}
            {favorite === true && (
              <SuperBtn title="Remove from favorite" otln typeBtn="button" />
            )}
          </div>
          <div className={css.dishTime}>
            {time && <img src={Timer} alt="Timer" width="20" height="20" />}
            {time && <span className={css.time}>{time} min</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContainer;
