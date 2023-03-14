import React from 'react';
import { Link } from 'react-router-dom';
import css from './ChooseYourBreakfast.module.css';
const ChooseYourBreakfast = () => {
  return (
    <div className={css.textWrapper}>
      <span className={css.textCurrent}>Delicious and healthy</span>
      <span className={css.text}>
        way to enjoy a variety of fresh ingredients in one satisfying meal
      </span>
      <div>
        <Link to="/categories" className={css.link}>
          See recipes &#8594;
        </Link>
      </div>
    </div>
  );
};

export default ChooseYourBreakfast;
