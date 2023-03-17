import React from 'react';
import css from './ImageCard.module.css';

const ImageCard = ({ image, altText }) => {
  return (
    <div className={css.imgContainer}>
      <img src={image} alt={altText} className={css.image} />
    </div>
  );
};

export default ImageCard;



// вызов компонента:
/* <DishCard
      image="https://img.theculturetrip.com/wp-content/uploads/2019/12/2aaeed6.jpg"
      altText="some"
/> */
