import { useState } from 'react';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';

import css from './SearchInput.module.css';

const SearchInput = ({ dark, name, searchQuery, lnk }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  return (
    <div className={css.wrapper}>
      <input
        onChange={e => {
          setInputValue(e.target.value);
        }}
        className={css.input}
        name={name}
        value={inputValue}
      ></input>
      <div className={css.buttonWrapper}>
        <SuperBtn title="Search" typeBtn="submit" dark={dark} />
      </div>
    </div>
  );
};

export default SearchInput;
