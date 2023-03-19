import React from 'react';
import css from './Alert.module.css';

const Alert = ({ textPartOne, textPartTwo, classAlert }) => {
  return (
    <div className={css.container}>
      <p className={css.alertPartOne}>{textPartOne}</p>
      <p className={`${css.alertPartTwo} ${classAlert}`}>{textPartTwo}</p>
    </div>
  );
};

export default Alert;
