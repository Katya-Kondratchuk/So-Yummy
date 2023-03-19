import PropTypes from 'prop-types';
import css from './RecipePreparationFields.module.css';

const RecipePreparationFields = ({ value, onChange, formErrors }) => {
  return (
    <div className={css.wrapperTextarea}>
      <h3 className={css.title}>Recipe Preparation</h3>
      <textarea
        name="recipe"
        placeholder="Enter recipe"
        className={`${css.recipe} ${css.scrollbar}`}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {formErrors?.instructions && (
        <p className={css.errorMessage}>{formErrors?.instructions}</p>
      )}
    </div>
  );
};

RecipePreparationFields.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  formErrors: PropTypes.object,
};

export default RecipePreparationFields;
