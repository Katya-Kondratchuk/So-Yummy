import React from 'react';
import css from './DishCard.module.css';
import { ReactComponent as FavoriteIco } from './fav.svg';
import { ReactComponent as LikeIco } from './fav.svg';

const DishCard = ({ image, altText, text, favorite, like }) => {
  const favFeel = favorite ? 'white' : 'none';
  const likeFeel = like ? 'white' : 'none';

  return (
    <div className={css.cardContainer}>
      <img src={image} alt={altText} className={css.image} />
      <div className={css.textContainer}>
        <p className={css.text}>{text}</p>
      </div>
      <FavoriteIco className={css.favIco} fill={favFeel} />
      <LikeIco className={css.likeIco} fill={likeFeel} />
    </div>
  );
};

export default DishCard;

// вызов компонента:
/* <DishCard
      image="https://img.theculturetrip.com/wp-content/uploads/2019/12/2aaeed6.jpg"
      altText="someDish"
      text="Delicious dishes"
      favorite={false}
      like={false}
/> */
