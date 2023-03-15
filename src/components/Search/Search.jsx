import React, { useState } from 'react';
import BGDots from 'reusableComponents/BGDots/BGDots';
import DishCard from 'reusableComponents/DishCard/DishCard';
import BasicPagination from 'reusableComponents/Pagination/Pagination';
import SearchInput from 'reusableComponents/SearchInput/SearchInput';
import Title from 'reusableComponents/Title/Title';
import css from './Search.module.css';
import SearchTypeSelector from './SearchTypeSelector/SearchTypeSelector';

const Search = () => {
  const [recipes] = useState([
    //
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    //
  ]);

  return (
    <div className="container">
      <BGDots />
      <Title text={'Search'} />
      <div className={css.searchContainer}></div>
      <div className={css.searchWrapper}>
        <SearchInput />
        <SearchTypeSelector />
      </div>
      {recipes.length === 0 && (
        <>
          <div className={css.noRecipesImg}></div>
          <p className={css.noRecipesText}>Try looking for something else..</p>
        </>
      )}
      {recipes.length !== 0 && (
        <>
          <ul className={css.searchList}>
            {recipes.map(item => (
              <li key={item} className={css.searchItem}>
                <DishCard
                  image="https://img.theculturetrip.com/wp-content/uploads/2019/12/2aaeed6.jpg"
                  altText="someDish"
                  text="Delicious dishes"
                />
              </li>
            ))}
          </ul>
          <BasicPagination />
        </>
      )}
    </div>
  );
};

export default Search;
