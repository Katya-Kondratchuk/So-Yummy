import React, { useState } from 'react';
import { ReactComponent as Left } from '../../../assets/images/BtnLeftRight/32404steamingbowl_98938.svg';
import { ReactComponent as Right } from '../../../assets/images/BtnLeftRight/32386sandwich_98891.svg';
import css from '../PaginationCustom/Pagination.module.css';
import { animateScroll as scroll } from 'react-scroll';

const Pagination = ({ totalItems, handle, currentPage, setcurrentPage }) => {
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / 4); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handle}
          className={currentPage === number ? `${css.active}` : null}
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
    scrollToTop();
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    scrollToTop();
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className={css.btnThreePoint} onClick={handleNextbtn}>
        {' '}
        &hellip;{' '}
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className={css.btnThreePoint} onClick={handlePrevbtn}>
        {' '}
        &hellip;{' '}
      </li>
    );
  }

  return (
    <ul className={css.pageNumbers}>
      <div>
        <button
          className={css.btnRightLeft}
          onClick={handlePrevbtn}
          disabled={currentPage === pages[0] ? true : false}
        >
          <Left className={css.btnSVG} />
        </button>
      </div>
      {pageDecrementBtn}
      {renderPageNumbers}
      {pageIncrementBtn}
      <div>
        <button
          className={css.btnRightLeft}
          onClick={handleNextbtn}
          disabled={currentPage === pages[pages.length - 1] ? true : false}
        >
          <Right className={css.btnSVG} />
        </button>
      </div>
    </ul>
  );
};

export default Pagination;



// const handelDelete = async (id, event) => {
//     if (event.target.disabled) {
//       // Защита от двойного клика
//       return;
//     }
//     event.target.disabled = true;
//     await patchRecipeFavoriteById(id);
//     // const newRecipes = allRecipes.filter(({ _id }) => _id !== id);
//     // setAllRecipes(newRecipes);
//     toast.info('You delete recipe from favorites list', {
//       toastId: '12345',
//     });
//     // console.log(page);
//     await getAllFavorite(page, 4)
//       .then(data => {
//         const pageCounts = Math.ceil(data.total / 4);
//         // console.log(pageCounts);
//         if (pageCounts > 1) {
//           setTotalPage(pageCounts);
//           if (pageCounts !== page) {
//             console.log('Сработало');
//             setPage(pageCounts);
//             return;
//           }
//         } else {
//           setTotalPage(null);
//         }
//         setAllRecipes(data.recipes ?? []);
//       })
//       .catch(e => {
//         console.log(e.message);
//       });
//   };



// await getAllFavorite(page, 4)
//       .then(data => {
//         // TODO
//         if (data.total === 4) {
//           setPage(1);
//           setTotalPage(null);
//           return;
//         }
//         //
//         const pageCounts = Math.ceil(data.total / 4);
//         console.log(pageCounts);
//         if (pageCounts > 1) {
//           setTotalPage(pageCounts);

//           if (pageCounts < page) {
//             setPage(pageCounts);
//             return;
//           }
//         } else {
//           setTotalPage(null);
//         }
//         setAllRecipes(data.recipes ?? []);
//       })
//       .catch(e => {
//         console.log(e.message);
//       });
//   };