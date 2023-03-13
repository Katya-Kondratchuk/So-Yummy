import React, { useState } from 'react';
import SuperBtn from '../../../reusableComponents/SuperBtn/SuperBtn';
import DishCard from './DishCard/DishCard';
import Title from '../../../reusableComponents/Title/Title';
import Textt from './Text/text';
import TitleRecip from './TitleRecip/TitleRecip';
import Time from './Time/Time';
import css from './MyRecipesPage.module.css';
import TrashButton from 'reusableComponents/TrashButton/TrashButton';

const MyRecipes = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const handleClick = event => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(arr.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);

  const it = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };

  const renderPageNumbers = pages.map(number => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  return (
    <div className="container">
      <section className={css.myRecipe}>
        <Title text="My recipes" />
        <ul className={css.cardList}>
          {currentItems.map(item => (
            <li key={it()} className={css.cardItem}>
              <div className={css.cardContainer}>
                <DishCard image="https://img.theculturetrip.com/wp-content/uploads/2019/12/2aaeed6.jpg" />
              </div>
              <div className={css.cardContainer2}>
                <div className={css.wrapperFirst}>
                  <TitleRecip text="Apple Frangipan Tart" />
                  <div>
                    <TrashButton bgColorClass={'darkBcg'} />
                  </div>
                </div>
                <Textt text="Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is filled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves." />
                <Textt text="We threw a ladies Melbourne Cup lunch and this was our dessert. Super quick to prepare using store bought pastry." />
                <div className={css.wrapperSecond}>
                  <div className={css.cardContainer5}>
                    <Time text="30 m" />
                  </div>

                  <div className={css.btnWrapper}>
                    <SuperBtn title="See recipe" lnk to="/recipe" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul className={css.pageNumbers}>{renderPageNumbers}</ul>
      </section>
    </div>
  );
};

export default MyRecipes;
