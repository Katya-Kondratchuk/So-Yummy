import { useState } from 'react';
import { ReactComponent as Arrow } from 'assets/images/AddRecipe/arrow-down.svg';
// import PropTypes from 'prop-types';
import s from './SelectList.module.css';

const SelectList = ({
  list = [],
  option = '',
  selectedOption = '',
  selectContent = '',
  scrollbar = '',
  setValue,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={`${selectedOption}`}
        onClick={e => setIsActive(!isActive)}
      >
        <span>{option}</span>
        <span className={s.arrow}>
          <Arrow width="12px" height="7px" />
        </span>
      </div>
      {isActive && (
        <ul className={`${selectContent} ${scrollbar}`}>
          {list.map(value => (
            <li
              key={value}
              onClick={e => {
                setValue(value);
                setIsActive(false);
              }}
              className={s.selectItem}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

SelectList.propTypes = {};

export default SelectList;
