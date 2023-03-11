import React from 'react';
import Button from 'reusableComponents/Button/Button';
import TrashButton from 'reusableComponents/TrashButton/TrashButton';
import dish from '../../assets/images/Recipe/image.png';
import s from './RecipeCard.module.css';

const RecipeCard = ({
  title,
  text,
  imgComponent,
  buttonComponent,
  trashClass,
  color,
}) => {
  return (
    <div className={s.dish}>
      <img src={dish} className={s.dishImg} alt="dish visually" />
      <div className={s.cardWrapper}>
        <div className={s.titleWrapper}>
          <h3 className={s.dishTitle}>Salmon Eggs Benedict</h3>
          <TrashButton bgColorClass={trashClass} />
        </div>
        <p className={s.dishDiscriptionFirst}>
          Salmon eggs are rich in essential nutrients, low in calories, and
          recommended as part of a healthy diet. Including salmon in a balanced
          diet can help decrease the chances of heart disease, ease
          inflammation, and more.
        </p>
        <p className={s.dishDiscriptionSecond}>
          Studies have shown a number of potential health benefits to seafood
          rich in omega-3 fatty acids, which include salmon eggs.
        </p>
        <div className={s.bottomWrapper}>
          <p className="DishTime">20 min</p>

          <Button
            label={'See recipe'}
            color={color}
            isLink
            divClassName={s.dishButton}
            FunButton
          />
          {/* <div className={s.dishButton}>See recipe</div> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
