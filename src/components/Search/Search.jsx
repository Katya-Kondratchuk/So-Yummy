import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSearchQuery,
  selectSearchResult,
} from 'redux/search/searchSelectors';
import { updateSearchResult } from 'redux/search/searchSlice';
import BGDots from 'reusableComponents/BGDots/BGDots';
import DishCard from 'reusableComponents/DishCard/DishCard';
import BasicPagination from 'reusableComponents/Pagination/Pagination';
import SearchInput from 'reusableComponents/SearchInput/SearchInput';
import Title from 'reusableComponents/Title/Title';
import {
  getSearchByIngredients,
  getSearchByTitle,
} from 'services/api/recipesAPI';
import css from './Search.module.css';
import SearchTypeSelector from './SearchTypeSelector/SearchTypeSelector';

const Search = () => {
  const dispatch = useDispatch();
  const isFirstLoad = useRef(true);
  const searchQuery = useSelector(selectSearchQuery);
  const searchResult = useSelector(selectSearchResult);
  useEffect(() => {
    if (isFirstLoad.current && searchQuery) {
      getSearchByTitle(searchQuery).then(res => {
        dispatch(updateSearchResult(res.recipes));
      });
    }
    isFirstLoad.current = false;
  }, [dispatch, searchQuery]);

  const onFormSubmit = e => {
    e.preventDefault();
    console.dir(e.target);
    if (!e.target.search.value) return;
    if (e.target.type.value === 'title') {
      getSearchByTitle(searchQuery).then(res => {
        console.log(res.recipes);
        dispatch(updateSearchResult(res.recipes));
      });
    } else {
      getSearchByIngredients(searchQuery).then(res => {
        console.log(res.recipes);
        dispatch(updateSearchResult(res.recipes));
      });
    }
  };
  return (
    <div className=" greensImg">
      <div className="container">
        <BGDots />
        <Title text={'Search'} />
        <form className={css.searchWrapper} onSubmit={onFormSubmit}>
          <SearchInput name="search" searchQuery={searchQuery} />
          <SearchTypeSelector />
        </form>
        {searchResult.length === 0 && (
          <>
            <div className={css.noRecipesImg}></div>
            <p className={css.noRecipesText}>
              Try looking for something else..
            </p>
          </>
        )}
        {searchResult.length !== 0 && (
          <>
            <ul className={css.searchList}>
              {searchResult.map(
                ({ _id, preview, title, favorite, like, popularity }) => (
                  <li key={_id} className={css.searchItem}>
                    <DishCard
                      image={preview}
                      altText={title}
                      text={title}
                      id={_id}
                      favorite={favorite}
                      like={like}
                      popularity={popularity}
                    />
                  </li>
                ),
              )}
            </ul>
            <BasicPagination />
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
