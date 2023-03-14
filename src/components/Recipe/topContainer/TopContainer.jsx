import React from 'react';
import css from './TopContainer.module.css';
import Timer from '../../../assets/images/CheckBoxRecipe/Timer.png';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import clsx from 'clsx';

const TopContainer = ({ title, description, time = ' ' }) => {
  return (
    <div className={css.topContainer}>
      <div className={css.containerWrapper}>
        <span className={css.dishName}>{title}</span>
        <span className={css.dishDescription}>{description}</span>
        <div className={clsx(css.btnTxt, css.btn)}>
          <SuperBtn title="Add to favorite recipes" otln typeBtn="button" />
        </div>
        <div className={css.dishTime}>
          <img src={Timer} alt="Timer" width="20" height="20" />
          <span className={css.time}>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
