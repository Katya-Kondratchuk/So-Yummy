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
  name,
  erorr,
  formik,
  value,
}) => {
  // const inputClassState = !isValid
  //   ? `${css.formInput} ${css.formInputValid}`
  //   : `${css.formInput} ${css.formInputInsecure}`;

  const getColor = (erorr, value, defaultColor = `${css.formInput}`) => {
    if (erorr === 'Your password is little secure.') {
      return `${css.formInput} ${css.formInputInsecure}`;
    } else if (erorr) {
      return `${css.formInput} ${css.formInputInvalid}`;
    } else if (!erorr && value) {
      return `${css.formInput} ${css.formInputValid}`;
    } else {
      return `${css.formInput}`;
    }
    // return value
    //   ? (erorr && `${css.formInput} ${css.formInputInvalid}`) ||
    //       `${css.formInput} ${css.formInputValid}`
    //   : defaultColor;
  };

  return (
    <div className={css.formArea}>
      <input
        className={getColor(erorr, value)}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
      />
      <span className={css.formIcon}>{switchImages(type)} </span>
      {isValid && <SucsessIcon className={css.formStateIcon} />}
      {!isValid && (
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
