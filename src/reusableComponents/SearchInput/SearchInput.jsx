import React from 'react';
import css from './SearchInput.module.css';

const SearchInput = ({ btnColor }) => {
  return (
    <div className={css.wrapper}>
      <input className={css.input}></input>
      <div className={css.buttonWrapper}>
        {/* <RoundedButtonComponent fillColor={btnColor} /> */}
      </div>
    </div>
  );
};

export default SearchInput;
