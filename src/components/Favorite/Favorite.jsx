import { useEffect, useState } from 'react';
import React from 'react';
import BGDots from 'reusableComponents/BGDots/BGDots';
import BasicPagination from 'reusableComponents/Pagination/Pagination';
import RecipeCard from 'reusableComponents/RecipeCard/RecipeCard';
import Title from 'reusableComponents/Title/Title';
import {
  getAllFavorite,
  patchRecipeFavoriteById,
} from 'services/api/recipesAPI';
import { FavoriteLoader } from './ContentLoader/FavoriteLoader';

const Favorite = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        await getAllFavorite(page, 6).then(data => {
          if (!data) {
            return;
          }
          setAllRecipes(data.recipes);
        });
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  }, [page]);

  const handelDelete = async (id, event) => {
    if (event.target.disabled) {
      // Защита от двойного клика
      setPage(1);
      return;
    }
    event.target.disabled = true;
    await patchRecipeFavoriteById(id);
    // const newRecipes = allRecipes.filter(({ _id }) => _id !== id);
    // setAllRecipes(newRecipes);
    await getAllFavorite(page, 6)
      .then(data => setAllRecipes(data.recipes ?? []))
      .catch(e => {
        console.log(e.message);
      });
  };

  return (
    <div className=" greensImg">
      <BGDots />
      <div className={'container'}>
        <section>
          <Title text="Favorites" />
          <ul>
            {isLoading ? (
              <FavoriteLoader />
            ) : (
              allRecipes.length !== 0 &&
              !isLoading &&
              allRecipes.map(({ _id, title, description, time, preview }) => {
                return (
                  <RecipeCard
                    key={_id}
                    id={_id}
                    trashClass={'lightBcg'}
                    title={title}
                    time={time}
                    text={description}
                    onDelete={e => {
                      handelDelete(_id, e);
                    }}
                    imgComponent={preview}
                  />
                );
              })
            )}
          </ul>
          <BasicPagination count={8} />
        </section>
      </div>
    </div>
  );
};

export default Favorite;
