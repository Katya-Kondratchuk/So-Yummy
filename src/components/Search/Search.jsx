import React from 'react';
import DishCard from 'reusableComponents/DishCard/DishCard';
import BasicPagination from 'reusableComponents/Pagination/Pagination';
import SearchInput from 'reusableComponents/SearchInput/SearchInput';
import Title from 'reusableComponents/Title/Title';
import css from './Search.module.css';
import SearchTypeSelector from './SearchTypeSelector/SearchTypeSelector';

const Search = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const id = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };

  return (
    <div className="container">
      <Title text={'Search'} />
      <div className={css.searchContainer}></div>
      <SearchInput />
      <SearchTypeSelector />

      <ul className={css.searchList}>
        {arr.map(item => (
          <li key={id()} className={css.searchItem}>
            <DishCard
              image="https://img.theculturetrip.com/wp-content/uploads/2019/12/2aaeed6.jpg"
              altText="someDish"
              text="Delicious dishes"
            />
          </li>
        ))}
      </ul>
      <BasicPagination />
    </div>
  );
};

export default Search;
