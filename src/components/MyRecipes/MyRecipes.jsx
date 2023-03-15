import React, { useState } from 'react';
import SuperBtn from '../../reusableComponents/SuperBtn/SuperBtn';
import DishCard from './DishCard/DishCard';
import Title from '../../reusableComponents/Title/Title';
import Textt from './Text/Text';
import TitleRecip from './TitleRecip/TitleRecip';
import Time from './Time/Time';
import css from './MyRecipes.module.css';
import TrashButton from '../../reusableComponents/TrashButton/TrashButton';
import { ReactComponent as Left } from '../../assets/images/BtnLeftRight/BtnLeft.svg';
import { ReactComponent as Right } from '../../assets/images/BtnLeftRight/BtnRight.svg';

const MyRecipes = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

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
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? `${css.acti}` : ''}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

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

                <Textt
                  text="Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is d with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesd with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesd with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesfilled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves.
                ple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is d with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesd with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesd with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesfilled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves."
                />
                {/* <Textt text="We threw a ladies Melbourne Cup lunch and this was our dessert. Super quick to prepare using store bought pastry." /> */}

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

        <ul className={css.pageNumbers}>
          <div>
            <button
              className={css.yyyy}
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              <Left />
            </button>
          </div>

          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}

          <div>
            <button
              className={css.yyyy}
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              <Right className={css.right} />
            </button>
          </div>
        </ul>
      </section>
    </div>
  );
};

export default MyRecipes;
