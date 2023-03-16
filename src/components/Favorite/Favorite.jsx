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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setTimeout(() => {
        getAllFavorite(page, 6).then(data => {
          if (!data) {
            return;
          }
          setAllRecipes(data.recipes);
        }, 1000);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [page]);

  const handelDelete = async id => {
    if (isLoading) {
      setPage(1);
      return;
    }
    setIsLoading(true);
    await patchRecipeFavoriteById(id);
    const newRecipes = allRecipes.filter(_id => _id !== id);
    setAllRecipes(newRecipes);
    // await getAllFavorite(page, 6)
    //   .then(data => setAllRecipes(data.recipes ?? []))
    //   .catch(() => {
    //     setIsLoading(false);
    //   });
    setIsLoading(false);
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
              allRecipes.map(({ _id, title, description, time, preview }) => {
                return (
                  <RecipeCard
                    key={_id}
                    id={_id}
                    trashClass={'lightBcg'}
                    title={title}
                    time={time}
                    text={description}
                    onDelete={() => {
                      handelDelete(_id);
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

// const handleDelete = object => {
//   deleteProduct(object).then(res => {});
//   getDayProducts({ date: date }).then(res => {
//     const newEatenProducts = res.eatenProducts;
//     setProducts(newEatenProducts ?? []);

//     setSummaryDay(res.daySummary);
//   });
