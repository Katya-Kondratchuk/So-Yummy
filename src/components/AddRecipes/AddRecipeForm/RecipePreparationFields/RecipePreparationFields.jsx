import PropTypes from 'prop-types';
import s from './RecipePreparationFields.module.css';

const RecipePreparationFields = ({ value, onChange }) => {
  return (
    <div className={s.wrapperTextarea}>
      <h3 className={s.title}>Recipe Preparation</h3>
      <textarea
        name="recipe"
        placeholder="Enter recipe"
        className={s.recipe}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

RecipePreparationFields.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RecipePreparationFields;
