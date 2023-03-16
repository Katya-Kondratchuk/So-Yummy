import React from 'react';
import css from './IngredientsNumber.module.css';

const IngredientsNumber = ({ measure }) => {
  return <div className={css.wrapper}>{measure}</div>;
};

export default IngredientsNumber;
