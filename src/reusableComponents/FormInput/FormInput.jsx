import css from './FormInput.module.css';
import { ReactComponent as SucsessIcon } from './sucsess.svg';
import { ReactComponent as ErorrIcon } from './erorr.svg';
const FormInput = ({ placeholder, type, switchImages, width, height }) => {
  return (
    <div className={css.form__area}>
      <input
        className={css.form__input}
        type={type}
        name="formImput"
        placeholder={placeholder}
      />
      <span className={css.form__icon}>{switchImages(type)} </span>
      <SucsessIcon className={css.form__stateIcon} />
      <ErorrIcon className={css.form__stateIcon} />
    </div>
  );
};

export default FormInput;
