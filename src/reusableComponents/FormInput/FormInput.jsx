import css from './FormInput.module.css';
import switchStateImages from 'services/switchStateImages';
import warningValidation from 'services/warningValidation';
const FormInput = ({
  placeholder = '',
  type = '',
  switchImages = () => {},
  onBlur = () => {},
  onChange = () => {},
  name = '',
  erorr,
  value = '',
  formInputArea = '',
  formInputUserMenu = '',
  formInputFooterForm = '',
}) => {
  const switchColor = (
    erorr,
    value,
    type,
    formInputUserMenu,
    formInputFooterForm = '',
  ) => {
    if (!erorr && value && !warningValidation(value) && type === 'password') {
      return `${css.formInput} ${css.formInputInsecure}`;
    } else if (erorr && value) {
      return `${css.formInput} ${css.formInputInvalid} ${formInputUserMenu}`;
    } else if (!erorr && value) {
      return `${css.formInput} ${css.formInputValid} ${formInputUserMenu}`;
    } else if (formInputUserMenu) {
      return `${formInputUserMenu}`;
    } else if (formInputFooterForm) {
      return `${css.formInput} ${formInputFooterForm}`;
    } else {
      return `${css.formInput}`;
    }
  };
  return (
    <div className={formInputArea}>
      <input
        className={switchColor(
          erorr,
          value,
          type,
          formInputUserMenu,
          formInputFooterForm,
        )}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
      />
      <span className={css.formIcon}>{switchImages(name)}</span>
      <span className={css.formStateIcon}>
        {switchStateImages(erorr, value, formInputUserMenu, type)}
      </span>
    </div>
  );
};

export default FormInput;
