import { useState, useEffect, useRef } from 'react';
import { ReactComponent as Arrow } from 'assets/images/AddRecipe/arrow-down.svg';
import PropTypes from 'prop-types';
import css from './SelectList.module.css';

const SelectList = ({
  list = [],
  option = '',
  selectedOption = '',
  selectContent = '',
  scrollbar = '',
  setOption,
}) => {
  const [isActive, setIsActive] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    const onClick = e => {
      inputEl.current.contains(e.target) || setIsActive(!isActive);
    };

    if (isActive) {
      document.addEventListener('click', onClick);
    }
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [isActive]);

  return (
    <>
      <div
        ref={inputEl}
        className={`${selectedOption}`}
        onClick={e => setIsActive(!isActive)}
      >
        <span>{option}</span>
        <span className={css.arrow}>
          <Arrow width="12px" height="7px" />
        </span>
      </div>
      {isActive && (
        <ul className={`${selectContent} ${scrollbar}`}>
          {list.map(value => (
            <li
              key={value}
              onClick={e => {
                setOption(value);
                setIsActive(false);
              }}
              className={css.selectItem}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

SelectList.propTypes = {
  list: PropTypes.array,
  option: PropTypes.string,
  selectedOption: PropTypes.string,
  selectContent: PropTypes.string,
  scrollbar: PropTypes.string,
  setOption: PropTypes.func,
};

export default SelectList;
