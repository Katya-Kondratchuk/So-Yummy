import { useState } from 'react';
import { toast } from 'react-toastify';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import * as yup from 'yup';

import css from './SearchInput.module.css';
const searchQueryRegex = /^[a-z A-Z\-&,]+$/;
const SearchInput = ({ dark, name, searchQuery, lnk }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  return (
    <div className={css.wrapper}>
      <input
        placeholder="Enter query"
        onChange={async e => {
          const searchQuerySchema = yup.string().matches(searchQueryRegex);

          try {
            if (e.target.value !== '') {
              const validInput = await searchQuerySchema.validate(
                e.target.value,
              );
              setInputValue(validInput);
            } else {
              setInputValue('');
            }
          } catch (error) {
            return toast.error('Only latin letters can be entered');
          }
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
