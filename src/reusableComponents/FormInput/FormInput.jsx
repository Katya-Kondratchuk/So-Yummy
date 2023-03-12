import css from './FormInput.module.css';
import switchStateImages from 'services/switchStateImages';
const FormInput = ({
  placeholder,
  type,
  switchImages,
  handleClearClick,
  onBlur,
  onChange,
  name,
  erorr,
  value,
  edit,
  formInputArea,
  userName,
}) => {
  // const inputClassState = !isValid
  //   ? `${css.formInput} ${css.formInputValid}`
  //   : `${css.formInput} ${css.formInputInsecure}`;

  const getColor = (
    erorr,
    value,
    userName,
    defaultColor = `${css.formInputUser}`,
  ) => {
    if (erorr === 'Your password is little secure.') {
      return `${css.formInput} ${css.formInputInsecure}`;
    } else if (erorr) {
      return `${css.formInput} ${css.formInputInvalid}`;
    } else if (!erorr && value) {
      return `${css.formInput} ${css.formInputValid}`;
    } else if (userName) {
      return `${css.formInput} ${css.formInputUsername}`;
    } else {
      return `${css.formInput}`;
    }
  };

  return (
    <div className={formInputArea}>
      <input
        className={getColor(erorr, value)}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
      />
      <span className={css.formIcon}>{switchImages(type)} </span>
      <span className={css.formStateIcon}>
        {switchStateImages(erorr, value, edit)}{' '}
      </span>

      {/* {!erorr && value && <SucsessIcon className={css.formStateIcon} />}
      {erorr && value && (
        <button
          className={css.clearButton}
          onClick={handleClearClick}
          type="button"
        >
          <ErorrIcon className={css.formStateIcon} />
        </button>
      )} */}
    </div>
  );
};

export default FormInput;
