import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  getAllFavorite,
  patchRecipeFavoriteById,
} from 'services/api/recipesAPI';
import { FavoriteLoader } from 'reusableComponents/ContentLoader/FavoriteLoader';
import BasicPagination from 'reusableComponents/Pagination/Pagination';
import RecipeCard from 'reusableComponents/RecipeCard/RecipeCard';
import NothingAdd from './NothingAdd/NothingAdd';
import Title from 'reusableComponents/Title/Title';
import BGDots from 'reusableComponents/BGDots/BGDots';
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
      }, 500);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  }, [page]);

  const handelDelete = async (id, event) => {
    if (event.target.disabled) {
      return;
    }
    event.target.disabled = true;
    await patchRecipeFavoriteById(id);
    // const newRecipes = allRecipes.filter(({ _id }) => _id !== id);
    // setAllRecipes(newRecipes);
    toast.info('You delete recipe from favorites list', {
      toastId: '12345',
    });

    await getAllFavorite(page, 4)
      .then(data => {
        if (data.total === 4) {
          setPage(1);
          setTotalPage(null);
          return;
        }

        const pageCounts = Math.ceil(data.total / 4);
        if (pageCounts > 1) {
          setTotalPage(pageCounts);

          if (pageCounts < page) {
            setPage(pageCounts);
            return;
          }
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
    <div>
      <div className={'container'}>
        <BGDots />
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

// const location = useLocation();
// navigate(`/recipe/${data.id}`, { state: { from: location } });
