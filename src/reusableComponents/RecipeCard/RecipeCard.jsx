import React from 'react';
import { Link } from 'react-router-dom';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import TrashButton from 'reusableComponents/TrashButton/TrashButton';
import css from './RecipeCard.module.css';

export function getTimeFromMins(mins) {
  let minutes = mins;
  let hours = Math.trunc(mins / 60);
  if (mins >= 60 && mins < 1440) {
    minutes = mins % 60;
    return `${hours} hours ${minutes > 0 ? `${minutes} min` : ''}`;
  }

  if (hours >= 24) {
    let days = Math.trunc(hours / 24);
    hours = hours % 24;
    minutes = mins % 60;
    return `${days} day ${hours} hours  ${minutes} min`;
  }
  return `${minutes} min`;
}

const RecipeCard = ({
  id,
  title,
  time,
  text,
  imgComponent,
  trashClass,
  onDelete,
}) => {
  return (
    <li className={css.dish}>
      <img src={imgComponent} className={css.dishImg} alt="dish visually" />
      <div className={css.cardWrapper}>
        <div className={css.titleWrapper}>
          <h3 className={css.dishTitle}>{title}</h3>
          <div className={css.trashLogo}>
            <TrashButton bgColorClass={trashClass} onDelete={onDelete} />
          </div>
        </div>
        <p className={css.dishDiscriptionFirst}>{text}</p>
        <div className={css.bottomWrapper}>
          <p className={css.dishTime}>{getTimeFromMins(time)}</p>
          <div className={css.dishButton}>
            <Link to={`/recipe/${id}`}>
              <SuperBtn title={'See recipe'} dark />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RecipeCard;
