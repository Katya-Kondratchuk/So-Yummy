import { useEffect, useState } from 'react';
import BGDots from 'reusableComponents/BGDots/BGDots';
import BasicPagination from 'reusableComponents/Pagination/Pagination';
import RecipeCard from 'reusableComponents/RecipeCard/RecipeCard';
import Title from 'reusableComponents/Title/Title';
import {
  getAllFavorite,
  patchRecipeFavoriteById,
} from 'services/api/recipesAPI';

const Favorite = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  setPage(1);

  useEffect(() => {
    try {
      getAllFavorite(page, 6).then(data => setAllRecipes(data));
    } catch (error) {
      console.log(error.message);
    }
  }, [page]);

  const handelDelete = id => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    patchRecipeFavoriteById(id);
    getAllFavorite(page, 6)
      .then(data => setAllRecipes(data ?? []))
      .catch(e => {
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  return (
    <div className=" greensImg">
      <BGDots />
      <div className={'container'}>
        <section>
          <Title text="Favorites" />
          <ul>
            {allRecipes.length !== 0 &&
              allRecipes.map(({ _id, title, description, time, preview }) => {
                return (
                  <RecipeCard
                    key={_id}
                    trashClass={'lightBcg'}
                    title={title}
                    time={time}
                    text={description}
                    onDelete={() => {
                      handelDelete(_id);
                    }}
                    // text2={description2}
                    imgComponent={preview}
                  />
                );
              })}
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
