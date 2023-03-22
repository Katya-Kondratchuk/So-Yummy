import css from './TopContainer.module.css';
import Timer from '../../../assets/images/CheckBoxRecipe/Timer.png';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import clsx from 'clsx';
import HeroTransformer from '../heroTransformer/HeroTransformer';
import { patchRecipeFavoriteById } from 'services/api/recipesAPI';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MotivatingModal from 'reusableComponents/MotivatingModal/MotivatingModal';

const TopContainer = ({ title, description, time, id, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [motivation, setMotivation] = useState('');

  useEffect(() => {
    setIsFavorite(favorite);
  }, [favorite]);

  const addToFavorite = () => {
    patchRecipeFavoriteById(id).then(({ favorite, motivation }) => {
      setIsFavorite(favorite);
      setMotivation(motivation);
      favorite && toast.success(`Added to favorite!`);
      !favorite && toast.info(`Removed from favorite!`);
    });
  };

  return (
    <>
      {motivation === '10' && <MotivatingModal option={3} />}
      <HeroTransformer />
      <div className={css.containerThumb}>
        <div className={css.containerWrapper}>
          <span className={css.dishName}>{title}</span>
          <span className={css.dishDescription}>{description}</span>
          <div
            className={clsx(css.btnTxt, css.btn)}
            onClick={() => {
              addToFavorite();
            }}
          >
            {isFavorite === false && (
              <SuperBtn title="Add to favorite recipes" otln typeBtn="button" />
            )}

            {isFavorite === true && (
              <SuperBtn title="Remove from favorite" otln typeBtn="button" />
            )}
          </div>
          <div className={css.dishTime}>
            {time && <img src={Timer} alt="Timer" width="20" height="20" />}
            {time && <span className={css.time}>{time} min</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContainer;

// import React from 'react';
// import css from './TopContainer.module.css';
// import Timer from '../../../assets/images/CheckBoxRecipe/Timer.png';
// import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
// import clsx from 'clsx';
// import HeroTransformer from '../heroTransformer/HeroTransformer';

// const TopContainer = ({ title, description, time, favorite }) => {
//   // const titleStr =
//   //   favorite === false ? 'Add to favorite recipes' : 'Already favorite';
//   return (
//     <>
//       <HeroTransformer />
//       <div className={css.containerThumb}>
//         <div className={css.containerWrapper}>
//           <span className={css.dishName}>{title}</span>
//           <span className={css.dishDescription}>{description}</span>
//           <div className={clsx(css.btnTxt, css.btn)}>
//             {favorite === false && (
//               <SuperBtn title="Add to favorite recipes" otln typeBtn="button" />
//             )}
//             {favorite === true && (
//               <SuperBtn title="Delete from favorite" otln typeBtn="button" />
//             )}
//           </div>
//           <div className={css.dishTime}>
//             {time && <img src={Timer} alt="Timer" width="20" height="20" />}
//             {time && <span className={css.time}>{time} min</span>}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TopContainer;
