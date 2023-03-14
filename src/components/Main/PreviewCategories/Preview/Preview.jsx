import React from 'react';
import { useState, useEffect } from 'react';
import css from './Preview.module.css';
import Button from 'reusableComponents/Button/Button';
import DishCard from 'reusableComponents/DishCard/DishCard';
// import { Link } from 'react-router-dom';
import { getCategorieRecipes } from 'services/api/recipesAPI';

const Preview = ({ category }) => {
  const [mainMeals, setMeals] = useState([]);

  const [isShow, setIsShow] = useState(false);

  const toogle = () => {
    setIsShow(prevState => !prevState);
  };

  useEffect(() => {
    getCategorieRecipes(category).then(response => {
      setMeals(response.slice(0, 4));
    });
  }, [category]);

  return (
    <div>
      <div className={css.previewContainer}>
        <h2 className={css.title}>{category}</h2>
        <ul className={css.list}>
          {mainMeals.map(
            ({
              category,
              description,
              favorite,
              like,
              popularity,
              preview,
              time,
              title,
              _id,
            }) => (
              <li key={_id} className={css.item}>
                {/* <Link to={`/recipe/${_id}`}> */}
                <DishCard
                  id={_id}
                  isShow={isShow}
                  toogle={toogle}
                  image={preview}
                  altText={description}
                  text={title}
                  favorite={favorite}
                  like={like}
                />
                {/* </Link> */}
              </li>
            ),
          )}
        </ul>
      </div>
      <div className={css.buttonContainer}>
        <Button
          isLink
          href="/categories"
          divClassName={css.buttonClass}
          label={'See all'}
        />
      </div>
    </div>
  );
};

export default Preview;

// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import css from './Preview.module.css';
// import Button from 'reusableComponents/Button/Button';
// import DishCard from 'reusableComponents/DishCard/DishCard';
// import { Link } from 'react-router-dom';

// const instance = axios.create({
//   baseURL: 'https://www.themealdb.com/api/json/v1/1',
// });

// const Preview = ({ categorie = 'Breakfast' }) => {
//   const [mainMeals, setMeals] = useState([]);

//   useEffect(() => {
//     instance
//       .get('/filter.php?', {
//         params: {
//           c: `${categorie}`,
//         },
//       })
//       .then(response => {
//         setMeals(response.data.meals);
//       });
//   }, [categorie]);
//   const selectedmainMeals = mainMeals.slice(0, 4);

//   return (
//     // <div className="container">
//     <div>
//       <h2 className={css.title}>{categorie}</h2>
//       <div className={css.previewContainer}>
//         <ul className={css.list}>
//           {selectedmainMeals.map(({ strMealThumb, idMeal, strMeal }) => (
//             <li key={idMeal} className={css.item}>
//               <Link to="/recipe">
//                 <DishCard
//                   image={strMealThumb}
//                   altText={strMeal}
//                   text={strMeal}
//                   favorite={false}
//                   like={false}
//                 />
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={css.buttonContainer}>
//         <Button
//           isLink
//           href="/categories"
//           divClassName={css.buttonClass}
//           label={'See all'}
//         />
//       </div>
//     </div>
//   );
// };

// export default Preview;

//вызов:
//<Preview categorie = {'Breakfast'}/>
