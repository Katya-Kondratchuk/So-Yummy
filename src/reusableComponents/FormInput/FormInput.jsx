import css from './FormInput.module.css';
import { ReactComponent as SucsessIcon } from '../../assets/images/formInputIcons/sucsess.svg';
import { ReactComponent as ErorrIcon } from '../../assets/images/formInputIcons/erorr.svg';
const FormInput = ({
  placeholder,
  type,
  switchImages,
  handleClearClick,
  isValid,
  onBlur,
  onChange,
}) => {
  return (
    <div className={css.formArea}>
      <input
        className={css.formInput}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name="formImput"
        placeholder={placeholder}
      />
      <span className={css.formIcon}>{switchImages(type)} </span>
      {isValid && <SucsessIcon className={css.formStateIcon} />}
      {isValid && (
        <button
          className={css.clearButton}
          onClick={handleClearClick}
          type="button"
        >
          <ErorrIcon className={css.formStateIcon} />
        </button>
      )}
    </div>
  );
};

export default FormInput;
