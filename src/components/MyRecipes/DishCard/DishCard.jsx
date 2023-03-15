import React from 'react';
import css from './DishCard.module.css';

const DishCard = ({ image, altText, text }) => {
  return (
    <div className={css.cardContainer}>
      <img src={image} alt={altText} className={css.image} />
      <div className={css.textContainer}>
        <p className={css.text}>{text}</p>
      </div>
    </div>
  );
};

export default DishCard;

// вызов компонента:
/* <DishCard
      image="https://img.theculturetrip.com/wp-content/uploads/2019/12/2aaeed6.jpg"
      altText="someDish"
      text="Delicious dishes"
/> */
