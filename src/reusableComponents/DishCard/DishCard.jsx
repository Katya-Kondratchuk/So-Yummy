import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  patchRecipeFavoriteById,
  patchRecipeLikeById,
} from 'services/api/recipesAPI';
import css from './DishCard.module.css';
import { ReactComponent as FavoriteIco } from './fav.svg';
import { ReactComponent as LikeIco } from './like.svg';
import { toast } from 'react-toastify';
import MotivatingModal from 'reusableComponents/MotivatingModal/MotivatingModal';

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
  const maxTextLength = 26;
  const [isLike, setIsLike] = useState(like);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const [isLoadFavorite, setIsLoadFavorite] = useState(false);
  const [isLoadLike, setIsLoadLike] = useState(false);
  const [motivation, setMotivation] = useState('');
  const [popular, setPopular] = useState(popularity);

  const addToFavorite = () => {
    setIsLoadFavorite(true);

    patchRecipeFavoriteById(id)
      .then(({ favorite, popularity, motivation }) => {
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
        setMotivation(motivation);
        favorite && toast.success(`Added to Favorite!`);
        !favorite && toast.info(`Removed from Favorite!`);
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
    text.length < maxTextLength
      ? text
      : text.substr(0, maxTextLength).replace(/\s+\S*$/, '') + '...';

  //+++++++++++++++++++++++
  // let show = text;
  // const showText = text => {
  //   let index = 0;
  //   const intervalId = setInterval(() => {
  //     if (index === text.length) {
  //       clearInterval(intervalId);
  //       return;
  //     }
  //     show = text.charAt(index);
  //     // console.log(text.charAt(index));
  //     index++;
  //   }, 1000);
  // };
  // console.log(showText('hello world'));
  //++++++++++++++++++++

  return (
    <div className={css.cardContainer}>
      {motivation === '10' && <MotivatingModal option={3} />}
      <Link to={`/recipe/${id}`}>
        <img src={image} alt={altText} className={css.image} />
      </Link>
      <button
        onMouseOver={text.length < maxTextLength ? null : toogle}
        className={css.textContainer}
        onClick={text.length < maxTextLength ? null : toogle}
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
