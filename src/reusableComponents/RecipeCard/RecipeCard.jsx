import React from 'react';
import { Link } from 'react-router-dom';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import TrashButton from 'reusableComponents/TrashButton/TrashButton';
import css from './RecipeCard.module.css';

const RecipeCard = ({ title, time, text, text2, imgComponent, trashClass }) => {
  return (
    <li className={css.dish}>
      <img src={imgComponent} className={css.dishImg} alt="dish visually" />
      <div className={css.cardWrapper}>
        <div className={css.titleWrapper}>
          <h3 className={css.dishTitle}>{title}</h3>
          <div className={css.trashLogo}>
            <TrashButton bgColorClass={trashClass} />
          </div>
        </div>
        <p className={css.dishDiscriptionFirst}>{text}</p>
        <p className={css.dishDiscriptionSecond}>{text2}</p>
        <div className={css.bottomWrapper}>
          <p className={css.dishTime}>{time}</p>
          <div className={css.dishButton}>
            <Link to={`/recipe/${title}`}>
              <SuperBtn title={'See recipe'} dark />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RecipeCard;
