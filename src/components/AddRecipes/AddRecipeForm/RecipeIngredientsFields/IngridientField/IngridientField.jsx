import { useState, useEffect, useMemo, useRef } from 'react';
// import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from 'assets/images/AddRecipe/close.svg';
import css from './IngridientField.module.css';
import SelectList from 'reusableComponents/SelectList';
import { ReactComponent as Arrow } from 'assets/images/AddRecipe/chevron-down.svg';

const IngridientField = ({
  meals = [],
  units,
  classItem,
  data,
  id,
  onUpdate,
  onRemove,
}) => {
  const inputEl = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState(data.name);
  const [amount, setAmount] = useState(data.amount);
  const [unit, setUnit] = useState(data.unit);

  const filteredMeals = useMemo(() => {
    const normalizeNameMeal = name.toLowerCase();
    return meals.filter(el =>
      el.strIngredient.toLowerCase().includes(normalizeNameMeal),
    );
  }, [meals, name]);

  useEffect(() => {
    if (data.name === name && data.unit === unit && data.amount === amount)
      return;
    onUpdate(id, { name, amount, unit });
  }, [onUpdate, name, data.name, amount, data.unit, unit, data.amount, id]);

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
          value={name}
          onChange={e => {
            setName(e.target.value);
            setIsActive(true);
          }}
        />

        {name.length !== 0 && filteredMeals.length !== 0 && (
          <span className={css.arrow} onClick={e => setIsActive(!isActive)}>
            <Arrow width="20px" height="20px" />
          </span>
        )}

        {isActive && name.length !== 0 && filteredMeals.length !== 0 && (
          <ul className={`${css.selectContentIngredients} ${css.scrollbar}`}>
            {filteredMeals.map(({ strIngredient }, index) => (
              <li
                key={strIngredient + '' + index}
                onClick={e => {
                  setName(strIngredient);
                  setIsActive(false);
                }}
                className={`${css.selectItem} ${
                  strIngredient === name ? css.activeItem : ''
                }`}
              >
                {strIngredient}
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
          onChange={e => setAmount(e.target.value)}
        />
        <div className={css.wrapperUnit}>
          <SelectList
            list={units}
            option={unit}
            setOption={setUnit}
            selectedOption={css.selectUnit}
            selectContent={css.selectContentUnits}
            activeItemClass={css.activeItem}
          />
        </div>
      </div>

      <button
        type="button"
        className={css.closeBtn}
        onClick={() => {
          console.log('del');
          onRemove(id);
        }}
      >
        <CloseIcon width="18px" height="18px" />
      </button>
    </li>
  );
};

IngridientField.propTypes = {};

export default IngridientField;
