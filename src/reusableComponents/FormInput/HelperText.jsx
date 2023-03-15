import css from './HelperText.module.css';

const HelperText = ({ value = '', errorText = '', textSucsess = '' }) => {
  if (value && errorText) {
    return <small className={css.smallEror}> {errorText} </small>;
  } else if (value && !errorText) {
    return <small className={css.smallSucsess}>{textSucsess}</small>;
  } else return <small></small>;
};

export default HelperText;
