import React from 'react';
import { useState, useEffect } from 'react';
import css from './Preview.module.css';
import Button from 'reusableComponents/Button/Button';
import DishCard from 'reusableComponents/DishCard/DishCard';
import { Link } from 'react-router-dom';
import { getCategorieRecipes } from 'services/api/recipesAPI';

const Preview = ({ category }) => {
  const [mainMeals, setMainMeals] = useState([]);

  const [isShow, setIsShow] = useState(false);

  const toogle = () => {
    setIsShow(prevState => !prevState);
  };

  useEffect(() => {
    getCategorieRecipes(category).then(response => {
      setMainMeals(response.slice(0, 4));
    });
  }, [category, mainMeals]);

  return (
    <div>
      <div className={css.previewContainer}>
        <Link to={`/categories/${category}`} className={css.title}>
          {category}
        </Link>
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
                <DishCard
                  id={_id}
                  isShow={isShow}
                  toogle={toogle}
                  image={preview}
                  altText={description}
                  text={title}
                  favorite={favorite}
                  like={like}
                  allData={mainMeals}
                  setAllData={setMainMeals}
                  popularity={popularity}
                />
              </li>
            ),
          )}
        </ul>
      </div>
      <div className={css.buttonContainer}>
        <Button
          isLink
          href={`/categories/${category}`}
          divClassName={css.buttonClass}
          label={'See all'}
        />
      </div>
    </div>
  );
};

export default Preview;
