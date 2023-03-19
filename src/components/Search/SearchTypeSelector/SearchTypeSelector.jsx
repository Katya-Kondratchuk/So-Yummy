import React from 'react';
import css from './SearchTypeSelector.module.css';

const SearchTypeSelector = () => {
  return (
    <div className={css.search}>
      <div className={css.searchForm}>
        <label className={css.text}>Search by:</label>
        <select name="type" className={css.select}>
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
