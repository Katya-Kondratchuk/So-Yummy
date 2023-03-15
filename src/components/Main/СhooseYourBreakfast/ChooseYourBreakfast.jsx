import { Link } from 'react-router-dom';
import BreakfastArrowSvg from './BreakfastArrowSvg/BreakfastArrowSvg';
import css from './ChooseYourBreakfast.module.css';
const ChooseYourBreakfast = () => {
  return (
    <div className={css.container}>
      <span className={css.textCurrent}>Delicious and healthy </span>
      <span className={css.text}>
        way to enjoy a variety of fresh ingredients in one satisfying meal
      </span>
      <Link to="/categories" className={css.linkWrapper}>
        See recipes
        <BreakfastArrowSvg />
      </Link>
      <div className={css.arrowContainer}></div>
    </div>
  );
};

export default ChooseYourBreakfast;
