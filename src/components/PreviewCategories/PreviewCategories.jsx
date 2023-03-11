import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import css from './PreviewCategories.module.css';
import Button from 'reusableComponents/Button/Button';
import DishCard from 'reusableComponents/DishCard/DishCard';
import { Link } from 'react-router-dom';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

const PreviewCategories = ({ categorie = 'Breakfast' }) => {
  const [mainMeals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get('/filter.php?', {
        params: {
          c: `${categorie}`,
        },
      })
      .then(response => {
        setMeals(response.data.meals);
      });
  }, [categorie]);

  const selectedmainMeals = mainMeals.slice(0, 4);

  return (
    <div className="container">
      <div className={css.previewContainer}>
        <h2 className={css.title}>{categorie}</h2>
        <ul className={css.list}>
          {selectedmainMeals.map(({ strMealThumb, idMeal, strMeal }) => (
            <li key={idMeal} className={css.item}>
              <Link to="/recipe">
                <DishCard
                  image={strMealThumb}
                  altText={strMeal}
                  text={strMeal}
                />
              </Link>
            </li>
          ))}
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

export default PreviewCategories;

//вызов:
//<PreviewCategories categorie = {'Breakfast'}/>
