import React from 'react';
import s from './IngredientsNumber.module.css';

const IngredientsNumber = ({ text }) => {
  return <div className={s.wrapper}>{text}</div>;
};

export default IngredientsNumber;
