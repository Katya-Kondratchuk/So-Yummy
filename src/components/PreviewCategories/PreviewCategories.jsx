import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import css from './PreviewCategories.module.css';
import Button from 'reusableComponents/Button/Button';
import DishCard from 'reusableComponents/DishCard/DishCard';
import { Link } from 'react-router-dom';

const PreviewCategories = ({ categorie = 'Breakfast' }) => {
  const [mainMeals, setMeals] = useState([]);

  axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

  async function getMeals() {
    try {
      const response = await axios.get('/filter.php?', {
        params: {
          //c: `${categorie}`,
          c: 'Breakfast',
        },
      });
      return response.data.meals;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    (async function getingMeals() {
      const res = await getMeals();
      const meals = res;
      if (meals) {
        setMeals(meals);
      }
    })();
    return () => {};
  }, []);

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
              {/* <img src={imageUrl} alt={`${index + 1}`} className={css.image} /> */}
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
//<PreviewCategories />
