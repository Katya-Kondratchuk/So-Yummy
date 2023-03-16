import React, { useState } from 'react';
import BGDots from '../../reusableComponents/BGDots/BGDots';
import Title from '../../reusableComponents/Title/Title';
import MyRecipeItem from './MyResipeItem/MyRecipeItem';
import css from './MyRecipes.module.css';
import { ReactComponent as Left } from '../../assets/images/BtnLeftRight/BtnLeft.svg';
import { ReactComponent as Right } from '../../assets/images/BtnLeftRight/BtnRight.svg';


const MyRecipes = () => {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];


  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);

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

  const renderPageNumbers = pages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number} onClick={handleClick} className={currentPage === number ? `${css.active}` : ""} > 
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
    pageIncrementBtn = <li className={css.btnThreePoint} onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className={css.btnThreePoint} onClick={handlePrevbtn}> &hellip; </li>;
  }

  
  return (
    <div className=" greensImg">
      <BGDots />
    <div className="container">
      <section className={css.myRecipe}>
        <Title text="My recipes" />
        <ul className={css.cardList}>
          {currentItems.map(itt => {
                return (
                  <MyRecipeItem
                   key={itt}
                  />
                );
              })}
        </ul>

        <ul className={css.pageNumbers}>
          <div>
            <button
              className={css.btnRightLeft}
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}>
              <Left />
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
            <Right className={css.right}/>
          </button>
        </div>
        </ul>
        
      </section>
      </div>
      </div>
  );
};

export default MyRecipes;





// ============================================================================

// import React, {useEffect, useState } from 'react';
// import Title from '../../reusableComponents/Title/Title';
// import css from './MyRecipes.module.css';
// import { ReactComponent as Left } from '../../assets/images/BtnLeftRight/BtnLeft.svg';
// import { ReactComponent as Right } from '../../assets/images/BtnLeftRight/BtnRight.svg';
// import MyRecipeItem from './MyResipeItem/MyRecipeItem';
// import BGDots from '../../reusableComponents/BGDots/BGDots';
// import {
//   getAllMyRecipe,
//   patchMyRecipeById,
// } from 'services/api/recipesAPI';


// const MyRecipes = () => {

//   const [allMyRecipes, setAllMyRecipes] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     try {
//       getAllMyRecipe(page, 5).then(data => {
//         if (!data) {
//           return;
//         }
//         setAllMyRecipes(data.myRecipes);
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   }, [page]);

//   const handelDelete = id => {
//     if (isLoading) {
//       setPage(1);
//       return;
//     }
//     setIsLoading(true);
//     patchMyRecipeById(id);
//     getAllMyRecipe(page, 5)
//       .then(data => setAllMyRecipes(data ?? []))
//       .catch(() => {
//         setIsLoading(false);
//       });
//     setIsLoading(false);
//   };

 
//   const [currentPage, setcurrentPage] = useState(1);
//   const [itemsPerPage] = useState(4);

//   const [pageNumberLimit] = useState(5);
//   const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
//   const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

//   const handleClick = event => {
//     setcurrentPage(Number(event.target.id));
//   };

//   const pages = [];
//   for (let i = 1; i <= Math.ceil(allMyRecipes.length / itemsPerPage); i++) {
//     pages.push(i);
//   }

//   const renderPageNumbers = pages.map(number => {
//     if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
//       return (
//         <li key={number} id={number} onClick={handleClick} className={currentPage === number ? `${css.active}` : ""} >
//           {number}
//         </li>
//       );
//     } else {
//       return null;
//     }
//   });

//   const handleNextbtn = () => {
//     setcurrentPage(currentPage + 1);

//     if (currentPage + 1 > maxPageNumberLimit) {
//       setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//       setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
//     }
//   };

//   const handlePrevbtn = () => {
//     setcurrentPage(currentPage - 1);

//     if ((currentPage - 1) % pageNumberLimit === 0) {
//       setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//       setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
//     }
//   };

//   let pageIncrementBtn = null;
//   if (pages.length > maxPageNumberLimit) {
//     pageIncrementBtn = <li className={css.btnThreePoint} onClick={handleNextbtn}> &hellip; </li>;
//   }

//   let pageDecrementBtn = null;
//   if (minPageNumberLimit >= 1) {
//     pageDecrementBtn = <li className={css.btnThreePoint} onClick={handlePrevbtn}> &hellip; </li>;
//   }


//   return (
//     <div className=" greensImg">
//       <BGDots />
//       <div className="container">
//         <section className={css.myRecipe}>
//           <Title text="My recipes" />
//           <ul className={css.cardList}>
//             {allMyRecipes.length !== 0 &&
//               allMyRecipes.map(({ _id, title, description, time, preview }) => {
//                 return (
//                   <MyRecipeItem
//                     key={_id}
//                     trashClass={'darkBcg'}
//                     title={title}
//                     time={time}
//                     text={description}
//                     onDelete={() => {
//                       handelDelete(_id);
//                     }}
//                     imgComponent={preview}
//                   />
//                 );
//               })}
//           </ul>
//           <ul className={css.pageNumbers}>
//             <div>
//               <button
//                 className={css.btnRightLeft}
//                 onClick={handlePrevbtn}
//                 disabled={currentPage === pages[0] ? true : false}>
//                 <Left />
//               </button>
//             </div>
//               {pageDecrementBtn}
//               {renderPageNumbers}
//               {pageIncrementBtn}
//             <div>
//               <button
//                 className={css.btnRightLeft}
//                 onClick={handleNextbtn}
//                 disabled={currentPage === pages[pages.length - 1] ? true : false}
//               >
//                 <Right className={css.right} />
//               </button>
//             </div>
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// }

//   export default MyRecipes;
