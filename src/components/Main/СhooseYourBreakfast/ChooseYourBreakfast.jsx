import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import BreakfastArrowSvg from './BreakfastArrowSvg/BreakfastArrowSvg';
import css from './ChooseYourBreakfast.module.css';
const ChooseYourBreakfast = () => {
  return (
    <div className={css.container}>
      <span className={css.textCurrent}>Delicious and healthy </span>
      <span className={css.text}>
        way to enjoy a variety of fresh ingredients in one satisfying meal
      </span>
      <NavLink
        to="/categories"
        className={clsx(css.linkWrapper, 'linkWrapper')}
      >
        See recipes
        <BreakfastArrowSvg />
      </NavLink>
    </div>
  );
};

export default ChooseYourBreakfast;
