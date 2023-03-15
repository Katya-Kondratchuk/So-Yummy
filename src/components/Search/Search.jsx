import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchQuery } from 'redux/search/searchSelectors';
import { updateSearchQuery } from 'redux/search/searchSlice';
import BGDots from 'reusableComponents/BGDots/BGDots';
import DishCard from 'reusableComponents/DishCard/DishCard';
import BasicPagination from 'reusableComponents/Pagination/Pagination';
import SearchInput from 'reusableComponents/SearchInput/SearchInput';
import Title from 'reusableComponents/Title/Title';
import css from './Search.module.css';
import SearchTypeSelector from './SearchTypeSelector/SearchTypeSelector';

const Search = () => {
  const [recipes, setRecipes] = useState([
    //
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    //
  ]);
  const dispatch = useDispatch();
  const isFirstLoad = useRef(true);
  const searchQuery = useSelector(selectSearchQuery);
  useEffect(() => {
    if (isFirstLoad.current && searchQuery) {
      console.log(`Start query for ${searchQuery}`);
    }
    isFirstLoad.current = false;
  }, [searchQuery]);

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    console.log(`Start query for ${value}`);
    setRecipes([]);
    dispatch(updateSearchQuery(''));
  };
  return (
    <div className="container">
      <BGDots />
      <Title text={'Search'} />
      <div className={css.searchContainer}></div>
      <form className={css.searchWrapper} onSubmit={onFormSubmit}>
        <SearchInput name="search" />
        <SearchTypeSelector />
      </form>
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
