import React from 'react';
import css from './SearchTypeSelector.module.css';

const SearchTypeSelector = () => {
  return (
    <div className={css.search}>
      <form className={css.searchForm}>
        <label className={css.text}>Search by:</label>
        <select className={css.select}>
          <option className={css.option}>Title</option>
          <option className={css.option}>Ingridient</option>
        </select>
      </form>
    </div>
  );
};

export default SearchTypeSelector;
