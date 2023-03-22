import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import {
  selectSearchQuery,
  selectSearchResult,
  selectSearchType,
} from 'redux/search/searchSelectors';
import {
  clearSearch,
  updateSearchQuery,
  updateSearchResult,
  updateSearchType,
} from 'redux/search/searchSlice';
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
  const location = useLocation();
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const searchType = useSelector(selectSearchType);
  const searchResult = useSelector(selectSearchResult);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);

  const onPageChange = (e, page) => {
    setPage(page);
  };

  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch]);

  useEffect(() => {
    if (location?.state?.ingredient) {
      dispatch(updateSearchType('ingredient'));
      location.state.ingredient = false;
    }
    if (searchType === 'title') {
      if (searchQuery) {
        getSearchByTitle(searchQuery, page)
          .then(res => {
            if (res.recipes.length === 0) {
              toast.warning('Nothing... Try another search query');
            }
            dispatch(updateSearchResult(res.recipes));
            const totalPages = Math.ceil(res.total / res.limit);
            setCount(totalPages);
          })
          .catch(err => console.log(err.message));
      }
    } else {
      if (searchQuery) {
        getSearchByIngredients(searchQuery, page)
          .then(res => {
            if (res.recipes.length === 0) {
              toast.warning(' Nothing... Try another search query');
            }
            dispatch(updateSearchResult(res.recipes));
            const totalPages = Math.ceil(res.total / res.limit);
            setCount(totalPages);
          })
          .catch(err => console.log(err.message));
      }
    }
  }, [
    dispatch,
    location,
    location.state?.ingredient,
    page,
    searchQuery,
    searchType,
  ]);

  const onFormSubmit = e => {
    e.preventDefault();
    const newSearchQuery = e.target.elements.search.value;
    const searchType = e.target.elements.type.value;
    setPage(1);
    if (
      !newSearchQuery ||
      (newSearchQuery === searchQuery && searchResult.length === 0)
    ) {
      toast.warning('Type new query');
      return;
    }
    dispatch(updateSearchQuery(newSearchQuery));
    dispatch(updateSearchType(searchType));
  };
  return (
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
          <p className={css.noRecipesText}>Try looking for something else..</p>
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
          <div className={css.paginationWrp}>
            {count > 1 && (
              <BasicPagination
                count={count}
                page={page}
                isChange={onPageChange}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
