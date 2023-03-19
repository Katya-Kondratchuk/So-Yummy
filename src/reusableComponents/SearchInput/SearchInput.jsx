import { useDispatch, useSelector } from 'react-redux';
import { selectSearchQuery } from 'redux/search/searchSelectors';
import { updateSearchQuery } from 'redux/search/searchSlice';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';

import css from './SearchInput.module.css';

const SearchInput = ({ dark, name, lnk }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const onInputChange = e => {
    const value = e.target.value;
    dispatch(updateSearchQuery(value));
  };

  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        name={name}
        onChange={onInputChange}
        value={searchQuery}
      ></input>
      <div className={css.buttonWrapper}>
        <SuperBtn title="Search" typeBtn="submit" dark={dark} />
      </div>
    </div>
  );
};

export default SearchInput;
