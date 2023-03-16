import React, { useState } from 'react';
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
  allData = [],
  setAllData = () => {},
  popularity,
}) => {
  const [isLike, setIsLike] = useState(like);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const [isLoadFavorite, setIsLoadFavorite] = useState(false);
  const [isLoadLike, setIsLoadLike] = useState(false);

  const [popular, setPopular] = useState(popularity);

  const addToFavorite = () => {
    setIsLoadFavorite(true);
    patchRecipeFavoriteById(id)
      .then(({ favorite, popularity }) => {
        setIsLoadFavorite(false);

        const changeData = allData.map(item => {
          if (item._id === id) {
            return { ...item, favorite };
          }
          return item;
        });
        setAllData(changeData);
        setPopular(popularity);
        setIsFavorite(favorite);
      })
      .catch(() => setIsLoadFavorite(false));
  };

  const addLike = () => {
    setIsLoadLike(true);
    patchRecipeLikeById(id)
      .then(({ like, popularity }) => {
        setIsLoadLike(false);

        const changeData = allData.map(item => {
          if (item._id === id) {
            return { ...item, like };
          }
          return item;
        });
        setAllData(changeData);
        setPopular(popularity);

        setIsLike(like);
      })
      .catch(() => setIsLoadLike(false));
  };

  const favFeel =
    favorite || isFavorite ? 'var(--secondaryGreenColor)' : 'none';
  const likeFeel = like || isLike ? 'var(--secondaryGreenColor)' : 'none';
  const shortText =
    text.length < 30 ? text : text.substr(0, 30).replace(/\s+\S*$/, '') + '...';

  return (
    <div className={css.cardContainer}>
      <Link to={`/recipe/${id}`}>
        <img src={image} alt={altText} className={css.image} />
      </Link>
      <button
        onMouseOver={text.length < 30 ? null : toogle}
        className={css.textContainer}
        onClick={text.length < 30 ? null : toogle}
      >
        {isShow ? text : shortText}
      </button>
      <button
        className={css.btnFav}
        type="button"
        onClick={() => {
          if (isLoadFavorite) return;
          addToFavorite();
        }}
      >
        <FavoriteIco className={css.favIco} fill={favFeel} />
      </button>
      <button
        className={css.btnLike}
        type="button"
        onClick={() => {
          if (isLoadLike) return;
          addLike();
        }}
      >
        <LikeIco className={css.likeIco} fill={likeFeel} />
      </button>
      <p className={css.popularity}>{popular}</p>
    </div>
  );
};

export default DishCard;
