import React, { useEffect, useState } from 'react';
import BGDots from '../../reusableComponents/BGDots/BGDots';
import Title from '../../reusableComponents/Title/Title';
import MyRecipeItem from './MyResipeItem/MyRecipeItem';
import Pagination from './PaginationCustom/Pagination';
import css from './MyRecipes.module.css';
import { deleteOwnRecipe, getOwnRecipe } from 'services/api/recipesAPI';
import { animateScroll as scroll } from 'react-scroll';

const MyRecipes = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [recipesArray, setRecipesArray] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    getOwnRecipe(currentPage).then(({ total, recipes }) => {
      setTotalItems(total);
      setRecipesArray(recipes);
    });
  }, [currentPage]);

  useEffect(() => {
    getOwnRecipe().then(({ total, recipes }) => {
      setTotalItems(total);
      setRecipesArray(recipes);
    });
  }, []);

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
    await getOwnRecipe(1, 4)
      .then(data => {
        const totalItems = Math.ceil(data.total / 4);
        if (totalItems > 1) {
          setTotalItems(totalItems);
        }
        if (totalItems === 1) {
          setTotalItems(totalItems);
          setcurrentPage(1);
        } else {
          setTotalItems(null);
        }
        setRecipesArray(data.recipes ?? []);
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  return (
    <div className=" greensImg">
      <BGDots />
      <div className="container">
        <section className={css.myRecipe}>
          <Title text="My recipes" />
          <ul className={css.cardList}>
            {recipesArray.map(
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
            )}
          </ul>
          <Pagination
            recipesArray={recipesArray}
            totalItems={totalItems}
            handle={handleClick}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
          />
        </section>
      </div>
    </div>
  );
};

export default MyRecipes;
