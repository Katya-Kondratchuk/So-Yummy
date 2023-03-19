import React from 'react';
import { getTimeFromMins } from 'reusableComponents/RecipeCard/RecipeCard';
import css from './Time.module.css';

const Time = ({ text }) => {
  return <p className={css.Time}>{getTimeFromMins(text)}</p>;
};

export default Time;
