import React from 'react';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';

import css from './SearchInput.module.css';

const SearchInput = ({ dark }) => {
  return (
    <div className={css.wrapper}>
      <input className={css.input}></input>
      <div className={css.buttonWrapper}>
        <SuperBtn title="Search" lnk to="/home" dark={dark} />
      </div>
      {/* <button className={css.buttonWrapper}>Search</button> */}
    </div>
  );
};

export default SearchInput;
