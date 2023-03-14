import React from 'react';
import { Link } from 'react-router-dom';
import BreakfastArrowSvg from './BreakfastArrowSvg/BreakfastArrowSvg';
import css from './ChooseYourBreakfast.module.css';
const ChooseYourBreakfast = () => {
  return (
    <div className="container">
      <div className={css.textWrapper}>
        <span className={css.textCurrent}>Delicious and healthy</span>
        <span className={css.text}>
          way to enjoy a variety of fresh ingredients in one satisfying meal
        </span>
        <div>
          <Link to="/categories" className={css.linkWrapper}>
            See recipes
          </Link>
          <BreakfastArrowSvg />
        </div>
      </div>
    </div>
  );
};

export default ChooseYourBreakfast;
