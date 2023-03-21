import { useDispatch, useSelector } from 'react-redux';
import { selectSearchType } from 'redux/search/searchSelectors';
import { updateSearchType } from 'redux/search/searchSlice';
import css from './SearchTypeSelector.module.css';

const SearchTypeSelector = () => {
  const dispatch = useDispatch();
  const searchType = useSelector(selectSearchType);
  return (
    <div className={css.search}>
      <div className={css.searchForm}>
        <label className={css.text}>Search by:</label>
        <select
          name="type"
          className={css.select}
          onChange={e => {
            dispatch(updateSearchType(e.target.value));
          }}
          value={searchType}
        >
          <option className={css.option} value="title">
            Title
          </option>
          <option className={css.option} value="ingredient">
            Ingredient
          </option>
        </select>
      </div>
    </div>
  );
};

export default SearchTypeSelector;
