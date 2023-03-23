import CustomSelect from './CustomSelect';
import css from './SearchTypeSelector.module.css';

const SearchTypeSelector = () => {
  return (
    <div className={css.search}>
      <div className={css.searchForm}>
        <label className={css.text}>Search by:</label>
        <CustomSelect />
      </div>
    </div>
  );
};

export default SearchTypeSelector;
