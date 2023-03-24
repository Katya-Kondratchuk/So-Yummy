import React, { useEffect, useState } from 'react';
import BGDots from '../../reusableComponents/BGDots/BGDots';
import Title from '../../reusableComponents/Title/Title';
import MyRecipeItem from './MyResipeItem/MyRecipeItem';
import Pagination from './PaginationCustom/Pagination';
import css from './MyRecipes.module.css';
import { deleteOwnRecipe, getOwnRecipe } from 'services/api/recipesAPI';
import { animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';
import MotivatingModal from 'reusableComponents/MotivatingModal/MotivatingModal';
import { FavoriteLoader } from 'reusableComponents/ContentLoader/FavoriteLoader';

const MyRecipes = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [recipesArray, setRecipesArray] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const location = useLocation();
  const [motivation, setMotivation] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (location.state?.motivation) {
      setMotivation(location.state.motivation);
    }
    getOwnRecipe(currentPage).then(({ total, recipes }) => {
      setTotalItems(total);
      setRecipesArray(recipes);
      setIsLoading(false);
    });
  }, [currentPage, location]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleClick = event => {
    setcurrentPage(Number(event.target.id));
    scrollToTop();
  };

  const handelDelete = async (id, event) => {
    if (event.target.disabled) {
      return;
    }
    event.target.disabled = true;
    await deleteOwnRecipe(id);

    toast.info('Delete recipe', {});
    await getOwnRecipe(currentPage, 4)
      .then(data => {
        if (data.total === 4) {
          setcurrentPage(1);
          setTotalItems(null);
          return;
        }
        const totalItems = Math.ceil(data.total / 4);
        if (totalItems > 1) {
          if (totalItems < currentPage) {
            setcurrentPage(totalItems);
            return;
          }
        } else {
          setTotalItems(null);
        }
        setRecipesArray(data.recipes ?? []);
        // setcurrentPage(1);
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  return (
    <div className="container">
      {motivation === 'first' && <MotivatingModal option={4} />}
      <BGDots />
      <section className={css.myRecipe}>
        <Title text="My recipes" />
        <ul className={css.cardList}>
          {isLoading ? (
            <FavoriteLoader />
          ) : totalItems !== 0 && !isLoading ? (
            recipesArray.map(
              ({ category, description, preview, time, title, _id }) => (
                <MyRecipeItem
                  key={_id}
                  handelDelete={handelDelete}
                  category={category}
                  description={description}
                  preview={preview}
                  time={time}
                  title={title}
                  id={_id}
                />
              ),
            )
          ) : (
            <>
              <div className={css.noRecipesImg}></div>
              <p className={css.noRecipesText}>You don't have any recipe.</p>
            </>
          )}
        </ul>
        {totalItems > 4 && (
          <Pagination
            recipesArray={recipesArray}
            totalItems={totalItems}
            handle={handleClick}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
          />
        )}
      </section>
    </div>
  );
};

export default MyRecipes;
