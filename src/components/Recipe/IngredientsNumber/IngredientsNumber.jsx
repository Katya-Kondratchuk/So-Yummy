import React from 'react';
import css from './IngredientsNumber.module.css';

const IngredientsNumber = ({ measure }) => {
  return (
    <>
      {measure && <div className={css.wrapper}>{measure}</div>}
      {!measure && <div className={css.wrapper}>To your taste</div>}
    </>
  );
};

export default IngredientsNumber;
