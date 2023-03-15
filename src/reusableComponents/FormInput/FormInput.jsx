import css from './FormInput.module.css';
import switchStateImages from 'services/switchStateImages';
import warningValidation from 'services/warningValidation';
const FormInput = ({
  placeholder,
  type,
  switchImages,
  onBlur,
  onChange,
  name,
  erorr,
  value,
  edit = false,
  formInputArea,
  userName = false,
}) => {
  const switchColor = (erorr, value, userName, type = '') => {
    if (!erorr && value && !warningValidation(value) && type === 'password') {
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
        className={switchColor(erorr, value, userName, type)}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
      />
      <span className={css.formIcon}>{switchImages(type)}</span>
      <span className={css.formStateIcon}>
        {switchStateImages(erorr, value, edit, type)}
      </span>
    </div>
  );
};

export default FormInput;
