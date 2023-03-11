import css from './AuthTitle.module.css';

const AuthTitle = ({ titleText }) => {
  return <h2 className={css.titleText}>{titleText}</h2>;
};

export default AuthTitle;
