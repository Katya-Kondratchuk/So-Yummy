import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  patchRecipeFavoriteById,
  patchRecipeLikeById,
} from 'services/api/recipesAPI';
import css from './DishCard.module.css';
import { ReactComponent as FavoriteIco } from './fav.svg';
import { ReactComponent as LikeIco } from './like.svg';

const DishCard = ({
  image,
  altText,
  text,
  favorite,
  like,
  toogle,
  isShow,
  id,
}) => {
  const [isLike, setIsLike] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorite = () => {
    patchRecipeFavoriteById(id).then(({ favorite }) => setIsFavorite(favorite));
  };
  useEffect(() => {}, []);

  // useEffect(() => {
  const addLike = () => {
    patchRecipeLikeById(id).then(({ like }) => setIsLike(like));
  };
  // }, []);

  const favFeel =
    favorite && isFavorite ? 'var(--secondaryGreenColor)' : 'none';
  const likeFeel = like && isLike ? 'var(--secondaryGreenColor)' : 'none';
  const shortText =
    text.length < 30 ? text : text.substr(0, 30).replace(/\s+\S*$/, '') + '...';
  return (
    <div className={css.cardContainer}>
      <Link to={`/recipe/${id}`}>
        <img src={image} alt={altText} className={css.image} />
      </Link>

      <button
        onMouseOver={toogle}
        className={css.textContainer}
        onClick={toogle}
      >
        {isShow ? text : shortText}
      </button>
      {/* <div className={css.textContainer}>
        <p className={css.text} onMouseOver={toogle}>
          {isShow ? text : shortText}
        </p>
      </div> */}
      <button type="button" onClick={addToFavorite}>
        <FavoriteIco className={css.favIco} fill={favFeel} />
      </button>
      <button type="button" onClick={addLike}>
        <LikeIco className={css.likeIco} fill={likeFeel} />
      </button>
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
