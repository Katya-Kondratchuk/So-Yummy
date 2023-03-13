import css from './HelperText.module.css';

const HelperText = ({ errorText, text = ' ' }) => {
  // console.log(errorText);
  return (
    <>
      {errorText ? (
        <small className={css.smallEror}> {errorText} </small>
      ) : (
        <small className={css.smallSucsess}>{text}</small>
      )}
    </>
  );
};

export default HelperText;
