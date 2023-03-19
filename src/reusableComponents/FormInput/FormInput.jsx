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
  userInitName = '',
  value = '',
  formInputArea = '',
  formInputUserMenu = '',
  formInputFooterForm = '',
  autoComplete,
}) => {
  const switchColor = (
    erorr,
    value,
    type,
    formInputUserMenu,
    formInputFooterForm = '',
    userInitName,
  ) => {
    if (!erorr && value && !warningValidation(value) && type === 'password') {
      return `${css.formInput} ${css.formInputInsecure}`;
    } else if (erorr && value) {
      return `${css.formInput} ${css.formInputInvalid} `;
    } else if (!erorr && value && value !== userInitName) {
      return `${css.formInput} ${css.formInputValid} `;
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
          userInitName,
        )}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <span className={css.formIcon}>{switchImages(name)}</span>
      <span className={css.formStateIcon}>
        {switchStateImages(erorr, value, formInputUserMenu, name, userInitName)}
      </span>
    </div>
  );
};

export default FormInput;
