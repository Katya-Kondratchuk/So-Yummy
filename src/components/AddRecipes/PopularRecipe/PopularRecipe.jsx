import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from 'services/api/recipesAPI';
import css from './PopularRecipe.module.css';

const PopularRecipe = () => {
  const [popularRecipe, setpopularRecipe] = useState([]);

  useMemo(() => {
    if (popularRecipe.length) return;
    const getPopularRecipe = async () => {
      try {
        const data = await getAllRecipes(1, 4, 'popular');
        if (!data) return;
        setpopularRecipe(data.recipes);
      } catch (error) {}
    };
    getPopularRecipe();
  }, [popularRecipe.length]);

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Popular recipe</h3>
      {popularRecipe.length > 0 && (
        <ul className={css.list}>
          {popularRecipe.map(({ _id, title, preview, description }) => {
            const link = `/recipe/${_id}`;
            return (
              <li key={_id} className={css.item}>
                <Link to={link} className={css.itemLink}>
                  <div className={css.imgWrapper}>
                    <img src={preview} alt={title} />
                  </div>
                  <div className={css.textWrapper}>
                    <h4 className={css.itemTitle}>{title}</h4>
                    <p className={css.description}>
                      {description.slice(0, 90)}...
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {popularRecipe.length === 0 && <p>No popular recipes</p>}
    </div>
  );
};

export default PopularRecipe;
