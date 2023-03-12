import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from 'assets/images/AddRecipe/close.svg';
import css from './IngridientField.module.css';
import SelectList from 'components/AddRecipes/SelectList';

const IngridientField = ({
  meals,
  units,
  classItem,
  data,
  id,
  onUpdate,
  onRemove,
}) => {
  const [name, setName] = useState(data.name);
  const [amount, setAmount] = useState(data.amount);
  const [unit, setUnit] = useState(data.unit);
  // console.log(meals);

  //TODO:изменитьзависимости, добавить мемоизацию

  useEffect(() => {
    onUpdate(id, { name, amount, unit });
  }, [name, amount, unit]);

  return (
    <li className={`${classItem} ${css.item}`}>
      <div className={css.wrapperIngredient}>
        <input
          type="text"
          name="ingredient"
          className={css.ingredient}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className={css.wrapperAmount}>
        <input
          type="text"
          name="amount"
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
