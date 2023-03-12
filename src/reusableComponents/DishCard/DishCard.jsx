import React from 'react';
import css from './DishCard.module.css';
import favImg from './fav.png';

const DishCard = ({ image, altText, text, favorite }) => {
  return (
    <div className={css.cardContainer}>
      <img src={image} alt={altText} className={css.image} />
      <div className={css.textContainer}>
        <p className={css.text}>{text}</p>
      </div>
      {favorite && (
        <img src={favImg} className={css.favIco} alt="FavoriteDish" />
      )}
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

/> */
