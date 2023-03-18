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
import { FavoriteLoader } from 'reusableComponents/ContentLoader/FavoriteLoader';
import NothingAdd from './NothingAdd/NothingAdd';
import css from '../../reusableComponents/RecipeCard/RecipeCard.module.css';

const Favorite = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        await getAllFavorite(page, 4).then(data => {
          if (!data) {
            return;
          }
          const pageCounts = Math.ceil(data.total / 4);
          if (pageCounts > 1) {
            setTotalPage(pageCounts);
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
      return;
    }
    event.target.disabled = true;
    await patchRecipeFavoriteById(id);
    // const newRecipes = allRecipes.filter(({ _id }) => _id !== id);
    // setAllRecipes(newRecipes);
    await getAllFavorite(page, 4)
      .then(data => {
        const pageCounts = Math.ceil(data.total / 4);
        // console.log(data.total);
        if (pageCounts > 1) {
          setTotalPage(pageCounts);
        } else {
          setTotalPage(null);
        }
        setAllRecipes(data.recipes ?? []);
      })
      .catch(e => {
        console.log(e.message);
      });
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className=" greensImg">
      <BGDots />
      <div className={'container'}>
        <section className={css.contentWrapper}>
          <Title text="Favorites" />
          <ul className={css.cardList}>
            {isLoading ? (
              <FavoriteLoader />
            ) : allRecipes.length !== 0 && !isLoading ? (
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
            ) : (
              <NothingAdd />
            )}
          </ul>
          {totalPage && (
            <BasicPagination
              count={totalPage}
              page={page}
              isChange={handleChange}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default Favorite;
