import { useState, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from 'assets/images/AddRecipe/close.svg';
import css from './IngridientField.module.css';
import SelectList from 'reusableComponents/SelectList';
import { ReactComponent as Arrow } from 'assets/images/AddRecipe/chevron-down.svg';

const IngridientField = ({
  allIngredients = [],
  units,
  classItem,
  data,
  id,
  onUpdate,
  onRemove,
  errorMessage,
}) => {
  const inputEl = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [amount, setAmount] = useState(data.amount);
  const [unit, setUnit] = useState(data.unit);
  const [filter, setFilter] = useState(() => data.title?.ttl || '');

  const filteredMeals = useMemo(() => {
    if (!filter) return allIngredients;
    const normalizeNameMeal = filter.toLowerCase();
    return allIngredients.filter(el =>
      el.ttl.toLowerCase().includes(normalizeNameMeal),
    );
  }, [allIngredients, filter]);

  const justThreeDigits = v => {
    if (v.length > 3) {
      // setAmount(v.slice(0, 3));
      return;
    }
    if (v === '0') {
      setAmount('');
      return;
    }
    setAmount(v);
  };

  useEffect(() => {
    if (data.title === title && data.unit === unit && data.amount === amount)
      return;
    onUpdate(id, { title, amount, unit });
  }, [onUpdate, title, data.title, amount, data.unit, unit, data.amount, id]);

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
    <li className={`${classItem} ${css.item}`}>
      <div className={css.wrapperIngredient} ref={inputEl}>
        <input
          type="text"
          name="ingredient"
          autoComplete="off"
          placeholder="Start enter ingredient"
          className={css.ingredient}
          value={filter}
          onChange={e => {
            setFilter(e.target.value);
            setTitle({});
            setIsActive(true);
          }}
        />

        {title.length !== 0 && filteredMeals.length !== 0 && (
          <span className={css.arrow} onClick={e => setIsActive(!isActive)}>
            <Arrow width="20px" height="20px" />
          </span>
        )}

        {isActive && title.length !== 0 && filteredMeals.length !== 0 && (
          <ul className={`${css.selectContentIngredients} ${css.scrollbar}`}>
            {filteredMeals.map(({ _id, ttl }) => (
              <li
                key={_id}
                onClick={e => {
                  setFilter(ttl);
                  setTitle({ _id, ttl });
                  setIsActive(false);
                }}
                className={`${css.selectItem} ${
                  ttl === title.ttl ? css.activeItem : ''
                }`}
              >
                {ttl}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={css.wrapperAmount}>
        <input
          type="number"
          name="amount"
          autoComplete="off"
          min="1"
          className={css.amount}
          value={amount}
          onChange={e => justThreeDigits(e.target.value)}
        />
        <div className={css.wrapperUnit}>
          <SelectList
            list={units}
            option={unit}
            setOption={setUnit}
            selectedOption={css.selectUnit}
            selectContent={css.selectContentUnits}
            activeItemClass={css.activeItem}
            wrapperOption={css.wrapperOptionUnit}
            itemList={css.itemList}
            scrollbar={css.scrollbar}
          />
        </div>
      </div>

      <button
        type="button"
        className={css.closeBtn}
        onClick={() => {
          onRemove(id);
        }}
      >
        <CloseIcon width="18px" height="18px" />
      </button>
      {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}
    </li>
  );
};

IngridientField.propTypes = {
  allIngredients: PropTypes.array,
  units: PropTypes.array,
  classItem: PropTypes.string,
  data: PropTypes.object,
  id: PropTypes.string,
  onUpdate: PropTypes.func,
  onRemove: PropTypes.func,
};

export default IngridientField;
